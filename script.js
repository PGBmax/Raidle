/* =========================================================================
   RAIDLE — logique du jeu
   ========================================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "raidle_daily_progress_v1";

  const el = {
    modeButtons: document.querySelectorAll(".mode-btn"),
    portal: document.getElementById("portal"),
    portalFigure: document.getElementById("portalFigure"),
    attemptsCaption: document.getElementById("attemptsCaption"),
    guessInput: document.getElementById("guessInput"),
    suggestions: document.getElementById("suggestions"),
    giveUpBtn: document.getElementById("giveUpBtn"),
    resultBanner: document.getElementById("resultBanner"),
    boardBody: document.getElementById("boardBody"),
  };

  let mode = "daily"; // "daily" | "infinite"
  let answer = null;
  let guesses = []; // array of champion objects, in guess order
  let gameOver = false;
  let activeSuggestionIndex = -1;

  /* ---------------- helpers ---------------- */

  function normalize(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function findChampionByName(name) {
    const n = normalize(name);
    return CHAMPIONS.find((c) => normalize(c.name) === n) || null;
  }

  function dailySeedIndex() {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
    }
    return hash % CHAMPIONS.length;
  }

  function todayKey() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  }

  function pickRandomChampion(excludeName) {
    if (CHAMPIONS.length === 1) return CHAMPIONS[0];
    let c;
    do {
      c = CHAMPIONS[Math.floor(Math.random() * CHAMPIONS.length)];
    } while (excludeName && normalize(c.name) === normalize(excludeName));
    return c;
  }

  /* ---------------- persistence (daily mode only) ---------------- */

  function loadDailyProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (data.date !== todayKey()) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function saveDailyProgress() {
    if (mode !== "daily") return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          date: todayKey(),
          guessNames: guesses.map((g) => g.name),
          gameOver,
          won: gameOver && guesses.length && normalize(guesses[guesses.length - 1].name) === normalize(answer.name),
        })
      );
    } catch (e) {
      /* ignore quota errors */
    }
  }

  /* ---------------- game setup ---------------- */

  function startGame(newMode) {
    mode = newMode || mode;
    gameOver = false;
    guesses = [];
    el.boardBody.innerHTML = "";
    el.resultBanner.hidden = true;
    el.resultBanner.className = "result-banner";
    el.resultBanner.innerHTML = "";
    el.guessInput.value = "";
    el.guessInput.disabled = false;
    el.giveUpBtn.disabled = false;
    el.portalFigure.classList.remove("is-revealed");
    el.portalFigure.innerHTML = '<span class="placeholder-glyph">?</span>';

    el.modeButtons.forEach((b) => {
      const isActive = b.dataset.mode === mode;
      b.classList.toggle("is-active", isActive);
      b.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    if (mode === "daily") {
      answer = CHAMPIONS[dailySeedIndex()];
      el.attemptsCaption.textContent = "Défi du jour — un seul champion mystère pour tout le monde.";
      const progress = loadDailyProgress();
      if (progress) {
        progress.guessNames.forEach((name) => {
          const champ = findChampionByName(name);
          if (champ) addGuess(champ, { silent: true, skipSave: true });
        });
        if (progress.gameOver) {
          endGame(progress.won);
        }
      }
    } else {
      answer = pickRandomChampion();
      el.attemptsCaption.textContent = "Partie infinie — devine autant de champions que tu veux.";
    }

    el.guessInput.focus();
  }

  el.modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.mode !== mode) startGame(btn.dataset.mode);
    });
  });

  /* ---------------- autocomplete ---------------- */

  function renderSuggestions(query) {
    const q = normalize(query);
    el.suggestions.innerHTML = "";
    activeSuggestionIndex = -1;

    if (!q) {
      el.suggestions.hidden = true;
      return;
    }

    const guessedNames = new Set(guesses.map((g) => normalize(g.name)));
    const matches = CHAMPIONS.filter(
      (c) => normalize(c.name).includes(q) && !guessedNames.has(normalize(c.name))
    ).slice(0, 8);

    if (matches.length === 0) {
      const li = document.createElement("li");
      li.className = "no-match";
      li.textContent = "Aucun champion trouvé";
      el.suggestions.appendChild(li);
      el.suggestions.hidden = false;
      return;
    }

    matches.forEach((champ) => {
      const li = document.createElement("li");
      li.textContent = champ.name;
      li.addEventListener("click", () => submitGuess(champ.name));
      el.suggestions.appendChild(li);
    });

    el.suggestions.hidden = false;
  }

  el.guessInput.addEventListener("input", () => {
    if (gameOver) return;
    renderSuggestions(el.guessInput.value);
  });

  el.guessInput.addEventListener("keydown", (e) => {
    const items = Array.from(el.suggestions.querySelectorAll("li:not(.no-match)"));
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!items.length) return;
      activeSuggestionIndex = (activeSuggestionIndex + 1) % items.length;
      items.forEach((it, i) => it.classList.toggle("is-active", i === activeSuggestionIndex));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!items.length) return;
      activeSuggestionIndex = (activeSuggestionIndex - 1 + items.length) % items.length;
      items.forEach((it, i) => it.classList.toggle("is-active", i === activeSuggestionIndex));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeSuggestionIndex >= 0 && items[activeSuggestionIndex]) {
        submitGuess(items[activeSuggestionIndex].textContent);
      } else {
        submitGuess(el.guessInput.value);
      }
    } else if (e.key === "Escape") {
      el.suggestions.hidden = true;
    }
  });

  document.addEventListener("click", (e) => {
    if (!el.guessInput.contains(e.target) && !el.suggestions.contains(e.target)) {
      el.suggestions.hidden = true;
    }
  });

  /* ---------------- guessing ---------------- */

  function submitGuess(rawName) {
    if (gameOver) return;
    const champ = findChampionByName(rawName);
    if (!champ) return;
    if (guesses.some((g) => normalize(g.name) === normalize(champ.name))) return;

    addGuess(champ);
    el.guessInput.value = "";
    el.suggestions.hidden = true;

    if (normalize(champ.name) === normalize(answer.name)) {
      endGame(true);
    }
    saveDailyProgress();
  }

  function rarityArrow(guessRarity, answerRarity) {
    const gi = RARITY_ORDER.indexOf(guessRarity);
    const ai = RARITY_ORDER.indexOf(answerRarity);
    if (gi === -1 || ai === -1 || gi === ai) return "";
    return gi < ai ? "↑" : "↓";
  }

  function yearArrow(guessYear, answerYear) {
    if (!guessYear || !answerYear || guessYear === answerYear) return "";
    return guessYear < answerYear ? "↑" : "↓";
  }

  function buildThumb(champ) {
    if (champ.image) {
      const img = document.createElement("img");
      img.src = `images/${champ.image}`;
      img.alt = champ.name;
      img.onerror = function () {
        const fallback = document.createElement("div");
        fallback.className = "thumb-fallback";
        fallback.textContent = champ.name.slice(0, 2).toUpperCase();
        img.replaceWith(fallback);
      };
      return img;
    }
    const fallback = document.createElement("div");
    fallback.className = "thumb-fallback";
    fallback.textContent = champ.name.slice(0, 2).toUpperCase();
    return fallback;
  }

  function addGuess(champ, opts) {
    opts = opts || {};
    guesses.push(champ);

    const row = document.createElement("tr");
    if (!opts.silent) row.classList.add("row-enter");

    // Portrait + name
    const tdPortrait = document.createElement("td");
    tdPortrait.className = "cell-portrait";
    tdPortrait.appendChild(buildThumb(champ));
    const nameSpan = document.createElement("span");
    nameSpan.textContent = champ.name;
    tdPortrait.appendChild(nameSpan);
    row.appendChild(tdPortrait);

    // Faction
    row.appendChild(makeCell(champ.faction, champ.faction === answer.faction));

    // Affinity (with colored dot)
    const affinityCorrect = champ.affinity === answer.affinity;
    const affinityCell = document.createElement("td");
    affinityCell.className = "cell " + (affinityCorrect ? "is-correct" : "is-wrong");
    const dot = document.createElement("span");
    dot.className = `affinity-dot ${champ.affinity}`;
    affinityCell.appendChild(dot);
    affinityCell.appendChild(document.createTextNode(" " + (champ.affinity || "—")));
    row.appendChild(affinityCell);

    // Role
    row.appendChild(makeCell(champ.role, champ.role === answer.role));

    // Rarity
    const rarityCorrect = champ.rarity === answer.rarity;
    row.appendChild(makeCell(champ.rarity, rarityCorrect, rarityArrow(champ.rarity, answer.rarity)));

    // Obtained from
    row.appendChild(makeCell(champ.obtainedFrom, champ.obtainedFrom === answer.obtainedFrom));

    // Release year
    const yearCorrect = champ.releaseYear === answer.releaseYear;
    row.appendChild(
      makeCell(champ.releaseYear ?? "—", yearCorrect, yearArrow(champ.releaseYear, answer.releaseYear))
    );

    el.boardBody.insertBefore(row, el.boardBody.firstChild);
  }

  function makeCell(value, isCorrect, arrow) {
    const td = document.createElement("td");
    td.className = "cell " + (isCorrect ? "is-correct" : "is-wrong");
    td.textContent = value ?? "—";
    if (arrow) {
      const span = document.createElement("span");
      span.className = "arrow";
      span.textContent = arrow;
      td.appendChild(span);
    }
    return td;
  }

  /* ---------------- end game ---------------- */

  function endGame(won) {
    gameOver = true;
    el.guessInput.disabled = true;
    el.giveUpBtn.disabled = true;
    el.suggestions.hidden = true;

    revealPortal();

    el.resultBanner.hidden = false;
    el.resultBanner.classList.add(won ? "win" : "lose");

    const attemptsWord = guesses.length > 1 ? "tentatives" : "tentative";
    const title = won
      ? `Trouvé ! C'était bien <span class="answer-name">${answer.name}</span>, en ${guesses.length} ${attemptsWord}.`
      : `C'était <span class="answer-name">${answer.name}</span>. Ce sera pour la prochaine fois !`;

    el.resultBanner.innerHTML = `
      <div>${title}</div>
      <div class="banner-actions">
        ${mode === "infinite" ? '<button id="playAgainBtn" type="button">Nouveau champion</button>' : ""}
        <button id="shareBtn" type="button">Copier le résultat</button>
      </div>
    `;

    const playAgainBtn = document.getElementById("playAgainBtn");
    if (playAgainBtn) {
      playAgainBtn.addEventListener("click", () => startGame("infinite"));
    }
    document.getElementById("shareBtn").addEventListener("click", shareResult);

    saveDailyProgress();
  }

  function revealPortal() {
    el.portalFigure.classList.add("is-revealed");
    el.portalFigure.innerHTML = "";
    if (answer.image) {
      const img = document.createElement("img");
      img.src = `images/${answer.image}`;
      img.alt = answer.name;
      img.onerror = function () {
        img.replaceWith(makeGlyph(answer.name));
      };
      el.portalFigure.appendChild(img);
    } else {
      el.portalFigure.appendChild(makeGlyph(answer.name));
    }
  }

  function makeGlyph(name) {
    const span = document.createElement("span");
    span.className = "placeholder-glyph";
    span.style.color = "var(--gold-bright)";
    span.style.fontSize = "1.3rem";
    span.style.padding = "0 10px";
    span.textContent = name;
    return span;
  }

  el.giveUpBtn.addEventListener("click", () => {
    if (gameOver) return;
    endGame(false);
  });

  /* ---------------- share ---------------- */

  function shareResult() {
    const lines = guesses
      .slice()
      .reverse()
      .map((g) => {
        const squares = [
          g.faction === answer.faction,
          g.affinity === answer.affinity,
          g.role === answer.role,
          g.rarity === answer.rarity,
          g.obtainedFrom === answer.obtainedFrom,
          g.releaseYear === answer.releaseYear,
        ]
          .map((ok) => (ok ? "🟩" : "🟥"))
          .join("");
        return squares;
      });

    const won = guesses.length && normalize(guesses[guesses.length - 1].name) === normalize(answer.name);
    const header = `RAIDLE ${mode === "daily" ? todayKey() : "(infini)"} — ${
      won ? guesses.length + "/∞" : "❌"
    }`;
    const text = [header, ...lines].join("\n");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => flashShareButton("Copié !"))
        .catch(() => flashShareButton("Impossible de copier"));
    } else {
      flashShareButton("Copie non supportée");
    }
  }

  function flashShareButton(msg) {
    const btn = document.getElementById("shareBtn");
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = msg;
    setTimeout(() => {
      btn.textContent = original;
    }, 1600);
  }

  /* ---------------- boot ---------------- */

  if (!Array.isArray(CHAMPIONS) || CHAMPIONS.length === 0) {
    el.attemptsCaption.textContent = "Aucun champion trouvé dans data.js — ajoute des champions pour commencer.";
  } else {
    startGame("daily");
  }
})();
