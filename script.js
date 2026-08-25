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

  // (moved) AVAILABLE_CHAMPIONS is initialized after helpers so normalize() is available

  /* ---------------- helpers ---------------- */

  function normalize(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  /* ---------------- alliance mapping ---------------- */
  const FACTION_ALLIANCE = {
    "Sacred Order":   "Telerian League",
    "Barbarians":     "Telerian League",
    "High Elves":     "Telerian League",
    "Banner Lords":   "Telerian League",
    "Ogryn Tribes":   "Gaellen Pact",
    "Lizardmen":      "Gaellen Pact",
    "Orcs":           "Gaellen Pact",
    "Skinwalkers":    "Gaellen Pact",
    "Undead Hordes":  "The Corrupted",
    "Dark Elves":     "The Corrupted",
    "Demonspawn":     "The Corrupted",
    "Knights Revenant": "The Corrupted",
    "Argonites":      "Nyresian Union",
    "Dwarves":        "Nyresian Union",
    "Shadowkin":      "Nyresian Union",
    "Sylvan Watchers": "Nyresian Union",
  };

  function getAlliance(champ) {
    return FACTION_ALLIANCE[champ.faction] || "Unknown";
  }

  // Build AVAILABLE_CHAMPIONS: Legendary/Mythical only, deduplicated by normalized name
  const AVAILABLE_CHAMPIONS = (Array.isArray(CHAMPIONS)
    ? (function () {
        const seen = new Set();
        const out = [];
        for (let i = 0; i < CHAMPIONS.length; i++) {
          const c = CHAMPIONS[i];
          if (!c) continue;
          if (!(c.rarity === "Legendary" || c.rarity === "Mythical")) continue;
          const n = normalize(c.name || "");
          if (seen.has(n)) continue;
          seen.add(n);
          out.push(c);
        }
        return out;
      })()
    : []);

  function findChampionByName(name) {
    const n = normalize(name);
    return AVAILABLE_CHAMPIONS.find((c) => normalize(c.name) === n) || null;
  }

  function dailySeedIndex() {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
    }
    return AVAILABLE_CHAMPIONS.length ? hash % AVAILABLE_CHAMPIONS.length : 0;
  }

  function todayKey() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  }

  function pickRandomChampion(excludeName) {
    if (AVAILABLE_CHAMPIONS.length === 1) return AVAILABLE_CHAMPIONS[0];
    let c;
    do {
      c = AVAILABLE_CHAMPIONS[Math.floor(Math.random() * AVAILABLE_CHAMPIONS.length)];
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
      answer = AVAILABLE_CHAMPIONS[dailySeedIndex()];
      el.attemptsCaption.textContent = "Daily Challenge — one mystery champion for everyone.";
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
      el.attemptsCaption.textContent = "Infinite — guess as many champions as you like.";
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
      el.suggestions.style.display = "none";
      return;
    }

    const guessedNames = new Set(guesses.map((g) => normalize(g.name)));
    const matches = AVAILABLE_CHAMPIONS.filter(
      (c) => normalize(c.name).includes(q) && !guessedNames.has(normalize(c.name))
    ).slice(0, 8);

    if (matches.length === 0) {
      const li = document.createElement("li");
      li.className = "no-match";
      li.textContent = "No champion found";
      li.setAttribute('role','option');
      el.suggestions.appendChild(li);
      el.suggestions.hidden = false;
      el.suggestions.style.display = 'block';
      el.suggestions.style.zIndex = 10000;
      return;
    }

    matches.forEach((champ) => {
      const li = document.createElement("li");
      li.className = "suggestion-item";
      li.setAttribute('role','option');
      li.setAttribute('tabindex','0');
      const thumb = buildThumb(champ);
      thumb.classList.add("suggestion-thumb");
      li.appendChild(thumb);
      const span = document.createElement("span");
      span.textContent = champ.name;
      li.appendChild(span);
      li.addEventListener("click", () => submitGuess(champ.name));
      li.addEventListener('keydown', (e) => { if(e.key === 'Enter') submitGuess(champ.name); });
      el.suggestions.appendChild(li);
    });

    el.suggestions.hidden = false;
    el.suggestions.style.display = 'block';
    el.suggestions.style.zIndex = 10000;
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
    // close and clear suggestions immediately after selecting
    el.suggestions.hidden = true;
    el.suggestions.style.display = 'none';
    el.suggestions.innerHTML = '';
    activeSuggestionIndex = -1;

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

  function buildThumb(champ) {
    const fallback = document.createElement("div");
    fallback.className = "thumb-fallback";
    fallback.textContent = champ.name.slice(0, 2).toUpperCase();

    const img = document.createElement("img");
    img.alt = champ.name;

    const candidates = [];
    if (champ.image && champ.image.trim()) candidates.push(`images/${champ.image}`);
    if (champ.imageHint && champ.imageHint.trim()) {
      ["png", "webp", "jpg", "jpeg"].forEach((ext) =>
        candidates.push(`images/${champ.imageHint}.${ext}`)
      );
    }

    if (candidates.length === 0) return fallback;

    let idx = 0;
    img.onerror = function () {
      idx++;
      if (idx < candidates.length) img.src = candidates[idx];
      else img.replaceWith(fallback);
    };
    img.src = candidates[0];
    return img;
  }

  function addGuess(champ, opts) {
    opts = opts || {};
    guesses.push(champ);

    const row = document.createElement("tr");

    // Portrait + name
    const tdPortrait = document.createElement("td");
    tdPortrait.className = "cell-portrait";
    tdPortrait.appendChild(buildThumb(champ));
    const nameSpan = document.createElement("span");
    nameSpan.textContent = champ.name;
    tdPortrait.appendChild(nameSpan);
    row.appendChild(tdPortrait);

    // Rarity
    const rarityCorrect = champ.rarity === answer.rarity;
    row.appendChild(makeCell(champ.rarity, rarityCorrect, rarityArrow(champ.rarity, answer.rarity)));

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

    // Alliance
    const champAlliance = getAlliance(champ);
    const answerAlliance = getAlliance(answer);
    row.appendChild(makeCell(champAlliance, champAlliance === answerAlliance));

    // Faction
    row.appendChild(makeCell(champ.faction, champ.faction === answer.faction));

    // Aura
    const champAura = champ.aura || "None";
    const answerAura = answer.aura || "None";
    row.appendChild(makeCell(champAura, champAura === answerAura));

    if (!opts.silent) {
      Array.from(row.cells).forEach(function (td, i) {
        td.classList.add("cell-reveal");
        td.style.animationDelay = (i * 210) + "ms";
      });
    }

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

    const attemptsWord = guesses.length > 1 ? "attempts" : "attempt";
    const title = won
      ? `Found! It was <span class="answer-name">${answer.name}</span>, in ${guesses.length} ${attemptsWord}.`
      : `It was <span class="answer-name">${answer.name}</span>. Better luck next time!`;

    el.resultBanner.innerHTML = `
      <div>${title}</div>
      <div class="banner-actions">
        ${mode === "infinite" ? '<button id="playAgainBtn" type="button">New Champion</button>' : ""}
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
    const fallback = makeGlyph(answer.name);
    const img = document.createElement("img");
    img.alt = answer.name;
    const candidates = [];
    if (answer.image && answer.image.trim()) candidates.push(`images/${answer.image}`);
    if (answer.imageHint && answer.imageHint.trim()) {
      ["png", "webp", "jpg", "jpeg"].forEach((ext) =>
        candidates.push(`images/${answer.imageHint}.${ext}`)
      );
    }
    if (candidates.length === 0) {
      el.portalFigure.appendChild(fallback);
      return;
    }
    let idx = 0;
    img.onerror = function () {
      idx++;
      if (idx < candidates.length) img.src = candidates[idx];
      else img.replaceWith(fallback);
    };
    img.src = candidates[0];
    el.portalFigure.appendChild(img);
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
            g.rarity === answer.rarity,
            g.affinity === answer.affinity,
            g.role === answer.role,
            getAlliance(g) === getAlliance(answer),
            g.faction === answer.faction,
            (g.aura || "None") === (answer.aura || "None"),
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
        .then(() => flashShareButton("Copied!"))
        .catch(() => flashShareButton("Unable to copy"));
    } else {
        flashShareButton("Copy not supported");
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

  if (!Array.isArray(AVAILABLE_CHAMPIONS) || AVAILABLE_CHAMPIONS.length === 0) {
    el.attemptsCaption.textContent = "No Legendary/Mythical champions found in data.js — add some champions to get started.";
  } else {
    startGame("daily");
  }
})();
