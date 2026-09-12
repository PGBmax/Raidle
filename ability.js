/* =========================================================================
   RAIDLE ABILITY — logique du jeu autonome
   Dépendances: data.js (CHAMPIONS global), spellData.js (SPELL_DATA global)
   ========================================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "raidle_ability_daily_v1";

  /* ---- helpers (identiques à script.js) ---- */

  function normalize(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  const FACTION_ALLIANCE = {
    "Sacred Order":    "Telerian League",
    "Barbarians":      "Telerian League",
    "High Elves":      "Telerian League",
    "Banner Lords":    "Telerian League",
    "Ogryn Tribes":    "Gaellen Pact",
    "Lizardmen":       "Gaellen Pact",
    "Orcs":            "Gaellen Pact",
    "Skinwalkers":     "Gaellen Pact",
    "Undead Hordes":   "The Corrupted",
    "Dark Elves":      "The Corrupted",
    "Demonspawn":      "The Corrupted",
    "Knights Revenant":"The Corrupted",
    "Argonites":       "Nyresian Union",
    "Dwarves":         "Nyresian Union",
    "Shadowkin":       "Nyresian Union",
    "Sylvan Watchers": "Nyresian Union",
  };

  const AVAILABLE_CHAMPIONS = (Array.isArray(CHAMPIONS)
    ? (function () {
        const seen = new Set();
        const out  = [];
        for (let i = 0; i < CHAMPIONS.length; i++) {
          const c = CHAMPIONS[i];
          if (!c) continue;
          if (c.rarity !== "Legendary" && c.rarity !== "Mythical") continue;
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
    return AVAILABLE_CHAMPIONS.find(c => normalize(c.name) === n) || null;
  }

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  }

  function buildThumb(champ) {
    const fallback = document.createElement("div");
    fallback.className = "thumb-fallback";
    fallback.textContent = champ.name.slice(0, 2).toUpperCase();

    const img = document.createElement("img");
    img.alt = champ.name;

    const candidates = [];
    if (champ.image && champ.image.trim())
      candidates.push(`images/${champ.image}`);
    if (champ.imageHint && champ.imageHint.trim()) {
      ["png", "webp", "jpg", "jpeg"].forEach(ext =>
        candidates.push(`images/${champ.imageHint}.${ext}`)
      );
    }
    if (!candidates.length) return fallback;

    let idx = 0;
    img.onerror = function () {
      idx++;
      if (idx < candidates.length) img.src = candidates[idx];
      else img.replaceWith(fallback);
    };
    img.src = candidates[0];
    return img;
  }

  /* ---- DOM refs ---- */

  const el = {
    modeBtns:   document.querySelectorAll("[data-amode]"),
    portalFig:  document.getElementById("portalFigure"),
    desc:       document.getElementById("abilityDesc"),
    chip1:      document.getElementById("hintChip1"),
    chip2:      document.getElementById("hintChip2"),
    chip3:      document.getElementById("hintChip3"),
    val1:       document.getElementById("hintVal1"),
    val2:       document.getElementById("hintVal2"),
    val3:       document.getElementById("hintVal3"),
    input:      document.getElementById("abilityInput"),
    sugg:       document.getElementById("abilitySuggestions"),
    wrongList:  document.getElementById("wrongList"),
    wrongPills: document.getElementById("wrongPills"),
    result:     document.getElementById("resultBanner"),
  };

  /* ---- spell pool ---- */

  const AVAILABLE_SPELLS = (typeof SPELL_DATA !== "undefined" && Array.isArray(SPELL_DATA)
    ? SPELL_DATA
    : []
  ).filter(s => !!findChampionByName(s.champion));

  /* ---- game state ---- */

  let mode          = "daily";
  let answer        = null;   // SPELL_DATA entry
  let answerChamp   = null;   // AVAILABLE_CHAMPIONS entry
  let wrongs        = 0;
  let gameOver      = false;
  let won           = false;
  let wrongNames    = [];
  let activeSuggIdx = -1;

  /* ---- daily seed ---- */

  function dailySeed() {
    const d  = new Date();
    const s  = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-ability`;
    let h    = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return AVAILABLE_SPELLS.length ? h % AVAILABLE_SPELLS.length : 0;
  }

  function pickRandom(excludeChamp) {
    if (!AVAILABLE_SPELLS.length) return null;
    if (AVAILABLE_SPELLS.length === 1) return AVAILABLE_SPELLS[0];
    let entry;
    do {
      entry = AVAILABLE_SPELLS[Math.floor(Math.random() * AVAILABLE_SPELLS.length)];
    } while (excludeChamp && normalize(entry.champion) === normalize(excludeChamp));
    return entry;
  }

  /* ---- portrait management ---- */

  function loadPortrait(champ) {
    // Show champion image as black silhouette (revealed at game end)
    el.portalFig.classList.remove("is-revealed");
    el.portalFig.innerHTML = "";

    const candidates = [];
    if (champ.image && champ.image.trim())
      candidates.push(`images/${champ.image}`);
    if (champ.imageHint && champ.imageHint.trim()) {
      ["png", "webp", "jpg", "jpeg"].forEach(ext =>
        candidates.push(`images/${champ.imageHint}.${ext}`)
      );
    }

    if (!candidates.length) {
      // No image available — show placeholder glyph
      const span = document.createElement("span");
      span.className = "placeholder-glyph";
      span.textContent = "?";
      el.portalFig.appendChild(span);
      return;
    }

    const img = document.createElement("img");
    img.alt   = champ.name;
    let idx   = 0;

    img.onerror = function () {
      idx++;
      if (idx < candidates.length) {
        img.src = candidates[idx];
      } else {
        // All candidates failed — show placeholder
        const span = document.createElement("span");
        span.className = "placeholder-glyph";
        span.textContent = "?";
        img.replaceWith(span);
      }
    };
    img.src = candidates[0];
    el.portalFig.appendChild(img);
  }

  function revealPortrait() {
    el.portalFig.classList.add("is-revealed");
  }

  /* ---- hints ---- */

  function revealHints(n) {
    if (n >= 1 && el.chip1) {
      el.chip1.classList.add("is-revealed");
      el.val1.textContent = answer.spellName;
    }
    if (n >= 2 && el.chip2) {
      el.chip2.classList.add("is-revealed");
      el.val2.textContent = answerChamp ? answerChamp.affinity : "?";
    }
    if (n >= 3 && el.chip3) {
      el.chip3.classList.add("is-revealed");
      el.val3.textContent = answerChamp ? answerChamp.faction : "?";
    }
  }

  /* ---- game flow ---- */

  function startGame(newMode) {
    mode     = newMode || mode;
    gameOver = false;
    won      = false;
    wrongs   = 0;
    wrongNames = [];

    [el.chip1, el.chip2, el.chip3].forEach(c => { if (c) c.classList.remove("is-revealed"); });
    if (el.val1) el.val1.textContent = "?";
    if (el.val2) el.val2.textContent = "?";
    if (el.val3) el.val3.textContent = "?";
    if (el.wrongList)  el.wrongList.hidden = true;
    if (el.wrongPills) el.wrongPills.innerHTML = "";
    if (el.result) {
      el.result.hidden    = true;
      el.result.className = "result-banner";
      el.result.innerHTML = "";
    }
    if (el.input) { el.input.value = ""; el.input.disabled = false; }
    if (el.sugg)  el.sugg.hidden = true;

    el.modeBtns.forEach(b => {
      const on = b.dataset.amode === mode;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });

    if (!AVAILABLE_SPELLS.length) {
      if (el.desc) el.desc.textContent = "No spell data available.";
      return;
    }

    answer      = mode === "daily" ? AVAILABLE_SPELLS[dailySeed()] : pickRandom();
    answerChamp = findChampionByName(answer.champion);

    if (el.desc) el.desc.textContent = answer.description;
    if (answerChamp) loadPortrait(answerChamp);

    if (mode === "daily") {
      const prog = loadProgress();
      if (prog) {
        prog.wrongNames.forEach(n => addWrong(n, true));
        if (prog.gameOver) endGame(prog.won, true);
      }
    }

    if (el.input) el.input.focus();
  }

  function addWrong(name, silent) {
    wrongs++;
    wrongNames.push(name);
    revealHints(Math.min(wrongs, 3));
    if (el.wrongList)  el.wrongList.hidden = false;
    if (el.wrongPills) {
      const pill = document.createElement("span");
      pill.className    = "wrong-pill";
      pill.textContent  = name;
      el.wrongPills.appendChild(pill);
    }
    if (!silent && mode === "daily") saveProgress();
  }

  function endGame(isWon, silent) {
    gameOver = true;
    won      = isWon;
    if (el.input) el.input.disabled = true;
    if (el.sugg)  el.sugg.hidden = true;
    const portal = document.getElementById("portal");
    if (portal) portal.classList.add("is-done");
    revealHints(3);
    revealPortrait();

    if (!el.result) return;
    el.result.hidden = false;
    el.result.classList.add(isWon ? "win" : "lose");

    const title = isWon
      ? `Correct! The champion was <span class="answer-name">${answer.champion}</span>.`
      : `The answer was <span class="answer-name">${answer.champion}</span>.`;

    el.result.innerHTML = `
      <div>${title}</div>
      <div class="banner-actions">
        ${mode === "infinite" ? '<button id="newBtn" type="button">New Challenge</button>' : ""}
      </div>
    `;
    const newBtn = document.getElementById("newBtn");
    if (newBtn) newBtn.addEventListener("click", () => startGame("infinite"));
    if (!silent && mode === "daily") saveProgress();
  }

  /* ---- autocomplete ---- */

  function renderSuggestions(query) {
    if (!el.sugg) return;
    const q = normalize(query);
    el.sugg.innerHTML = "";
    activeSuggIdx = -1;
    if (!q) { el.sugg.hidden = true; return; }

    const matches = AVAILABLE_CHAMPIONS.filter(c => normalize(c.name).includes(q)).slice(0, 8);
    if (!matches.length) {
      const li = document.createElement("li");
      li.className   = "no-match";
      li.textContent = "No champion found";
      el.sugg.appendChild(li);
      el.sugg.hidden = false;
      return;
    }
    matches.forEach(champ => {
      const li    = document.createElement("li");
      li.className = "suggestion-item";
      li.setAttribute("role", "option");

      const thumb = buildThumb(champ);
      thumb.classList.add("suggestion-thumb");
      li.appendChild(thumb);

      const span       = document.createElement("span");
      span.textContent = champ.name;
      li.appendChild(span);

      li.addEventListener("mousedown", e => { e.preventDefault(); submitGuess(champ.name); });
      el.sugg.appendChild(li);
    });
    el.sugg.hidden = false;
  }

  function submitGuess(rawName) {
    if (gameOver) return;
    const champ = findChampionByName(rawName);
    if (!champ) return;
    if (el.input) el.input.value = "";
    if (el.sugg)  { el.sugg.hidden = true; el.sugg.innerHTML = ""; }
    activeSuggIdx = -1;

    if (normalize(champ.name) === normalize(answer.champion)) {
      endGame(true, false);
    } else {
      addWrong(champ.name, false);
    }
  }

  /* ---- event listeners ---- */

  if (el.input) {
    el.input.addEventListener("input", () => {
      if (!gameOver) renderSuggestions(el.input.value);
    });

    el.input.addEventListener("keydown", e => {
      const items = Array.from(el.sugg ? el.sugg.querySelectorAll(".suggestion-item") : []);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (items.length) {
          activeSuggIdx = Math.min(activeSuggIdx + 1, items.length - 1);
          items.forEach((it, i) => it.classList.toggle("is-active", i === activeSuggIdx));
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (items.length) {
          activeSuggIdx = Math.max(activeSuggIdx - 1, 0);
          items.forEach((it, i) => it.classList.toggle("is-active", i === activeSuggIdx));
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        const active = items[activeSuggIdx];
        if (active) submitGuess(active.querySelector("span").textContent);
        else if (el.input.value.trim()) submitGuess(el.input.value.trim());
      } else if (e.key === "Escape") {
        if (el.sugg) el.sugg.hidden = true;
      }
    });

    el.input.addEventListener("blur", () => {
      setTimeout(() => { if (el.sugg) el.sugg.hidden = true; }, 150);
    });
  }

  document.addEventListener("click", e => {
    if (el.input && !el.input.contains(e.target) && el.sugg && !el.sugg.contains(e.target)) {
      el.sugg.hidden = true;
    }
  });

  el.modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.amode !== mode) startGame(btn.dataset.amode);
    });
  });

  /* ---- daily persistence ---- */

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (data.date !== todayKey()) return null;
      return data;
    } catch (e) { return null; }
  }

  function saveProgress() {
    if (mode !== "daily") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        date:       todayKey(),
        wrongNames: wrongNames,
        gameOver:   gameOver,
        won:        won,
      }));
    } catch (e) { /* ignore quota errors */ }
  }

  /* ---- boot ---- */

  if (!Array.isArray(AVAILABLE_CHAMPIONS) || !AVAILABLE_CHAMPIONS.length) {
    if (el.desc) el.desc.textContent = "No champion data found — check data.js.";
  } else if (!AVAILABLE_SPELLS.length) {
    if (el.desc) el.desc.textContent = "No spell data found — check spellData.js.";
  } else {
    startGame("daily");
  }

})();
