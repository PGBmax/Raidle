/*
  =========================================================================
  DONNEES DES CHAMPIONS — generees a partir de ta base fournie
  =========================================================================
  1053 champions, avec pour chacun :
  - name, faction, affinity, rarity, role  -> utilises par le comparateur
  - stats (hp/atk/def/spd/crate/cdmg/res/acc), aura, auraText, skillNames,
    invocable -> donnees brutes en plus, non utilisees par le jeu pour
    l'instant, mais dispo si tu veux enrichir le comparateur plus tard
    (ex: comparer la vitesse, l'affinite de l'aura, etc.)

  CE QUE JE N'AI PAS REPRIS DE TA BASE, VOLONTAIREMENT :
  - Les DESCRIPTIONS completes des sorts (textes de Plarium proteges par
    le droit d'auteur). J'ai garde uniquement les NOMS des sorts dans
    "skillNames" -> si tu veux les descriptions dans le jeu plus tard,
    dis-le moi et je les reformulerai avec mes propres mots plutot que
    de les copier telles quelles.
  - Les images elles-memes (juste des illustrations du jeu, donc a toi
    de les fournir comme convenu). Le champ "imageHint" garde le nom/slug
    d'origine de ta base, ca peut t'aider a nommer tes fichiers de la
    meme facon (par exemple imageHint: "Joan" -> tu peux nommer ton
    fichier "images/Joan.png" et mettre image: "Joan.png").

  CE QUI RESTE VIDE, A COMPLETER SI TU VEUX T'EN SERVIR :
  - image        : "" pour l'instant
  - obtainedFrom : "" pour l'instant (pas dans ta base)
  - releaseYear  : null pour l'instant (pas dans ta base)
  =========================================================================
*/

const CHAMPIONS = [
  {
    "name": "Abbess",
    "image": "",
    "imageHint": "Abbess",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1564,
      "def": 1079,
      "spd": 96,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 34%",
    "skillNames": [
      "Arrow of Rebuke",
      "Mass Impalement",
      "Divine Wrath"
    ]
  },
  {
    "name": "Abyssal",
    "image": "",
    "imageHint": "Abyssal",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 815,
      "def": 991,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 16%",
    "skillNames": [
      "Void Gaze",
      "Abyssal Renewal",
      "Wards of Madness"
    ]
  },
  {
    "name": "Acelin the Stalwart",
    "image": "",
    "imageHint": "Acelin",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18825,
      "atk": 760,
      "def": 1564,
      "spd": 106,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "FAC-DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%\n\n[Bannerlords only]\n\nIncreases Ally HP in All Battles by 15%",
    "skillNames": [
      "Hammer of Kaerok",
      "Shield Crush",
      "Behold the Banner",
      "Knight of Knights [P] Level 1"
    ]
  },
  {
    "name": "Achak the Wendarin",
    "image": "",
    "imageHint": "Achak",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 947,
      "def": 1189,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%",
    "skillNames": [
      "Devour All Hope",
      "Cannibal Might",
      "Frostfire Gale",
      "Twisted Hunger [P]"
    ]
  },
  {
    "name": "Acolyte",
    "image": "",
    "imageHint": "Acolyte",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 749,
      "def": 1266,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 30%",
    "skillNames": [
      "Tireless Anger",
      "Dark Exhaustion",
      "Liberation"
    ]
  },
  {
    "name": "Acolyte Of The Slither",
    "image": "",
    "imageHint": "Slither",
    "faction": "Argonites",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 848,
      "def": 991,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 16%",
    "skillNames": [
      "Darklight Spears",
      "Reduce To Ash",
      "Rite of Flame"
    ]
  },
  {
    "name": "Acrizia",
    "image": "",
    "imageHint": "Acrizia",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1476,
      "def": 1046,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 19%",
    "skillNames": [
      "Unflagging Assault",
      "Battlefield Domination",
      "Shut Down",
      "Grandeur [P]"
    ]
  },
  {
    "name": "Adjudicator",
    "image": "",
    "imageHint": "Adjudicator",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1255,
      "def": 870,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 40",
    "skillNames": [
      "Isolation Cell",
      "Slowing Sanction",
      "Penalize"
    ]
  },
  {
    "name": "Admiral Blacktusk",
    "image": "",
    "imageHint": "Blacktusk",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20640,
      "atk": 826,
      "def": 1376,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "FAC-ACC",
    "auraText": "Increases Ally ACC in All Battles by 60\n\n[Dwarves only]\n\nIncreases Ally SPD in All Battles by 15%",
    "skillNames": [
      "Blacktusk's Ax",
      "Admiral's Orders",
      "Defender of Skyiron",
      "Uniter of Dwarves [P]"
    ]
  },
  {
    "name": "Admonitor",
    "image": "",
    "imageHint": "Admonitor",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 617,
      "def": 870,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shield Wall",
      "Cover"
    ]
  },
  {
    "name": "Adriel",
    "image": "",
    "imageHint": "Adriel",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 1101,
      "def": 980,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Magic Ally SPD in All Battles by 21%",
    "skillNames": [
      "Humiliate",
      "Curtain of Light",
      "Blinding Flash"
    ]
  },
  {
    "name": "Aeila Lifebraid",
    "image": "",
    "imageHint": "Aeila",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 1123,
      "def": 980,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Restorative Blow",
      "Song Strike",
      "Healing Haven",
      "Rhythmic Flow [P]"
    ]
  },
  {
    "name": "Aeshma",
    "image": "",
    "imageHint": "Aeshma",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1354,
      "def": 980,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Ichor Sickles",
      "Wasting Affliction",
      "Languish",
      "Venom for Blood [P]"
    ]
  },
  {
    "name": "Ailil",
    "image": "",
    "imageHint": "Ailil",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1630,
      "def": 903,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Gnarled Scythe",
      "Pierce the Carapace",
      "Chill Wind of Autumn",
      "Force of Nature [P]"
    ]
  },
  {
    "name": "Aina",
    "image": "",
    "imageHint": "Aina",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1487,
      "def": 760,
      "spd": 105,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 40",
    "skillNames": [
      "Ferocity",
      "Bloody Swath",
      "Overmaster"
    ]
  },
  {
    "name": "Akemtum",
    "image": "",
    "imageHint": "Akemtum",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1354,
      "def": 881,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 18%",
    "skillNames": [
      "Noxious Claws",
      "Immortal Malison",
      "Hex Blood [P]"
    ]
  },
  {
    "name": "Akoth the Seared",
    "image": "",
    "imageHint": "Akoth",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 16680,
      "atk": 892,
      "def": 1299,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Molten Punch",
      "Pyroclasm",
      "Pyretic Release",
      "Fiery Swath [P]"
    ]
  },
  {
    "name": "Alaric the Hooded",
    "image": "",
    "imageHint": "Alaric",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1454,
      "def": 793,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 29%",
    "skillNames": [
      "Red Fury",
      "Demand Chivalry",
      "Crimson Warlord"
    ]
  },
  {
    "name": "Alatreon Blademaster",
    "image": "",
    "imageHint": "Alatreon",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20805,
      "atk": 914,
      "def": 1277,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 30%",
    "skillNames": [
      "Foresight Slash",
      "Reaping Slash",
      "Cleanser Booster",
      "Alatreon Divinity [P]"
    ]
  },
  {
    "name": "Alaz The Sunbearer",
    "image": "",
    "imageHint": "Alaz",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 980,
      "def": 1476,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 35%",
    "skillNames": [
      "Photon Ax",
      "Rolling Thunder",
      "Searing Glare",
      "Metamorph",
      "Cuirass of the Sun [P]"
    ]
  },
  {
    "name": "Alaz The Sunbearer",
    "image": "",
    "imageHint": "Alaz",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23955,
      "atk": 958,
      "def": 1299,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 35%",
    "skillNames": [
      "Boltquake",
      "Solar Flare",
      "Revitalizing Ray",
      "Metamorph",
      "Heart of Heavens [P]"
    ]
  },
  {
    "name": "Aleksandr the Sharpshooter",
    "image": "",
    "imageHint": "Aleksandr",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17505,
      "atk": 1432,
      "def": 980,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 60",
    "skillNames": [
      "Arctic Warfare",
      "Spraydown",
      "Born to Win"
    ]
  },
  {
    "name": "Alice the Wanderer",
    "image": "",
    "imageHint": "Alice",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1443,
      "def": 1068,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Vorpal Sword",
      "Clockwork Cyclone",
      "Queenslayer",
      "Tick Tock [P]"
    ]
  },
  {
    "name": "Alika",
    "image": "",
    "imageHint": "Alika",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1354,
      "def": 892,
      "spd": 101,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Gap Shot",
      "High Value Target",
      "Disorient",
      "Devoted Sister [P]"
    ]
  },
  {
    "name": "Alsgor Crimsonhorn",
    "image": "",
    "imageHint": "Alsgor",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 936,
      "def": 1178,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 60",
    "skillNames": [
      "Thunderous Maul",
      "Crack the Sky",
      "Resounding Rally",
      "Trammel"
    ]
  },
  {
    "name": "Altan",
    "image": "",
    "imageHint": "Altan",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 837,
      "def": 1398,
      "spd": 102,
      "crate": 15,
      "cdmg": 57.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "Searing Blow",
      "Wall of Flame",
      "Fiery Rebirth [P]"
    ]
  },
  {
    "name": "Alure",
    "image": "",
    "imageHint": "Alure",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1575,
      "def": 793,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 50",
    "skillNames": [
      "Psychic Whip",
      "Temptation",
      "Hellish Blaze"
    ]
  },
  {
    "name": "Amarantine Skeleton",
    "image": "",
    "imageHint": "Skeleton",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 683,
      "def": 1178,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sorcerous Bones",
      "Tomb Blight",
      "Rusted Targe"
    ]
  },
  {
    "name": "Ambassador Lethelin",
    "image": "",
    "imageHint": "Lethelin",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 969,
      "def": 1189,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Spearshower",
      "Rallying Banner",
      "Field Medic"
    ]
  },
  {
    "name": "Amoch the First Satrap",
    "image": "",
    "imageHint": "Amoch",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 870,
      "def": 1266,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 28%",
    "skillNames": [
      "Satrap's Secrets",
      "Dragonkin Knowledge",
      "Ward of the Heritage",
      "Resilient Caste [P]"
    ]
  },
  {
    "name": "Anax",
    "image": "",
    "imageHint": "Anax",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1542,
      "def": 815,
      "spd": 90,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Piercing Shotels",
      "Deathly Ichors",
      "Soul Feast",
      "Revenant [P]"
    ]
  },
  {
    "name": "Anaxia the Reborn",
    "image": "",
    "imageHint": "Anaxia",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20145,
      "atk": 936,
      "def": 1575,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 35%",
    "skillNames": [
      "Thirsting Sword",
      "Deathplunge",
      "All-Consuming Roar",
      "Metamorph",
      "Battle Revelry [P]"
    ]
  },
  {
    "name": "Anaxia the Reborn",
    "image": "",
    "imageHint": "Anaxia",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 26430,
      "atk": 793,
      "def": 1299,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 35%",
    "skillNames": [
      "Blade Axel",
      "Frenzied Execution",
      "Soul Separator",
      "Metamorph",
      "Rage Nexus [P]"
    ]
  },
  {
    "name": "Anchorite",
    "image": "",
    "imageHint": "Anchorite",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 1046,
      "def": 980,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Warm Embrace",
      "Prayer of Prowess",
      "Sacred Trust"
    ]
  },
  {
    "name": "Androc the Glorious",
    "image": "",
    "imageHint": "Androc",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 859,
      "def": 1619,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 35%",
    "skillNames": [
      "Pride's Bite",
      "Radiant Claw",
      "Rock of Werinbur",
      "Metamorph",
      "Knights of the Wild [P]"
    ]
  },
  {
    "name": "Androc the Glorious",
    "image": "",
    "imageHint": "Androc",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23955,
      "atk": 859,
      "def": 1398,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 35%",
    "skillNames": [
      "Gildthorn Assault",
      "Palisade Breaker",
      "Roar of Kitherus",
      "Metamorph",
      "Lionheart [P]"
    ]
  },
  {
    "name": "Andryssia",
    "image": "",
    "imageHint": "Andryssia",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 793,
      "def": 1288,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Censorious Bludgeon",
      "Mind Prison",
      "Pointed Justice",
      "Heartstrong [P]"
    ]
  },
  {
    "name": "Angar",
    "image": "",
    "imageHint": "Angar",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 826,
      "def": 1288,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Exacerbate",
      "Infuriate",
      "Bravado [P]"
    ]
  },
  {
    "name": "Anointed",
    "image": "",
    "imageHint": "Anointed",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 793,
      "def": 1178,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mystic Chill",
      "Vigor Theft",
      "Chant of Violence"
    ]
  },
  {
    "name": "Aothar",
    "image": "",
    "imageHint": "Aothar",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1509,
      "def": 826,
      "spd": 92,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 21%",
    "skillNames": [
      "Rage",
      "Holy Flame",
      "Brand"
    ]
  },
  {
    "name": "Aox the Rememberer",
    "image": "",
    "imageHint": "Aox",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 991,
      "def": 1178,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Doom Tower by 60",
    "skillNames": [
      "Feathered Staff",
      "Lore of Restoration",
      "Weight of Aeons",
      "Steward of Time [P]"
    ]
  },
  {
    "name": "Aphidus The Hivelord",
    "image": "",
    "imageHint": "Aphidus",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1586,
      "def": 1134,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 35%",
    "skillNames": [
      "Blink Cut",
      "Umbral Stingers",
      "Blisterbug Horde",
      "Metamorph",
      "Fleshsearer [P]"
    ]
  },
  {
    "name": "Aphidus The Hivelord",
    "image": "",
    "imageHint": "Aphidus",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1145,
      "def": 1498,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 35%",
    "skillNames": [
      "Crushing Pincers",
      "Putrid Cocoon",
      "Behold The Beast",
      "Metamorph",
      "Entomophobia [P]"
    ]
  },
  {
    "name": "Apothecary",
    "image": "",
    "imageHint": "Apothecary",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 881,
      "def": 1002,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 21%",
    "skillNames": [
      "Scatterbolt",
      "Soothing Chant",
      "Boon of Speed"
    ]
  },
  {
    "name": "April O'Neil",
    "image": "",
    "imageHint": "April",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 19320,
      "atk": 1046,
      "def": 1244,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Breaking Story",
      "Explosive Scoop",
      "Live on the Scene!",
      "Ace Reporter [P]"
    ]
  },
  {
    "name": "Arachoa Moonspinner",
    "image": "",
    "imageHint": "Arachoa",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 881,
      "def": 1465,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battle by 80.",
    "skillNames": [
      "Mesmeric Fangs",
      "Moon-Spider Maw",
      "Dark Trance",
      "Metamorph",
      "Spiderscuttle [P]"
    ]
  },
  {
    "name": "Arachoa Moonspinner",
    "image": "",
    "imageHint": "Arachoa",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1498,
      "def": 1101,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battle by 80.",
    "skillNames": [
      "Astral Ravage",
      "Deaththread Spin",
      "Gossamer Execution",
      "Metamorph",
      "Great Web Mistress [P]"
    ]
  },
  {
    "name": "Aragaz Wyldking",
    "image": "",
    "imageHint": "Aragaz",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 22305,
      "atk": 881,
      "def": 1211,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "FAC-DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%\n\n[Orcs only]\n\nIncreases Ally HP in All Battles by 25%",
    "skillNames": [
      "Wyldking Polearm",
      "Sacrificial Ploy",
      "Cackle of Blades",
      "Underdogs [P]"
    ]
  },
  {
    "name": "Arashi the Riptide",
    "image": "",
    "imageHint": "Arashi",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23955,
      "atk": 793,
      "def": 1189,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Concealed Blades",
      "Nautical Assassin",
      "Riptide's Onslaught",
      "Pirate Lord [P]"
    ]
  },
  {
    "name": "Aratheia Corpseflower",
    "image": "",
    "imageHint": "Aratheia",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1498,
      "def": 1101,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Hexbloom",
      "Capricious Spite",
      "Mindsnare Cloud",
      "Fanglilac Frenzy [P]"
    ]
  },
  {
    "name": "Arbais the Stonethorn",
    "image": "",
    "imageHint": "Arbais",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 980,
      "def": 1387,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 25%",
    "skillNames": [
      "Bladegale",
      "Verdant Rebirth",
      "Harmonious Whisper",
      "Metamorph",
      "Stonethorn's Embrace [P]"
    ]
  },
  {
    "name": "Arbais the Stonethorn",
    "image": "",
    "imageHint": "Arbais",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23955,
      "atk": 958,
      "def": 1299,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 25%",
    "skillNames": [
      "Boulder Hurl",
      "Briarburn",
      "Roar of the Mistwood",
      "Metamorph",
      "Tanglethorn [P]"
    ]
  },
  {
    "name": "Arbalester",
    "image": "",
    "imageHint": "Arbalester",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1421,
      "def": 661,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Spread Misery",
      "Lethargy",
      "Soulbreak"
    ]
  },
  {
    "name": "Arbiter",
    "image": "",
    "imageHint": "Arbiter",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21135,
      "atk": 1068,
      "def": 1101,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 30%",
    "skillNames": [
      "Gaze of Justice",
      "Enforced Humility",
      "Mentor of Heroes",
      "Destiny's Call"
    ]
  },
  {
    "name": "Arcanist",
    "image": "",
    "imageHint": "Arcanist",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 991,
      "def": 848,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Arena by 25%",
    "skillNames": [
      "Paralyzing Touch",
      "Unnatural Recovery",
      "Vigor"
    ]
  },
  {
    "name": "Archbishop Pinthroy",
    "image": "",
    "imageHint": "Pinthroy",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 1057,
      "def": 1178,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 50",
    "skillNames": [
      "Author of Fates",
      "Holy Word",
      "Gleam of Glory",
      "Splendor [P]"
    ]
  },
  {
    "name": "Archer",
    "image": "",
    "imageHint": "Archer",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1156,
      "def": 727,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Double Shot",
      "Rain of Arrows"
    ]
  },
  {
    "name": "Archmage Hellmut",
    "image": "",
    "imageHint": "Hellmut",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18825,
      "atk": 925,
      "def": 1123,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 17%",
    "skillNames": [
      "Arcane Dynamo",
      "Timeslip",
      "Psychic Guidance",
      "Chrono Isolation [P]"
    ]
  },
  {
    "name": "Aristocrat",
    "image": "",
    "imageHint": "Aristocrat",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11070,
      "atk": 1211,
      "def": 804,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sepsis Tips",
      "Stinging Rebuke"
    ]
  },
  {
    "name": "Arix",
    "image": "",
    "imageHint": "Arix",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22965,
      "atk": 881,
      "def": 1167,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Deathly Arts",
      "Thornchain Malison",
      "Warped Guidance",
      "Cynical [P]"
    ]
  },
  {
    "name": "Armanz the Magnificent",
    "image": "",
    "imageHint": "Armanz",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 1167,
      "def": 1123,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Wyrd Blade",
      "Greatest Hits",
      "For My Next Trick!",
      "Master of Ceremonies [P]"
    ]
  },
  {
    "name": "Armiger",
    "image": "",
    "imageHint": "Armiger",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 793,
      "def": 947,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Riposte",
      "Lay to Rest"
    ]
  },
  {
    "name": "Armina",
    "image": "",
    "imageHint": "Armina",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 1354,
      "def": 683,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Discipline Staff",
      "Trampling Rampage",
      "Earsplitter Bellow",
      "Head of Steam [P]"
    ]
  },
  {
    "name": "Arndulf",
    "image": "",
    "imageHint": "Arndulf",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 793,
      "def": 1332,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Iron Greatclub",
      "Daunting Violence",
      "Wall of Metal"
    ]
  },
  {
    "name": "Arne the White",
    "image": "",
    "imageHint": "Arne",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1707,
      "def": 980,
      "spd": 115,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Song of Steel",
      "White-Hot Rage",
      "Arcitc Howl",
      "Metamorph",
      "Will Of The Tundra [P]"
    ]
  },
  {
    "name": "Arne the White",
    "image": "",
    "imageHint": "Arne",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 25605,
      "atk": 815,
      "def": 1332,
      "spd": 115,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Tempest Of Swords",
      "Goading Roar",
      "Glacial Rupture",
      "Metamorph",
      "Bear-Heart [P]"
    ]
  },
  {
    "name": "Arnorn the Shining",
    "image": "",
    "imageHint": "Arnorn",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1586,
      "def": 936,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Shining Cleave",
      "Glimmerforce",
      "Wrath of Hrothglime",
      "Golden King [P]"
    ]
  },
  {
    "name": "Artak",
    "image": "",
    "imageHint": "Artak",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22140,
      "atk": 936,
      "def": 1167,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Chaosrazor",
      "Dogs of War",
      "Purifyre",
      "Burning Blood [P]"
    ]
  },
  {
    "name": "Arwydd Quivergrass",
    "image": "",
    "imageHint": "Arwydd",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1365,
      "def": 991,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 30%",
    "skillNames": [
      "Grasscutter",
      "Quivergrass Vortex",
      "Ax Leap",
      "Rippling Grass [P]"
    ]
  },
  {
    "name": "Ash'nar Dragonsoul",
    "image": "",
    "imageHint": "Ashnar",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23130,
      "atk": 1013,
      "def": 1299,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Ignition Arc",
      "Pyroclast Storm",
      "Wreathed in Flame",
      "Metamorph",
      "By Fire Be Healed [P]"
    ]
  },
  {
    "name": "Ash'nar Dragonsoul",
    "image": "",
    "imageHint": "Ashnar",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 947,
      "def": 1597,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Thunderstar",
      "Magma Geyser",
      "Cataclysm Smash",
      "Metamorph",
      "By Fire Be Broken [P]"
    ]
  },
  {
    "name": "Ashwalker",
    "image": "",
    "imageHint": "Ashwalker",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10905,
      "atk": 1498,
      "def": 804,
      "spd": 103,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 12%",
    "skillNames": [
      "Great Hammer",
      "Devastator",
      "Backbreaker"
    ]
  },
  {
    "name": "Assassin",
    "image": "",
    "imageHint": "Assassin",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 1365,
      "def": 771,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 10%",
    "skillNames": [
      "King's End",
      "Lingering Death",
      "Draught of Sleep"
    ]
  },
  {
    "name": "Astralith",
    "image": "",
    "imageHint": "Astralith",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1487,
      "def": 947,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Assault Leader",
      "Heart Rot",
      "Judgement"
    ]
  },
  {
    "name": "Astralon",
    "image": "",
    "imageHint": "Astralon",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 1619,
      "def": 837,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hellbinder",
      "Divine Immanence",
      "Light of Sanctity",
      "Emissary [P]"
    ]
  },
  {
    "name": "Athel",
    "image": "",
    "imageHint": "Athel",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1189,
      "def": 936,
      "spd": 104,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 15%",
    "skillNames": [
      "Strike Down",
      "Divine Blades",
      "Higher Blessing"
    ]
  },
  {
    "name": "Atur",
    "image": "",
    "imageHint": "Atur",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 826,
      "def": 1145,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Roaring Leap",
      "Raging Bull",
      "Adrenaline Rush [P]",
      "Vigilant Partner [P]"
    ]
  },
  {
    "name": "Authoratrix Lamasu",
    "image": "",
    "imageHint": "Lamasu",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20805,
      "atk": 936,
      "def": 1255,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 24%",
    "skillNames": [
      "Zephyr of Conquest",
      "Dread Dominion",
      "Icon of Domination",
      "Authority Manifest [P]"
    ]
  },
  {
    "name": "Avenger",
    "image": "",
    "imageHint": "Avenger",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1398,
      "def": 815,
      "spd": 104,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 17%",
    "skillNames": [
      "Hunt",
      "Lethal Vortex",
      "Fatal Blow"
    ]
  },
  {
    "name": "Avir the Alchemage",
    "image": "",
    "imageHint": "Avir",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 881,
      "def": 1035,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Flask of Vitreol",
      "Corroding Catalyst",
      "Vitalizing Potions"
    ]
  },
  {
    "name": "Axeman",
    "image": "",
    "imageHint": "Axeman",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Common",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 507,
      "def": 694,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Heavy Chop"
    ]
  },
  {
    "name": "Azure",
    "image": "",
    "imageHint": "Azure",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 958,
      "def": 1057,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Lunge",
      "Aegis",
      "Coup de Grace"
    ]
  },
  {
    "name": "Ba Satha",
    "image": "",
    "imageHint": "Ba-Satha",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20310,
      "atk": 837,
      "def": 1387,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 31%",
    "skillNames": [
      "Death Roll",
      "God Beast's Boon",
      "Staggering Heft",
      "Soulkeeper [P]"
    ]
  },
  {
    "name": "Bad-el-Kazar",
    "image": "",
    "imageHint": "Bad-el-Kazar",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 1079,
      "def": 1156,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 25%",
    "skillNames": [
      "Dark Sphere",
      "Malice",
      "Prey Upon [P]"
    ]
  },
  {
    "name": "Baerd the Broad",
    "image": "",
    "imageHint": "Baerd",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 903,
      "def": 1398,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 30%",
    "skillNames": [
      "Fierce Friend",
      "Thieving Axeman",
      "Bucklan's Strength",
      "Disciple of Padraig [P]"
    ]
  },
  {
    "name": "Baerdal Fellhammer",
    "image": "",
    "imageHint": "Baerdal",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 1398,
      "def": 826,
      "spd": 94,
      "crate": 15,
      "cdmg": 60.0,
      "res": 60,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 32%",
    "skillNames": [
      "Ensorcelled Axe",
      "Fey Protection",
      "Paranoia [P]"
    ]
  },
  {
    "name": "Balar the Lost",
    "image": "",
    "imageHint": "Balar",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1586,
      "def": 969,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Malignant Thorns",
      "Twyster of Life",
      "Monstrous Growth",
      "Lost to Chaos [P]"
    ]
  },
  {
    "name": "Balthus Drauglord",
    "image": "",
    "imageHint": "Balthus",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 848,
      "def": 1255,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 30%",
    "skillNames": [
      "Shield Strike",
      "Doomwheels",
      "Driven to Slaughter",
      "Enchanted Shields [P]"
    ]
  },
  {
    "name": "Bambus Fourleaf",
    "image": "",
    "imageHint": "Bambus",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 870,
      "def": 1277,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Bamboo Splinter",
      "Grovetender",
      "Dream Sight",
      "Sleeping Sage [P]"
    ]
  },
  {
    "name": "Bandit",
    "image": "",
    "imageHint": "Bandit",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 8595,
      "atk": 980,
      "def": 650,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Flaming Shot"
    ]
  },
  {
    "name": "Banshee",
    "image": "",
    "imageHint": "Banshee",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 980,
      "def": 947,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 52",
    "skillNames": [
      "Grave Chill",
      "Cursed Touch",
      "Death Ray"
    ]
  },
  {
    "name": "Baron",
    "image": "",
    "imageHint": "Baron",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1575,
      "def": 1002,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "\nIncreases Ally ATK in all Battles by 33%",
    "skillNames": [
      "Trample",
      "Split Asunder",
      "Righteous Charge",
      "Skypiercer"
    ]
  },
  {
    "name": "Baroth the Bloodsoaked",
    "image": "",
    "imageHint": "Baroth",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 826,
      "def": 1112,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Gilded Weapons",
      "Splattering Hacks",
      "Serpent Axes"
    ]
  },
  {
    "name": "Basher",
    "image": "",
    "imageHint": "Basher",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1498,
      "def": 903,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Splintering Bash",
      "Stinging Blast",
      "Cause Fear"
    ]
  },
  {
    "name": "Basileus Roanas",
    "image": "",
    "imageHint": "Roanas",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1542,
      "def": 1002,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bolts of Scorn",
      "Triple Puncture",
      "Majesty"
    ]
  },
  {
    "name": "Basilisk",
    "image": "",
    "imageHint": "Basilisk",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1365,
      "def": 903,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Whirling Axe",
      "Skullclobber",
      "Withstand [P]"
    ]
  },
  {
    "name": "Basim",
    "image": "",
    "imageHint": "Basim",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15855,
      "atk": 1487,
      "def": 1035,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 30%",
    "skillNames": [
      "Dagger Swirl",
      "Up In Smoke",
      "Winds of Baghdad",
      "Everything is Permitted [P]",
      "Masterful Thief [P]"
    ]
  },
  {
    "name": "Battle Sister",
    "image": "",
    "imageHint": "Battle-Sister",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1090,
      "def": 716,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sever",
      "Condemn"
    ]
  },
  {
    "name": "Battlesage",
    "image": "",
    "imageHint": "Battlesage",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 980,
      "def": 1123,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battles by 19%",
    "skillNames": [
      "Lightning Slash",
      "Nature's Touch",
      "Mother's Embrace"
    ]
  },
  {
    "name": "Bayek",
    "image": "",
    "imageHint": "Bayek",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18330,
      "atk": 683,
      "def": 1674,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Khopesh Strike",
      "Desert Zephyr",
      "Prayer of the Medjay",
      "Siwa's Pride [P]",
      "Everything is Permitted [P]"
    ]
  },
  {
    "name": "Beast Wrestler",
    "image": "",
    "imageHint": "Beast-Wrestler",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1233,
      "def": 760,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 45,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 16%",
    "skillNames": [
      "Weighty Cleaver",
      "Slaughter Prey",
      "First Blood [P]"
    ]
  },
  {
    "name": "Belanor",
    "image": "",
    "imageHint": "Belanor",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1520,
      "def": 1046,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in all Battles by 24%",
    "skillNames": [
      "Swordleader",
      "Insurmountable",
      "Overkill",
      "Tactical Partner"
    ]
  },
  {
    "name": "Belletar Mage-slayer",
    "image": "",
    "imageHint": "Belletar",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 848,
      "def": 1266,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Fume Ax",
      "Slayer's Roar",
      "Mercy of the Oasis",
      "Critical Juncture [P]"
    ]
  },
  {
    "name": "Bellower",
    "image": "",
    "imageHint": "Bellower",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1013,
      "def": 914,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 15%",
    "skillNames": [
      "Frazzle",
      "Mighty Bellow",
      "Bowl Over"
    ]
  },
  {
    "name": "Belz the Reckoner",
    "image": "",
    "imageHint": "Belz",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23295,
      "atk": 749,
      "def": 1277,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Fiendfeller",
      "Gift of Pain",
      "Terra Breach",
      "March of Reckoning [P]"
    ]
  },
  {
    "name": "Bergoth the Malformed",
    "image": "",
    "imageHint": "Bergoth",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21810,
      "atk": 716,
      "def": 1134,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Nightmare Juggernaut",
      "Chemical Stench",
      "Canister [P]"
    ]
  },
  {
    "name": "Berserker",
    "image": "",
    "imageHint": "Berserker",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1266,
      "def": 793,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "All-Out Attack",
      "Havoc",
      "Sweep"
    ]
  },
  {
    "name": "Big 'Un",
    "image": "",
    "imageHint": "Big 'Un",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1575,
      "def": 837,
      "spd": 104,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 90",
    "skillNames": [
      "Head Splitter",
      "Forward Charge",
      "Molten Slag"
    ]
  },
  {
    "name": "Bivald of the Thorn",
    "image": "",
    "imageHint": "Bivald",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22470,
      "atk": 903,
      "def": 1178,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 28%",
    "skillNames": [
      "Thorn Maul",
      "Admonition of Barbs",
      "Briar Nexus",
      "Dethorned [P]"
    ]
  },
  {
    "name": "Black Knight",
    "image": "",
    "imageHint": "Black-Knight",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22470,
      "atk": 914,
      "def": 1167,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 50,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Heavy Blow",
      "Lower Visor",
      "Last Breath",
      "Valorous [P]"
    ]
  },
  {
    "name": "Bladechorister Caldor",
    "image": "",
    "imageHint": "Caldor",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15855,
      "atk": 1663,
      "def": 859,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "FAC-CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 25%\n\n[Sylvan Watchers only]\n\nIncreases Ally SPD in All Battles by 15%",
    "skillNames": [
      "Daggersong",
      "Orchestra of War",
      "Rhythm's Crescendo",
      "Sylvan Symphony [P]"
    ]
  },
  {
    "name": "Bladerider",
    "image": "",
    "imageHint": "Bladerider",
    "faction": "Argonites",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1310,
      "def": 727,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 21%",
    "skillNames": [
      "Dual Slash",
      "Sword Plunge",
      "Enmeshing Barrage"
    ]
  },
  {
    "name": "Blind Seer",
    "image": "",
    "imageHint": "Blind-Seer",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1332,
      "def": 1035,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 34%",
    "skillNames": [
      "Visions of Death",
      "Dark Shroud",
      "Self Sacrifice"
    ]
  },
  {
    "name": "Blizaar the Howler",
    "image": "",
    "imageHint": "Blizaar",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 804,
      "def": 1432,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Frozen Caltrops",
      "Cryo Therapy",
      "Spike Blizzard",
      "Abominable Snogryn [P]"
    ]
  },
  {
    "name": "Blood Marchioness Mina",
    "image": "",
    "imageHint": "Mina",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1487,
      "def": 1156,
      "spd": 110,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all battles by 35%",
    "skillNames": [
      "Hatespine",
      "Crimson Steel",
      "Hemaelstrom",
      "Metamorph",
      "Engine of Murder [P]"
    ]
  },
  {
    "name": "Blood Marchioness Mina",
    "image": "",
    "imageHint": "Mina",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1905,
      "def": 903,
      "spd": 110,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all battles by 35%",
    "skillNames": [
      "Dreadneedle",
      "Serrated Sword",
      "A thousand Wings",
      "Metamorph",
      "Fueled by Blood [P]"
    ]
  },
  {
    "name": "Bloodbraid",
    "image": "",
    "imageHint": "Bloodbraid",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 892,
      "def": 826,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Enraging Prowess",
      "Tireless Assault",
      "Lifecurse"
    ]
  },
  {
    "name": "Bloodfeather",
    "image": "",
    "imageHint": "Bloodfeather",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1542,
      "def": 837,
      "spd": 102,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Faction Wars by 20%",
    "skillNames": [
      "Hunt Down",
      "Armor Breaker",
      "Charged Shot"
    ]
  },
  {
    "name": "Bloodgorged",
    "image": "",
    "imageHint": "Bloodgorged",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 1465,
      "def": 848,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Break Defense",
      "Raging Beast",
      "Decapitate"
    ]
  },
  {
    "name": "Bloodhorn",
    "image": "",
    "imageHint": "Bloodhorn",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 870,
      "def": 991,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 21%",
    "skillNames": [
      "Killer Crescent",
      "Intervene",
      "Deep Defense [P]"
    ]
  },
  {
    "name": "Bloodmask",
    "image": "",
    "imageHint": "Bloodmask",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 694,
      "def": 1002,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bone Crunch",
      "Foot Stomp",
      "Skull Fracture"
    ]
  },
  {
    "name": "Bloodpainter",
    "image": "",
    "imageHint": "Bloodpainter",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1134,
      "def": 837,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Throwing Spear",
      "Embers",
      "Shaman Drum"
    ]
  },
  {
    "name": "Bogwalker",
    "image": "",
    "imageHint": "Bogwalker",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 848,
      "def": 1112,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 25%",
    "skillNames": [
      "Bone Katars",
      "Combo Attack",
      "Scout [P]"
    ]
  },
  {
    "name": "Bolint Freewalker",
    "image": "",
    "imageHint": "Bolint",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 22140,
      "atk": 980,
      "def": 1123,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "FAC-SPD",
    "auraText": "Increases Ally SPD in Arena by 24%\n\n[Skinwalkers only]\n\nIncreases Ally ACC in All Battles by 60",
    "skillNames": [
      "Blockade Destroyer",
      "Fracture Force",
      "Hammer Of Onungburg",
      "Icon of Rebellion [P]"
    ]
  },
  {
    "name": "Boltsmith",
    "image": "",
    "imageHint": "Boltsmith",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1465,
      "def": 562,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 20%",
    "skillNames": [
      "Quarrel Cripple",
      "Trained Eye",
      "Piercer Munitions"
    ]
  },
  {
    "name": "Bombardier",
    "image": "",
    "imageHint": "Bombardier",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1310,
      "def": 881,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in all Battles by 12%",
    "skillNames": [
      "Bombard",
      "Skirmish Tactics",
      "Septic Shot"
    ]
  },
  {
    "name": "Bone Knight",
    "image": "",
    "imageHint": "Bone-Knight",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1090,
      "def": 980,
      "spd": 93,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mutilate",
      "Ancient Seal",
      "Death's Vigor"
    ]
  },
  {
    "name": "Bonekeeper",
    "image": "",
    "imageHint": "Bonekeeper",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1531,
      "def": 870,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Batter",
      "Precision Strike",
      "Killing Haze"
    ]
  },
  {
    "name": "Boragar the Elder",
    "image": "",
    "imageHint": "Boragar",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21135,
      "atk": 925,
      "def": 1244,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 50",
    "skillNames": [
      "Antique Staff",
      "Souls of Old Stone",
      "Rune of Energy",
      "Boragar's Blazon [P]"
    ]
  },
  {
    "name": "Boughsmith Flannan",
    "image": "",
    "imageHint": "Flannan",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 617,
      "def": 1365,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Strike the Anvil",
      "Shatter Knees",
      "Mustersmith",
      "Hammer Rhythm [P]"
    ]
  },
  {
    "name": "Bovos Sharphorn",
    "image": "",
    "imageHint": "Bovos",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 859,
      "def": 1167,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Defiled Earth",
      "Locus of Diabolism",
      "Brimstone Boon",
      "Blood for Blood [P]"
    ]
  },
  {
    "name": "Bowf the Rancid",
    "image": "",
    "imageHint": "Bowf",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 936,
      "def": 1123,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Reekblade",
      "Spearstench",
      "Healing Spritz",
      "Antibiotic Spray [P]"
    ]
  },
  {
    "name": "Brakus the Shifter",
    "image": "",
    "imageHint": "Brakus",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19815,
      "atk": 1465,
      "def": 793,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Innocent Blood",
      "Full Moon Rampage",
      "Hunter's Howl",
      "Beast Mode [P]"
    ]
  },
  {
    "name": "Branch-Arm Lasair",
    "image": "",
    "imageHint": "Lasair",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 892,
      "def": 980,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 15%",
    "skillNames": [
      "Chop, Chop, Chop",
      "Logger's Bane",
      "Rootroar"
    ]
  },
  {
    "name": "Branchweaver",
    "image": "",
    "imageHint": "Branchweaver",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11565,
      "atk": 1189,
      "def": 793,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Branch of Alacrity",
      "Daggerleaf"
    ]
  },
  {
    "name": "Brewguard Jeroboam",
    "image": "",
    "imageHint": "Jeroboam",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 870,
      "def": 1498,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Stout Smash",
      "This Round's On Me!",
      "Last Orders",
      "Absolute Legend [P]"
    ]
  },
  {
    "name": "Broadmaw",
    "image": "",
    "imageHint": "Broadmaw",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 1101,
      "def": 958,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 33%",
    "skillNames": [
      "Ice Blast",
      "Gift",
      "Resurrect"
    ]
  },
  {
    "name": "Broodlord",
    "image": "",
    "imageHint": "Broodlord",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 727,
      "def": 1421,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%",
    "skillNames": [
      "Patient Tactician",
      "Defend the Nest",
      "Primal Tremor",
      "Eggwatcher [P]"
    ]
  },
  {
    "name": "Brute",
    "image": "",
    "imageHint": "Brute",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1079,
      "def": 705,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Dirty Cuts",
      "Rip and Tear"
    ]
  },
  {
    "name": "Bully",
    "image": "",
    "imageHint": "Bully",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Common",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11565,
      "atk": 462,
      "def": 969,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bullying"
    ]
  },
  {
    "name": "Bulwark",
    "image": "",
    "imageHint": "Bulwark",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 837,
      "def": 1266,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 17%",
    "skillNames": [
      "Hefty Flail",
      "Meteoric Ignition",
      "Punishing Defenses [P]"
    ]
  },
  {
    "name": "Burangiri",
    "image": "",
    "imageHint": "Burangiri",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 804,
      "def": 1387,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 40",
    "skillNames": [
      "Battering Skull",
      "Bakemono Charge",
      "Frightful Warcry",
      "Soulmonger [P]"
    ]
  },
  {
    "name": "Bushi",
    "image": "",
    "imageHint": "Bushi",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1476,
      "def": 782,
      "spd": 90,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 20%",
    "skillNames": [
      "Rising Storm",
      "Deadly Edge",
      "Unbending"
    ]
  },
  {
    "name": "Bystophus",
    "image": "",
    "imageHint": "Bystophus",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1795,
      "def": 804,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Horror",
      "Shadow Strike",
      "Crumble"
    ]
  },
  {
    "name": "Cagebound",
    "image": "",
    "imageHint": "Cagebound",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 793,
      "def": 1255,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Twisted Spike",
      "Swordbreak Cage",
      "Bound to Serve"
    ]
  },
  {
    "name": "Cagebreaker",
    "image": "",
    "imageHint": "Cagebreaker",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1409,
      "def": 826,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Spirit Ally ATK in All Battles by 40%",
    "skillNames": [
      "Shatter Shell",
      "Crunch Frenzy",
      "Burn Away"
    ]
  },
  {
    "name": "Candleguard",
    "image": "",
    "imageHint": "Candleguard",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1233,
      "def": 782,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Light of Scrutiny",
      "Triumph Cry",
      "Focused"
    ]
  },
  {
    "name": "Candraphon",
    "image": "",
    "imageHint": "Candraphon",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1509,
      "def": 903,
      "spd": 96,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 33%",
    "skillNames": [
      "Punish Hubris",
      "Butcher's Glee",
      "On the Hunt",
      "From the Shadows [P]"
    ]
  },
  {
    "name": "Canoness",
    "image": "",
    "imageHint": "Canoness",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 804,
      "def": 1321,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 20%",
    "skillNames": [
      "Lead the Charge",
      "Blinding Assault",
      "Stalwart Guardian"
    ]
  },
  {
    "name": "Caoilte the Asharrow",
    "image": "",
    "imageHint": "Caoilte",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1553,
      "def": 980,
      "spd": 107,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Asharrow",
      "Falling Leaves",
      "Torrential Pain",
      "Corrupted Sentinel [P]"
    ]
  },
  {
    "name": "Captain Temila",
    "image": "",
    "imageHint": "Temila",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 936,
      "def": 1112,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Wars by 45",
    "skillNames": [
      "Bond of Duty",
      "Stay In The Fight",
      "Exalted Guardian"
    ]
  },
  {
    "name": "Cardiel",
    "image": "",
    "imageHint": "Cardiel",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 1013,
      "def": 1255,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Cow the Wicked",
      "Angelsong",
      "Heavenly Host",
      "Fiend Warden [P]"
    ]
  },
  {
    "name": "Cardinal",
    "image": "",
    "imageHint": "Cardinal",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 1002,
      "def": 1145,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Evaporation",
      "Mending Touch",
      "Redemption"
    ]
  },
  {
    "name": "Carlinia",
    "image": "",
    "imageHint": "Carlinia",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 793,
      "def": 1365,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 35",
    "skillNames": [
      "Perdition",
      "Penance",
      "Always Watched",
      "Burn With Shame [P]"
    ]
  },
  {
    "name": "Castigator",
    "image": "",
    "imageHint": "Castigator",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 859,
      "def": 903,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Castigate",
      "Holy Equity",
      "Rebuff [P]"
    ]
  },
  {
    "name": "Catacomb Councilor",
    "image": "",
    "imageHint": "Catacomb-Councilor",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1454,
      "def": 914,
      "spd": 92,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Grotesque Strength",
      "Ghoulish Feeding",
      "Army of Death"
    ]
  },
  {
    "name": "Cataphract",
    "image": "",
    "imageHint": "Cataphract",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 991,
      "def": 815,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Arena by 25%",
    "skillNames": [
      "Sure Strike",
      "Fortify",
      "Helmcleaver"
    ]
  },
  {
    "name": "Cecilia the Red Hope",
    "image": "",
    "imageHint": "Cecilia",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 804,
      "def": 1520,
      "spd": 107,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battle by 30%.",
    "skillNames": [
      "Snow Hurricane",
      "Verglas Wave",
      "Yuletide Abeyance",
      "Spirit Of Giving [P]"
    ]
  },
  {
    "name": "Ceez",
    "image": "",
    "imageHint": "Ceez",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1531,
      "def": 837,
      "spd": 100,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Snicker and Slice",
      "Night of the Bat",
      "Swarming Suffering",
      "Gimme! [P]"
    ]
  },
  {
    "name": "Centurion",
    "image": "",
    "imageHint": "Centurion",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 793,
      "def": 1189,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Feed on Suffering",
      "Freakish Resilience",
      "Soul Possession"
    ]
  },
  {
    "name": "Chaagur",
    "image": "",
    "imageHint": "Chaagur",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1542,
      "def": 1134,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Stupor",
      "Venom Storm",
      "Heart Stopper",
      "Constant Agony [P]"
    ]
  },
  {
    "name": "Chalco the Blind",
    "image": "",
    "imageHint": "Chalco",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1542,
      "def": 1002,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Blind Hunger",
      "Inducer of Panic",
      "Unrelenting Violence",
      "Bottomless Maw [P]"
    ]
  },
  {
    "name": "Chancellor Yasmin",
    "image": "",
    "imageHint": "Yasmin",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1101,
      "def": 1090,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battles by 20%",
    "skillNames": [
      "Resounding Smash",
      "Touch of Vigor",
      "Lulling Chant"
    ]
  },
  {
    "name": "Chani",
    "image": "",
    "imageHint": "Chani",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1432,
      "def": 947,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Insidious Arrow",
      "Soul Fire",
      "Shower of Misery",
      "Sureshot [P]"
    ]
  },
  {
    "name": "Channeler",
    "image": "",
    "imageHint": "Channeler",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 881,
      "def": 1002,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Wars by 30",
    "skillNames": [
      "Rage of Ancients",
      "Halt!",
      "Agility"
    ]
  },
  {
    "name": "Chaplain",
    "image": "",
    "imageHint": "Chaplain",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1079,
      "def": 892,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Holy Bolt",
      "Benediction",
      "Radiance"
    ]
  },
  {
    "name": "Chemist",
    "image": "",
    "imageHint": "Chemist",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1046,
      "def": 870,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Trick Saws",
      "Alchemic Stunner"
    ]
  },
  {
    "name": "Cheshire Cat",
    "image": "",
    "imageHint": "Cheshire",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1520,
      "def": 1035,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Phaseclaw",
      "Feline Frenzy",
      "Grinning Helix",
      "Shadowsmile [P]"
    ]
  },
  {
    "name": "Chevalier",
    "image": "",
    "imageHint": "Chevalier",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 804,
      "def": 1112,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 19%",
    "skillNames": [
      "Hack Through",
      "Stern Rebuke",
      "Lord Protector"
    ]
  },
  {
    "name": "Chonoru",
    "image": "",
    "imageHint": "Chonoru",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1509,
      "def": 958,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Night Blossom",
      "Reign of Fear",
      "Lay Bare"
    ]
  },
  {
    "name": "Chopper",
    "image": "",
    "imageHint": "Chopper",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1046,
      "def": 925,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 40",
    "skillNames": [
      "Staggering Hit",
      "Grapple",
      "Incapacitate"
    ]
  },
  {
    "name": "Chronicler Adelyn",
    "image": "",
    "imageHint": "Adelyn",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 1013,
      "def": 1255,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 60",
    "skillNames": [
      "Equivalent Exchange",
      "Healing Script",
      "Writ of Sleep",
      "Perceive Weakness [P]"
    ]
  },
  {
    "name": "Cillian the Lucky",
    "image": "",
    "imageHint": "Cillian_the_Lucky",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1432,
      "def": 1266,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 25%",
    "skillNames": [
      "Trip Up",
      "Inflict Misfortune",
      "Head Ringer",
      "Charmed Life [P]"
    ]
  },
  {
    "name": "Cinda Forgeheart",
    "image": "",
    "imageHint": "Cinda",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1707,
      "def": 1002,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 35%",
    "skillNames": [
      "Eruptive Blow",
      "Breaker Of Metals",
      "In Magma Clad",
      "Metamorph",
      "Furnace-Shell [P]"
    ]
  },
  {
    "name": "Cinda Forgeheart",
    "image": "",
    "imageHint": "Cinda",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1707,
      "def": 1002,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 35%",
    "skillNames": [
      "Hammerflame",
      "Burning Tempest",
      "Total Incineration",
      "Metamorph",
      "Fire Incarnate [P]"
    ]
  },
  {
    "name": "Claidna",
    "image": "",
    "imageHint": "Claidna",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21315,
      "atk": 804,
      "def": 1354,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 40%",
    "skillNames": [
      "Touch of Slumber",
      "Lost In The Woods",
      "Otherworld Infusion",
      "Fey Monarch [P]"
    ]
  },
  {
    "name": "Cleopterix",
    "image": "",
    "imageHint": "Cleopterix",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1531,
      "def": 1079,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Death Dive",
      "Feather Barrage",
      "Sky Punishment",
      "Countermand [P]"
    ]
  },
  {
    "name": "Coffin Smasher",
    "image": "",
    "imageHint": "Coffin-Smasher",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21135,
      "atk": 683,
      "def": 936,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mallet Crescendo",
      "Tombfire",
      "Gloom Mist [P]"
    ]
  },
  {
    "name": "Coldheart",
    "image": "",
    "imageHint": "Coldheart",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1376,
      "def": 738,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Flurry of Arrows",
      "Art of Pain",
      "Heartseeker"
    ]
  },
  {
    "name": "Commander",
    "image": "",
    "imageHint": "Commander",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 936,
      "def": 771,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Holy Fire",
      "Quickheal"
    ]
  },
  {
    "name": "Conellia",
    "image": "",
    "imageHint": "Conellia",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 826,
      "def": 1167,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battle by 18%",
    "skillNames": [
      "Surprising Swiftness",
      "Peace of the Deep",
      "Revitalizing Rest"
    ]
  },
  {
    "name": "Confessor",
    "image": "",
    "imageHint": "Confessor",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12060,
      "atk": 1409,
      "def": 815,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Dungeons by 16%",
    "skillNames": [
      "Stern Judgment",
      "Blinding Light",
      "Unyielding Fervor"
    ]
  },
  {
    "name": "Conquerer",
    "image": "",
    "imageHint": "Conquerer",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1421,
      "def": 793,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 18%",
    "skillNames": [
      "Swift Blow",
      "Cut Down To Size",
      "Purge"
    ]
  },
  {
    "name": "Conscript",
    "image": "",
    "imageHint": "Conscript",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11565,
      "atk": 1156,
      "def": 826,
      "spd": 86,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Peasant's Bow",
      "Fusillade"
    ]
  },
  {
    "name": "Cormac the Highpeak",
    "image": "",
    "imageHint": "Cormac",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1509,
      "def": 826,
      "spd": 94,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 20%",
    "skillNames": [
      "Drover",
      "Highpeak's Reach",
      "Tempo Shift"
    ]
  },
  {
    "name": "Corpse Collector",
    "image": "",
    "imageHint": "Corpse-Collector",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1167,
      "def": 991,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 40",
    "skillNames": [
      "Insidious Parasite",
      "Hailfire",
      "Noxious Escape"
    ]
  },
  {
    "name": "Corpulent Cadaver",
    "image": "",
    "imageHint": "Corpulent-Cadaver",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 617,
      "def": 1035,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 15%",
    "skillNames": [
      "Crushing Mass",
      "Disgusting Display",
      "Baleful Tenacity"
    ]
  },
  {
    "name": "Corvis the Corruptor",
    "image": "",
    "imageHint": "Corvis",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 903,
      "def": 1398,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "Reductive Process",
      "Medical Miracle",
      "Field Research",
      "Curious Draught [P]"
    ]
  },
  {
    "name": "Countess Lix",
    "image": "",
    "imageHint": "Lix",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1498,
      "def": 936,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Festering Caress",
      "Mire of Misery",
      "Time Dilation",
      "Unredeemed [P]",
      "Channel Woe [P]"
    ]
  },
  {
    "name": "Courtier",
    "image": "",
    "imageHint": "Courtier",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1277,
      "def": 903,
      "spd": 92,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Outmaneuver",
      "Denigrate",
      "Whirling Blow"
    ]
  },
  {
    "name": "Craklin the Blackened",
    "image": "",
    "imageHint": "Craklin",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 903,
      "def": 1244,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sear The Meat",
      "Blisterblast",
      "Warbeat Rhythm",
      "House Special [P]"
    ]
  },
  {
    "name": "Crimson Helm",
    "image": "",
    "imageHint": "Crimson-Helm",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 727,
      "def": 1531,
      "spd": 85,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 33%",
    "skillNames": [
      "Sucker Punch",
      "Vile Tongue",
      "En Garde!"
    ]
  },
  {
    "name": "Crimson Pegason",
    "image": "",
    "imageHint": "Pegason",
    "faction": "Argonites",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 727,
      "def": 1013,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in all battles by 15%",
    "skillNames": [
      "Staggering Strike",
      "Stance of Steel",
      "Military Discipline [P]"
    ]
  },
  {
    "name": "Crimson Slayer",
    "image": "",
    "imageHint": "Crimson-Slayer",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1134,
      "def": 980,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 17%",
    "skillNames": [
      "Bring Silence",
      "Flowing Sword",
      "Copious Bleed"
    ]
  },
  {
    "name": "Criodan the Blue",
    "image": "",
    "imageHint": "Criodan",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 1090,
      "def": 1024,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Frostbark Blade",
      "Razor Hail",
      "Blessing of the Blue",
      "Snow Dancer [P]"
    ]
  },
  {
    "name": "Crohnam",
    "image": "",
    "imageHint": "Crohnam",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15195,
      "atk": 1564,
      "def": 1002,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 50",
    "skillNames": [
      "Djinn Swords",
      "Berserker's Delight",
      "Blazing Zephyr",
      "Simmering Anger [P]"
    ]
  },
  {
    "name": "Cromax Moonblood",
    "image": "",
    "imageHint": "Cromax",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18000,
      "atk": 958,
      "def": 1421,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Lunar Lance",
      "Moonlight Bonds",
      "Blood Moon",
      "Silver Fear [P]"
    ]
  },
  {
    "name": "Crossbowman",
    "image": "",
    "imageHint": "Crossbowman",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1167,
      "def": 936,
      "spd": 95,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Snap Shot",
      "Sharp Eye",
      "Blunted Arrow"
    ]
  },
  {
    "name": "Cruetraxa",
    "image": "",
    "imageHint": "Cruetraxa",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 1498,
      "def": 859,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 30%",
    "skillNames": [
      "Dire Perforation",
      "Curse of Writhing",
      "Rite of Rebirth [P]"
    ]
  },
  {
    "name": "Crusader",
    "image": "",
    "imageHint": "Crusader",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12390,
      "atk": 1123,
      "def": 804,
      "spd": 92,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hack",
      "Rally"
    ]
  },
  {
    "name": "Crusher",
    "image": "",
    "imageHint": "Crusher",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 870,
      "def": 925,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Scythe",
      "Savage Swipe"
    ]
  },
  {
    "name": "Crypt Witch",
    "image": "",
    "imageHint": "Crypt-Witch",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1421,
      "def": 892,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 20%",
    "skillNames": [
      "Fetid Steel",
      "Dismantle",
      "Not So Fast"
    ]
  },
  {
    "name": "Crypt-King Graal",
    "image": "",
    "imageHint": "Graal",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 1145,
      "def": 1145,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Brittleness Bane",
      "Death Fires",
      "Elemental Unity"
    ]
  },
  {
    "name": "Cudgeler",
    "image": "",
    "imageHint": "Cudgeler",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1178,
      "def": 903,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "The Harder They Fall",
      "Soften Them Up",
      "Furious Defense [P]"
    ]
  },
  {
    "name": "Cultist",
    "image": "",
    "imageHint": "Cultist",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12390,
      "atk": 1167,
      "def": 760,
      "spd": 84,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sickle",
      "Toxic Miasma"
    ]
  },
  {
    "name": "Cupidus",
    "image": "",
    "imageHint": "Cupidus",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1520,
      "def": 804,
      "spd": 107,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Heartbreaker",
      "Flames of Passion",
      "Flameout",
      "Punishing Partner [P]"
    ]
  },
  {
    "name": "Dagger",
    "image": "",
    "imageHint": "Dagger",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1387,
      "def": 793,
      "spd": 101,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 20%",
    "skillNames": [
      "Double Daggers",
      "Precision Sabotage",
      "Swordbreak Knife"
    ]
  },
  {
    "name": "Danag Skullreap",
    "image": "",
    "imageHint": "Danag",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1487,
      "def": 958,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shatter Confidence",
      "Bane of Elves",
      "Battle Flow",
      "Healthy Grudge [P]"
    ]
  },
  {
    "name": "Dark Athel",
    "image": "",
    "imageHint": "Dark-Athel",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1465,
      "def": 925,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 20%",
    "skillNames": [
      "Profane Glaive",
      "Blades of Blood",
      "Harvest of Despair"
    ]
  },
  {
    "name": "Dark Elhain",
    "image": "",
    "imageHint": "Dark-Elhain",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1365,
      "def": 804,
      "spd": 94,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Necrotic Bolt",
      "Death's Majesty",
      "Lethal Winter [P]",
      "Veins of Ice [P]"
    ]
  },
  {
    "name": "Dark Kael",
    "image": "",
    "imageHint": "Dark-Kael",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 14205,
      "atk": 1343,
      "def": 1013,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Weaver of Woes",
      "Binding Darkness",
      "Reality Acid",
      "Delerium [P]"
    ]
  },
  {
    "name": "Dawncaller Sabitha",
    "image": "",
    "imageHint": "Sabitha",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 837,
      "def": 1288,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Dawnspear",
      "Fortifying Ray",
      "Shimmer of Life",
      "Rising Fate [P]"
    ]
  },
  {
    "name": "Daywalker",
    "image": "",
    "imageHint": "Daywalker",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 925,
      "def": 1002,
      "spd": 91,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 21%",
    "skillNames": [
      "Grave's Grasp",
      "Unnatural Vigor",
      "Death Denied"
    ]
  },
  {
    "name": "Deacon Armstrong",
    "image": "",
    "imageHint": "Armstrong",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 947,
      "def": 1167,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Mace of Contempt",
      "Sweeping Retribution",
      "Time Compression"
    ]
  },
  {
    "name": "Dead Crusader",
    "image": "",
    "imageHint": "Dead-Crusader",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 826,
      "def": 1035,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Archaic Gladius",
      "Crypt Blight"
    ]
  },
  {
    "name": "Death Hound",
    "image": "",
    "imageHint": "Death-Hound",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10740,
      "atk": 914,
      "def": 573,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Neck Bite",
      "Gnaw"
    ]
  },
  {
    "name": "Deathchanter",
    "image": "",
    "imageHint": "Deathchanter",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 815,
      "def": 903,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Arena by 27%",
    "skillNames": [
      "Clobber",
      "Bully",
      "Bleed Out"
    ]
  },
  {
    "name": "Deathknight",
    "image": "",
    "imageHint": "Deathknight",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Common",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 551,
      "def": 749,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Decrepit Hatchet",
      "Payback [P]"
    ]
  },
  {
    "name": "Deathless",
    "image": "",
    "imageHint": "Deathless",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 881,
      "def": 1156,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 70",
    "skillNames": [
      "Grave Whispers",
      "Vile Insults",
      "Grim Revenge"
    ]
  },
  {
    "name": "Deephook Nagis",
    "image": "",
    "imageHint": "Nagis",
    "faction": "Argonites",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 892,
      "def": 1266,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all battles by 25%",
    "skillNames": [
      "Catching Prey",
      "Tidal Cleanse",
      "Sea Snake Surge",
      "Tritonean Might [P]"
    ]
  },
  {
    "name": "Defiled Sinner",
    "image": "",
    "imageHint": "Defiled-Sinner",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 1222,
      "def": 903,
      "spd": 94,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Murderer's Craft",
      "Ripe for Slaughter",
      "Corrosive Smog"
    ]
  },
  {
    "name": "Delaaja",
    "image": "",
    "imageHint": "Delaaja",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 760,
      "def": 1167,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 30%",
    "skillNames": [
      "Bath of Azoth",
      "Blades Dissolved",
      "Restorative Froth",
      "Instincts [P]"
    ]
  },
  {
    "name": "Deliana",
    "image": "",
    "imageHint": "Deliana",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 1002,
      "def": 1211,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 30
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in all Battles by 33%",
    "skillNames": [
      "Heart Stealer",
      "Withering Scorn",
      "Know Your Place",
      "Magnificent [P]"
    ]
  },
  {
    "name": "Delver",
    "image": "",
    "imageHint": "Delver",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1299,
      "def": 914,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 27%",
    "skillNames": [
      "Necrotic Toxin",
      "Mark for Death",
      "Finisher"
    ]
  },
  {
    "name": "Demytha",
    "image": "",
    "imageHint": "Demytha",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 749,
      "def": 1288,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 20%",
    "skillNames": [
      "Fires of Old",
      "Light of the Deep",
      "Channel the Bloodline"
    ]
  },
  {
    "name": "Denid",
    "image": "",
    "imageHint": "Denid",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 804,
      "def": 1222,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Skull Mangler",
      "Boomstick",
      "Pig-Headed [P]"
    ]
  },
  {
    "name": "Dervish",
    "image": "",
    "imageHint": "Dervish",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10080,
      "atk": 1112,
      "def": 969,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Flurry",
      "Sealing Arrow"
    ]
  },
  {
    "name": "Dhampir",
    "image": "",
    "imageHint": "Dhampir",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10410,
      "atk": 1068,
      "def": 991,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Deathblow",
      "Bloody Feast"
    ]
  },
  {
    "name": "Dhukk the Pierced",
    "image": "",
    "imageHint": "Dhukk",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 870,
      "def": 1376,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 31%",
    "skillNames": [
      "Mad Chopper",
      "Lunatic Outburst",
      "Shrieking Display"
    ]
  },
  {
    "name": "Diabolist",
    "image": "",
    "imageHint": "Diabolist",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 1002,
      "def": 782,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Torment",
      "Electric Storm",
      "Positive Charge"
    ]
  },
  {
    "name": "Diamant Coppercoin",
    "image": "",
    "imageHint": "Diamant",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 1145,
      "def": 1123,
      "spd": 112,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%",
    "skillNames": [
      "The Hand of Diamant",
      "Charitable Donation",
      "Protection Racket",
      "Kingpin [P]"
    ]
  },
  {
    "name": "Dilgol",
    "image": "",
    "imageHint": "Dilgol",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1046,
      "def": 947,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Crippler Round",
      "Shot Spray",
      "Big Game Hunter"
    ]
  },
  {
    "name": "Dirandil",
    "image": "",
    "imageHint": "Dirandil",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 1376,
      "def": 1068,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 15%",
    "skillNames": [
      "Brumal Razors",
      "Dispatch Them",
      "Royal Assassin"
    ]
  },
  {
    "name": "Djamarsa",
    "image": "",
    "imageHint": "Djamarsa",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 19320,
      "atk": 936,
      "def": 1079,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 20%",
    "skillNames": [
      "Night's Finger",
      "Radiant Moon",
      "Moonlit March",
      "Phasing [P]"
    ]
  },
  {
    "name": "Dolor Lorekeeper",
    "image": "",
    "imageHint": "Dolor",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 1035,
      "def": 870,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 15%",
    "skillNames": [
      "Banisher Axe",
      "Stern Punishment",
      "Forebear's Boon"
    ]
  },
  {
    "name": "Donatello",
    "image": "",
    "imageHint": "Donnie",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 21810,
      "atk": 1013,
      "def": 1112,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 30%",
    "skillNames": [
      "Bo-dacious Bash",
      "Shellshocker",
      "Secret of the Ooze",
      "I Got You Bro! [P]"
    ]
  },
  {
    "name": "Doompriest",
    "image": "",
    "imageHint": "Doompriest",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 980,
      "def": 1035,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Force Ally SPD in All Battles by 15%",
    "skillNames": [
      "Fate Weave",
      "Mass Possession",
      "Bolster [P]"
    ]
  },
  {
    "name": "Doomscreech",
    "image": "",
    "imageHint": "Doomscreech",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20310,
      "atk": 925,
      "def": 749,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 21%",
    "skillNames": [
      "Scrabbling Claws",
      "Warning Screech",
      "Shelter"
    ]
  },
  {
    "name": "Dracomorph",
    "image": "",
    "imageHint": "Dracomorph",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1520,
      "def": 1046,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 50",
    "skillNames": [
      "Seeping Pain",
      "Poison Jaws",
      "Baleful Eye"
    ]
  },
  {
    "name": "Draconis",
    "image": "",
    "imageHint": "Draconis",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 914,
      "def": 925,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Beneficence",
      "Sacred Wards",
      "Order of Mercy"
    ]
  },
  {
    "name": "Drake",
    "image": "",
    "imageHint": "Drake",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1487,
      "def": 881,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 30%",
    "skillNames": [
      "Death from Above",
      "Final Blow",
      "Decimate"
    ]
  },
  {
    "name": "Drexthar Bloodtwin",
    "image": "",
    "imageHint": "Drexthar",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 914,
      "def": 1398,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Eldritch Flames",
      "Burning Lash",
      "Fiery Blood [P]"
    ]
  },
  {
    "name": "Drillmaster",
    "image": "",
    "imageHint": "Drillmaster",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10575,
      "atk": 1255,
      "def": 793,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Piercing Shot",
      "Double Tap"
    ]
  },
  {
    "name": "Drokgul the Gaunt",
    "image": "",
    "imageHint": "Drokgul",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22965,
      "atk": 991,
      "def": 1057,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Bonebreak Boulder",
      "Eldritch Ground",
      "Runestone Blessing"
    ]
  },
  {
    "name": "Drowned Bloatwraith",
    "image": "",
    "imageHint": "Bloatwraith",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1387,
      "def": 738,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Anchor Hook",
      "Wretched Stench",
      "Death Feast [P]"
    ]
  },
  {
    "name": "Duchess Lilitu",
    "image": "",
    "imageHint": "Lilitu",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22470,
      "atk": 793,
      "def": 1288,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Abyssal Invocation",
      "Shroud of Souls",
      "Spectral Rebirth",
      "Ethereal Ways [P]"
    ]
  },
  {
    "name": "Duedan the Runic",
    "image": "",
    "imageHint": "Duedan",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19815,
      "atk": 826,
      "def": 1156,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 20%",
    "skillNames": [
      "Lodestone Claw",
      "Protector Effigy",
      "Lure of Fools"
    ]
  },
  {
    "name": "Duelist",
    "image": "",
    "imageHint": "Duelist",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11400,
      "atk": 1200,
      "def": 793,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Elan",
      "Stunning Slice"
    ]
  },
  {
    "name": "Duhr the Hungerer",
    "image": "",
    "imageHint": "Duhr",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1068,
      "def": 1068,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 30%",
    "skillNames": [
      "Odious Bulk",
      "Cannibal Litany",
      "Hungry for More"
    ]
  },
  {
    "name": "Dune Herald Zaharis",
    "image": "",
    "imageHint": "Zaharis",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 1035,
      "def": 1112,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%",
    "skillNames": [
      "Hawkstrike",
      "The Herald Speaks",
      "Booming Voice",
      "Wings of Victory [P]"
    ]
  },
  {
    "name": "Dune Lord Greggor",
    "image": "",
    "imageHint": "Greggor",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 19485,
      "atk": 793,
      "def": 1487,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "FAC-DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%\n\n[Barbarians only]\n\nIncreases Ally ACC in All Battles by 40",
    "skillNames": [
      "Desert Ax",
      "Earthcleave",
      "Bestial Yell",
      "Desert Monolith [P]"
    ]
  },
  {
    "name": "Dunestrider",
    "image": "",
    "imageHint": "Dunestrider",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1354,
      "def": 683,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Desert Wind",
      "Nomad's Stride",
      "Harsh Mercy"
    ]
  },
  {
    "name": "Dyana Gloompiercer",
    "image": "",
    "imageHint": "Dyana",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1421,
      "def": 848,
      "spd": 104,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 20%",
    "skillNames": [
      "Firefly Hatchet",
      "Moonlight Ambuscade",
      "Covert Blitz",
      "Gloompiercer [P]"
    ]
  },
  {
    "name": "Edward Kenway",
    "image": "",
    "imageHint": "Edward",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15195,
      "atk": 1575,
      "def": 991,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Privateer Blitz",
      "Fan The Hammer",
      "Between The Eyes",
      "Everything is Permitted [P]",
      "Keelhaul [P]"
    ]
  },
  {
    "name": "Elder",
    "image": "",
    "imageHint": "Elder",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 914,
      "def": 1123,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mocking Blow",
      "Intercede",
      "Take Vengeance"
    ]
  },
  {
    "name": "Elder Skarg",
    "image": "",
    "imageHint": "Skarg",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 1630,
      "def": 870,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 30%",
    "skillNames": [
      "Tide of Steel",
      "Hunt the Marked",
      "Elder's Clarion",
      "Kingslayer [P]"
    ]
  },
  {
    "name": "Elegaius",
    "image": "",
    "imageHint": "Elegaius",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 881,
      "def": 1211,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Spirits of Spite",
      "Dead Stop",
      "Ghost Rage",
      "Spurned by Death [P]"
    ]
  },
  {
    "name": "Elenaril",
    "image": "",
    "imageHint": "Elenaril",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1387,
      "def": 1222,
      "spd": 96,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Faction Wars by 24%",
    "skillNames": [
      "Searing Rebuke",
      "Smolder",
      "Combust"
    ]
  },
  {
    "name": "Elfguard",
    "image": "",
    "imageHint": "Elfguard",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1156,
      "def": 716,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Puncture",
      "Impale"
    ]
  },
  {
    "name": "Elhain",
    "image": "",
    "imageHint": "Elhain",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1233,
      "def": 837,
      "spd": 107,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "\nIncreases Ally HP in all Battles by 15%",
    "skillNames": [
      "Keen Shot",
      "Lightning Arrow",
      "Valley of Death"
    ]
  },
  {
    "name": "Elva Autumnborn",
    "image": "",
    "imageHint": "Elva",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 936,
      "def": 1332,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Scepter of Thriving",
      "Nature's Paths",
      "Sprouting Season",
      "Leaf Shroud [P]"
    ]
  },
  {
    "name": "Embrys The Anomaly",
    "image": "",
    "imageHint": "Embrys",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 22140,
      "atk": 1101,
      "def": 1277,
      "spd": 111,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Fetid Glaive",
      "Voidstare",
      "The Unmaking",
      "Metamorph",
      "Wrongful Existence [P]"
    ]
  },
  {
    "name": "Embrys The Anomaly",
    "image": "",
    "imageHint": "Embrys",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 24615,
      "atk": 991,
      "def": 1222,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Unmaker's Blade",
      "Atomize",
      "Your Life Is Forfeit!",
      "Metamorph",
      "Degenerator [P]"
    ]
  },
  {
    "name": "Emic Trunkheart",
    "image": "",
    "imageHint": "Emic",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23130,
      "atk": 848,
      "def": 1189,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 30%",
    "skillNames": [
      "Earthroot Tendril",
      "Vinequake",
      "Trunkheart's Sanctuary",
      "Entanglement [P]"
    ]
  },
  {
    "name": "Enda Moonbeam",
    "image": "",
    "imageHint": "Enda",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1476,
      "def": 892,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Silvern Slash",
      "Glimmer",
      "Chain of Delusion",
      "Lunar Cycle [P]"
    ]
  },
  {
    "name": "Endalia",
    "image": "",
    "imageHint": "Endalia",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 749,
      "def": 1189,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 40",
    "skillNames": [
      "Flash of Gilt",
      "Elegant Disarm",
      "Outplayed [P]"
    ]
  },
  {
    "name": "Eolfrig",
    "image": "",
    "imageHint": "Eolfrig",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 1233,
      "def": 991,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 15%",
    "skillNames": [
      "Abase",
      "Flow of Morale",
      "Committed Offensive",
      "Perdurable [P]"
    ]
  },
  {
    "name": "Eostrid Dreamsong",
    "image": "",
    "imageHint": "Eostrid",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21135,
      "atk": 1035,
      "def": 1134,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Slumberwisp",
      "Burst of Spring",
      "Blessed Dreamsong",
      "Lifebloom [P]"
    ]
  },
  {
    "name": "Erinyes",
    "image": "",
    "imageHint": "Erinyes",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1553,
      "def": 881,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 70",
    "skillNames": [
      "Razor Claws",
      "Almighty Curse",
      "Engulfing Flame"
    ]
  },
  {
    "name": "Errol",
    "image": "",
    "imageHint": "Errol",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1674,
      "def": 837,
      "spd": 104,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 28%",
    "skillNames": [
      "Blazing Sword",
      "Helmbreaker",
      "Negation"
    ]
  },
  {
    "name": "Esme the Dancer",
    "image": "",
    "imageHint": "Esme",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1090,
      "def": 1277,
      "spd": 113,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Blade Juggler",
      "Earthdancer",
      "Blessing of the Sands",
      "Beguiling Moves [P]"
    ]
  },
  {
    "name": "Ethlen the Golden",
    "image": "",
    "imageHint": "Ethlen",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1432,
      "def": 991,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 40",
    "skillNames": [
      "Protective Cleave",
      "Paralyzing Stakes",
      "Glimmering Gold",
      "Strike at the Heart [P]"
    ]
  },
  {
    "name": "Eviscerator",
    "image": "",
    "imageHint": "Eviscerator",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12060,
      "atk": 1409,
      "def": 815,
      "spd": 95,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 16%",
    "skillNames": [
      "Bleed Dry",
      "Lethal Confusion",
      "Suppression [P]"
    ]
  },
  {
    "name": "Excruciator",
    "image": "",
    "imageHint": "Excruciator",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1597,
      "def": 859,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Flicker Strike",
      "Neck Snapper",
      "Invisible Predator [P]"
    ]
  },
  {
    "name": "Executioner",
    "image": "",
    "imageHint": "Executioner",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 782,
      "def": 1255,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 17%",
    "skillNames": [
      "Shield Bash",
      "Tumult",
      "Schiltron"
    ]
  },
  {
    "name": "Exemplar",
    "image": "",
    "imageHint": "Exemplar",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1509,
      "def": 892,
      "spd": 94,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "\nIncreases Ally C.RATE in Arena by 27%",
    "skillNames": [
      "High Stance",
      "Pincer Attack",
      "Capture"
    ]
  },
  {
    "name": "Ezio Auditore",
    "image": "",
    "imageHint": "Ezio",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 16020,
      "atk": 1498,
      "def": 1013,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all battles by 19%",
    "skillNames": [
      "Eagle Dive",
      "Da Vinci's Design",
      "Hidden Gun",
      "Everything is Permitted [P]",
      "Full Synchronization [P]"
    ]
  },
  {
    "name": "Faceless",
    "image": "",
    "imageHint": "Faceless",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1398,
      "def": 738,
      "spd": 101,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 21%",
    "skillNames": [
      "Fireball",
      "Lightning",
      "Ice Bolt"
    ]
  },
  {
    "name": "Fahrakin the Fat",
    "image": "",
    "imageHint": "Fahrakin",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1244,
      "def": 1090,
      "spd": 100,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sizzling Strike",
      "Brand of Shame",
      "Beatdown",
      "Body Block [P]"
    ]
  },
  {
    "name": "Falmond Mournsword",
    "image": "",
    "imageHint": "Falmond",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 14535,
      "atk": 1564,
      "def": 1046,
      "spd": 95,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "FAC-ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%\n\n[Sacred Order only]\n\nIncreases Ally C.RATE in all battles by 15%",
    "skillNames": [
      "Mournsword",
      "In Lumaya's Name",
      "Burning Courage",
      "Til My Last Breath [P]"
    ]
  },
  {
    "name": "Fanatic",
    "image": "",
    "imageHint": "Fanatic",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1013,
      "def": 1024,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Devil Hunt",
      "Cursebearer",
      "Rallying Cry"
    ]
  },
  {
    "name": "Fang Cleric",
    "image": "",
    "imageHint": "Fang-Cleric",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 903,
      "def": 1178,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 15%",
    "skillNames": [
      "Conduit Fangs",
      "Shadowy Blessings",
      "Return to the Ranks"
    ]
  },
  {
    "name": "Fatalis Blademaster",
    "image": "",
    "imageHint": "Fatalis",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 23130,
      "atk": 782,
      "def": 1255,
      "spd": 104,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Arena by 35%",
    "skillNames": [
      "Charged Slash",
      "Wide Slash",
      "Strong Wide Slash",
      "True Charged Slash",
      "Fatalis Legend [P]"
    ]
  },
  {
    "name": "Fayne",
    "image": "",
    "imageHint": "Fayne",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1663,
      "def": 727,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Exotic Blades",
      "Flower's Tears",
      "Flowing Style"
    ]
  },
  {
    "name": "Fellhound",
    "image": "",
    "imageHint": "Fellhound",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 958,
      "def": 1079,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 19%",
    "skillNames": [
      "Ravage",
      "Flameborn Vigor",
      "Deflect"
    ]
  },
  {
    "name": "Fenax",
    "image": "",
    "imageHint": "Fenax",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1454,
      "def": 925,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Put Down",
      "Stern Partner",
      "Sow Feebleness"
    ]
  },
  {
    "name": "Fencer",
    "image": "",
    "imageHint": "Fencer",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1211,
      "def": 793,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 23%",
    "skillNames": [
      "Enchanted Rapier",
      "Pommel Strike",
      "Blade Flourish"
    ]
  },
  {
    "name": "Fenshi",
    "image": "",
    "imageHint": "Fenshi",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1465,
      "def": 738,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hate Blades",
      "Nowhere to Run",
      "Killer's Bile"
    ]
  },
  {
    "name": "Fireblade",
    "image": "",
    "imageHint": "Fireblade",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10080,
      "atk": 1178,
      "def": 903,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Burning Spear",
      "Path of Flame"
    ]
  },
  {
    "name": "Firrol the Barkhorn",
    "image": "",
    "imageHint": "Firrol",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 859,
      "def": 1498,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 60",
    "skillNames": [
      "Clobbertrunk",
      "Boreal Growth",
      "Aurora Cloak",
      "Spirit of the North [P]"
    ]
  },
  {
    "name": "First Ax Tuskkor",
    "image": "",
    "imageHint": "Tuskkor",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1476,
      "def": 1101,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Foe Mangler",
      "Hatchet Barrage",
      "First Ax's Fury",
      "Brutal Vehemence [P]"
    ]
  },
  {
    "name": "Fjorad Wolfheart",
    "image": "",
    "imageHint": "Fjorad",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 1068,
      "def": 1277,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Bite of the Wolf",
      "Great Captain",
      "Wolfheart's Rage",
      "Metamorph",
      "Best Served Cold [P]"
    ]
  },
  {
    "name": "Fjorad Wolfheart",
    "image": "",
    "imageHint": "Fjorad",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 925,
      "def": 1421,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Rimecleave",
      "Icequake",
      "Disciple of Tormin",
      "Metamorph",
      "Frosty Resolve [P]"
    ]
  },
  {
    "name": "Flailer",
    "image": "",
    "imageHint": "Flailer",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 958,
      "def": 1035,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 17%",
    "skillNames": [
      "Tangle Bash",
      "Noble Stand",
      "Fury Swipe"
    ]
  },
  {
    "name": "Flesh-Tearer",
    "image": "",
    "imageHint": "Flesh-Tearer",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 991,
      "def": 1079,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 27%",
    "skillNames": [
      "Multiply Misery",
      "Warleader",
      "Lay Low"
    ]
  },
  {
    "name": "Flesheater",
    "image": "",
    "imageHint": "Flesheater",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1024,
      "def": 1035,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 22%",
    "skillNames": [
      "Freeze the Blood",
      "Tenderize",
      "Gruesome Nourishment"
    ]
  },
  {
    "name": "Fleshmonger",
    "image": "",
    "imageHint": "Fleshmonger",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1288,
      "def": 870,
      "spd": 92,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 23%",
    "skillNames": [
      "Thorough Butchery",
      "Fresh Meat",
      "Tornado Cleaver"
    ]
  },
  {
    "name": "Flinger",
    "image": "",
    "imageHint": "Flinger",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1266,
      "def": 892,
      "spd": 104,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Wars by 30",
    "skillNames": [
      "Axe Throw",
      "Meteor",
      "Burn"
    ]
  },
  {
    "name": "Fodbor the Bard",
    "image": "",
    "imageHint": "Fodbor",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1454,
      "def": 826,
      "spd": 100,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Axe Solo",
      "Robber's Tale",
      "Awful Crooning"
    ]
  },
  {
    "name": "Foli",
    "image": "",
    "imageHint": "Foli",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1476,
      "def": 1101,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Marked for Destruction",
      "Biodisruptor",
      "Sealed Fate",
      "Living Armor [P]"
    ]
  },
  {
    "name": "Fortress Goon",
    "image": "",
    "imageHint": "Goon",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 859,
      "def": 1134,
      "spd": 90,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 23%",
    "skillNames": [
      "Cruel Trap",
      "Devastating Wounds",
      "Mobile Fort"
    ]
  },
  {
    "name": "Fortus",
    "image": "",
    "imageHint": "Fortus",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 859,
      "def": 1387,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 25%",
    "skillNames": [
      "Taste of Oblivion",
      "Horrors Beyond",
      "Astral Terrors",
      "Stars Align [P]"
    ]
  },
  {
    "name": "Fren'zi the Cackler",
    "image": "",
    "imageHint": "Frenzi",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 749,
      "def": 1443,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 30%",
    "skillNames": [
      "Searing Hack",
      "Jaws of Flame",
      "Vexatious Cackle",
      "Broiling Bulwark [P]"
    ]
  },
  {
    "name": "Freyja Fateweaver",
    "image": "",
    "imageHint": "Freyja",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20310,
      "atk": 815,
      "def": 1409,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "Heittspear",
      "Prismatic Aegis",
      "Goldweave",
      "Divine Foresight [P]"
    ]
  },
  {
    "name": "Frolni the Mechanist",
    "image": "",
    "imageHint": "Frolni",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 980,
      "def": 1387,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Seismic Quake",
      "Bloody Larceny",
      "Exterminate the Weak",
      "Metamorph",
      "Limitless Science [P]"
    ]
  },
  {
    "name": "Frolni the Mechanist",
    "image": "",
    "imageHint": "Frolni",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 837,
      "def": 1553,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Arcs of Pain",
      "Pulverizing Procedure",
      "Engine of War",
      "Metamorph",
      "Ensorcelled Plate [P]"
    ]
  },
  {
    "name": "Frontline Warrior",
    "image": "",
    "imageHint": "Frontline-Warrior",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 595,
      "def": 1299,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Wrath Hew",
      "Comrades in Arms"
    ]
  },
  {
    "name": "Frostbringer",
    "image": "",
    "imageHint": "Frostbringer",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20310,
      "atk": 870,
      "def": 1079,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 33%",
    "skillNames": [
      "Cones of Cold",
      "Snow Flurry",
      "Arctic Winds"
    ]
  },
  {
    "name": "Frostskin",
    "image": "",
    "imageHint": "Frostskin",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1046,
      "def": 716,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Frozen Fists",
      "Sap Strength"
    ]
  },
  {
    "name": "Frozen Banshee",
    "image": "",
    "imageHint": "Frozen-Banshee",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1046,
      "def": 1002,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 35",
    "skillNames": [
      "Death's Caress",
      "Cruel Exultation",
      "Frost Blight"
    ]
  },
  {
    "name": "Fu-Shan",
    "image": "",
    "imageHint": "Fu-Shan",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1443,
      "def": 1024,
      "spd": 106,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 24%",
    "skillNames": [
      "Howl",
      "Frightful Claws",
      "Shred"
    ]
  },
  {
    "name": "Furystoker",
    "image": "",
    "imageHint": "Furystoker",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1024,
      "def": 1013,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Crush",
      "Remedy",
      "Forest Kin [P]"
    ]
  },
  {
    "name": "Fylja",
    "image": "",
    "imageHint": "Fylja",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1310,
      "def": 1024,
      "spd": 104,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Elders' Judgment",
      "Crushing Eternity",
      "Righteous Evocation",
      "Boonchant [P]"
    ]
  },
  {
    "name": "Fyna, Blade of Aravia",
    "image": "",
    "imageHint": "Fyna",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18660,
      "atk": 1123,
      "def": 1211,
      "spd": 113,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "FAC-SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%\n\n[High Elves only]\n\nIncreases Ally C.RATE in All Battles by 15%",
    "skillNames": [
      "Sword Through Time",
      "You Will Not Falter!",
      "Exalted Lineage",
      "Lead From The Front [P]"
    ]
  },
  {
    "name": "Fyr-gun Isbeil",
    "image": "",
    "imageHint": "Isbeil",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1542,
      "def": 881,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Fyrshot",
      "Tracer Slugs",
      "Eruptive Volley",
      "Explosive Phoenix [P]"
    ]
  },
  {
    "name": "Gaellut, Son of the Pact",
    "image": "",
    "imageHint": "Gaellut",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23460,
      "atk": 914,
      "def": 1101,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Beheading Strike",
      "Gaellen Fury",
      "Blood Of The Pact",
      "Freedom Or Death [P]"
    ]
  },
  {
    "name": "Gaius the Gleeful",
    "image": "",
    "imageHint": "Gaius",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1586,
      "def": 980,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 25%",
    "skillNames": [
      "Chuckling Sickles",
      "Jester's Remedy",
      "Explosive Wit",
      "Mad Bomber [P]"
    ]
  },
  {
    "name": "Gala Longbraids",
    "image": "",
    "imageHint": "Gala",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1432,
      "def": 661,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 60,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 25%",
    "skillNames": [
      "Brutal Bludgeon",
      "Fearless Aggression",
      "Sheer Swagger"
    ]
  },
  {
    "name": "Galapo the Recluse",
    "image": "",
    "imageHint": "Galapo",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 881,
      "def": 1266,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Crypts by 45",
    "skillNames": [
      "Roll With The Times",
      "Reclusive Sage",
      "You've Much To Learn",
      "Outliver Of Empires [P]"
    ]
  },
  {
    "name": "Galek",
    "image": "",
    "imageHint": "Galek",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1200,
      "def": 914,
      "spd": 103,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 15%",
    "skillNames": [
      "Cross Slash",
      "Hellraiser",
      "Cursed Blade"
    ]
  },
  {
    "name": "Galkut",
    "image": "",
    "imageHint": "Galkut",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11400,
      "atk": 1321,
      "def": 1222,
      "spd": 91,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Dungeons by 24%",
    "skillNames": [
      "Mangle Limbs",
      "Brutal Battering",
      "Boom Barrage"
    ]
  },
  {
    "name": "Galleus Bloodcrest",
    "image": "",
    "imageHint": "Galleus",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22140,
      "atk": 881,
      "def": 1498,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 35%",
    "skillNames": [
      "Wing Clip",
      "Cutting Jibe",
      "Bloodcrest's Call",
      "Metamorph",
      "Rule the Roost [P]"
    ]
  },
  {
    "name": "Galleus Bloodcrest",
    "image": "",
    "imageHint": "Galleus",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22140,
      "atk": 881,
      "def": 1498,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 35%",
    "skillNames": [
      "Fulminous Screech",
      "Sundered Sky",
      "Sonic Torture",
      "Metamorph",
      "Unholy Experiment [P]"
    ]
  },
  {
    "name": "Gamuran",
    "image": "",
    "imageHint": "Gamuran",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 1002,
      "def": 1266,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Seal Scroll",
      "Thief of Blood",
      "Dread Invocation",
      "Soul Charge [P]"
    ]
  },
  {
    "name": "Gaspard the Accused",
    "image": "",
    "imageHint": "Gaspard",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 749,
      "def": 1597,
      "spd": 104,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "Links Of Death",
      "Wretched Guillotine",
      "You Stand Accused",
      "Fallen Legend [P]",
      "Master Wills It [P]"
    ]
  },
  {
    "name": "Gator",
    "image": "",
    "imageHint": "Gator",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 881,
      "def": 1046,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Magic Ally C.RATE in All Battles by 22%",
    "skillNames": [
      "Hex Smash",
      "Radiate Frenzy",
      "Defy the Witch"
    ]
  },
  {
    "name": "Geargrinder",
    "image": "",
    "imageHint": "Geargrinder",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 826,
      "def": 914,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 25%",
    "skillNames": [
      "Gears of Gore",
      "Healing Splatter",
      "Necrocogs"
    ]
  },
  {
    "name": "Genbo the Dishonored",
    "image": "",
    "imageHint": "Genbo",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1409,
      "def": 958,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 20%",
    "skillNames": [
      "Twin Soulswords",
      "Heartless Blitz",
      "Sword Trance",
      "Flinty [P]"
    ]
  },
  {
    "name": "Genzin",
    "image": "",
    "imageHint": "Genzin",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1553,
      "def": 859,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Flowing Cuts",
      "Steel Parting",
      "Fated Vengeance",
      "Bushido [P]"
    ]
  },
  {
    "name": "Geomancer",
    "image": "",
    "imageHint": "Geomancer",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1343,
      "def": 925,
      "spd": 94,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Tremor Staff",
      "Creeping Petrify",
      "Quicksand Grasp",
      "Stoneguard [P]"
    ]
  },
  {
    "name": "Georgid the Breaker",
    "image": "",
    "imageHint": "Georgid",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1608,
      "def": 1057,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Breaker Suite",
      "March of Tin",
      "Deadly Ballet",
      "Crack Any Shell [P]"
    ]
  },
  {
    "name": "Gerhard the Stone",
    "image": "",
    "imageHint": "Gerhard",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1387,
      "def": 1079,
      "spd": 101,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Doom Tower by 50",
    "skillNames": [
      "Ringing Blow",
      "Show of Valor",
      "Exemplar [P]"
    ]
  },
  {
    "name": "Gharol Bloodmaul",
    "image": "",
    "imageHint": "Gharol",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23955,
      "atk": 958,
      "def": 1299,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Foecrusher",
      "Hammerquake",
      "Bonded by Blood",
      "Metamorph",
      "Kill or Cure [P]"
    ]
  },
  {
    "name": "Gharol Bloodmaul",
    "image": "",
    "imageHint": "Gharol",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1608,
      "def": 1178,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Magma Slam",
      "Calamitous Maul",
      "Metamorph",
      "Cornered Animal",
      "Crimson Haze [P]"
    ]
  },
  {
    "name": "Ghomm Yellowhand",
    "image": "",
    "imageHint": "Ghomm",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1167,
      "def": 991,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 25%",
    "skillNames": [
      "Bone Club Bash",
      "Unspoken Bonds",
      "Yellowhand Clobber",
      "Pastoral Protector [P]"
    ]
  },
  {
    "name": "Ghostborn",
    "image": "",
    "imageHint": "Ghostborn",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1211,
      "def": 1112,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 65",
    "skillNames": [
      "Energy Bolt",
      "Petrify",
      "Ancestral Spirits"
    ]
  },
  {
    "name": "Ghoulish Ranger",
    "image": "",
    "imageHint": "Ghoulish-Ranger",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12390,
      "atk": 1443,
      "def": 760,
      "spd": 95,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Numbing Arrows",
      "Foul Festering",
      "Cryptfire"
    ]
  },
  {
    "name": "Ghrush the Mangler",
    "image": "",
    "imageHint": "Ghrush",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 694,
      "def": 1321,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 30%",
    "skillNames": [
      "Gore-Slick Maul",
      "Bonebreaker Stomp",
      "Smothering Swath"
    ]
  },
  {
    "name": "Giath the Truthshield",
    "image": "",
    "imageHint": "Giath",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 925,
      "def": 1421,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%",
    "skillNames": [
      "Revelation Spear",
      "Truth Beheld",
      "Censer Barrier",
      "Maw of Deterrence [P]"
    ]
  },
  {
    "name": "Ginro the Stork",
    "image": "",
    "imageHint": "Ginro",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18825,
      "atk": 936,
      "def": 1387,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 80",
    "skillNames": [
      "Plunging Beak",
      "Befuddle",
      "Gatewatch Stance",
      "Laughing Gull [P]"
    ]
  },
  {
    "name": "Giscard the Sigiled",
    "image": "",
    "imageHint": "Giscard",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 683,
      "def": 1454,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 27%",
    "skillNames": [
      "Foebreaker",
      "Lion's Roar",
      "Field of Strength",
      "Egotist [P]"
    ]
  },
  {
    "name": "Gizmak The Terrible",
    "image": "",
    "imageHint": "Gizmak",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22800,
      "atk": 991,
      "def": 1343,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 27%",
    "skillNames": [
      "Magma Hurl",
      "Flames of Resentment",
      "Let Me At 'Em!",
      "Metamorph",
      "Spark of Anger [P]"
    ]
  },
  {
    "name": "Gizmak The Terrible",
    "image": "",
    "imageHint": "Gizmak",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 24780,
      "atk": 738,
      "def": 1465,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 27%",
    "skillNames": [
      "Totemic Vengeance",
      "KABOOM!",
      "Ungodly Fury",
      "Metamorph",
      "Burning Juggernaut [P]"
    ]
  },
  {
    "name": "Gladewulf",
    "image": "",
    "imageHint": "Gladewulf",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1057,
      "def": 914,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Phantom Pack",
      "Ghostly Roots",
      "Arooo!",
      "Safety in Numbers [P]"
    ]
  },
  {
    "name": "Gladiator",
    "image": "",
    "imageHint": "Gladiator",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1156,
      "def": 936,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Cleaving Axe",
      "Capital Punishment",
      "Torture"
    ]
  },
  {
    "name": "Glaicad of the Meltwater",
    "image": "",
    "imageHint": "Glaicad",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 782,
      "def": 1365,
      "spd": 112,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Boreal Bolt",
      "Meltwater Cloak",
      "Lifestream",
      "Thaw-might [P]"
    ]
  },
  {
    "name": "Glensage Cithrel",
    "image": "",
    "imageHint": "Cithrel",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1057,
      "def": 914,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Head Crack",
      "Woundspiller Herbs",
      "Grace of the Glen"
    ]
  },
  {
    "name": "Glenspear",
    "image": "",
    "imageHint": "Glenspear",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 716,
      "def": 1233,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Spear Crescent",
      "Sapping Spear"
    ]
  },
  {
    "name": "Gliseah Soulguide",
    "image": "",
    "imageHint": "Gliseah",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 826,
      "def": 1509,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 60",
    "skillNames": [
      "Glittering Slash",
      "Breath of Rime",
      "Everwinter",
      "Timeless [P]"
    ]
  },
  {
    "name": "Gloril Brutebane",
    "image": "",
    "imageHint": "Gloril",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 1244,
      "def": 705,
      "spd": 90,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 30",
    "skillNames": [
      "Scale Hacker",
      "Prey Acquired",
      "Heroic Company"
    ]
  },
  {
    "name": "Glorious Pallas",
    "image": "",
    "imageHint": "Pallas",
    "faction": "Argonites",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21810,
      "atk": 826,
      "def": 1299,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in all battles by 50",
    "skillNames": [
      "Spear of Serenity",
      "Gift of Thalass",
      "Glorious Revival",
      "Shield of the Argolades [P]"
    ]
  },
  {
    "name": "Gnarlhorn",
    "image": "",
    "imageHint": "Gnarlhorn",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 958,
      "def": 936,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 27%",
    "skillNames": [
      "Ram",
      "War Drum",
      "Determined"
    ]
  },
  {
    "name": "Gnarox Blackhorn",
    "image": "",
    "imageHint": "Gnarox",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 749,
      "def": 1387,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 30%",
    "skillNames": [
      "Knee-Smasher",
      "Means To An End",
      "Bullish Fighter",
      "Loathed Pariah [P]"
    ]
  },
  {
    "name": "Gnishak Verminlord",
    "image": "",
    "imageHint": "Gnishak",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1365,
      "def": 1068,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Pestilent Censer",
      "Verminlord's Command",
      "Unclean Banquet",
      "Rat Plague [P]"
    ]
  },
  {
    "name": "Gnut",
    "image": "",
    "imageHint": "Gnut",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 749,
      "def": 1520,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 80",
    "skillNames": [
      "Dwarven Might",
      "Fury of the King",
      "Blessed Bash",
      "No Holding Back [P]"
    ]
  },
  {
    "name": "Godseeker Aniri",
    "image": "",
    "imageHint": "Aniri",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1046,
      "def": 1244,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Blade of Blessings",
      "Quest For Meaning",
      "Rise of Glory",
      "Guardian Angel [P]"
    ]
  },
  {
    "name": "Goffred Brassclad",
    "image": "",
    "imageHint": "Goffred",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 848,
      "def": 1432,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mete Punishment",
      "Concuss",
      "Vow of the Dwarves",
      "Brass Clad [P]"
    ]
  },
  {
    "name": "Golden Reaper",
    "image": "",
    "imageHint": "Golden-Reaper",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 1134,
      "def": 936,
      "spd": 111,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 40",
    "skillNames": [
      "Harvest of Blood",
      "Maelstrom",
      "Alacrity"
    ]
  },
  {
    "name": "Gomlok Skyhide",
    "image": "",
    "imageHint": "Gomlok",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 19650,
      "atk": 1233,
      "def": 1035,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Soulsuck Tendrils",
      "Fateful Trickster",
      "Wild Surge",
      "Enchanter [P]"
    ]
  },
  {
    "name": "Goremask",
    "image": "",
    "imageHint": "Goremask",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1509,
      "def": 705,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Arena by 25%",
    "skillNames": [
      "Snap",
      "Go for the Throat",
      "Tearing Jaws"
    ]
  },
  {
    "name": "Gorgorab",
    "image": "",
    "imageHint": "Gorgorab",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 1057,
      "def": 1068,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 23%",
    "skillNames": [
      "Misfortune",
      "Resurge",
      "Animate"
    ]
  },
  {
    "name": "Gorlos Hellmaw",
    "image": "",
    "imageHint": "Gorlos",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1354,
      "def": 1101,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Doom Tower by 30%",
    "skillNames": [
      "Hungry Shafts",
      "Raging Hunger",
      "Gnashing Fangs"
    ]
  },
  {
    "name": "Gory",
    "image": "",
    "imageHint": "Gory",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1476,
      "def": 859,
      "spd": 90,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Cold Comfort",
      "Frost Jutsu",
      "Frost Breaker",
      "Dignity [P]"
    ]
  },
  {
    "name": "Graazur Irongut",
    "image": "",
    "imageHint": "Graazur",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 1013,
      "def": 1321,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "Defend The Wall!",
      "Healing Bombardment",
      "Let None Pass!",
      "This Wall Won't Fall! [P]"
    ]
  },
  {
    "name": "Gracchos Turn-drake",
    "image": "",
    "imageHint": "Gracchos",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 826,
      "def": 1244,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 28%",
    "skillNames": [
      "Chaff-Reaper",
      "Culler of the Weak",
      "Dragonkin Warcry",
      "Ferocious Ambition [P]"
    ]
  },
  {
    "name": "Grand Oak Padraig",
    "image": "",
    "imageHint": "Padraig",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 1200,
      "def": 1200,
      "spd": 112,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 25%",
    "skillNames": [
      "Snakeroot",
      "Wyrd Spores",
      "Inspiring Rhythm",
      "Grand Oak's Magick [P]"
    ]
  },
  {
    "name": "Grandmaster",
    "image": "",
    "imageHint": "Grandmaster",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 892,
      "def": 1057,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Magic Ally HP in all Battles by 17%",
    "skillNames": [
      "Hammerblows",
      "Steel Crusher",
      "Demoralizing Display"
    ]
  },
  {
    "name": "Granyt Doorkeep",
    "image": "",
    "imageHint": "Granyt",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 24780,
      "atk": 804,
      "def": 1123,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 20%",
    "skillNames": [
      "You're Barred!",
      "Geode Haymaker",
      "Demolisher Blow",
      "Stonefaced [P]"
    ]
  },
  {
    "name": "Grappler",
    "image": "",
    "imageHint": "Grappler",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 859,
      "def": 1189,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Spirit Ally HP in All Battles by 19%",
    "skillNames": [
      "Hoodoo",
      "Soul Sizzle",
      "Envelop"
    ]
  },
  {
    "name": "Gravechill Killer",
    "image": "",
    "imageHint": "Gravechill",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1233,
      "def": 892,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Freezing Toxin",
      "Blood Chill",
      "Icy Veins"
    ]
  },
  {
    "name": "Graybeard",
    "image": "",
    "imageHint": "Graybeard",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 936,
      "def": 1112,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 30%",
    "skillNames": [
      "Expose Weakness",
      "Ice Crush",
      "Bring It On!"
    ]
  },
  {
    "name": "Greathoof Loriaca",
    "image": "",
    "imageHint": "Loriaca",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 1123,
      "def": 1222,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Deprive",
      "Greathoof Stampede",
      "Dance of War",
      "Hoofbeats [P]"
    ]
  },
  {
    "name": "Greenwarden Ruarc",
    "image": "",
    "imageHint": "Ruarc",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 771,
      "def": 1498,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "Sword of the Glades",
      "Rust Consume You",
      "Call of the Wild",
      "Knight of Vines [P]"
    ]
  },
  {
    "name": "Gretel Hagbane",
    "image": "",
    "imageHint": "Gretel",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1564,
      "def": 980,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Evil Undone",
      "Shadowseeker Bolts",
      "Sacred Ritual",
      "Sisterly Bond [P]"
    ]
  },
  {
    "name": "Grimskin",
    "image": "",
    "imageHint": "Grimskin",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 793,
      "def": 1421,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Tarry Fist",
      "Frust",
      "Ichor Fling"
    ]
  },
  {
    "name": "Grinner",
    "image": "",
    "imageHint": "Grinner",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 936,
      "def": 1134,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Wars by 30",
    "skillNames": [
      "Bile",
      "Shock",
      "Unbury"
    ]
  },
  {
    "name": "Grizzled Jarl",
    "image": "",
    "imageHint": "Grizzled-Jarl",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 760,
      "def": 1288,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 75,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Massive Halberd",
      "Ancestral Shield",
      "Earthstomp"
    ]
  },
  {
    "name": "Grohak the Bloodied",
    "image": "",
    "imageHint": "Grohak",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1487,
      "def": 1046,
      "spd": 96,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 24%",
    "skillNames": [
      "Sap Swiftness",
      "Unbound Anger",
      "Lord of War"
    ]
  },
  {
    "name": "Gronjarr",
    "image": "",
    "imageHint": "Gronjarr",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 22800,
      "atk": 837,
      "def": 1222,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Pyro Pummel",
      "Shatter Falsity",
      "Fires of Auld",
      "Keeper of Flame [P]"
    ]
  },
  {
    "name": "Grugtha Darkseer",
    "image": "",
    "imageHint": "Grugtha",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 1398,
      "def": 1024,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 30%",
    "skillNames": [
      "If Looks Could Kill",
      "Siroth's Favoured",
      "Bloody Poleax",
      "Lover Of Slaughter [P]"
    ]
  },
  {
    "name": "Grumbler",
    "image": "",
    "imageHint": "Grumbler",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 804,
      "def": 925,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 55,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 25%",
    "skillNames": [
      "Angry Mallet",
      "No Coming Back",
      "Shoulder the Weight"
    ]
  },
  {
    "name": "Grunch Killjoy",
    "image": "",
    "imageHint": "Grunch",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 969,
      "def": 1134,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 30%",
    "skillNames": [
      "Mace of Foulness",
      "Kindle Soulfire",
      "Hex Eater",
      "Madcap [P]"
    ]
  },
  {
    "name": "Guardian",
    "image": "",
    "imageHint": "Guardian",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 826,
      "def": 925,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 27%",
    "skillNames": [
      "Chop",
      "Thunderclap",
      "Prayer"
    ]
  },
  {
    "name": "Gurgoh the Augur",
    "image": "",
    "imageHint": "Gurgoh",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1465,
      "def": 1046,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 30%",
    "skillNames": [
      "Icebreaker",
      "Bonechiller",
      "Avalanche",
      "Frost Embrace [P]"
    ]
  },
  {
    "name": "Gurptuk Moss-Beard",
    "image": "",
    "imageHint": "Gurptuk",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1079,
      "def": 1244,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 50",
    "skillNames": [
      "Biotic Staff",
      "Druidic Boon",
      "Cloud of Spores",
      "Symbiotes [P]"
    ]
  },
  {
    "name": "Guurda Bogbrew",
    "image": "",
    "imageHint": "Guurda",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 892,
      "def": 1310,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 65",
    "skillNames": [
      "Brew Mama",
      "Rotlimb Decoction",
      "Hemlock Surprise",
      "Malign Tendrils [P]"
    ]
  },
  {
    "name": "Gwyndolin the Silent",
    "image": "",
    "imageHint": "Gwyndolin",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1520,
      "def": 1002,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Talonrake",
      "Sickle Boomerangs",
      "Plumedart",
      "Bird of Prey [P]"
    ]
  },
  {
    "name": "Gwynneth",
    "image": "",
    "imageHint": "Gwynneth",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 14370,
      "atk": 1421,
      "def": 925,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Doom Tower by 25%",
    "skillNames": [
      "Infiltrator",
      "Apathy",
      "Flow of Malaise"
    ]
  },
  {
    "name": "Haarken Greatblade",
    "image": "",
    "imageHint": "Haarken",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1487,
      "def": 826,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Doom Tower by 32%",
    "skillNames": [
      "Blooded Steel",
      "Fearsome Iron Slab",
      "Infectious Panic"
    ]
  },
  {
    "name": "Hakkorhn Smashlord",
    "image": "",
    "imageHint": "Hakkorhn",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23790,
      "atk": 848,
      "def": 1145,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 33%",
    "skillNames": [
      "Inhuman Force",
      "Rallying Bellow",
      "Blood Offering"
    ]
  },
  {
    "name": "Halberdier",
    "image": "",
    "imageHint": "Halberdier",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12060,
      "atk": 1178,
      "def": 1046,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hew",
      "Bisect",
      "Cleaving Ax [P]"
    ]
  },
  {
    "name": "Hansel Witchhunter",
    "image": "",
    "imageHint": "Hansel",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1669,
      "def": 914,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 33%",
    "skillNames": [
      "Purge All Evil",
      "Sanctified Knives",
      "Baneful Burst",
      "Brotherly Bond [P]"
    ]
  },
  {
    "name": "Hardscale",
    "image": "",
    "imageHint": "Hardscale",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 716,
      "def": 1167,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Ambush",
      "Shocking Wound"
    ]
  },
  {
    "name": "Harima",
    "image": "",
    "imageHint": "Harima",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 925,
      "def": 1531,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 80",
    "skillNames": [
      "Debasement",
      "Purgative Punishment",
      "Celestial Awe",
      "Demon Slayer [P]"
    ]
  },
  {
    "name": "Harrier",
    "image": "",
    "imageHint": "Harrier",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1376,
      "def": 749,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Trick Shot",
      "Puncture Bolts",
      "Deadeye's Strike",
      "Skillful Partner [P]"
    ]
  },
  {
    "name": "Haruspex",
    "image": "",
    "imageHint": "Haruspex",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 859,
      "def": 958,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 15%",
    "skillNames": [
      "Infected Liver",
      "Sign of Swiftness",
      "Fate Reweaved"
    ]
  },
  {
    "name": "Harvest Jack",
    "image": "",
    "imageHint": "Jack",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 26925,
      "atk": 859,
      "def": 925,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Harvest of Fear",
      "Dreams to Ash",
      "Lord of Terror",
      "Leering Grin [P]"
    ]
  },
  {
    "name": "Harvester",
    "image": "",
    "imageHint": "Harvester",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1156,
      "def": 958,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Destabilize",
      "Accursed Scythe",
      "Temporal Burst"
    ]
  },
  {
    "name": "Hatchet Slinger",
    "image": "",
    "imageHint": "Hatchet-Slinger",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10575,
      "atk": 1321,
      "def": 1002,
      "spd": 93,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Axe Frenzy",
      "Dwarven Fortitude",
      "Hatchets For All [P]"
    ]
  },
  {
    "name": "He-Man",
    "image": "",
    "imageHint": "He-Man",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 16845,
      "atk": 1465,
      "def": 991,
      "spd": 104,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Eternian Slash",
      "Luminous Cleave",
      "I Have The Power!",
      "Master of the Universe [P]"
    ]
  },
  {
    "name": "Head Taker",
    "image": "",
    "imageHint": "Head-Taker",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 980,
      "def": 804,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Carve Up",
      "Weakling!"
    ]
  },
  {
    "name": "Headsman",
    "image": "",
    "imageHint": "Headsman",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10740,
      "atk": 1354,
      "def": 958,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Public Execution",
      "Headman's Due",
      "Judged Guilty [P]"
    ]
  },
  {
    "name": "Heartpiercer",
    "image": "",
    "imageHint": "Heartpiercer",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1057,
      "def": 859,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Perforate",
      "Sight In"
    ]
  },
  {
    "name": "Hegemon",
    "image": "",
    "imageHint": "Hegemon",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19150,
      "atk": 1487,
      "def": 815,
      "spd": 96,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 19%",
    "skillNames": [
      "Grave's Grasp",
      "Crippling Cold",
      "Fateful Arrival [P]"
    ]
  },
  {
    "name": "Heiress",
    "image": "",
    "imageHint": "Heiress",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12390,
      "atk": 1167,
      "def": 1035,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 16%",
    "skillNames": [
      "Bullseye",
      "Exhortation",
      "Avenger [P]"
    ]
  },
  {
    "name": "Helicath",
    "image": "",
    "imageHint": "Helicath",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 859,
      "def": 1443,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "Pyroclastic Claw",
      "Winds of the Pit",
      "Devoted Servants",
      "Feast of Agony [P]"
    ]
  },
  {
    "name": "Helior",
    "image": "",
    "imageHint": "Helior",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 804,
      "def": 1542,
      "spd": 95,
      "crate": 15,
      "cdmg": 57.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in all Battles by 60",
    "skillNames": [
      "Sunshine Halberd",
      "Solar Blessing",
      "Harsh Light",
      "Intercessor [P]"
    ]
  },
  {
    "name": "Hellborn Sprite",
    "image": "",
    "imageHint": "Hellborn",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1145,
      "def": 859,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shivering Malady",
      "Crumbling Flesh",
      "Transmuter"
    ]
  },
  {
    "name": "Hellfang",
    "image": "",
    "imageHint": "Hellfang",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1233,
      "def": 837,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 21%",
    "skillNames": [
      "Tear",
      "Hunter's Mark",
      "Chilling Howl"
    ]
  },
  {
    "name": "Hellfreak",
    "image": "",
    "imageHint": "Hellfreak",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1365,
      "def": 650,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 10%",
    "skillNames": [
      "Vile Blades",
      "Mind Games",
      "Worst Nightmare"
    ]
  },
  {
    "name": "Hellgazer",
    "image": "",
    "imageHint": "Hellgazer",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 1476,
      "def": 650,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 27%",
    "skillNames": [
      "Soul Rend",
      "Dark Awakening",
      "Malign Lightning"
    ]
  },
  {
    "name": "Hellhound",
    "image": "",
    "imageHint": "Hellhound",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10245,
      "atk": 760,
      "def": 760,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Paralyzing Bite"
    ]
  },
  {
    "name": "Hephraak",
    "image": "",
    "imageHint": "Hephraak",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1553,
      "def": 1057,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hephraak's Grin",
      "Hephraak's Scorn",
      "Megalomania",
      "Prince of Pride [P]"
    ]
  },
  {
    "name": "Herald",
    "image": "",
    "imageHint": "Herald",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 782,
      "def": 848,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Doombolt",
      "Unholy Grace"
    ]
  },
  {
    "name": "Hexia",
    "image": "",
    "imageHint": "Hexia",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1564,
      "def": 793,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 27%",
    "skillNames": [
      "Grave Rot",
      "Soulreap",
      "Spirit Harvest"
    ]
  },
  {
    "name": "Hexweaver",
    "image": "",
    "imageHint": "Hexweaver",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 914,
      "def": 1013,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 13%",
    "skillNames": [
      "Curse",
      "Dark Embrace",
      "Wings of Doom"
    ]
  },
  {
    "name": "Hidestitcher Boorn",
    "image": "",
    "imageHint": "Boorn",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 815,
      "def": 1057,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Stave Smash",
      "Skinsealer",
      "Hidestitcher"
    ]
  },
  {
    "name": "Hierophant Lazarius",
    "image": "",
    "imageHint": "Lazarius",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 1233,
      "def": 1288,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 25%",
    "skillNames": [
      "Phantom Cobra",
      "Nest of Vipers",
      "The Rift's Gaze",
      "Metamorph",
      "Reality Shift [P]"
    ]
  },
  {
    "name": "Hierophant Lazarius",
    "image": "",
    "imageHint": "Lazarius",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1597,
      "def": 1123,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 25%",
    "skillNames": [
      "Lambent Trident",
      "Destruction Surge",
      "Flame Vulcan",
      "Metamorph",
      "Overwhelming Power [P]"
    ]
  },
  {
    "name": "High Keeper Prysma",
    "image": "",
    "imageHint": "Prysma",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21810,
      "atk": 936,
      "def": 1189,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 30%",
    "skillNames": [
      "Sunburst Hail",
      "Shining Blitz",
      "Revival Radiance",
      "Lightmarked [P]"
    ]
  },
  {
    "name": "High Khatun",
    "image": "",
    "imageHint": "Khatun",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1024,
      "def": 1189,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Imperial Grace",
      "Rally the Horde",
      "Shamanic Lightning"
    ]
  },
  {
    "name": "Highmother Maud",
    "image": "",
    "imageHint": "Maud",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20805,
      "atk": 925,
      "def": 1266,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Blessed Spear",
      "Anointed Phalanx",
      "Psalm of Revival",
      "Shining Evensong [P]"
    ]
  },
  {
    "name": "Hilda Arnorndottr",
    "image": "",
    "imageHint": "Hilda",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1421,
      "def": 837,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 20%",
    "skillNames": [
      "Ax Pirouette",
      "Shatter Limbs",
      "For Hrothglime!",
      "Fight Dirty [P]"
    ]
  },
  {
    "name": "Hill Nomad",
    "image": "",
    "imageHint": "Hill-Nomad",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1145,
      "def": 958,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sandstorm Blade",
      "Nomad's Endurance",
      "Ambush Tactics"
    ]
  },
  {
    "name": "Hilvi the Rime-called",
    "image": "",
    "imageHint": "Hilvi",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 826,
      "def": 1387,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battles by 19%",
    "skillNames": [
      "Frostflame Torch",
      "Embittering Cold Level 1",
      "Ward Of The Glacier",
      "Divine Mission [P]"
    ]
  },
  {
    "name": "Hoforees the Tusked",
    "image": "",
    "imageHint": "Hoforees",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 903,
      "def": 1035,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 40",
    "skillNames": [
      "Burly Bash",
      "War Whoop",
      "Eternal War"
    ]
  },
  {
    "name": "Hollow",
    "image": "",
    "imageHint": "Hollow",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1299,
      "def": 859,
      "spd": 89,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 21%",
    "skillNames": [
      "Bleed Away",
      "Creeping Dark",
      "Aether Strike"
    ]
  },
  {
    "name": "Holsring",
    "image": "",
    "imageHint": "Holsring",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1509,
      "def": 1057,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Rampant Blows",
      "Overthrow",
      "Witchfinder",
      "Hunter's Guile [P]"
    ]
  },
  {
    "name": "Honor Guard",
    "image": "",
    "imageHint": "Honor-Guard",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 760,
      "def": 1233,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 55,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Force Ally DEF in All Battles by 25%",
    "skillNames": [
      "Bell Ringer",
      "Fate Transfer",
      "Astral Chains"
    ]
  },
  {
    "name": "Hope",
    "image": "",
    "imageHint": "Hope",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21315,
      "atk": 1079,
      "def": 804,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 31%",
    "skillNames": [
      "Sequester",
      "Hearten",
      "Holy Storm"
    ]
  },
  {
    "name": "Hordin",
    "image": "",
    "imageHint": "Hordin",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 1321,
      "def": 859,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 20%",
    "skillNames": [
      "Relentless Strike",
      "Bloodletter",
      "Burning Hatred"
    ]
  },
  {
    "name": "Hoskarul",
    "image": "",
    "imageHint": "Hoskarul",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 804,
      "def": 1321,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 30%",
    "skillNames": [
      "Hermit Cudgel",
      "Sustained Beating",
      "Unfaze",
      "Finish the Foe [P]"
    ]
  },
  {
    "name": "Hospitaller",
    "image": "",
    "imageHint": "Hospitaller",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1035,
      "def": 848,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 10%",
    "skillNames": [
      "Quick Slash",
      "Wave of Purification",
      "Invigo",
      "Merciful Partner [P]"
    ]
  },
  {
    "name": "Hotatsu",
    "image": "",
    "imageHint": "Hotatsu",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 760,
      "def": 1376,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%",
    "skillNames": [
      "Red River",
      "Rushing Death",
      "Oni Icon",
      "Spirit Touched [P]"
    ]
  },
  {
    "name": "Hound Spawn",
    "image": "",
    "imageHint": "Hound-Spawn",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1398,
      "def": 760,
      "spd": 93,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Fire Breath",
      "Adamantine Teeth",
      "Shattering Strike"
    ]
  },
  {
    "name": "Hungerer",
    "image": "",
    "imageHint": "Hungerer",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 683,
      "def": 870,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Meat Masher",
      "Massive Bulk"
    ]
  },
  {
    "name": "Huntress",
    "image": "",
    "imageHint": "Huntress",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11895,
      "atk": 1310,
      "def": 925,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Curved Shot",
      "Incinerate",
      "Whisper"
    ]
  },
  {
    "name": "Hurler",
    "image": "",
    "imageHint": "Hurler",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1432,
      "def": 617,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 21%",
    "skillNames": [
      "Spin Throw",
      "Firebolt",
      "Pin Down"
    ]
  },
  {
    "name": "Hurndig",
    "image": "",
    "imageHint": "Hurndig",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1409,
      "def": 1101,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 35%",
    "skillNames": [
      "Lethal Lust",
      "Arcane Tempest",
      "Stasis Strike",
      "Staid [P]"
    ]
  },
  {
    "name": "Husk",
    "image": "",
    "imageHint": "Husk",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 969,
      "def": 936,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Arena by 30%",
    "skillNames": [
      "Burning Iron",
      "Despair",
      "Retaliate"
    ]
  },
  {
    "name": "Hyria",
    "image": "",
    "imageHint": "Hyria",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12060,
      "atk": 1476,
      "def": 749,
      "spd": 101,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 16%",
    "skillNames": [
      "Feint",
      "Poisonous Lily",
      "Lead the Charge"
    ]
  },
  {
    "name": "Icebound Prospector",
    "image": "",
    "imageHint": "Icebound",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 991,
      "def": 804,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Frosty Pick",
      "Noggin Knocker"
    ]
  },
  {
    "name": "Ifrit",
    "image": "",
    "imageHint": "Ifrit",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 815,
      "def": 958,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 15%",
    "skillNames": [
      "Feebleness Curse",
      "Withering Bolt",
      "Shadow Field [P]"
    ]
  },
  {
    "name": "Ignatius",
    "image": "",
    "imageHint": "Ignatius",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1057,
      "def": 1266,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%",
    "skillNames": [
      "Skull Rattle",
      "Battle Shout",
      "Turn to Ash"
    ]
  },
  {
    "name": "Ilysinya",
    "image": "",
    "imageHint": "Ilysinya",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 749,
      "def": 1123,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Lancer",
      "Excoriating Light",
      "Shield of Aravia",
      "Inviolable Nobility [P]"
    ]
  },
  {
    "name": "Incubus",
    "image": "",
    "imageHint": "Incubus",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11235,
      "atk": 1145,
      "def": 859,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Javelin",
      "Demon Fangs"
    ]
  },
  {
    "name": "Infernal Baroness",
    "image": "",
    "imageHint": "Infernal-Baroness",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 914,
      "def": 1211,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Life Syphon",
      "Clinging Dark",
      "Disappear"
    ]
  },
  {
    "name": "Infiltrator",
    "image": "",
    "imageHint": "Infiltrator",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1123,
      "def": 705,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shank",
      "Throwing Knives"
    ]
  },
  {
    "name": "Ingid Twyst-staff",
    "image": "",
    "imageHint": "Ingid",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 991,
      "def": 936,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 30",
    "skillNames": [
      "Twysted Bark",
      "Burst of Despair",
      "Feasting Shadow"
    ]
  },
  {
    "name": "Inithwe Bloodtwin",
    "image": "",
    "imageHint": "Inithwe",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1729,
      "def": 892,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Vitality Censure",
      "No Mercy",
      "Tormenting Whispers",
      "Final Doom [P]"
    ]
  },
  {
    "name": "Inquisitor Shamael",
    "image": "",
    "imageHint": "Shamael",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1288,
      "def": 903,
      "spd": 101,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Doom Tower by 60",
    "skillNames": [
      "Wreak Revenge",
      "Cow the Horrors",
      "Dauntless [P]"
    ]
  },
  {
    "name": "Interceptor",
    "image": "",
    "imageHint": "Interceptor",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 881,
      "def": 1123,
      "spd": 84,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Leg Pierce",
      "Somnolent Toxin",
      "Ward Off"
    ]
  },
  {
    "name": "Intercessor",
    "image": "",
    "imageHint": "Intercessor",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 947,
      "def": 914,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mangle",
      "Inspire"
    ]
  },
  {
    "name": "Iron Brago",
    "image": "",
    "imageHint": "Brago",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 881,
      "def": 1487,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Doom Tower by 34%",
    "skillNames": [
      "Molten Pummeling",
      "Fearless Charge",
      "Battle Storm",
      "Bestow Strength [P]"
    ]
  },
  {
    "name": "Ironclad",
    "image": "",
    "imageHint": "Ironclad",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 947,
      "def": 826,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 16%",
    "skillNames": [
      "Wallop",
      "Amok",
      "Blood Burst [P]"
    ]
  },
  {
    "name": "Ishiyama the Immovable",
    "image": "",
    "imageHint": "Ishiyama",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22800,
      "atk": 892,
      "def": 1167,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 28%",
    "skillNames": [
      "Burning Comet",
      "Calculated Volley",
      "Finish Them",
      "The Immovable [P]"
    ]
  },
  {
    "name": "Ithos",
    "image": "",
    "imageHint": "Ithos",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1608,
      "def": 716,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 33%",
    "skillNames": [
      "Gouge",
      "Outburst",
      "Extinguish Life"
    ]
  },
  {
    "name": "Itinerant",
    "image": "",
    "imageHint": "Itinerant",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1354,
      "def": 760,
      "spd": 90,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Soultap",
      "Wanderer's Weirding",
      "Waste Away"
    ]
  },
  {
    "name": "Iudex Artor",
    "image": "",
    "imageHint": "Artor",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 980,
      "def": 1266,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 25%",
    "skillNames": [
      "Censer Whirl",
      "Incense of Inspiration",
      "Revival Mandate",
      "Sentenced to Life [P]"
    ]
  },
  {
    "name": "Jaeger",
    "image": "",
    "imageHint": "Jaeger",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1200,
      "def": 595,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shackle Shot",
      "Freezing Arrow"
    ]
  },
  {
    "name": "Jagg Bonesaw",
    "image": "",
    "imageHint": "Jagg",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1531,
      "def": 1002,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Razorwheel",
      "Shred The Flesh",
      "Lace",
      "Rev Up The Saw [P]"
    ]
  },
  {
    "name": "Jarang",
    "image": "",
    "imageHint": "Jarang",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 1608,
      "def": 837,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 23%",
    "skillNames": [
      "Armor Piercer",
      "Stunning Toss",
      "Talons"
    ]
  },
  {
    "name": "Jareg",
    "image": "",
    "imageHint": "Jareg",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23460,
      "atk": 683,
      "def": 1057,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Rending Claws",
      "Pack Leader",
      "Sheltering Scales [P]"
    ]
  },
  {
    "name": "Jetni the Giant",
    "image": "",
    "imageHint": "Jetni",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1586,
      "def": 969,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Splinter Steel",
      "Barrier Breach",
      "Towering Might",
      "Nowhere To Hide [P]"
    ]
  },
  {
    "name": "Jinglehunter",
    "image": "",
    "imageHint": "Jinglehunter",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1498,
      "def": 826,
      "spd": 101,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 24%",
    "skillNames": [
      "Missile Toe",
      "Jacked Frost",
      "Cold Snap"
    ]
  },
  {
    "name": "Jingwon",
    "image": "",
    "imageHint": "Jingwon",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22800,
      "atk": 925,
      "def": 1134,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Doom Exchange",
      "Compound Calamity",
      "Power Flare",
      "Unchained [P]"
    ]
  },
  {
    "name": "Jintoro",
    "image": "",
    "imageHint": "Jintoro",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1487,
      "def": 1068,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 29%",
    "skillNames": [
      "Soul Drinker",
      "Blood Freeze",
      "Oni's Rage",
      "Vigorous [P]"
    ]
  },
  {
    "name": "Jizoh",
    "image": "",
    "imageHint": "Jizoh",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 815,
      "def": 1387,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 18%",
    "skillNames": [
      "Reaping Blows",
      "Fierce Protector",
      "Rile"
    ]
  },
  {
    "name": "Joan the Luminant",
    "image": "",
    "imageHint": "Joan",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 958,
      "def": 1387,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in all battles by 80",
    "skillNames": [
      "Sacred Lance",
      "Symbol of Hope",
      "Faith Restored",
      "Metamorph",
      "Eternally Adored [P]"
    ]
  },
  {
    "name": "Joan the Luminant",
    "image": "",
    "imageHint": "Joan",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 1520,
      "def": 1046,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in all battles by 80",
    "skillNames": [
      "Radiant Blades",
      "Pierced By Light",
      "Seraphic Swoop",
      "Metamorph",
      "Lumaya's Glory [P]"
    ]
  },
  {
    "name": "Jotunn",
    "image": "",
    "imageHint": "Jotunn",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 991,
      "def": 1200,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 29%",
    "skillNames": [
      "Brute Strength",
      "Burning Blade",
      "Sear Away"
    ]
  },
  {
    "name": "Judge",
    "image": "",
    "imageHint": "Judge",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1476,
      "def": 738,
      "spd": 103,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 30",
    "skillNames": [
      "Eviscerate",
      "Blade Dance",
      "Chaos Armor [P]"
    ]
  },
  {
    "name": "Judicator",
    "image": "",
    "imageHint": "Judicator",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11895,
      "atk": 1398,
      "def": 837,
      "spd": 104,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bright Fury",
      "Undermine",
      "Execution"
    ]
  },
  {
    "name": "Juliana",
    "image": "",
    "imageHint": "Juliana",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1398,
      "def": 881,
      "spd": 103,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 20%",
    "skillNames": [
      "Battledance",
      "Lethal Partner",
      "Fire of Purgation"
    ]
  },
  {
    "name": "Jurojin",
    "image": "",
    "imageHint": "Jurojin",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 738,
      "def": 1167,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Monk's Spade",
      "Fated Duel",
      "True Smite",
      "Smiles at Death [P]"
    ]
  },
  {
    "name": "Justiciar",
    "image": "",
    "imageHint": "Justiciar",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 914,
      "def": 1134,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 19%",
    "skillNames": [
      "Hold the Line",
      "Contemptuous Blow",
      "Comeback [P]"
    ]
  },
  {
    "name": "Kael",
    "image": "",
    "imageHint": "Kael",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1200,
      "def": 914,
      "spd": 103,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 15%",
    "skillNames": [
      "Dark Bolt",
      "Acid Rain",
      "Disintegrate"
    ]
  },
  {
    "name": "Kaiden",
    "image": "",
    "imageHint": "Kaiden",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 837,
      "def": 1376,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Halberd's Fall",
      "Shatter Sweep",
      "Favor of the Chamber"
    ]
  },
  {
    "name": "Kaja the Wry",
    "image": "",
    "imageHint": "Kaja",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 947,
      "def": 1321,
      "spd": 112,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battles by 19%",
    "skillNames": [
      "Firecracker",
      "Back With A Bang",
      "Royal Flush",
      "Dynamic Duo [P]"
    ]
  },
  {
    "name": "Kallia",
    "image": "",
    "imageHint": "Kallia",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 1597,
      "def": 848,
      "spd": 106,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 25%",
    "skillNames": [
      "Superheated Hammer",
      "Curse of Nullity",
      "Flame Tempest"
    ]
  },
  {
    "name": "Kalvalax",
    "image": "",
    "imageHint": "Kalvalax",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1663,
      "def": 1068,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Oozing Greatsword",
      "Corruption Locus",
      "Storm of Vitriol",
      "Pestilence [P]"
    ]
  },
  {
    "name": "Kantra the Cyclone",
    "image": "",
    "imageHint": "Kantra",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 815,
      "def": 1542,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Bane Hatchet",
      "Chaos Tempest",
      "No Escape [P]"
    ]
  },
  {
    "name": "Karam",
    "image": "",
    "imageHint": "Karam",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1354,
      "def": 1068,
      "spd": 100,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 40",
    "skillNames": [
      "Bloodstained Swords",
      "Fit of Rage",
      "Rot Away"
    ]
  },
  {
    "name": "Karato Foxhunter",
    "image": "",
    "imageHint": "Karato",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 1564,
      "def": 859,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 20%",
    "skillNames": [
      "Three Visitations",
      "Bedevil",
      "Suppression Ward",
      "Stoicism [P]"
    ]
  },
  {
    "name": "Karilon the Ringer",
    "image": "",
    "imageHint": "Karilon",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 1189,
      "def": 1112,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 30%",
    "skillNames": [
      "Deathknell",
      "Canticle of Cold",
      "Polar Vortex",
      "Rime Hammer [P]"
    ]
  },
  {
    "name": "Karnage the Anarch",
    "image": "",
    "imageHint": "Karnage",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 19155,
      "atk": 1476,
      "def": 1101,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 33%",
    "skillNames": [
      "Sufferslash",
      "Devilish Accord",
      "Trinity of Pain",
      "Metamorph",
      "Avatar of Anarchy [P]"
    ]
  },
  {
    "name": "Karnage the Anarch",
    "image": "",
    "imageHint": "Karnage",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 14370,
      "atk": 1960,
      "def": 936,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 33%",
    "skillNames": [
      "Demon Stinger",
      "Singularity of Pain",
      "Infernal Stars",
      "Metamorph",
      "Unending Karnage [P]"
    ]
  },
  {
    "name": "Kassandra",
    "image": "",
    "imageHint": "Kassandra",
    "faction": "Argonites",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 16350,
      "atk": 1343,
      "def": 1145,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all battles by 19%",
    "skillNames": [
      "West Wind Rush",
      "Spear of Leonidas",
      "Isu's Blessing",
      "Everything is Permitted [P]",
      "Blood of Sparta [P]"
    ]
  },
  {
    "name": "Kawn Branchbreaker",
    "image": "",
    "imageHint": "Kawn",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 881,
      "def": 1465,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "Timbermaker",
      "Barkbreaker",
      "Hardy Soul",
      "Mistwood's Bane [P]"
    ]
  },
  {
    "name": "Keberon the Underflame",
    "image": "",
    "imageHint": "Keberon",
    "faction": "Argonites",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1454,
      "def": 1123,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all battles by 28%",
    "skillNames": [
      "Fiery Rend",
      "Searing Brand",
      "Pyrenei Power",
      "Underflame's Protection [P]"
    ]
  },
  {
    "name": "Keeyra the Watcher",
    "image": "",
    "imageHint": "Keeyra",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 870,
      "def": 1409,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Falling Star Crush",
      "Smashing Spree",
      "Coordinated Defense",
      "Besieger's Bane [P]"
    ]
  },
  {
    "name": "Kellan the Shrike",
    "image": "",
    "imageHint": "Kellan",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1443,
      "def": 958,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Impale and Impede",
      "Huntsman's Gambit",
      "Cry of the Shrike",
      "Unforseen [P]"
    ]
  },
  {
    "name": "Kerin the Harvester",
    "image": "",
    "imageHint": "Kerin",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22140,
      "atk": 837,
      "def": 1266,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 80",
    "skillNames": [
      "Biting Infestation",
      "Threshmaster",
      "Sleepstingers",
      "Weed Out [P]"
    ]
  },
  {
    "name": "Khafru the Deathkeeper",
    "image": "",
    "imageHint": "Khafru",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 749,
      "def": 1332,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bone Gladius",
      "Khafru's Command",
      "Goad the Living",
      "Nekhret's Guardian [P]"
    ]
  },
  {
    "name": "Khoronar",
    "image": "",
    "imageHint": "Khoronar",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 27090,
      "atk": 815,
      "def": 958,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 80",
    "skillNames": [
      "Flourish of Slaughter",
      "Beastly Bellow",
      "Battle Waltz",
      "Ferocious Guard [P]",
      "Spectacle [P]"
    ]
  },
  {
    "name": "Kinagashi",
    "image": "",
    "imageHint": "Kinagashi",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1079,
      "def": 1013,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Leaping Sword Art",
      "United Front",
      "Recall From Death"
    ]
  },
  {
    "name": "King Gallcobar",
    "image": "",
    "imageHint": "Gallcobar",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 903,
      "def": 1277,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Tanglestaff",
      "Vitriolic Thorns",
      "Hypertrophy",
      "Bramble Shaman [P]"
    ]
  },
  {
    "name": "King Garog",
    "image": "",
    "imageHint": "Garog",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1564,
      "def": 947,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Gigantic Cleavers",
      "Hack to Bits",
      "Gore Maker",
      "War Machine [P]"
    ]
  },
  {
    "name": "Klaazag Keyhulk",
    "image": "",
    "imageHint": "Klaazag",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 771,
      "def": 1597,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "Dreadtone",
      "Seismic Dissonance",
      "Mindless Muscle",
      "Drone of Agony [P]"
    ]
  },
  {
    "name": "Klodd Beastfeeder",
    "image": "",
    "imageHint": "Klodd",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 815,
      "def": 1046,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "New Stabby Hand",
      "Get Behind Me",
      "Beast Escape",
      "Delicious Giblets [P]"
    ]
  },
  {
    "name": "Knave of Hearts",
    "image": "",
    "imageHint": "Knave",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22470,
      "atk": 892,
      "def": 1189,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 30%",
    "skillNames": [
      "Thornblade",
      "Gallant Knave",
      "Stout Defense",
      "Eternal Sentinel [P]"
    ]
  },
  {
    "name": "Knecht",
    "image": "",
    "imageHint": "Knecht",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Common",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 650,
      "def": 738,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Stab"
    ]
  },
  {
    "name": "Knight Errant",
    "image": "",
    "imageHint": "Knight-Errant",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 1387,
      "def": 672,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 32%",
    "skillNames": [
      "Half-Sword",
      "Mordhau",
      "Death Warrant"
    ]
  },
  {
    "name": "Knosson the Bronze Bull",
    "image": "",
    "imageHint": "Knosson",
    "faction": "Argonites",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23130,
      "atk": 738,
      "def": 1299,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 80",
    "skillNames": [
      "Strength Of Lakon",
      "By The Horns",
      "Hard-earned Confidence",
      "Is That All You've Got? [P]"
    ]
  },
  {
    "name": "Komidus Darksmile",
    "image": "",
    "imageHint": "Komidus",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 1035,
      "def": 1354,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Stoke Anguish",
      "Agony Overwhelming",
      "Thief of Joy",
      "Metamorph",
      "Dramatis Miserae [P]"
    ]
  },
  {
    "name": "Komidus Darksmile",
    "image": "",
    "imageHint": "Komidus",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23625,
      "atk": 958,
      "def": 1321,
      "spd": 110,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Volatile Performer",
      "Explosive Showstopper",
      "Killer Encore",
      "Metamorph",
      "The Last Laugh [P]"
    ]
  },
  {
    "name": "Konstantin the Dayborn",
    "image": "",
    "imageHint": "Konstantin",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1421,
      "def": 1178,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 35%",
    "skillNames": [
      "Sword of Suns",
      "Rune Shatter",
      "Quietude",
      "Exalted [P]"
    ]
  },
  {
    "name": "Korugar Death-Bell",
    "image": "",
    "imageHint": "Korugar",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 881,
      "def": 1255,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 30%",
    "skillNames": [
      "Strange Animus",
      "Bell's Toll",
      "Conduit of Agonies",
      "Violence Locus [P]"
    ]
  },
  {
    "name": "Kosk of Two Skins",
    "image": "",
    "imageHint": "Kosk",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1542,
      "def": 991,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 70",
    "skillNames": [
      "Envenomed Sickles",
      "They Will Regret...",
      "Toxic Vitriol",
      "Imbibed Immunity [P]"
    ]
  },
  {
    "name": "Krakarth",
    "image": "",
    "imageHint": "Krakarth",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20475,
      "atk": 749,
      "def": 1189,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Magnificent Scepter",
      "Eternal Return",
      "Lordly Might",
      "Great Pillar [P]"
    ]
  },
  {
    "name": "Kreela Witch-Arm",
    "image": "",
    "imageHint": "Kreela",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1244,
      "def": 1222,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Witchlight Barrier",
      "Blinding Glow",
      "War Weirding"
    ]
  },
  {
    "name": "Krisk the Ageless",
    "image": "",
    "imageHint": "Krisk",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 760,
      "def": 1520,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Enter the Morass",
      "Centuried Vigor",
      "Invincible Shell",
      "Might of Ages [P]"
    ]
  },
  {
    "name": "Kro'khad the Throatripper",
    "image": "",
    "imageHint": "Krokhad",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1729,
      "def": 870,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Hound-Tyrant",
      "Festering Jaw",
      "Dominant Predator",
      "Primal Ambition [P]"
    ]
  },
  {
    "name": "Krok'mar the Devourer",
    "image": "",
    "imageHint": "Krokmar",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22140,
      "atk": 991,
      "def": 1112,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Meatsplitter",
      "Gnashing Bog",
      "Apex Predator",
      "Voracious Hunger [P]"
    ]
  },
  {
    "name": "Kroz Wallbreaker",
    "image": "",
    "imageHint": "Kroz",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1454,
      "def": 1035,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Pulverizing Pummel",
      "Battlefield Sapper",
      "Mangonel Maul",
      "Bomb Breacher [P]"
    ]
  },
  {
    "name": "Kunoichi",
    "image": "",
    "imageHint": "Kunoichi",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 782,
      "def": 1332,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sever Muscle",
      "Poison Piercing",
      "Interpose",
      "Blooded Grit [P]"
    ]
  },
  {
    "name": "Kurosa The Covetous",
    "image": "",
    "imageHint": "Kurosa",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 1509,
      "def": 1068,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 35%",
    "skillNames": [
      "Surge of Chaos",
      "Anything for Siroth",
      "Running Rampant",
      "Metamorph",
      "Collector of Pawns [P]"
    ]
  },
  {
    "name": "Kurosa The Covetous",
    "image": "",
    "imageHint": "Kurosa",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1641,
      "def": 1068,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 35%",
    "skillNames": [
      "Destroyer of All",
      "Icon of Havoc",
      "Ruthless Agent",
      "Metamorph",
      "Vile Murderess [P]"
    ]
  },
  {
    "name": "Kurzad Deepheart",
    "image": "",
    "imageHint": "Kurzad",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1343,
      "def": 870,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bushwhack",
      "Flailing Pick",
      "Deep Ambush"
    ]
  },
  {
    "name": "Kyoku",
    "image": "",
    "imageHint": "Kyoku",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 804,
      "def": 1487,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "One-Eyed Beast",
      "Blood Curdle",
      "Kyoku's Horde",
      "Wellspring [P]"
    ]
  },
  {
    "name": "Kytis",
    "image": "",
    "imageHint": "Kytis",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1222,
      "def": 1090,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Arena by 33%",
    "skillNames": [
      "Soul Reaper",
      "Spikes",
      "Bleeding Wounds"
    ]
  },
  {
    "name": "Lady Annabelle",
    "image": "",
    "imageHint": "Annabelle",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20310,
      "atk": 881,
      "def": 1068,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Covetous Nails",
      "Captivator",
      "Sanguine Exchange",
      "The Red Lady [P]"
    ]
  },
  {
    "name": "Lady Eresh",
    "image": "",
    "imageHint": "Eresh",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1365,
      "def": 936,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Meticulous Adversary",
      "Blur of Knives",
      "Deathrite Evocation",
      "Slip Between [P]"
    ]
  },
  {
    "name": "Lady Etessa",
    "image": "",
    "imageHint": "Etessa",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1387,
      "def": 1035,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Blessed Missiles",
      "Whiplash",
      "Fiend Purge"
    ]
  },
  {
    "name": "Lady Kimi",
    "image": "",
    "imageHint": "Kimi",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 1068,
      "def": 1145,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Doom Tower by 30%",
    "skillNames": [
      "Lady's Touch",
      "Flurry of Petals",
      "Spirit Flux",
      "Imperious [P]"
    ]
  },
  {
    "name": "Lady Mikage",
    "image": "",
    "imageHint": "Mikage",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 1200,
      "def": 1211,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Shadow Lash",
      "Silkensnare",
      "Imperial Decree",
      "Metamorph",
      "Will of the Mikage [P]"
    ]
  },
  {
    "name": "Lady Mikage",
    "image": "",
    "imageHint": "Mikage",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 1200,
      "def": 1211,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Nightmare Spider",
      "Skittering Death",
      "Doom of Yakai",
      "Metamorph",
      "Demonic Glower [P]"
    ]
  },
  {
    "name": "Lady Noelle",
    "image": "",
    "imageHint": "Noelle",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20805,
      "atk": 892,
      "def": 1299,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 30%",
    "skillNames": [
      "Icecrack Staff",
      "Invigo",
      "Hearthkeeper",
      "Cryomantic Queen [P]"
    ]
  },
  {
    "name": "Lady Quilen",
    "image": "",
    "imageHint": "Quilen",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1476,
      "def": 859,
      "spd": 101,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mistress of Mallets",
      "Glory Hound",
      "First to Fight"
    ]
  },
  {
    "name": "Lady of Ireth",
    "image": "",
    "imageHint": "Ireth",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 1035,
      "def": 1178,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 30%",
    "skillNames": [
      "Fae Bolt",
      "Mistwood Healing",
      "Rhythmic Strength",
      "Aegis of the Forest [P]"
    ]
  },
  {
    "name": "Lamellar",
    "image": "",
    "imageHint": "Lamellar",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 837,
      "def": 881,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 22%",
    "skillNames": [
      "Sacred Flame",
      "Crystal Burst",
      "Diehard [P]"
    ]
  },
  {
    "name": "Lamibur",
    "image": "",
    "imageHint": "Lamibur",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1013,
      "def": 925,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 10%",
    "skillNames": [
      "Pressing Advance",
      "Rain of Gore",
      "Bestial Communion"
    ]
  },
  {
    "name": "Lanakis the Chosen",
    "image": "",
    "imageHint": "Lanakis",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 1255,
      "def": 980,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Chosen's Touch",
      "Companions of Fate",
      "Banner of Legend"
    ]
  },
  {
    "name": "Legate Teox",
    "image": "",
    "imageHint": "Teox",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17175,
      "atk": 1520,
      "def": 914,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "FAC-ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%\n\n[Lizardmen only]\n\nIncreases Ally ACC in All Battles by 40",
    "skillNames": [
      "Guerrilla Tactics",
      "Draconic Retribution",
      "Wrath of the Legion",
      "Survival At All Costs [P]"
    ]
  },
  {
    "name": "Leminisi the Gold-wing",
    "image": "",
    "imageHint": "Leminisi",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1520,
      "def": 958,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 25%",
    "skillNames": [
      "Auric Talons",
      "Intercept The Threat",
      "Venerated Warrior",
      "Scourge of Evil [P]"
    ]
  },
  {
    "name": "Lemure",
    "image": "",
    "imageHint": "Lemure",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 639,
      "def": 903,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Vicious Swipes",
      "Dark Burst"
    ]
  },
  {
    "name": "Leonardo",
    "image": "",
    "imageHint": "Leonardo",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17670,
      "atk": 782,
      "def": 1619,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "New York Slice",
      "Shell Yeah!",
      "Turtles Together",
      "Hero in a Half Shell [P]"
    ]
  },
  {
    "name": "Leorius the Proud",
    "image": "",
    "imageHint": "Leorius",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 1409,
      "def": 936,
      "spd": 106,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 24%",
    "skillNames": [
      "Lion's Twinclaws",
      "Rage of the Pride",
      "Awesome Roar",
      "True Grit [P]"
    ]
  },
  {
    "name": "Liburga",
    "image": "",
    "imageHint": "Liburga",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17010,
      "atk": 1123,
      "def": 1046,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Dripping Doom",
      "Boil From Within",
      "Vigor Bloom",
      "Irradiate [P]"
    ]
  },
  {
    "name": "Lich",
    "image": "",
    "imageHint": "Lich",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 694,
      "def": 1376,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 27%",
    "skillNames": [
      "Curse of Blindness",
      "Cocoon",
      "Enervation"
    ]
  },
  {
    "name": "Lifetaker",
    "image": "",
    "imageHint": "Lifetaker",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 1145,
      "def": 727,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bleeding Serum",
      "Leg Bind",
      "Diamond Body"
    ]
  },
  {
    "name": "Lightsworn",
    "image": "",
    "imageHint": "Lightsworn",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 738,
      "def": 1476,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Teardown",
      "Brutality",
      "Indomitable"
    ]
  },
  {
    "name": "Lightward Siendra",
    "image": "",
    "imageHint": "Siendra",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1509,
      "def": 749,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in all Battles by 15%",
    "skillNames": [
      "Luminant Strike",
      "Blinding Thrust",
      "Resplendent Burst",
      "Lightward's Boon [P]"
    ]
  },
  {
    "name": "Line Infantry",
    "image": "",
    "imageHint": "Line-Infantry",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 738,
      "def": 1123,
      "spd": 87,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Spear Goad",
      "Rabble Rouser"
    ]
  },
  {
    "name": "Lionsguard Galatea",
    "image": "",
    "imageHint": "Galatea",
    "faction": "Argonites",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1321,
      "def": 881,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Pride Strike",
      "Apex Slice",
      "Aspirant of Theosomi",
      "Lionsguard Lessons [P]"
    ]
  },
  {
    "name": "Little Miss Annie",
    "image": "",
    "imageHint": "Annie",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 1597,
      "def": 793,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Pretty Nails",
      "Hollow Doll",
      "Playdate",
      "Toys Don't Die [P]",
      "Magical Heart [P]"
    ]
  },
  {
    "name": "Locwain",
    "image": "",
    "imageHint": "Locwain",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1409,
      "def": 958,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 20%",
    "skillNames": [
      "Booncatcher",
      "Revelation",
      "Focused Force",
      "Hunt the Haughty [P]"
    ]
  },
  {
    "name": "Lodric Falconheart",
    "image": "",
    "imageHint": "Lodric",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 947,
      "def": 1101,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Doom Tower by 25%",
    "skillNames": [
      "Strike of Dismay",
      "Hold Out",
      "Falcon's Wings"
    ]
  },
  {
    "name": "Loki the Deceiver",
    "image": "",
    "imageHint": "Loki",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 980,
      "def": 1321,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Flames of Mischief",
      "Deceiver's Gambit",
      "Bandit Flash",
      "Mist Step [P]"
    ]
  },
  {
    "name": "Lonatharil",
    "image": "",
    "imageHint": "Lonatharil",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23130,
      "atk": 848,
      "def": 1189,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Doom Tower by 35%",
    "skillNames": [
      "Gallantry",
      "Flicker Barrier",
      "Finest Hour",
      "Piercer [P]"
    ]
  },
  {
    "name": "Loneblade Riab",
    "image": "",
    "imageHint": "Riab",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12060,
      "atk": 1299,
      "def": 925,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Blade Mirage",
      "Dagger Storm",
      "Ruthless Assassin [P]"
    ]
  },
  {
    "name": "Longbeard",
    "image": "",
    "imageHint": "Longbeard",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 1409,
      "def": 980,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Dungeons by 23%",
    "skillNames": [
      "Unstoppable Force",
      "Brittleness Curse",
      "Horde's Fury"
    ]
  },
  {
    "name": "Longsword Torrux",
    "image": "",
    "imageHint": "Torrux",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 749,
      "def": 1277,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 25%",
    "skillNames": [
      "Festering Claymore",
      "Putrescent Cut",
      "Bladebreaker [P]"
    ]
  },
  {
    "name": "Lord Champfort",
    "image": "",
    "imageHint": "Lord_Champfort",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 1079,
      "def": 1013,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 50%",
    "skillNames": [
      "Annihilation",
      "Earthshaker",
      "Thornsphere [P]"
    ]
  },
  {
    "name": "Lord Entertainer Fabian",
    "image": "",
    "imageHint": "Fabian",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 1211,
      "def": 1101,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Service in Death",
      "Unwelcome Guest",
      "Spectral Flourish",
      "Ghost With The Most [P]"
    ]
  },
  {
    "name": "Lord Shazar",
    "image": "",
    "imageHint": "Shazar",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1343,
      "def": 1189,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 32%",
    "skillNames": [
      "Damnation",
      "Everlasting Fury",
      "Cruel Fate"
    ]
  },
  {
    "name": "Lordly Legionary",
    "image": "",
    "imageHint": "Lordly-Legionary",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1354,
      "def": 947,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Press the Fight",
      "Outflank",
      "Legion's Orders"
    ]
  },
  {
    "name": "Lorn the Cutter",
    "image": "",
    "imageHint": "Lorn",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1443,
      "def": 837,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hand Fangs",
      "Frightful Frenzy",
      "Snatch Into Darkness"
    ]
  },
  {
    "name": "Losan K'Leth",
    "image": "",
    "imageHint": "KLeth",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18825,
      "atk": 727,
      "def": 1597,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "FAC-DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%\n\n[Knights Revenant only]\n\nIncreases Ally RES in All Battles by 60",
    "skillNames": [
      "Atrophic Ax",
      "Spirit Calculus",
      "Finality Disc",
      "The Representation [P]"
    ]
  },
  {
    "name": "Lua",
    "image": "",
    "imageHint": "Lua",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1564,
      "def": 771,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Splinter Arrow",
      "Hail of Arrows",
      "Lucky Shot"
    ]
  },
  {
    "name": "Lugan the Steadfast",
    "image": "",
    "imageHint": "Lugan",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22140,
      "atk": 1013,
      "def": 1090,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 38%",
    "skillNames": [
      "Crushing Blow",
      "Bodyguard",
      "Mark of Silence",
      "Stoic Solidarity [P]"
    ]
  },
  {
    "name": "Lumberer",
    "image": "",
    "imageHint": "Lumberer",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 1233,
      "def": 716,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Gigantic Pulverizers",
      "Flatten",
      "Massive Momentum"
    ]
  },
  {
    "name": "Luria",
    "image": "",
    "imageHint": "Luria",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1487,
      "def": 947,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Cursed Sword",
      "Mark of Fear",
      "Hex"
    ]
  },
  {
    "name": "Lurker",
    "image": "",
    "imageHint": "Lurker",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10740,
      "atk": 815,
      "def": 672,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Viral Arrow"
    ]
  },
  {
    "name": "Luthiea",
    "image": "",
    "imageHint": "Luthiea",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1277,
      "def": 1068,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "CRATE",
    "auraText": "\nIncreases Ally C.RATE in Dungeons by 33%",
    "skillNames": [
      "Burning Arrow",
      "Ice Shot",
      "Numbing Poison"
    ]
  },
  {
    "name": "Lydia the Deathsiren",
    "image": "",
    "imageHint": "Lydia",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20805,
      "atk": 903,
      "def": 1288,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 100",
    "skillNames": [
      "Oppression",
      "Siren's Wail",
      "Nullification",
      "Death Hold [P]"
    ]
  },
  {
    "name": "Lysanthir",
    "image": "",
    "imageHint": "Lysanthir",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 837,
      "def": 1542,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 28%",
    "skillNames": [
      "Echobolt",
      "Wily Hunter",
      "Runed Snares",
      "Survivalist Supreme [P]"
    ]
  },
  {
    "name": "Lyssandra",
    "image": "",
    "imageHint": "Lyssandra",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 969,
      "def": 1178,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battles by 24%",
    "skillNames": [
      "Transference",
      "Exhaustion",
      "Energize"
    ]
  },
  {
    "name": "Ma'Shalled",
    "image": "",
    "imageHint": "MaShalled",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 1454,
      "def": 936,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 34%",
    "skillNames": [
      "Bloodsucker",
      "Tornado",
      "Open Wounds"
    ]
  },
  {
    "name": "Mad Hatter",
    "image": "",
    "imageHint": "Hatter",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23295,
      "atk": 859,
      "def": 1167,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Dastardly Distillation",
      "Mixture Most Foul",
      "A Whiff of Madness",
      "Time For Tea! [P]"
    ]
  },
  {
    "name": "Madame Serris",
    "image": "",
    "imageHint": "Serris",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 826,
      "def": 1167,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Panic Spread",
      "Tricks and Treats",
      "Midnight Ritual",
      "Witch's Grace [P]"
    ]
  },
  {
    "name": "Maddak, Eyes of Skyiron",
    "image": "",
    "imageHint": "Maddak",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1365,
      "def": 969,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Crypts by 33%.",
    "skillNames": [
      "Portable Cannonade",
      "Scattershot Barrage",
      "Beast Feller Level",
      "Eyes of a Sunseeker [P]"
    ]
  },
  {
    "name": "Madman",
    "image": "",
    "imageHint": "Madman",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1343,
      "def": 749,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Wild Slashing",
      "Insane Resilience",
      "Crazed Lunge"
    ]
  },
  {
    "name": "Maeve",
    "image": "",
    "imageHint": "Maeve",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1354,
      "def": 936,
      "spd": 100,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Stupefy",
      "Slobber Knocker",
      "And Stay Down"
    ]
  },
  {
    "name": "Magekiller",
    "image": "",
    "imageHint": "Magekiller",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 8265,
      "atk": 881,
      "def": 771,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Harry"
    ]
  },
  {
    "name": "Magister",
    "image": "",
    "imageHint": "Magister",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 892,
      "def": 936,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 22%",
    "skillNames": [
      "Majestic Staff",
      "Anoint",
      "Censure"
    ]
  },
  {
    "name": "Magmablood",
    "image": "",
    "imageHint": "Magmablood",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1387,
      "def": 727,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 40",
    "skillNames": [
      "Hurl",
      "Splinters",
      "Magma Bomb"
    ]
  },
  {
    "name": "Magnarr",
    "image": "",
    "imageHint": "Magnarr",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 837,
      "def": 1068,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Doom Tower by 30%",
    "skillNames": [
      "Superheated Hammer",
      "Percussive Pound",
      "Fan the Flames",
      "Fleshmelter [P]"
    ]
  },
  {
    "name": "Magus",
    "image": "",
    "imageHint": "Magus",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1299,
      "def": 804,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 16%",
    "skillNames": [
      "Paralyze",
      "Toxin",
      "Vitality Theft"
    ]
  },
  {
    "name": "Maiden",
    "image": "",
    "imageHint": "Maiden",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11730,
      "atk": 1343,
      "def": 903,
      "spd": 87,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Icy Temper",
      "Diminish",
      "Sow Confusion"
    ]
  },
  {
    "name": "Malbranche",
    "image": "",
    "imageHint": "Malbranche",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1321,
      "def": 716,
      "spd": 111,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 16%",
    "skillNames": [
      "Gathering Inferno",
      "Bident Mastery",
      "Demonic Explosives"
    ]
  },
  {
    "name": "Malkith Bloodflock",
    "image": "",
    "imageHint": "Malkith",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1079,
      "def": 1123,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 50",
    "skillNames": [
      "Deathplume",
      "Hemobomb",
      "Blood Transfusion"
    ]
  },
  {
    "name": "Maneater",
    "image": "",
    "imageHint": "Maneater",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20310,
      "atk": 837,
      "def": 1112,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 33%",
    "skillNames": [
      "Pummel",
      "Syphon",
      "Ancient Blood"
    ]
  },
  {
    "name": "Maranix",
    "image": "",
    "imageHint": "Maranix",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1487,
      "def": 1068,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Reaper's Due",
      "Excruciate",
      "Inexorable End",
      "Death's Collector [P]"
    ]
  },
  {
    "name": "Marauder",
    "image": "",
    "imageHint": "Marauder",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21810,
      "atk": 749,
      "def": 826,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 15%",
    "skillNames": [
      "Kanabo Jutsu",
      "Reckless Sweep",
      "Roaring Challenge"
    ]
  },
  {
    "name": "Margrave Greenhawk",
    "image": "",
    "imageHint": "Margrave",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 760,
      "def": 980,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hawktalon",
      "Emotionless Rampage",
      "Living Barricade"
    ]
  },
  {
    "name": "Marichka the Unbreakable",
    "image": "",
    "imageHint": "Marichka",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21810,
      "atk": 892,
      "def": 1233,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battles by 24%",
    "skillNames": [
      "United We Triumph",
      "Font of Tenacity",
      "Nurtured Friendship",
      "Giving All [P]"
    ]
  },
  {
    "name": "Marius the Gallant",
    "image": "",
    "imageHint": "Marius",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 19815,
      "atk": 716,
      "def": 1542,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 35%",
    "skillNames": [
      "Auric Lance",
      "Death or Glory",
      "Galloping Thunder",
      "Steadfast Knight [P]"
    ]
  },
  {
    "name": "Marked",
    "image": "",
    "imageHint": "Marked",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 892,
      "def": 848,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 15%",
    "skillNames": [
      "Dance of Blades",
      "Punishment of Gods",
      "Totemic Power"
    ]
  },
  {
    "name": "Marksman",
    "image": "",
    "imageHint": "Marksman",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1432,
      "def": 892,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 20%",
    "skillNames": [
      "Venom Arrow",
      "Impressive Shot",
      "Thorns"
    ]
  },
  {
    "name": "Marquess",
    "image": "",
    "imageHint": "Marquess",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 870,
      "def": 1013,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 15%",
    "skillNames": [
      "Disdainful Swipe",
      "Crush the Weak",
      "Freeze Solid"
    ]
  },
  {
    "name": "Marquis",
    "image": "",
    "imageHint": "Marquis",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 892,
      "def": 1013,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Force Ally HP in All Battles by 18%",
    "skillNames": [
      "Skewer",
      "Infernal Skill",
      "Paralyzing Bolts"
    ]
  },
  {
    "name": "Martyr",
    "image": "",
    "imageHint": "Martyr",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 826,
      "def": 1409,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "Rush",
      "Bastion of Faith",
      "Suppression"
    ]
  },
  {
    "name": "Masahiro the Bell Monk",
    "image": "",
    "imageHint": "Masahiro",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 24450,
      "atk": 782,
      "def": 1167,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Force Ally SPD in all Battles by 25%",
    "skillNames": [
      "Ring Of Dissonance",
      "Redemptive Fervor",
      "Humble Savior",
      "For My Sins [P]"
    ]
  },
  {
    "name": "Masamoto",
    "image": "",
    "imageHint": "Masamoto",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 870,
      "def": 1365,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Dual Slice",
      "Steel Typhoon",
      "Yojimbo"
    ]
  },
  {
    "name": "Masked Fearmonger",
    "image": "",
    "imageHint": "Fearmonger",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1398,
      "def": 1024,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Nightmare",
      "Haunted Machete",
      "Well-Used Axe",
      "Taste of Despair [P]"
    ]
  },
  {
    "name": "Master Butcher",
    "image": "",
    "imageHint": "Master-Butcher",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 848,
      "def": 947,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mash",
      "Barking Orders",
      "Heat Exchange [P]",
      "Pyre [P]"
    ]
  },
  {
    "name": "Mathias Blackflail",
    "image": "",
    "imageHint": "Mathias",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22965,
      "atk": 914,
      "def": 1134,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Darken the Sky",
      "Deathwhirl",
      "Face the Blackflail!",
      "Red Mist [P]"
    ]
  },
  {
    "name": "Matriarch Zarguna",
    "image": "",
    "imageHint": "Zarguna",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22800,
      "atk": 969,
      "def": 1090,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 30%",
    "skillNames": [
      "Battlethrum",
      "Clanmother",
      "Maternal Force",
      "Refuge From Pain [P]"
    ]
  },
  {
    "name": "Maulie Tankard",
    "image": "",
    "imageHint": "Maulie",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 881,
      "def": 1465,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 80,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Roast",
      "Bar Brawl",
      "Cheers!",
      "Rowdy Crowd [P]"
    ]
  },
  {
    "name": "Mausoleum Mage",
    "image": "",
    "imageHint": "Mausoleum-Mage",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 1057,
      "def": 947,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Soul Manacles",
      "Might of Undeath",
      "Winds of Purging"
    ]
  },
  {
    "name": "Mavara the Web Diviner",
    "image": "",
    "imageHint": "Mavara",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 892,
      "def": 1200,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Strike On My Mark",
      "Nexus Of Silk",
      "The Webs Whisper",
      "Theridine Visions [P]"
    ]
  },
  {
    "name": "Meatcarver Tolog",
    "image": "",
    "imageHint": "Tolog",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 672,
      "def": 980,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Jagged Cut",
      "Butcher's Block",
      "Reviving Stew",
      "Feed the Herd [P]"
    ]
  },
  {
    "name": "Medicus",
    "image": "",
    "imageHint": "Medicus",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1046,
      "def": 881,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Dual Scalpel",
      "Restraints",
      "Stimulant Elixir"
    ]
  },
  {
    "name": "Melga Steelgirdle",
    "image": "",
    "imageHint": "Melga",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 947,
      "def": 991,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 15%",
    "skillNames": [
      "Inspiring Violence",
      "Sheer Grit",
      "Glorious Return"
    ]
  },
  {
    "name": "Merouka",
    "image": "",
    "imageHint": "Merouka",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 771,
      "def": 1288,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Tarfield Affliction",
      "Badlands Witchery",
      "Return From The Slime",
      "Springy [P]"
    ]
  },
  {
    "name": "Metalshaper",
    "image": "",
    "imageHint": "Metalshaper",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 859,
      "def": 1079,
      "spd": 90,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 15%",
    "skillNames": [
      "Transference Bolt",
      "Fortified Steel",
      "Rescue"
    ]
  },
  {
    "name": "Mezomel Luperfang",
    "image": "",
    "imageHint": "Mezomel",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1652,
      "def": 1090,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 27%",
    "skillNames": [
      "Moonclaw",
      "Scarlet Crescent",
      "Moonlight Gift",
      "Metamorph",
      "Relentless Hunt [P]"
    ]
  },
  {
    "name": "Mezomel Luperfang",
    "image": "",
    "imageHint": "Mezomel",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1652,
      "def": 1090,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 27%",
    "skillNames": [
      "Spirit of the Pack",
      "Life Shredder",
      "Metamorph",
      "Embrace the Beast [P]"
    ]
  },
  {
    "name": "Michelangelo",
    "image": "",
    "imageHint": "Michelangelo",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15360,
      "atk": 1520,
      "def": 1035,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 70",
    "skillNames": [
      "Boo-Yah!",
      "Express Delivery!",
      "Shell Cyclone",
      "Party Dude [P]"
    ]
  },
  {
    "name": "Michinaki",
    "image": "",
    "imageHint": "Michinaki",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 804,
      "def": 1465,
      "spd": 101,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "Burning Bonds",
      "Dire Whorl",
      "Doubled Degeneracy",
      "Courser of Curses [P]"
    ]
  },
  {
    "name": "Mighty Ukko",
    "image": "",
    "imageHint": "Ukko",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 1233,
      "def": 1112,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%",
    "skillNames": [
      "Ukko Smash",
      "Ukko's Fury",
      "Ukko's Mercy",
      "Totem Warden [P]"
    ]
  },
  {
    "name": "Militia",
    "image": "",
    "imageHint": "Militia",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1178,
      "def": 694,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Headshot",
      "Piercing Bolt"
    ]
  },
  {
    "name": "Minaya",
    "image": "",
    "imageHint": "Minaya",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 1002,
      "def": 1134,
      "spd": 111,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battles by 19%",
    "skillNames": [
      "Graceful Guide",
      "Mending Ways",
      "Beauty's Allure",
      "Lover's Sacrifice [P]"
    ]
  },
  {
    "name": "Miscreated Monster",
    "image": "",
    "imageHint": "Miscreated-Monster",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22965,
      "atk": 958,
      "def": 815,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Arena by 33%",
    "skillNames": [
      "Meaty Fists",
      "Lightning Storm",
      "It's Alive",
      "Spooky Groan [P]"
    ]
  },
  {
    "name": "Misericord",
    "image": "",
    "imageHint": "Misericord",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12060,
      "atk": 1365,
      "def": 859,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Pity Slaying",
      "Stay Vigilant",
      "Bitter Tears"
    ]
  },
  {
    "name": "Missionary",
    "image": "",
    "imageHint": "Missionary",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 969,
      "def": 1035,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 33%",
    "skillNames": [
      "Crashing Halberd",
      "In the Thick",
      "Humble the Faithless"
    ]
  },
  {
    "name": "Mistress of Hymns",
    "image": "",
    "imageHint": "Mistress",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 1024,
      "def": 1013,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%",
    "skillNames": [
      "Bolstering Blow",
      "Song of Triumph",
      "Hymn of Rebirth"
    ]
  },
  {
    "name": "Mistrider Daithi",
    "image": "",
    "imageHint": "Daithi",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1376,
      "def": 903,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Briar Arrows",
      "Squall of Shafts",
      "Hunt The Mists"
    ]
  },
  {
    "name": "Mithrala Lifebane",
    "image": "",
    "imageHint": "Mithrala",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 20310,
      "atk": 870,
      "def": 1354,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Libation of Pain",
      "Sigil of Toxic Glory",
      "Brimming Cylix",
      "Gaze of Stone [P]"
    ]
  },
  {
    "name": "Modo of the Peal",
    "image": "",
    "imageHint": "Modo",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1498,
      "def": 1057,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Skull Clapper",
      "Ear-Splitter",
      "Peal of Breaking",
      "Beloved Companion [P]"
    ]
  },
  {
    "name": "Morag Bronzelock",
    "image": "",
    "imageHint": "Morag",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 804,
      "def": 1288,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Raw Iron Slab",
      "Outrage",
      "Raider Captain",
      "Test This Might [P]"
    ]
  },
  {
    "name": "Mordecai",
    "image": "",
    "imageHint": "Mordecai",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1244,
      "def": 1156,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Purgatory",
      "Time's Undoing",
      "Heavenly Flames"
    ]
  },
  {
    "name": "Morrigaine",
    "image": "",
    "imageHint": "Morrigaine",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19815,
      "atk": 1068,
      "def": 1189,
      "spd": 112,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Haunt With Hesitation",
      "Shriek of the Banshee",
      "Velocimancy",
      "She Who Is Death [P]"
    ]
  },
  {
    "name": "Mortu-Macaab",
    "image": "",
    "imageHint": "Mortu-Macaab",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23130,
      "atk": 1145,
      "def": 892,
      "spd": 94,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 24%",
    "skillNames": [
      "Stigmata",
      "Falling from Grace",
      "Peril",
      "Fiery Rage [P]"
    ]
  },
  {
    "name": "Mother Cybele",
    "image": "",
    "imageHint": "Cybele",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 969,
      "def": 1343,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 24%",
    "skillNames": [
      "Mask of Dread",
      "Soul Shepherd",
      "Uncanny Transfer",
      "Gravewalker [P]"
    ]
  },
  {
    "name": "Mother Superior",
    "image": "",
    "imageHint": "Mother-Superior",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 991,
      "def": 947,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 13%",
    "skillNames": [
      "Lightning Sanction",
      "Fill With Blessing",
      "Brim With Life"
    ]
  },
  {
    "name": "Mountain King",
    "image": "",
    "imageHint": "Mountain-King",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 31050,
      "atk": 1432,
      "def": 1112,
      "spd": 95,
      "crate": 15,
      "cdmg": 63.0,
      "res": 90,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 25%",
    "skillNames": [
      "Thunder Cleave",
      "Enchanted Axe",
      "Regal Force",
      "Fabled Skill [P]"
    ]
  },
  {
    "name": "Muckstalker",
    "image": "",
    "imageHint": "Muckstalker",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 903,
      "def": 760,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 22%",
    "skillNames": [
      "Pounce",
      "Strangle",
      "Herbal Balm [P]"
    ]
  },
  {
    "name": "Myciliac Priest Orn",
    "image": "",
    "imageHint": "Orn",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20310,
      "atk": 760,
      "def": 1189,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Spore Stick",
      "Erupting Growths",
      "The Colony Expands",
      "Mycelium [P]"
    ]
  },
  {
    "name": "Mycolus",
    "image": "",
    "imageHint": "Mycolus",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 892,
      "def": 1079,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 21%",
    "skillNames": [
      "Vigor Spores",
      "Fungal Privilege",
      "Absorbtion Roots [P]"
    ]
  },
  {
    "name": "Myrmidon",
    "image": "",
    "imageHint": "Myrmidon",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 804,
      "def": 1222,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 20%",
    "skillNames": [
      "Bone Splitter",
      "Disarm Sweep",
      "In Their Midst"
    ]
  },
  {
    "name": "Mystic Hand",
    "image": "",
    "imageHint": "Mystic-Hand",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 804,
      "def": 1123,
      "spd": 88,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 25%",
    "skillNames": [
      "Tainted Blade",
      "Turn the Tide",
      "Soul Link"
    ]
  },
  {
    "name": "Nais the Shadowthief",
    "image": "",
    "imageHint": "Nais",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 1663,
      "def": 859,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Allpiercer",
      "Blackfeather Barrage",
      "Thief's Omen",
      "Metamorph",
      "Glinting Saviour [P]"
    ]
  },
  {
    "name": "Nais the Shadowthief",
    "image": "",
    "imageHint": "Nais",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 24780,
      "atk": 881,
      "def": 1321,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Fae Talons",
      "Murder of Crows",
      "Feathershield",
      "Metamorph",
      "Fae Intervention [P]"
    ]
  },
  {
    "name": "Nari the Lucky",
    "image": "",
    "imageHint": "Nari",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 804,
      "def": 1487,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Wee Filcher",
      "Rainbow of Woe",
      "Irresistible Wealth",
      "Joyful Song [P]"
    ]
  },
  {
    "name": "Narma the Returned",
    "image": "",
    "imageHint": "Narma",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19815,
      "atk": 1002,
      "def": 1255,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 80",
    "skillNames": [
      "Hell Crescent",
      "Weirding Dance",
      "Toxin Trance",
      "Caustic Rebuttal [P]"
    ]
  },
  {
    "name": "Nazana",
    "image": "",
    "imageHint": "Nazana",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 859,
      "def": 1013,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 28%",
    "skillNames": [
      "Dark Lance",
      "Unholy Contract",
      "Steel Breaker"
    ]
  },
  {
    "name": "Necrohunter",
    "image": "",
    "imageHint": "Necrohunter",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1398,
      "def": 1068,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 19%",
    "skillNames": [
      "Crypt Arrows",
      "Gravestorm",
      "Tomb Stalker"
    ]
  },
  {
    "name": "Nekhret the Great",
    "image": "",
    "imageHint": "Nekhret",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 793,
      "def": 1354,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 60",
    "skillNames": [
      "Tomb Glaive",
      "Legion of the Damned",
      "Disturbing Infusion",
      "Unsleeping Aegis [P]",
      "Arise My Minions [P]"
    ]
  },
  {
    "name": "Nekmo Thaar",
    "image": "",
    "imageHint": "Nekmo",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 1233,
      "def": 1189,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 30
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Steelmelt Acid",
      "Planar Chains",
      "Speed Weirding",
      "Rune of Haste [P]"
    ]
  },
  {
    "name": "Neldor Rimeblade",
    "image": "",
    "imageHint": "Neldor",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1343,
      "def": 980,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Frost Piercer",
      "Dancing Razor",
      "Chromatic Cross",
      "Coldblooded Drive [P]"
    ]
  },
  {
    "name": "Nell Blackteeth",
    "image": "",
    "imageHint": "Nell",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23130,
      "atk": 1013,
      "def": 1299,
      "spd": 112,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 100",
    "skillNames": [
      "Entrapment",
      "Soporific Musk",
      "Sickle of Corruption",
      "Metamorph",
      "Blackteeth's Buffet [P]"
    ]
  },
  {
    "name": "Nell Blackteeth",
    "image": "",
    "imageHint": "Nell",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 1542,
      "def": 1156,
      "spd": 112,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 100",
    "skillNames": [
      "Bellyslash",
      "Cut 'Em Up",
      "Feast of Terror",
      "Metamorph",
      "Ravenous Hunger [P]"
    ]
  },
  {
    "name": "Nethril",
    "image": "",
    "imageHint": "Nethril",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1454,
      "def": 991,
      "spd": 94,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Blood Harvest",
      "Ghastly Horrors",
      "Bat Swarm"
    ]
  },
  {
    "name": "Niamhe, Spear of Nyresa",
    "image": "",
    "imageHint": "Niamhe",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 782,
      "def": 1531,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 35%",
    "skillNames": [
      "Woodspear",
      "Cerulean Guard",
      "Jeweled Leaf",
      "Shield-Mistress [P]"
    ]
  },
  {
    "name": "Night Queen Krixia",
    "image": "",
    "imageHint": "Krixia",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 1189,
      "def": 1266,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 80",
    "skillNames": [
      "Swordspear Slash",
      "Doom Lantern",
      "Deathly Apparition",
      "Metamorph",
      "Shadowvigil [P]"
    ]
  },
  {
    "name": "Night Queen Krixia",
    "image": "",
    "imageHint": "Krixia",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 1189,
      "def": 1266,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 80",
    "skillNames": [
      "Bladewing",
      "Rain of Damnation",
      "Nightpurge",
      "Metamorph",
      "Queen of the Dark [P]"
    ]
  },
  {
    "name": "Ninja",
    "image": "",
    "imageHint": "Ninja",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 16845,
      "atk": 1509,
      "def": 947,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shatterbolt",
      "Hailburn",
      "Cyan Slash",
      "Escalation [P]"
    ]
  },
  {
    "name": "Nobel",
    "image": "",
    "imageHint": "Nobel",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1553,
      "def": 1035,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Smell Fear",
      "Harbinger",
      "Dismay",
      "Desolation [P]"
    ]
  },
  {
    "name": "Noct the Paralyzer",
    "image": "",
    "imageHint": "Noct",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22470,
      "atk": 826,
      "def": 1255,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 35%",
    "skillNames": [
      "Haze Of Pain",
      "Dreamer's Demise",
      "Heady Fumes",
      "Somnolence [P]"
    ]
  },
  {
    "name": "Nogdar the Headhunter",
    "image": "",
    "imageHint": "Nogdar",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12060,
      "atk": 1696,
      "def": 1079,
      "spd": 96,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Brutal Verdict",
      "Gore Feast",
      "Last Rites",
      "Headsman's Return [P]"
    ]
  },
  {
    "name": "Nogoryo",
    "image": "",
    "imageHint": "Nogoryo",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1376,
      "def": 815,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Double Kamas",
      "Abduct By Night",
      "Faster Than The Eye",
      "Murderer's Lust [P]"
    ]
  },
  {
    "name": "Noldua the Gloaming",
    "image": "",
    "imageHint": "Noldua",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 914,
      "def": 1288,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Shadestrike",
      "Umbral Purge",
      "Moonbloom's Blessing",
      "Scholar Of Shadows [P]"
    ]
  },
  {
    "name": "Norog",
    "image": "",
    "imageHint": "Norog",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 1156,
      "def": 1299,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 40%",
    "skillNames": [
      "Maul",
      "Ice Pillar",
      "Thick Skin [P]"
    ]
  },
  {
    "name": "Novitiate",
    "image": "",
    "imageHint": "Novitiate",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10245,
      "atk": 892,
      "def": 628,
      "spd": 83,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Harrying Shot"
    ]
  },
  {
    "name": "Oathbound",
    "image": "",
    "imageHint": "Oathbound",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 782,
      "def": 1299,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shatter",
      "Subjugate",
      "Intimidate"
    ]
  },
  {
    "name": "Oboro",
    "image": "",
    "imageHint": "Oboro",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1454,
      "def": 826,
      "spd": 101,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 33%",
    "skillNames": [
      "Spreading Chaos",
      "Mystic Smoke",
      "Ninja Arts",
      "Vanish [P]"
    ]
  },
  {
    "name": "Occult Brawler",
    "image": "",
    "imageHint": "Occult-Brawler",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 1101,
      "def": 826,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sorcerous Razor",
      "Curse Eater",
      "Ruination Ritual [P]"
    ]
  },
  {
    "name": "Odachi",
    "image": "",
    "imageHint": "Odachi",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 848,
      "def": 1167,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 25%",
    "skillNames": [
      "Showy Slice",
      "Great Sword",
      "Keeper"
    ]
  },
  {
    "name": "Odin Faefather",
    "image": "",
    "imageHint": "Odin",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1002,
      "def": 1321,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Void Ally SPD in Arena by 40%",
    "skillNames": [
      "Sting of Gungnir",
      "Storm of Familiars",
      "Asgardian Judgment",
      "Odin's Wisdom [P]"
    ]
  },
  {
    "name": "Oella",
    "image": "",
    "imageHint": "Oella",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21135,
      "atk": 980,
      "def": 1189,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Dungeons by 75",
    "skillNames": [
      "Flutter Fluster",
      "Hand of Spring",
      "Morphosis",
      "Untrammeled [P]"
    ]
  },
  {
    "name": "Ogryn Jailer",
    "image": "",
    "imageHint": "Jailer",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11235,
      "atk": 1299,
      "def": 980,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 20",
    "skillNames": [
      "Lockdown",
      "Confiscate",
      "Reprisal"
    ]
  },
  {
    "name": "Old Ghrukkus",
    "image": "",
    "imageHint": "Ghrukkus",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1079,
      "def": 1090,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 24%",
    "skillNames": [
      "Beating Staff",
      "Toe the Line",
      "Harsh Discipline"
    ]
  },
  {
    "name": "Old Hermit Jorrg",
    "image": "",
    "imageHint": "Jorrg",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1134,
      "def": 1079,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Putrid Brazier",
      "Heroes of Old",
      "Ghostwalk"
    ]
  },
  {
    "name": "Oldbeard",
    "image": "",
    "imageHint": "Oldbeard",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 716,
      "def": 1101,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Gut Punch",
      "Outlast"
    ]
  },
  {
    "name": "Onryo Ieyasu",
    "image": "",
    "imageHint": "Ieyasu",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1630,
      "def": 1002,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 35%",
    "skillNames": [
      "Exorcism Cutter",
      "Violent Purification",
      "Final Vengeance",
      "Onryo's Duty [P]"
    ]
  },
  {
    "name": "Opardin Clanfather",
    "image": "",
    "imageHint": "Opardin",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22470,
      "atk": 870,
      "def": 1211,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Paired Hammers",
      "Rally the Tribe",
      "Clan Mentor",
      "Paternal [P]"
    ]
  },
  {
    "name": "Ordinator",
    "image": "",
    "imageHint": "Ordinator",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1321,
      "def": 793,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Weighty Punishment",
      "Obedience Collars",
      "Enforcer [P]"
    ]
  },
  {
    "name": "Osgrun the Defiler",
    "image": "",
    "imageHint": "Osgrun",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19815,
      "atk": 1156,
      "def": 1101,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Obsidian Blade",
      "Magicks of Ireth",
      "To Death, Unsurrendered",
      "Dark Whisperings [P]"
    ]
  },
  {
    "name": "Ostrox Boneglaive",
    "image": "",
    "imageHint": "Ostrox",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1167,
      "def": 1035,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Pain Reversal",
      "Spinal Surge",
      "Death Perception",
      "Skeletal Mirror [P]"
    ]
  },
  {
    "name": "Outlander",
    "image": "",
    "imageHint": "Outlander",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 9255,
      "atk": 1299,
      "def": 837,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Savage Strike",
      "Talisman of Power"
    ]
  },
  {
    "name": "Outlaw Monk",
    "image": "",
    "imageHint": "Outlaw-Monk",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1244,
      "def": 694,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Dagger Throw",
      "Foul Play"
    ]
  },
  {
    "name": "Outrider",
    "image": "",
    "imageHint": "Outrider",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12390,
      "atk": 1112,
      "def": 815,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bodkin",
      "Fire Arrow",
      "Salvo"
    ]
  },
  {
    "name": "Ox",
    "image": "",
    "imageHint": "Ox",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1167,
      "def": 1046,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 18%",
    "skillNames": [
      "Onrush",
      "Shatter Defenses",
      "Destroy Confidence"
    ]
  },
  {
    "name": "Packmaster Shy'ek",
    "image": "",
    "imageHint": "Shyek",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 870,
      "def": 1222,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Kill Command",
      "Pack Alpha",
      "Blood Howl",
      "We Hunt As One [P]"
    ]
  },
  {
    "name": "Pain Keeper",
    "image": "",
    "imageHint": "Pain-Keeper",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 969,
      "def": 771,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 21%",
    "skillNames": [
      "Unflagging Advance",
      "Spectacular Sweep",
      "Combat Tactics"
    ]
  },
  {
    "name": "Painsmith",
    "image": "",
    "imageHint": "Painsmith",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1277,
      "def": 815,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 45,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 21%",
    "skillNames": [
      "Pickaxe Crunch",
      "Utter Destruction",
      "Helpless Victim"
    ]
  },
  {
    "name": "Pann the Bowhorn",
    "image": "",
    "imageHint": "Pann",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1443,
      "def": 903,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 20%",
    "skillNames": [
      "Cryoslash",
      "Emerald Salvo",
      "Woodland Specter"
    ]
  },
  {
    "name": "Panthera",
    "image": "",
    "imageHint": "Panthera",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1277,
      "def": 848,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 40",
    "skillNames": [
      "Claws Upon Claws",
      "Devitalize",
      "Vanish to Shadows"
    ]
  },
  {
    "name": "Paragon",
    "image": "",
    "imageHint": "Paragon",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 958,
      "def": 1112,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Power Drain",
      "Damage Control",
      "Life Shackles"
    ]
  },
  {
    "name": "Pathfinder Cait",
    "image": "",
    "imageHint": "Cait",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11895,
      "atk": 1288,
      "def": 947,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Dragging Line",
      "Untraceable",
      "Hidden Paths [P]"
    ]
  },
  {
    "name": "Pelagus the Wavewalker",
    "image": "",
    "imageHint": "Pelagus",
    "faction": "Argonites",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20805,
      "atk": 848,
      "def": 1343,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Wavethrust",
      "Rip Current",
      "Relentless Tide",
      "Crushing Depths [P]"
    ]
  },
  {
    "name": "Pelops the Victor",
    "image": "",
    "imageHint": "Pelops",
    "faction": "Argonites",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22800,
      "atk": 749,
      "def": 1310,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in all battles by 60",
    "skillNames": [
      "Triumphant Blow",
      "Gorgoa's Bane",
      "Victor's Bounty",
      "Master of Games [P]"
    ]
  },
  {
    "name": "Penitent",
    "image": "",
    "imageHint": "Penitent",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 793,
      "def": 1244,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sword of Faith",
      "Counter",
      "Unshakable Faith"
    ]
  },
  {
    "name": "Perforator",
    "image": "",
    "imageHint": "Perforator",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1277,
      "def": 804,
      "spd": 86,
      "crate": 15,
      "cdmg": 57.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Vermin Slayer",
      "Hardened Tips",
      "Scare Off [P]"
    ]
  },
  {
    "name": "Pestilus",
    "image": "",
    "imageHint": "Pestilus",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 848,
      "def": 1112,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Doom Tower by 50",
    "skillNames": [
      "Blood Call",
      "Flames Within",
      "Battle Weirding"
    ]
  },
  {
    "name": "Petrifya Rockroot",
    "image": "",
    "imageHint": "Petrifya",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 1288,
      "def": 848,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 30",
    "skillNames": [
      "Flint Hail",
      "Desiccation",
      "Rot Pulse"
    ]
  },
  {
    "name": "Peydma",
    "image": "",
    "imageHint": "Peydma",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 826,
      "def": 1299,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Agonize",
      "Flesh Warp",
      "Appropriate"
    ]
  },
  {
    "name": "Pharsalas Gravedirt",
    "image": "",
    "imageHint": "Pharsalas",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 892,
      "def": 1167,
      "spd": 90,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 30%",
    "skillNames": [
      "Grasp of the Grave",
      "Necrosis",
      "Coffin Bulwark",
      "Unhinged [P]"
    ]
  },
  {
    "name": "Pheidi Tealcrest",
    "image": "",
    "imageHint": "Pheidi",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22965,
      "atk": 958,
      "def": 1090,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 80",
    "skillNames": [
      "Zephyr Lance",
      "On Teal Wings",
      "Sky Mirage",
      "Dracospeed [P]"
    ]
  },
  {
    "name": "Phemo the Shepherd",
    "image": "",
    "imageHint": "Phemo",
    "faction": "Argonites",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 870,
      "def": 1520,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 30%",
    "skillNames": [
      "Hammer Of Stone",
      "Good Shepherd",
      "Smash And Stomp",
      "Vengeful Quest [P]"
    ]
  },
  {
    "name": "Phranox",
    "image": "",
    "imageHint": "Phranox",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1409,
      "def": 936,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Carve Through",
      "Tender Mercies",
      "Isolate"
    ]
  },
  {
    "name": "Pigsticker",
    "image": "",
    "imageHint": "Pigsticker",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 1332,
      "def": 804,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Doom Tower by 21%",
    "skillNames": [
      "Vile Substance",
      "Heartless Curse",
      "Septic Spearhead"
    ]
  },
  {
    "name": "Pikeman",
    "image": "",
    "imageHint": "Pikeman",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Common",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11235,
      "atk": 595,
      "def": 859,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Run Through"
    ]
  },
  {
    "name": "Pilgrim",
    "image": "",
    "imageHint": "Pilgrim",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 793,
      "def": 969,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Thunder Strike",
      "Pilgrim's Shield"
    ]
  },
  {
    "name": "Pit Cur",
    "image": "",
    "imageHint": "Pit-Cur",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 826,
      "def": 881,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hamstring Bite",
      "Rabid Infection"
    ]
  },
  {
    "name": "Pit Fighter",
    "image": "",
    "imageHint": "Pit-Fighter",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 892,
      "def": 782,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "True Strike",
      "Gust of Dust"
    ]
  },
  {
    "name": "Pitiless One",
    "image": "",
    "imageHint": "Pitiless-One",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1443,
      "def": 771,
      "spd": 94,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 19%",
    "skillNames": [
      "Split Arrow",
      "Projectile Burst",
      "Agony Bonds [P]"
    ]
  },
  {
    "name": "Pitspawn",
    "image": "",
    "imageHint": "Pitspawn",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 881,
      "def": 969,
      "spd": 86,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Evil Touch",
      "Darkness"
    ]
  },
  {
    "name": "Polara Fireheart",
    "image": "",
    "imageHint": "Polara",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15195,
      "atk": 1509,
      "def": 1332,
      "spd": 104,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 40%",
    "skillNames": [
      "Burning Zeal",
      "Faithful Conflagration",
      "Pyro Maxima",
      "Metamorph",
      "Elemental Mistress [P]"
    ]
  },
  {
    "name": "Polara Fireheart",
    "image": "",
    "imageHint": "Polara",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17835,
      "atk": 1123,
      "def": 1542,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 40%",
    "skillNames": [
      "Glacial Carve",
      "Frozen Tendrils",
      "Iceblade Tempest",
      "Metamorph",
      "Cryomantic Revival [P]"
    ]
  },
  {
    "name": "Pontiff Augustin",
    "image": "",
    "imageHint": "Augustin",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 21810,
      "atk": 947,
      "def": 1178,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all battles by 24%",
    "skillNames": [
      "Edenic Blades",
      "Shackle The Unjust",
      "Ethereal Benediction",
      "Your Eminence [P]"
    ]
  },
  {
    "name": "Pounder",
    "image": "",
    "imageHint": "Pounder",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 859,
      "def": 1200,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Magic Ally ATK in All Battles by 20%",
    "skillNames": [
      "Bonebreaker",
      "Spreading Ice",
      "Tower of Power [P]"
    ]
  },
  {
    "name": "Praeva the Slitherer",
    "image": "",
    "imageHint": "Praeva",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 947,
      "def": 1167,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%",
    "skillNames": [
      "Bolt of Affliction",
      "Malignant Energy",
      "Seed of Corruption",
      "Sacrificial Servant [P]"
    ]
  },
  {
    "name": "Preacher",
    "image": "",
    "imageHint": "Preacher",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Common",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10080,
      "atk": 837,
      "def": 694,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Holy Blow"
    ]
  },
  {
    "name": "Predator",
    "image": "",
    "imageHint": "Predator",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 25770,
      "atk": 716,
      "def": 1145,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Arena battles by 35%",
    "skillNames": [
      "Wrist Blades",
      "Smart Disc",
      "Combistick Throw",
      "Yautja Cloak [P]"
    ]
  },
  {
    "name": "Preserver",
    "image": "",
    "imageHint": "Preserver",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 771,
      "def": 1167,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 17%",
    "skillNames": [
      "Exhausting Assault",
      "Recuperate",
      "Ice Blow"
    ]
  },
  {
    "name": "Prince Kymar",
    "image": "",
    "imageHint": "Kymar",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 1046,
      "def": 1266,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 30%",
    "skillNames": [
      "Phantom Fire",
      "Abyssal Gaze",
      "Seal of Magic"
    ]
  },
  {
    "name": "Prosecutor",
    "image": "",
    "imageHint": "Prosecutor",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1288,
      "def": 837,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sap Initiative",
      "Halt Proceedings",
      "Prosecute"
    ]
  },
  {
    "name": "Prundar",
    "image": "",
    "imageHint": "Prundar",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 683,
      "def": 1409,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Doom Tower by 30%",
    "skillNames": [
      "Flaming Pigsticker",
      "Hulking Tantrum",
      "Giant Strength",
      "Trash Talk [P]"
    ]
  },
  {
    "name": "Psylar",
    "image": "",
    "imageHint": "Psylar",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1123,
      "def": 969,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 22%",
    "skillNames": [
      "Surge",
      "Toxic Cloud",
      "Leaden Legs"
    ]
  },
  {
    "name": "Purgator",
    "image": "",
    "imageHint": "Purgator",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 1409,
      "def": 727,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Doom Inescapable",
      "Great Purge",
      "Humble the Heathen"
    ]
  },
  {
    "name": "Pythion",
    "image": "",
    "imageHint": "Pythion",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21135,
      "atk": 870,
      "def": 1299,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 60",
    "skillNames": [
      "Rapacious Staff",
      "Shed Skin",
      "Immortal Serpent",
      "Overlay [P]"
    ]
  },
  {
    "name": "Pyxniel",
    "image": "",
    "imageHint": "Pyxniel",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1090,
      "def": 1233,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "RES",
    "auraText": "\nIncreases Ally RES in all Battles by 60",
    "skillNames": [
      "Mistress of Glamours",
      "Grip of Winter",
      "Icicle Barrage",
      "Frostweaver [P]"
    ]
  },
  {
    "name": "Quaestor",
    "image": "",
    "imageHint": "Quaestor",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1288,
      "def": 859,
      "spd": 95,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Undaunted Assault",
      "Guiding Example",
      "Depletion"
    ]
  },
  {
    "name": "Quargan the Crowned",
    "image": "",
    "imageHint": "Quargan",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17670,
      "atk": 903,
      "def": 1222,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Nature's Cycle",
      "Overgrowth",
      "Attunement"
    ]
  },
  {
    "name": "Queen Eva",
    "image": "",
    "imageHint": "Eva",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1696,
      "def": 837,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 19%",
    "skillNames": [
      "Cauterize",
      "Ancient Curse",
      "Energy Drain"
    ]
  },
  {
    "name": "Queen of Hearts",
    "image": "",
    "imageHint": "Queen-of-Hearts",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 1189,
      "def": 1200,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Heartburst",
      "Off With Their Heads!",
      "Queenly Command",
      "Hail To The Queen [P]"
    ]
  },
  {
    "name": "Quintus the Triumphant",
    "image": "",
    "imageHint": "Quintus",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15030,
      "atk": 1608,
      "def": 969,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 35%",
    "skillNames": [
      "Encore Performance",
      "Strip Away",
      "Crowd Favorite",
      "Percussion [P]"
    ]
  },
  {
    "name": "R. Nergigante Archer",
    "image": "",
    "imageHint": "Nergigante",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18990,
      "atk": 848,
      "def": 1465,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 30%",
    "skillNames": [
      "Charged Shot",
      "Spinning Shot",
      "Rapid Shot",
      "Nergigante Ambition [P]"
    ]
  },
  {
    "name": "Rae",
    "image": "",
    "imageHint": "Rae",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1343,
      "def": 1222,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 33%",
    "skillNames": [
      "Corrode",
      "Arcane Wave",
      "Banish"
    ]
  },
  {
    "name": "Raf-Matab",
    "image": "",
    "imageHint": "Raf-Matab",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22965,
      "atk": 870,
      "def": 1178,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 60",
    "skillNames": [
      "Elderspear",
      "Stampede",
      "Shield of the Clans",
      "Brawny Surge [P]"
    ]
  },
  {
    "name": "Ragash",
    "image": "",
    "imageHint": "Ragash",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 936,
      "def": 1443,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "Tiger's Greatclaws",
      "Fur Typhoon",
      "Felid Fleetness",
      "Art of Stealth [P]"
    ]
  },
  {
    "name": "Ragemonger",
    "image": "",
    "imageHint": "Ragemonger",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1211,
      "def": 969,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Campaign by 21%",
    "skillNames": [
      "Recoup",
      "Toxin Flurry",
      "Scorch Shot"
    ]
  },
  {
    "name": "Raglin",
    "image": "",
    "imageHint": "Raglin",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20310,
      "atk": 1156,
      "def": 1068,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 33%",
    "skillNames": [
      "Repent",
      "Mercy",
      "Miracle",
      "Blessed Invocation [P]"
    ]
  },
  {
    "name": "Raider",
    "image": "",
    "imageHint": "Raider",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14205,
      "atk": 1156,
      "def": 925,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 13%",
    "skillNames": [
      "Savagery",
      "Carnage",
      "Dominate"
    ]
  },
  {
    "name": "Rakka Viletide",
    "image": "",
    "imageHint": "Rakka",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 1134,
      "def": 1134,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Ichor of Life",
      "Oozing Blessing",
      "Plasm Rebirth",
      "Creep [P]"
    ]
  },
  {
    "name": "Ramantu Drakesblood",
    "image": "",
    "imageHint": "Ramantu",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15690,
      "atk": 1487,
      "def": 1046,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 80",
    "skillNames": [
      "Psychic Overload",
      "Drake's Fury",
      "Blood Wings",
      "Arrogance [P]"
    ]
  },
  {
    "name": "Ranger",
    "image": "",
    "imageHint": "Ranger",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 815,
      "def": 540,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Pin",
      "Multi-Shot"
    ]
  },
  {
    "name": "Raphael",
    "image": "",
    "imageHint": "Raphael",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 16515,
      "atk": 1498,
      "def": 980,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Sewer Skewer",
      "Saismic Slam",
      "Not Today, Knucklehead!",
      "NYC Beatdown [P]"
    ]
  },
  {
    "name": "Rathalos Blademaster",
    "image": "",
    "imageHint": "Rathalos",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 16185,
      "atk": 1487,
      "def": 1013,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 30%",
    "skillNames": [
      "Spirit Thrust",
      "Spirit Step Slash",
      "Overhead Slash",
      "Rathalos Mastery [P]"
    ]
  },
  {
    "name": "Razelvarg",
    "image": "",
    "imageHint": "Razelvarg",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1520,
      "def": 1057,
      "spd": 110,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%",
    "skillNames": [
      "Hopping Mad",
      "Night of the Rabbit",
      "Keep Up If You Can",
      "Built For Speed [P]"
    ]
  },
  {
    "name": "Rearguard Sergeant",
    "image": "",
    "imageHint": "Rearguard-Sergeant",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 859,
      "def": 1211,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 75,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Force Ally HP in All Battles by 33%",
    "skillNames": [
      "Crushing Impact",
      "Flail Master",
      "Fend Them Off"
    ]
  },
  {
    "name": "Rector Drath",
    "image": "",
    "imageHint": "Drath",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1035,
      "def": 1134,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Doom Tower by 55",
    "skillNames": [
      "Scepter of Authority",
      "Necro Mutation",
      "Spirit Form",
      "Master of Ghosts [P]"
    ]
  },
  {
    "name": "Redcloak Taneko",
    "image": "",
    "imageHint": "Taneko",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 749,
      "def": 1189,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Rapid Sickle",
      "Whistling Blades",
      "Tripwire"
    ]
  },
  {
    "name": "Redeemer",
    "image": "",
    "imageHint": "Redeemer",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1123,
      "def": 815,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Split",
      "Elven Blade"
    ]
  },
  {
    "name": "Reinbeast",
    "image": "",
    "imageHint": "Reinbeast",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 826,
      "def": 1233,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Caning",
      "Open Slay",
      "It Glows"
    ]
  },
  {
    "name": "Relickeeper",
    "image": "",
    "imageHint": "Relickeeper",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1365,
      "def": 980,
      "spd": 90,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Campaign by 40%",
    "skillNames": [
      "Crusade",
      "Surging Strength",
      "Ageless Endurance [P]"
    ]
  },
  {
    "name": "Reliquary Tender",
    "image": "",
    "imageHint": "Reliquary-Tender",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 859,
      "def": 958,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Warden Staff",
      "Tender's Watch",
      "Call to Life"
    ]
  },
  {
    "name": "Renegade",
    "image": "",
    "imageHint": "Renegade",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 1046,
      "def": 749,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 40",
    "skillNames": [
      "Lingering Pain",
      "Lash Out",
      "Sacrificial Ritual"
    ]
  },
  {
    "name": "Renouncer",
    "image": "",
    "imageHint": "Renouncer",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 1255,
      "def": 914,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Redoubled Effort",
      "Shining Sword",
      "Battlefield Grace"
    ]
  },
  {
    "name": "Retainer",
    "image": "",
    "imageHint": "Retainer",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 672,
      "def": 1277,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 19%",
    "skillNames": [
      "Sundering Chop",
      "Resolute Stance",
      "Hypnotize"
    ]
  },
  {
    "name": "Rhazin Scarhide",
    "image": "",
    "imageHint": "Rhazin",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 1046,
      "def": 1310,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 90",
    "skillNames": [
      "Bone Sword",
      "Shear",
      "Bog Down"
    ]
  },
  {
    "name": "Rian the Conjurer",
    "image": "",
    "imageHint": "Rian",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17010,
      "atk": 1002,
      "def": 1167,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Magma Ball",
      "Sweeping Dismissal",
      "Master of Summons"
    ]
  },
  {
    "name": "Richtoff the Bold",
    "image": "",
    "imageHint": "Richtoff",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1398,
      "def": 925,
      "spd": 95,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 27%",
    "skillNames": [
      "Ruination",
      "Bloodletting",
      "Cursehold"
    ]
  },
  {
    "name": "Riho Bonespear",
    "image": "",
    "imageHint": "Riho",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 1189,
      "def": 1145,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 42%",
    "skillNames": [
      "Absorbtion",
      "Pressure Points",
      "Perfect Body",
      "Reflect [P]"
    ]
  },
  {
    "name": "Ripper",
    "image": "",
    "imageHint": "Ripper",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1299,
      "def": 936,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 19%",
    "skillNames": [
      "Scar for Life",
      "No Quarter",
      "Heavy Slam"
    ]
  },
  {
    "name": "Ripperfist",
    "image": "",
    "imageHint": "Ripperfist",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 1398,
      "def": 738,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Mangler Gauntlet",
      "Rip to Shreds",
      "Bloody Mess [P]"
    ]
  },
  {
    "name": "Riscarm",
    "image": "",
    "imageHint": "Riscarm",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 705,
      "def": 1211,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 20%",
    "skillNames": [
      "Thundering Impact",
      "Tower Above",
      "Stand Proud"
    ]
  },
  {
    "name": "Ritualist",
    "image": "",
    "imageHint": "Ritualist",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1068,
      "def": 782,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Power Slash",
      "Wrath of Gods"
    ]
  },
  {
    "name": "Robar",
    "image": "",
    "imageHint": "Robar",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 1619,
      "def": 694,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 50",
    "skillNames": [
      "Stunning Strength",
      "Wild Swing",
      "Merciless Assault"
    ]
  },
  {
    "name": "Rock Breaker",
    "image": "",
    "imageHint": "Rock-Breaker",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 716,
      "def": 1354,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 75,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Arena by 30%",
    "skillNames": [
      "Whirling Hammers",
      "Chest Thump",
      "Iron Hide [P]"
    ]
  },
  {
    "name": "Rockbeast",
    "image": "",
    "imageHint": "Rockbeast",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 892,
      "def": 837,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Arena by 16%",
    "skillNames": [
      "Club",
      "Hunker Down",
      "Bellow"
    ]
  },
  {
    "name": "Rocktooth",
    "image": "",
    "imageHint": "Rocktooth",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1211,
      "def": 782,
      "spd": 101,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Grab",
      "Stomp",
      "Rabble"
    ]
  },
  {
    "name": "Romero",
    "image": "",
    "imageHint": "Romero",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 804,
      "def": 1299,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bring Hope",
      "Succor",
      "Divine Benefaction",
      "Stalwart Partner"
    ]
  },
  {
    "name": "Ronda",
    "image": "",
    "imageHint": "Ronda",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 14865,
      "atk": 1542,
      "def": 1046,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 30%",
    "skillNames": [
      "Flaming Flurry",
      "Phase Rushdown",
      "Fury Tremor",
      "In Your Corner"
    ]
  },
  {
    "name": "Roric Wyrmbane",
    "image": "",
    "imageHint": "Roric",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1641,
      "def": 969,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Wyrmslayer Hammer",
      "Dragon Rage",
      "Scale Breaker",
      "Titan's End [P]"
    ]
  },
  {
    "name": "Roshcard the Tower",
    "image": "",
    "imageHint": "Roshcard",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 24780,
      "atk": 947,
      "def": 980,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Rebuke",
      "Sanction",
      "Zone of Protection"
    ]
  },
  {
    "name": "Rotos the Lost Groom",
    "image": "",
    "imageHint": "Rotos",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11895,
      "atk": 1520,
      "def": 1266,
      "spd": 90,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Terror Scourge",
      "Vitality Plunder",
      "Fated Destruction",
      "Spurn Oblivion [P]"
    ]
  },
  {
    "name": "Rotting Mage",
    "image": "",
    "imageHint": "Rotting-Mage",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1068,
      "def": 870,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 13%",
    "skillNames": [
      "Gelid Beam",
      "Frost Armaments",
      "Mental Overload"
    ]
  },
  {
    "name": "Rowan",
    "image": "",
    "imageHint": "Rowan",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 1487,
      "def": 694,
      "spd": 108,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 50",
    "skillNames": [
      "Slash",
      "Scourge",
      "Blade Surge"
    ]
  },
  {
    "name": "Roxam",
    "image": "",
    "imageHint": "Roxam",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1553,
      "def": 958,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in all battles by 23%",
    "skillNames": [
      "Chroma Shift",
      "Jungle Ambush",
      "Flicker Step",
      "Chameleon [P]"
    ]
  },
  {
    "name": "Royal Guard",
    "image": "",
    "imageHint": "Royal-Guard",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1531,
      "def": 771,
      "spd": 93,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 35%",
    "skillNames": [
      "Razor Blade",
      "Takedown",
      "Hamstring"
    ]
  },
  {
    "name": "Royal Huntsman",
    "image": "",
    "imageHint": "Royal-Huntsman",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1553,
      "def": 936,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Spirit Ally ATK in all Battles by 38%",
    "skillNames": [
      "Confident Shot",
      "Slaughter Volley",
      "Dead Aim"
    ]
  },
  {
    "name": "Ruel the Huntmaster",
    "image": "",
    "imageHint": "Ruel",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1696,
      "def": 980,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 20%",
    "skillNames": [
      "Vile Arrows",
      "Unleash the Hunt",
      "Stalk Prey",
      "Marked Quarry"
    ]
  },
  {
    "name": "Ruella",
    "image": "",
    "imageHint": "Ruella",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1376,
      "def": 870,
      "spd": 112,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 40",
    "skillNames": [
      "Harassment Volley",
      "No Respite",
      "Timed Offensive"
    ]
  },
  {
    "name": "Ruffstone",
    "image": "",
    "imageHint": "Ruffstone",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1354,
      "def": 639,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Round Up",
      "Tender Meat",
      "Slobbering Rush"
    ]
  },
  {
    "name": "Rugnor Goldgleam",
    "image": "",
    "imageHint": "Rugnor",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1409,
      "def": 782,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Doom Tower by 35%",
    "skillNames": [
      "Thirsty Axe",
      "Gold-Mad Frenzy",
      "Gleam of Avarice",
      "Dire Grudge [P]"
    ]
  },
  {
    "name": "Runekeeper Dazdurk",
    "image": "",
    "imageHint": "Dazdurk",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20310,
      "atk": 694,
      "def": 1255,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 25%",
    "skillNames": [
      "Syphon Symbol",
      "Rune of Battle",
      "Purity Sigil"
    ]
  },
  {
    "name": "Runic Warder",
    "image": "",
    "imageHint": "Runic-Warder",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 848,
      "def": 903,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 55,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Twin Chops",
      "Superior Steel",
      "Rune of Outlasting"
    ]
  },
  {
    "name": "Sabrael the Distant",
    "image": "",
    "imageHint": "Sabrael",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23790,
      "atk": 1046,
      "def": 1222,
      "spd": 113,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 33%",
    "skillNames": [
      "Hypnotic Bladework",
      "Perfection In Motion",
      "Sneer of Disdain",
      "Metamorph",
      "Is That... It? [P]"
    ]
  },
  {
    "name": "Sabrael the Distant",
    "image": "",
    "imageHint": "Sabrael",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 1652,
      "def": 969,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 33%",
    "skillNames": [
      "Wrath of Superiority",
      "Pinions of Wrath",
      "You Will Weep",
      "Metamorph",
      "Behold My Majesty [P]"
    ]
  },
  {
    "name": "Sachi",
    "image": "",
    "imageHint": "Sachi",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1222,
      "def": 1090,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sickle Sweep",
      "Heart Pierce",
      "Shadow Ambush",
      "False Death [P]"
    ]
  },
  {
    "name": "Saito",
    "image": "",
    "imageHint": "Saito",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 1321,
      "def": 1178,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 30%",
    "skillNames": [
      "Unbearable Assault",
      "Enduring Warrior",
      "Army Breaker",
      "Vendetta [P]"
    ]
  },
  {
    "name": "Samar Gemcursed",
    "image": "",
    "imageHint": "Samar",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 936,
      "def": 1211,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 80,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 30%",
    "skillNames": [
      "Crystal Flesh",
      "Emerald Curse",
      "Boon Subversion",
      "Diamond Skin [P]"
    ]
  },
  {
    "name": "Samson the Masher",
    "image": "",
    "imageHint": "Samson",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 815,
      "def": 1255,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "Vanity Fists",
      "Explosive Temper",
      "Roar of Victory",
      "Affronted [P]"
    ]
  },
  {
    "name": "Sanctum Protector",
    "image": "",
    "imageHint": "Sanctum-Protector",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 804,
      "def": 1200,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Repel Intruders",
      "Hallowed Ground",
      "False Bravado"
    ]
  },
  {
    "name": "Sandbow",
    "image": "",
    "imageHint": "Sandbow",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 1123,
      "def": 771,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Let Fly",
      "Veinfire Venom"
    ]
  },
  {
    "name": "Sandlashed Survivor",
    "image": "",
    "imageHint": "Survivor",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 936,
      "def": 1365,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%",
    "skillNames": [
      "Smell Weakness",
      "Endless Sands",
      "Born Survivor [P]"
    ]
  },
  {
    "name": "Sanguine Maria",
    "image": "",
    "imageHint": "Maria",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1520,
      "def": 1024,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Hematic Blades",
      "Sanguine Fissure",
      "Gorescream",
      "Say Her Name [P]"
    ]
  },
  {
    "name": "Sanguinia",
    "image": "",
    "imageHint": "Sanguinia",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20475,
      "atk": 760,
      "def": 1178,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Doom Tower by 55",
    "skillNames": [
      "Red Punishment",
      "Holy Blood",
      "Sacrificial Lamb"
    ]
  },
  {
    "name": "Satyr",
    "image": "",
    "imageHint": "Satyr",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 892,
      "def": 848,
      "spd": 83,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Deep Cut",
      "Catch!"
    ]
  },
  {
    "name": "Saurus",
    "image": "",
    "imageHint": "Saurus",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1244,
      "def": 661,
      "spd": 83,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Wind Cutter",
      "Fire Wave"
    ]
  },
  {
    "name": "Scabrius",
    "image": "",
    "imageHint": "Scabrius",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1365,
      "def": 1057,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Gutter Knife",
      "Gnawing Horde",
      "Vicious Spite",
      "Verminous [P]"
    ]
  },
  {
    "name": "Scion",
    "image": "",
    "imageHint": "Scion",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1409,
      "def": 969,
      "spd": 102,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Dungeons by 24%",
    "skillNames": [
      "Nightmare Khopesh",
      "Evil Seed",
      "Crawling Chaos",
      "Incarnate [P]"
    ]
  },
  {
    "name": "Scrapper",
    "image": "",
    "imageHint": "Scrapper",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1233,
      "def": 837,
      "spd": 102,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Doom Tower by 25%",
    "skillNames": [
      "Arena Arts",
      "Crowd Pleaser",
      "Showoff [P]"
    ]
  },
  {
    "name": "Scyl of the Drakes",
    "image": "",
    "imageHint": "Scyl",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 859,
      "def": 1387,
      "spd": 95,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Drake's Swiftness",
      "Wingbeat Flurry",
      "Phoenix Rite",
      "Boundless Life [P]"
    ]
  },
  {
    "name": "Searsha the Charred",
    "image": "",
    "imageHint": "Searsha",
    "faction": "Sylvan Watchers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 19155,
      "atk": 1002,
      "def": 1299,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Conflagrate",
      "Forest Fire",
      "Blazing Panic",
      "Stoked [P]"
    ]
  },
  {
    "name": "Seducer",
    "image": "",
    "imageHint": "Seducer",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 628,
      "def": 1321,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Lulling Touch",
      "Disorienting Blast",
      "Twisted Devotion",
      "Selfless Partner"
    ]
  },
  {
    "name": "Seeker",
    "image": "",
    "imageHint": "Seeker",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 1002,
      "def": 1178,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Arena by 30%",
    "skillNames": [
      "Devour",
      "Tailwind",
      "Dark Blood [P]"
    ]
  },
  {
    "name": "Seer",
    "image": "",
    "imageHint": "Seer",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 1145,
      "def": 870,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 40",
    "skillNames": [
      "Knock Out",
      "Clan Banner",
      "Karma Burn"
    ]
  },
  {
    "name": "Selinia Nightcloak",
    "image": "",
    "imageHint": "Selinia",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 1266,
      "def": 870,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Soulburst Arrow",
      "Moonshot",
      "Lunar Ballista",
      "Solar Boost [P]"
    ]
  },
  {
    "name": "Seneschal",
    "image": "",
    "imageHint": "Seneschal",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 705,
      "def": 1266,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bloodied Mace",
      "Misdirect",
      "Lordly Challenge"
    ]
  },
  {
    "name": "Senna Amberheart",
    "image": "",
    "imageHint": "Senna",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 1112,
      "def": 1200,
      "spd": 113,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Amberthrust",
      "Touch of Gold",
      "Edge of Death",
      "Healing Glow [P]"
    ]
  },
  {
    "name": "Sentinel",
    "image": "",
    "imageHint": "Sentinel",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 914,
      "def": 859,
      "spd": 86,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Wars by 30",
    "skillNames": [
      "Hook",
      "Glaive Swing",
      "Regeneration [P]"
    ]
  },
  {
    "name": "Septimus",
    "image": "",
    "imageHint": "Septimus",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1674,
      "def": 991,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 30%",
    "skillNames": [
      "Behead",
      "Holy Sword",
      "Giant Killer [P]"
    ]
  },
  {
    "name": "Sepulcher Sentinel",
    "image": "",
    "imageHint": "Sepulcher-Sentinel",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 903,
      "def": 1321,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 25%",
    "skillNames": [
      "Sword of Withering",
      "Sepulcher Shield",
      "Untouched By Death [P]"
    ]
  },
  {
    "name": "Sergeant",
    "image": "",
    "imageHint": "Sergeant",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1112,
      "def": 804,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hack",
      "Rally"
    ]
  },
  {
    "name": "Sethallia",
    "image": "",
    "imageHint": "Sethallia",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 1024,
      "def": 1354,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Magic Ally RES in all Battles by 50",
    "skillNames": [
      "Put to Flame",
      "Lordly Embrace",
      "Aggress"
    ]
  },
  {
    "name": "Shadowbow Tirlac",
    "image": "",
    "imageHint": "Tirlac",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 793,
      "def": 1233,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shadowbow",
      "Swift Warband",
      "Diversion",
      "Camo Cover [P]"
    ]
  },
  {
    "name": "Shaman",
    "image": "",
    "imageHint": "Shaman",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1112,
      "def": 1024,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 23%",
    "skillNames": [
      "Dispelling Blow",
      "Exploit Weakness",
      "Recall"
    ]
  },
  {
    "name": "Shamrock",
    "image": "",
    "imageHint": "Shamrock",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20805,
      "atk": 1002,
      "def": 1189,
      "spd": 111,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Luck Swap",
      "Lucky Charms",
      "Uncatchable"
    ]
  },
  {
    "name": "Shatterbones",
    "image": "",
    "imageHint": "Shatterbones",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1498,
      "def": 881,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 70",
    "skillNames": [
      "Rend",
      "Hail",
      "Warcry"
    ]
  },
  {
    "name": "Shemnath",
    "image": "",
    "imageHint": "Shemnath",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1553,
      "def": 958,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bring to Ruin",
      "Caryatid's Curse",
      "Humbled and Broken",
      "Mana Seeker [P]"
    ]
  },
  {
    "name": "Shieldguard",
    "image": "",
    "imageHint": "Shieldguard",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 705,
      "def": 1024,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Uppercut",
      "Battle Stance",
      "Mighty Soul [P]"
    ]
  },
  {
    "name": "Shirimani",
    "image": "",
    "imageHint": "Shirimani",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 1167,
      "def": 1079,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 33%",
    "skillNames": [
      "Bolts of Cold",
      "Rejuvenating Wave",
      "Ice Storm"
    ]
  },
  {
    "name": "Shredder",
    "image": "",
    "imageHint": "Shredder",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 23130,
      "atk": 914,
      "def": 1123,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Rage of Saki",
      "Shadow Shinobi",
      "This Is True Ninjutsu!",
      "Dimensional Tyrant [P]"
    ]
  },
  {
    "name": "Shu-Zhen the Valorous",
    "image": "",
    "imageHint": "Shu-Zhen",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 826,
      "def": 1310,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 30%",
    "skillNames": [
      "Spear of Providence",
      "Purging Petals",
      "Charge of the Valorous",
      "Sovereign Sight [P]"
    ]
  },
  {
    "name": "Sicia Flametongue",
    "image": "",
    "imageHint": "Sicia",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1586,
      "def": 1123,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Towering Inferno",
      "Flame Eruption",
      "Firestorm Rite",
      "Metaphysics [P]"
    ]
  },
  {
    "name": "Siegebreaker",
    "image": "",
    "imageHint": "Siegebreaker",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1211,
      "def": 881,
      "spd": 90,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Pelting Blows",
      "Electrocute",
      "Heavenly Roar"
    ]
  },
  {
    "name": "Siegehulk",
    "image": "",
    "imageHint": "Siegehulk",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1542,
      "def": 760,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 10
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Doom Tower by 24%",
    "skillNames": [
      "Battering Ram",
      "Thrashing Fit",
      "Siege Breaker"
    ]
  },
  {
    "name": "Siegfrund the Nephilim",
    "image": "",
    "imageHint": "Siegfrund",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1663,
      "def": 1101,
      "spd": 110,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 35%",
    "skillNames": [
      "Excoriating Edge",
      "Seraphic Wave",
      "Rage of the Nephilim",
      "Metamorph [P]",
      "Stay the Blade [P]"
    ]
  },
  {
    "name": "Siegfrund the Nephilim",
    "image": "",
    "imageHint": "Siegfrund",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 1112,
      "def": 1365,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 35%",
    "skillNames": [
      "Burn It Out",
      "Nephilic Ward",
      "Light of the Beyond",
      "Metamorph",
      "Shield of Defiance [P]"
    ]
  },
  {
    "name": "Sigmund the Highshield",
    "image": "",
    "imageHint": "Sigmund",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 848,
      "def": 1354,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Doom Tower by 40%",
    "skillNames": [
      "Fairer Fight",
      "Battlefield Beacon",
      "Shield of the Realm",
      "Equitable [P]"
    ]
  },
  {
    "name": "Signy of Highshield",
    "image": "",
    "imageHint": "Signy",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 749,
      "def": 1178,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Platebreaker",
      "Highshield's Defiance",
      "Just Cause",
      "Hero of the People [P]"
    ]
  },
  {
    "name": "Sikara",
    "image": "",
    "imageHint": "Sikara",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 804,
      "def": 1200,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Followup Volley",
      "Aura Puncture",
      "Enfeebling Tips",
      "Devoted Sister [P]"
    ]
  },
  {
    "name": "Silvain the Paramour",
    "image": "",
    "imageHint": "Silvain",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1321,
      "def": 716,
      "spd": 101,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Lover's Barb",
      "Rake's Flair",
      "I Fight For Love!"
    ]
  },
  {
    "name": "Sinesha",
    "image": "",
    "imageHint": "Sinesha",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 892,
      "def": 1255,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 31%",
    "skillNames": [
      "Burning Wave",
      "Vaporize",
      "Immortality"
    ]
  },
  {
    "name": "Siphi the Lost Bride",
    "image": "",
    "imageHint": "Siphi",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21480,
      "atk": 859,
      "def": 1288,
      "spd": 114,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 80",
    "skillNames": [
      "Curse of Longing",
      "Whirlwind Romance",
      "Love Beyond Death",
      "Eternal Bond [P]"
    ]
  },
  {
    "name": "Sir Artimage",
    "image": "",
    "imageHint": "Artimage",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1310,
      "def": 1024,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 20%",
    "skillNames": [
      "Nobleman's Mace",
      "Ring True",
      "Unshakable Valor"
    ]
  },
  {
    "name": "Sir Nicholas",
    "image": "",
    "imageHint": "Nicholas",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22800,
      "atk": 936,
      "def": 1123,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Boreal Blade",
      "Polar Protection",
      "Goodwill",
      "Winter's Garden [P]"
    ]
  },
  {
    "name": "Sister Militant",
    "image": "",
    "imageHint": "Sister-Militant",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10410,
      "atk": 870,
      "def": 639,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Wide Swing"
    ]
  },
  {
    "name": "Skartorsis",
    "image": "",
    "imageHint": "Skartorsis",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 859,
      "def": 1376,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 33%",
    "skillNames": [
      "Hand of Doom",
      "Command",
      "Rebirth"
    ]
  },
  {
    "name": "Skathix",
    "image": "",
    "imageHint": "Skathix",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1035,
      "def": 1057,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 40",
    "skillNames": [
      "Leg Wrack",
      "Transfer Rush",
      "Scales of the Ages",
      "Last Gasp [P]"
    ]
  },
  {
    "name": "Skeletor",
    "image": "",
    "imageHint": "Skeletor",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 21480,
      "atk": 1046,
      "def": 1101,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Havoc Scythe",
      "Skull Comet",
      "Begone, Fools!",
      "Master of Evil [P]"
    ]
  },
  {
    "name": "Skellag",
    "image": "",
    "imageHint": "Skellag",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 859,
      "def": 1057,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Thrust",
      "Blizzard"
    ]
  },
  {
    "name": "Skeuramis",
    "image": "",
    "imageHint": "Skeuramis",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 848,
      "def": 1123,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in all Battles by 25%",
    "skillNames": [
      "Outpace",
      "Effortless Superiority",
      "Hold the Front"
    ]
  },
  {
    "name": "Skimfos the Consumed",
    "image": "",
    "imageHint": "Skimfos",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1432,
      "def": 1002,
      "spd": 102,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Doom Tower by 30%",
    "skillNames": [
      "Growing Hunger",
      "Curse Feeder",
      "Clutch of Woe",
      "Twisted [P]"
    ]
  },
  {
    "name": "Skink",
    "image": "",
    "imageHint": "Skink",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 1310,
      "def": 826,
      "spd": 93,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Magic Ally ATK in All Battles by 30%",
    "skillNames": [
      "Slippery Strike",
      "Withering Poison",
      "Catalyze"
    ]
  },
  {
    "name": "Skinner",
    "image": "",
    "imageHint": "Skinner",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 1255,
      "def": 639,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sharpened Bone",
      "Skinning Slice"
    ]
  },
  {
    "name": "Skirmisher",
    "image": "",
    "imageHint": "Skirmisher",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1211,
      "def": 793,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Twin Shafts",
      "Hexed Arrow",
      "Dispelling Shot"
    ]
  },
  {
    "name": "Skorid the Halfspawn",
    "image": "",
    "imageHint": "Skorid",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1498,
      "def": 980,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hexpyre",
      "Anathema Burst",
      "Infernal Malediction",
      "Halfspawn [P]"
    ]
  },
  {
    "name": "Skraank",
    "image": "",
    "imageHint": "Skraank",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 1421,
      "def": 969,
      "spd": 100,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Flitter In Chaos",
      "Sup On Blood",
      "Unleash Havoc",
      "Pyromania [P]"
    ]
  },
  {
    "name": "Skull Lord Var-Gall",
    "image": "",
    "imageHint": "Var-Gall",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 27420,
      "atk": 1112,
      "def": 1310,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 90,
      "acc": 70
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Gleeful Ripping",
      "Skull Claim",
      "Abyssal Clutch",
      "Horrific Foe [P]",
      "Skull Brood [P]"
    ]
  },
  {
    "name": "Skullcrown",
    "image": "",
    "imageHint": "Skullcrown",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1509,
      "def": 826,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 23%",
    "skillNames": [
      "Wave of Souls",
      "Corrupting Touch",
      "Resilient [P]",
      "From Beyond [P]"
    ]
  },
  {
    "name": "Skullcrusher",
    "image": "",
    "imageHint": "Skullcrusher",
    "faction": "Ogryn Tribes",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 826,
      "def": 1189,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Wars by 45",
    "skillNames": [
      "Smash",
      "Stonewall",
      "Unshakeable [P]"
    ]
  },
  {
    "name": "Skullsquire",
    "image": "",
    "imageHint": "Skullsquire",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 1178,
      "def": 716,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Maim",
      "Cold Grasp"
    ]
  },
  {
    "name": "Skullsworn",
    "image": "",
    "imageHint": "Skullsworn",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1365,
      "def": 815,
      "spd": 87,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 13%",
    "skillNames": [
      "Vicious Rip",
      "Cry For Blood",
      "Feral Hunter [P]"
    ]
  },
  {
    "name": "Skytouched Shaman",
    "image": "",
    "imageHint": "Skytouched-Shaman",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 958,
      "def": 1123,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Talon Knives",
      "Immortal Skies",
      "Bloodstain Ritual [P]"
    ]
  },
  {
    "name": "Slasher",
    "image": "",
    "imageHint": "Slasher",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1332,
      "def": 826,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 17%",
    "skillNames": [
      "Fearsome Slice",
      "Chop Apart",
      "Killing Zeal"
    ]
  },
  {
    "name": "Slayer",
    "image": "",
    "imageHint": "Slayer",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1233,
      "def": 749,
      "spd": 90,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Vicious Strike",
      "Frost Burst",
      "Debilitate"
    ]
  },
  {
    "name": "Slicer",
    "image": "",
    "imageHint": "Slicer",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1090,
      "def": 705,
      "spd": 90,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Finishing Blow",
      "Cut Apart"
    ]
  },
  {
    "name": "Slitherbrute",
    "image": "",
    "imageHint": "Slitherbrute",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12885,
      "atk": 1310,
      "def": 859,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 40",
    "skillNames": [
      "Rusty Gash",
      "Essence Snatch",
      "Punish Hubris"
    ]
  },
  {
    "name": "Slixus Stripehide",
    "image": "",
    "imageHint": "Slixus",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 1454,
      "def": 881,
      "spd": 100,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 28%",
    "skillNames": [
      "Harmonious Strike",
      "Blades of Finality",
      "Dragon Shuriken",
      "Sanctified Killer [P]"
    ]
  },
  {
    "name": "Sniktraak",
    "image": "",
    "imageHint": "Sniktraak",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22965,
      "atk": 826,
      "def": 1222,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Misery Morningstar",
      "Cloying Horror",
      "Vermin Vitae",
      "Soul Rot [P]"
    ]
  },
  {
    "name": "Sniper",
    "image": "",
    "imageHint": "Sniper",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1211,
      "def": 705,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Double Shot",
      "Rain of Arrows"
    ]
  },
  {
    "name": "Snorting Thug",
    "image": "",
    "imageHint": "Snorting-Thug",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 870,
      "def": 1057,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Wanton Mugging",
      "Ruckus",
      "Dire Defense"
    ]
  },
  {
    "name": "Solanar the Gleaming",
    "image": "",
    "imageHint": "Solanar",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1608,
      "def": 991,
      "spd": 105,
      "crate": 1515,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Solar Surge",
      "Blazing Force",
      "Unfettered Radiance",
      "Scholar Of Sun [P]"
    ]
  },
  {
    "name": "Solaris",
    "image": "",
    "imageHint": "Solaris",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1244,
      "def": 881,
      "spd": 92,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Cleansing Light",
      "Solar Shield",
      "Blinding Bash"
    ]
  },
  {
    "name": "Sorceress",
    "image": "",
    "imageHint": "Sorceress",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1321,
      "def": 870,
      "spd": 101,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Crystal Bolt",
      "Magic Arrows",
      "Vine Trap"
    ]
  },
  {
    "name": "Soulbond Bowyer",
    "image": "",
    "imageHint": "Soulbond-Bowyer",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1255,
      "def": 870,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 12%",
    "skillNames": [
      "Ancestral Guidance",
      "Infused Arrow",
      "Soulbound Shot"
    ]
  },
  {
    "name": "Souldrinker",
    "image": "",
    "imageHint": "Souldrinker",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 1299,
      "def": 848,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Razing Hand",
      "Raining Fire",
      "Magma Blast",
      "Set Ablaze [P]"
    ]
  },
  {
    "name": "Soulless",
    "image": "",
    "imageHint": "Soulless",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 848,
      "def": 1421,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 44%",
    "skillNames": [
      "Bewildering Blow",
      "Wave of Despair",
      "Reign of Terror",
      "Foul Provocation [P]"
    ]
  },
  {
    "name": "Spider",
    "image": "",
    "imageHint": "Spider",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 1211,
      "def": 870,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 25%",
    "skillNames": [
      "Possess",
      "Calamity",
      "Glowing Mark"
    ]
  },
  {
    "name": "Spikehead",
    "image": "",
    "imageHint": "Spikehead",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11895,
      "atk": 1465,
      "def": 771,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Arena by 30%",
    "skillNames": [
      "Stomp",
      "Battle Cry",
      "Rip"
    ]
  },
  {
    "name": "Spirithost",
    "image": "",
    "imageHint": "Spirithost",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1046,
      "def": 958,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 10%",
    "skillNames": [
      "Reap",
      "Strengthen",
      "Dark Gift"
    ]
  },
  {
    "name": "Spiritwalker",
    "image": "",
    "imageHint": "Spiritwalker",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10740,
      "atk": 1288,
      "def": 749,
      "spd": 90,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Cripple",
      "Battle Trance"
    ]
  },
  {
    "name": "Spymaster",
    "image": "",
    "imageHint": "Spymaster",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 782,
      "def": 936,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Spymaster's Blade",
      "Directed Sabotage",
      "Cloak and Dagger"
    ]
  },
  {
    "name": "Squire",
    "image": "",
    "imageHint": "Squire",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 760,
      "def": 947,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Overhead Swing",
      "Weapon Breaker"
    ]
  },
  {
    "name": "Stag Knight",
    "image": "",
    "imageHint": "Stag-Knight",
    "faction": "Banner Lords",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 859,
      "def": 1046,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Spot Quarry",
      "Huntmaster",
      "Lead the Pack [P]"
    ]
  },
  {
    "name": "Stalker",
    "image": "",
    "imageHint": "Stalker",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 749,
      "def": 925,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bloody Claws",
      "Tear Apart"
    ]
  },
  {
    "name": "Staltus Dragonbane",
    "image": "",
    "imageHint": "Staltus",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20805,
      "atk": 738,
      "def": 1454,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 30%",
    "skillNames": [
      "Axe of Glory",
      "Drakehunter Tactics",
      "Dragon Heart",
      "Untarnished [P]"
    ]
  },
  {
    "name": "Stalwart",
    "image": "",
    "imageHint": "Stalwart",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 738,
      "def": 815,
      "spd": 87,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Rattle",
      "Headbutt"
    ]
  },
  {
    "name": "Starsage Galathir",
    "image": "",
    "imageHint": "Galathir",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 1013,
      "def": 1354,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in all Battles by 80",
    "skillNames": [
      "Astral Storm",
      "Stellar Embryo",
      "Part the Veil",
      "Metamorph",
      "Eternal Beyonder [P]"
    ]
  },
  {
    "name": "Starsage Galathir",
    "image": "",
    "imageHint": "Galathir",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 1013,
      "def": 1354,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in all Battles by 80",
    "skillNames": [
      "Uncreation Beam",
      "Eclipse Rend",
      "Dark Nebula",
      "Metamorph",
      "Starlight Reflect [P]"
    ]
  },
  {
    "name": "Steadfast Marshal",
    "image": "",
    "imageHint": "Steadfast-Marshal",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 870,
      "def": 782,
      "spd": 90,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Thunderous Whallop",
      "Hold Fast",
      "Covered Retreat"
    ]
  },
  {
    "name": "Steel Bowyer",
    "image": "",
    "imageHint": "Steel-Bowyer",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1365,
      "def": 815,
      "spd": 100,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 17%",
    "skillNames": [
      "Binding Arrows",
      "Thrill of the Hunt",
      "Big Game"
    ]
  },
  {
    "name": "Steelskull",
    "image": "",
    "imageHint": "Steelskull",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1277,
      "def": 958,
      "spd": 111,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 27%",
    "skillNames": [
      "Decay",
      "Cleansing Spell",
      "Protection"
    ]
  },
  {
    "name": "Stitched Beast",
    "image": "",
    "imageHint": "Stitched-Beast",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1343,
      "def": 782,
      "spd": 101,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bestial Maw",
      "Virulent Spittle",
      "Pack Tactics"
    ]
  },
  {
    "name": "Stokk the Broken",
    "image": "",
    "imageHint": "Stokk",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 1079,
      "def": 1156,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%",
    "skillNames": [
      "Doom Flasks",
      "Volatile Mixture",
      "Vengefire Flood",
      "Rigged To Blow [P]"
    ]
  },
  {
    "name": "Stonebound Thisbe",
    "image": "",
    "imageHint": "Thisbe",
    "faction": "Argonites",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 958,
      "def": 1134,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 40",
    "skillNames": [
      "Eyes Of Granite",
      "Fangs Of Quartz",
      "Heart Of Flint",
      "Heir Of The Gorgoa [P]"
    ]
  },
  {
    "name": "Storm Herald Hekaton",
    "image": "",
    "imageHint": "Hekaton",
    "faction": "Argonites",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 727,
      "def": 1608,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all battles by 24%",
    "skillNames": [
      "Fulminant Rupture",
      "Eye of the Storm",
      "Sky-Father's Boon",
      "Boltmaster [P]"
    ]
  },
  {
    "name": "Stout Axeman",
    "image": "",
    "imageHint": "Stout-Axeman",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 859,
      "def": 892,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 55,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Go No Further",
      "Repel the Horde",
      "Thrives on Danger [P]"
    ]
  },
  {
    "name": "Strategos Islin",
    "image": "",
    "imageHint": "Islin",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19485,
      "atk": 760,
      "def": 1520,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 60",
    "skillNames": [
      "Doubleslash",
      "Hindrance",
      "Flawless Strategem",
      "Protect The Troops [P]"
    ]
  },
  {
    "name": "Suiren",
    "image": "",
    "imageHint": "Suiren",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14370,
      "atk": 1310,
      "def": 1035,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Dungeons by 60",
    "skillNames": [
      "Lotus Kiss",
      "Downsize",
      "Confusion Reigns"
    ]
  },
  {
    "name": "Sulfuryion",
    "image": "",
    "imageHint": "Sulfuryion",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 1112,
      "def": 1211,
      "spd": 109,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Volcanic Rend",
      "Blazing Barrier",
      "Rise From Ash",
      "Pyroclastic Boon [P]"
    ]
  },
  {
    "name": "Sun Wukong",
    "image": "",
    "imageHint": "Sun-Wukong",
    "faction": "Skinwalkers",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1586,
      "def": 892,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 28%",
    "skillNames": [
      "Gotcha!",
      "Staff of Wonder",
      "Now You See Us",
      "Unbeatable Wukong [P]"
    ]
  },
  {
    "name": "Sunken Sentinel",
    "image": "",
    "imageHint": "Sunken-Sentinel",
    "faction": "Argonites",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12390,
      "atk": 1277,
      "def": 925,
      "spd": 95,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all battles by 15%",
    "skillNames": [
      "Restorative Slash",
      "Sunken Swords",
      "Defender of Agaris"
    ]
  },
  {
    "name": "Suntribe",
    "image": "",
    "imageHint": "Suntribe",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 782,
      "def": 870,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Inscribed Axes",
      "Spirits' Verdict"
    ]
  },
  {
    "name": "Supreme Athel",
    "image": "",
    "imageHint": "Supreme-Athel",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 1597,
      "def": 903,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 35%",
    "skillNames": [
      "Exemplar of Stoicism",
      "Cold Company",
      "Ever Faithful",
      "Frosty Glare [P]"
    ]
  },
  {
    "name": "Supreme Elhain",
    "image": "",
    "imageHint": "Supreme-Elhain",
    "faction": "High Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1509,
      "def": 1145,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 30%",
    "skillNames": [
      "Exemplar of Strikes",
      "Let None Live",
      "Crack Shot",
      "Implacable [P]"
    ]
  },
  {
    "name": "Supreme Galek",
    "image": "",
    "imageHint": "Supreme-Galek",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1509,
      "def": 936,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Exemplar of Rage",
      "Bloodshed Tempest",
      "Unreasoning Outburst",
      "Laugh At Danger [P]"
    ]
  },
  {
    "name": "Supreme Kael",
    "image": "",
    "imageHint": "Supreme-Kael",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1531,
      "def": 991,
      "spd": 110,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Exemplar of Skill",
      "Putrescence",
      "Arcane Havoc",
      "Degrade [P]"
    ]
  },
  {
    "name": "Suwai Firstborn",
    "image": "",
    "imageHint": "Suwai",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14040,
      "atk": 1343,
      "def": 1024,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Render Helpless",
      "Utter Rampage",
      "Deaden Reactions"
    ]
  },
  {
    "name": "Suzerain Katonn",
    "image": "",
    "imageHint": "Katonn",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1564,
      "def": 1013,
      "spd": 98,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Temporal Nova",
      "Hex of Years",
      "Banish From Time"
    ]
  },
  {
    "name": "Swarmspeaker Zyclic",
    "image": "",
    "imageHint": "Zyclic",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 14040,
      "atk": 1575,
      "def": 1068,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "FAC-SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%\n\n[Dark Elves only]\n\nIncreases Ally ACC in All Battles by 60",
    "skillNames": [
      "Chitin Cutter",
      "Ravening Multitude",
      "Insectoid Feast",
      "Swarm Conductor [P]"
    ]
  },
  {
    "name": "Swordsman",
    "image": "",
    "imageHint": "Swordsman",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 8100,
      "atk": 958,
      "def": 705,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Cut"
    ]
  },
  {
    "name": "Sydax King-killer",
    "image": "",
    "imageHint": "Sydax",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18825,
      "atk": 859,
      "def": 1465,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 30%",
    "skillNames": [
      "Fleshcleaver",
      "Brutal Decapitator",
      "Bond Of The Enslaved",
      "Earned Resilience [P]"
    ]
  },
  {
    "name": "Tagoar",
    "image": "",
    "imageHint": "Tagoar",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1145,
      "def": 947,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Da Magic Stick",
      "Charge Cant",
      "Rise And Fight",
      "Aid the Feeble [P]"
    ]
  },
  {
    "name": "Tainix Hateflower",
    "image": "",
    "imageHint": "Tainix",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1189,
      "def": 980,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 30%",
    "skillNames": [
      "Seeker Bolts",
      "Spiteful Cut",
      "Unbreakable [P]"
    ]
  },
  {
    "name": "Tallia",
    "image": "",
    "imageHint": "Tallia",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12390,
      "atk": 1343,
      "def": 1134,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in Dungeons by 15%",
    "skillNames": [
      "Hack and Slash",
      "Rise to Duty",
      "Awesome Presence"
    ]
  },
  {
    "name": "Taras the Fierce",
    "image": "",
    "imageHint": "Taras",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 705,
      "def": 1387,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in all Battles by 24%",
    "skillNames": [
      "Shatter Upon Us",
      "Hero's Intercession",
      "Constant Pressure",
      "Fierce Battler [P]",
      "Poise [P]"
    ]
  },
  {
    "name": "Tarshon",
    "image": "",
    "imageHint": "Tarshon",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 760,
      "def": 1398,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Diabolical Hook",
      "Soul Shrivel",
      "Demonic Possession",
      "Back For More [P]"
    ]
  },
  {
    "name": "Tatsu",
    "image": "",
    "imageHint": "Tatsu",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1553,
      "def": 1046,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Transference Slash",
      "Wraith Explosion",
      "Purgation Blade",
      "Heightened Senses [P]"
    ]
  },
  {
    "name": "Tatura Rimehide",
    "image": "",
    "imageHint": "Tatura",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 804,
      "def": 1432,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "DEF",
    "auraText": "\nIncreases Ally DEF in Doom Tower by 35%",
    "skillNames": [
      "Solar Ray",
      "Wings of Shelter",
      "Otherworld Breach",
      "Glimmer Hide [P]"
    ]
  },
  {
    "name": "Taurus",
    "image": "",
    "imageHint": "Taurus",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17010,
      "atk": 1310,
      "def": 859,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 40",
    "skillNames": [
      "Metabolize",
      "Tendon Slash",
      "Toxic Nova"
    ]
  },
  {
    "name": "Taya",
    "image": "",
    "imageHint": "Taya",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 12885,
      "atk": 1465,
      "def": 980,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 50",
    "skillNames": [
      "Daze Powder",
      "Venom Kunai",
      "Blood Boil"
    ]
  },
  {
    "name": "Tayrel",
    "image": "",
    "imageHint": "Tayrel",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 881,
      "def": 1343,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in all Battles by 25%",
    "skillNames": [
      "Humble",
      "Singing Steel",
      "Preemptive Strike"
    ]
  },
  {
    "name": "Teela Goremane",
    "image": "",
    "imageHint": "Teela",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 892,
      "def": 1222,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 50",
    "skillNames": [
      "Hexdrinker Scimitar",
      "Pyre Strike",
      "Life Worm"
    ]
  },
  {
    "name": "Tekteon Fissureflesh",
    "image": "",
    "imageHint": "Tekteon",
    "faction": "Argonites",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 705,
      "def": 1387,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in all Battles by 33%",
    "skillNames": [
      "Fissureblades",
      "Volcanic Presence",
      "Flaming Bulwark",
      "Sulfurous Breath [P]"
    ]
  },
  {
    "name": "Templar",
    "image": "",
    "imageHint": "Templar",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 881,
      "def": 1090,
      "spd": 92,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 50",
    "skillNames": [
      "Charge",
      "Righteous Challenge",
      "Contempt [P]"
    ]
  },
  {
    "name": "Temptress",
    "image": "",
    "imageHint": "Temptress",
    "faction": "Undead Hordes",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11565,
      "atk": 1343,
      "def": 914,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sly Slice",
      "Flying Daggers",
      "Vicious Partner"
    ]
  },
  {
    "name": "Teodor the Savant",
    "image": "",
    "imageHint": "Teodor",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20805,
      "atk": 980,
      "def": 1211,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 50",
    "skillNames": [
      "Vile Physick",
      "Savant's Savvy",
      "Chymistry",
      "Fumigator [P]"
    ]
  },
  {
    "name": "Terrorbeast",
    "image": "",
    "imageHint": "Terrorbeast",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20970,
      "atk": 1057,
      "def": 848,
      "spd": 93,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Painful Bite",
      "Shriek",
      "Flesh Feast"
    ]
  },
  {
    "name": "Teryx the Restless",
    "image": "",
    "imageHint": "Teryx",
    "faction": "Lizardmen",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 771,
      "def": 1178,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Pinpoint Thrust",
      "Spur Claw",
      "Protect the Crowned"
    ]
  },
  {
    "name": "Teshada",
    "image": "",
    "imageHint": "Teshada",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 826,
      "def": 1387,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 20%",
    "skillNames": [
      "Savage Fury",
      "Maximum Carnage",
      "Spirit Appeasement"
    ]
  },
  {
    "name": "Tetsuya the Deliverer",
    "image": "",
    "imageHint": "Tetsuya",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15525,
      "atk": 1696,
      "def": 848,
      "spd": 106,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "FAC-SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%\n\n[Shadowkin only]\n\nIncreases Ally C.RATE in All Battles by 15%",
    "skillNames": [
      "Rapid Laceration",
      "Preternatural Tactician",
      "Decisive Prescience",
      "Scourge of Mikage [P]"
    ]
  },
  {
    "name": "Teumesia",
    "image": "",
    "imageHint": "Teumesia",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1476,
      "def": 1035,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Fiery Battleaxe",
      "Cunning Chaos",
      "Burning Regret",
      "Inner Heat [P]"
    ]
  },
  {
    "name": "The Calamitus",
    "image": "",
    "imageHint": "Calamitus",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 1553,
      "def": 1178,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 35%",
    "skillNames": [
      "Reaping Cull",
      "Horde of Calamity",
      "Necroclysm",
      "Metamorph",
      "Immortal Creation [P]"
    ]
  },
  {
    "name": "The Calamitus",
    "image": "",
    "imageHint": "Calamitus",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 1553,
      "def": 1178,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 35%",
    "skillNames": [
      "Fell Scythe",
      "Final Testament",
      "Termination",
      "Metamorph",
      "Banquet of Death [P]"
    ]
  },
  {
    "name": "The Incarnate",
    "image": "",
    "imageHint": "Incarnate",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 804,
      "def": 1487,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Attack Intruder",
      "Formation: Phalanx",
      "Defensive Measures",
      "Crisis Response [P]",
      "Ultimate Purpose [P]"
    ]
  },
  {
    "name": "Thea the Tomb Angel",
    "image": "",
    "imageHint": "Thea",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 16020,
      "atk": 1542,
      "def": 969,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Befoulment",
      "Hexreaper",
      "Not Of This World",
      "Cruel Angel [P]"
    ]
  },
  {
    "name": "Thenasil",
    "image": "",
    "imageHint": "Thenasil",
    "faction": "High Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 991,
      "def": 1123,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "\nIncreases Ally RES in Dungeons by 70",
    "skillNames": [
      "Spring Lullaby",
      "Oak-Skinned",
      "Wither"
    ]
  },
  {
    "name": "Theodosia the Disgraced",
    "image": "",
    "imageHint": "Theodosia",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22470,
      "atk": 925,
      "def": 1432,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 25%",
    "skillNames": [
      "Serpentia's Storm",
      "Deranged Fortitude",
      "Unnatural Regeneration",
      "Metamorph",
      "Heinous Protection [P]"
    ]
  },
  {
    "name": "Theodosia the Disgraced",
    "image": "",
    "imageHint": "Theodosia",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Mythical",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22470,
      "atk": 925,
      "def": 1432,
      "spd": 115,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 25%",
    "skillNames": [
      "I Will Find You...",
      "Baleful Onslaught",
      "Somnolent Whisper",
      "Metamorph",
      "They Are Beneath Me [P]"
    ]
  },
  {
    "name": "Theresc",
    "image": "",
    "imageHint": "Theresc",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1409,
      "def": 804,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 12%",
    "skillNames": [
      "Dual Debility",
      "Dress Down",
      "Hate's Flowers",
      "Ruthless [P]"
    ]
  },
  {
    "name": "Theurgist",
    "image": "",
    "imageHint": "Theurgist",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 947,
      "def": 848,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Wars by 30",
    "skillNames": [
      "Ice Debris",
      "Touch of Sealing",
      "Uplift"
    ]
  },
  {
    "name": "Tholin Foulbeard",
    "image": "",
    "imageHint": "Tholin",
    "faction": "Dwarves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1674,
      "def": 914,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Demonbreaker",
      "Back to the Abyss",
      "Rabid Fury",
      "Evil's Nightmare [P]"
    ]
  },
  {
    "name": "Thor Faehammer",
    "image": "",
    "imageHint": "Thor",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1553,
      "def": 980,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Wrath of Mjolnir",
      "Fulminous Ricochet",
      "Hammer of Heaven",
      "Sky Rupture [P]"
    ]
  },
  {
    "name": "Thorn Golem",
    "image": "",
    "imageHint": "Thorn",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 727,
      "def": 1387,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 40",
    "skillNames": [
      "Vineblades",
      "Horrifying Visage",
      "One With Corruption",
      "Dark Sustenance [P]"
    ]
  },
  {
    "name": "Thrall",
    "image": "",
    "imageHint": "Thrall",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 9915,
      "atk": 958,
      "def": 584,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Shambling Assault"
    ]
  },
  {
    "name": "Thrasher",
    "image": "",
    "imageHint": "Thrasher",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11400,
      "atk": 1156,
      "def": 837,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Gorey Fists",
      "Thrash"
    ]
  },
  {
    "name": "Throatcutter",
    "image": "",
    "imageHint": "Throatcutter",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12225,
      "atk": 1189,
      "def": 749,
      "spd": 88,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Cleaver",
      "Gratuitous Death"
    ]
  },
  {
    "name": "Thylessia",
    "image": "",
    "imageHint": "Thylessia",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12720,
      "atk": 1454,
      "def": 1002,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Weft of Madness",
      "Shrieking Voices",
      "Melancholia",
      "Feast of Woe [P]"
    ]
  },
  {
    "name": "Tidemaster Dexikos",
    "image": "",
    "imageHint": "Dexikos",
    "faction": "Argonites",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21315,
      "atk": 837,
      "def": 1046,
      "spd": 107,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in all battles by 20%",
    "skillNames": [
      "Aqueous Bolt",
      "Tidemaster's Wrath",
      "Rejuvenating Waters",
      "Safety of the Waves [P]"
    ]
  },
  {
    "name": "Tigersoul",
    "image": "",
    "imageHint": "Tigersoul",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11070,
      "atk": 1255,
      "def": 1035,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Scorpion Tips",
      "Wearying Tactics",
      "Tiger's Strength"
    ]
  },
  {
    "name": "Timit the Fool",
    "image": "",
    "imageHint": "Timit",
    "faction": "Banner Lords",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 859,
      "def": 1211,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in all Battles by 50",
    "skillNames": [
      "Carnival Hammer",
      "Test Your Strength",
      "Kegs of Dread",
      "Hideous Assistant [P]"
    ]
  },
  {
    "name": "Titus Blackplume",
    "image": "",
    "imageHint": "Titus",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18495,
      "atk": 837,
      "def": 1509,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Void Ally HP in all Battles by 40%",
    "skillNames": [
      "Ravenblade",
      "Student of War",
      "Androc's Confidant",
      "For Lord & Land [P]"
    ]
  },
  {
    "name": "Togron the Conjoined",
    "image": "",
    "imageHint": "Togron",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21315,
      "atk": 958,
      "def": 1200,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%",
    "skillNames": [
      "Mash and Mangle",
      "Grub's Up!",
      "Brothers' Generosity",
      "Fill Your Bellies [P]"
    ]
  },
  {
    "name": "Tolf the Maimed",
    "image": "",
    "imageHint": "Tolf",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 793,
      "def": 1046,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Blade Hand Butcher",
      "Cut Wide Open",
      "Armor Cracker [P]"
    ]
  },
  {
    "name": "Tomb Lord",
    "image": "",
    "imageHint": "Tomb-Lord",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 1387,
      "def": 980,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Doom Tower by 70",
    "skillNames": [
      "Crippling Blows",
      "Death Burst",
      "Blight"
    ]
  },
  {
    "name": "Tomoe",
    "image": "",
    "imageHint": "Tomoe",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16185,
      "atk": 1024,
      "def": 1200,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 24%",
    "skillNames": [
      "Stab and Grab",
      "Bamboozle",
      "Thick as Thieves",
      "Brethren [P]"
    ]
  },
  {
    "name": "Toragi the Frog",
    "image": "",
    "imageHint": "Toragi",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21810,
      "atk": 892,
      "def": 958,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 40",
    "skillNames": [
      "Swamp Club",
      "Potent Stench",
      "Bog Blessing",
      "Toxic Blood [P]"
    ]
  },
  {
    "name": "Tormentor",
    "image": "",
    "imageHint": "Tormentor",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 1156,
      "def": 947,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Endless Agonies",
      "Infernal Miasma",
      "Creeping Doom"
    ]
  },
  {
    "name": "Tormin the Cold",
    "image": "",
    "imageHint": "Tormin",
    "faction": "Dwarves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 815,
      "def": 1421,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 70,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "Rimefire",
      "Iceberg Crush",
      "Blizzard Rage",
      "Wintry Wind [P]"
    ]
  },
  {
    "name": "Torturehelm",
    "image": "",
    "imageHint": "Torturehelm",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 881,
      "def": 1090,
      "spd": 96,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Dungeons by 33%",
    "skillNames": [
      "Pillage",
      "Bloodlust",
      "Unkillable [P]"
    ]
  },
  {
    "name": "Toshiro The Bloody",
    "image": "",
    "imageHint": "Toshiro",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 1520,
      "def": 1090,
      "spd": 103,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Quick Draw",
      "Sanguine Darts",
      "Bloody Typhoon",
      "Metamorph",
      "Vornspore's Hunger [P]"
    ]
  },
  {
    "name": "Toshiro The Bloody",
    "image": "",
    "imageHint": "Toshiro",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Mythical",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 25110,
      "atk": 1134,
      "def": 1046,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 35%",
    "skillNames": [
      "Iai Cut",
      "Drawn in Blood",
      "Withering Onslaught",
      "Metamorph",
      "Enrobed in Gore [P]"
    ]
  },
  {
    "name": "Totem",
    "image": "",
    "imageHint": "Totem",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1002,
      "def": 1046,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Poisonous Evocation",
      "Malediction",
      "Manglestorm"
    ]
  },
  {
    "name": "Towering Titan",
    "image": "",
    "imageHint": "Towering-Titan",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23790,
      "atk": 760,
      "def": 958,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Shieldsplitter",
      "Flailing Assault",
      "Bullish Vitality",
      "Battle Brothers [P]"
    ]
  },
  {
    "name": "Tracker",
    "image": "",
    "imageHint": "Tracker",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1134,
      "def": 639,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hooked Arrowheads",
      "Haughty Dismissal"
    ]
  },
  {
    "name": "Tramaria",
    "image": "",
    "imageHint": "Tramaria",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 892,
      "def": 1244,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 23%",
    "skillNames": [
      "Nightmare Sludge",
      "Stagnation Sickness",
      "Beyond Emotions",
      "Uncanny [P]"
    ]
  },
  {
    "name": "Treefeller",
    "image": "",
    "imageHint": "Treefeller",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1277,
      "def": 870,
      "spd": 95,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Pruning Limbs",
      "Chop Down",
      "Blasting Powder"
    ]
  },
  {
    "name": "Treeshield Knott",
    "image": "",
    "imageHint": "Knott",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 947,
      "def": 1013,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 15%",
    "skillNames": [
      "Thorned Riposte",
      "Treeshield's Favor",
      "Root Rejuvenation"
    ]
  },
  {
    "name": "Tribuck Colwyn",
    "image": "",
    "imageHint": "Colwyn",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 727,
      "def": 1288,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Sylvan Sword",
      "Take By Surprise",
      "Mistwood Gale"
    ]
  },
  {
    "name": "Tribune Herakletes",
    "image": "",
    "imageHint": "Herakletes",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18660,
      "atk": 837,
      "def": 1498,
      "spd": 95,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "FAC-DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%\n\n[Undead Hordes only]\n\nIncreases Ally C.RATE in All Battles by 20%",
    "skillNames": [
      "Snakebiter",
      "Battle Resurrection",
      "For Valdemar!",
      "Immortal Oath [P]"
    ]
  },
  {
    "name": "Troglodyte",
    "image": "",
    "imageHint": "Troglodyte",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Common",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 9750,
      "atk": 760,
      "def": 793,
      "spd": 87,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Acid Blade"
    ]
  },
  {
    "name": "Truath",
    "image": "",
    "imageHint": "Truath",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 925,
      "def": 1145,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Staff of Liferip",
      "Gaze Upon Me",
      "Animus Infusion",
      "Transmute Pain [P]"
    ]
  },
  {
    "name": "Trugorr",
    "image": "",
    "imageHint": "Trugorr",
    "faction": "Barbarians",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13545,
      "atk": 1211,
      "def": 914,
      "spd": 93,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bloodshed Rites",
      "Maniacal Chopping",
      "Leave Them Gutted"
    ]
  },
  {
    "name": "Trumborr",
    "image": "",
    "imageHint": "Trumborr",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18330,
      "atk": 749,
      "def": 1332,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Double Whammy",
      "Vigor Explosion",
      "Wall of Muscle",
      "Shrug Off [P]"
    ]
  },
  {
    "name": "Trunda Giltmallet",
    "image": "",
    "imageHint": "Trunda",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22800,
      "atk": 1608,
      "def": 980,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 80,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Magic Ally ATK in All Battles by 36%",
    "skillNames": [
      "Golden Mallet",
      "Cloak of Ages",
      "Forge Rhythm",
      "Swift Justice [P]"
    ]
  },
  {
    "name": "Tuhak the Wanderer",
    "image": "",
    "imageHint": "Tuhak",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1365,
      "def": 870,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 22%",
    "skillNames": [
      "Unfair Fight",
      "Whirl of Battle",
      "Clever Brutality",
      "Ironheart [P]"
    ]
  },
  {
    "name": "Tuhanarak",
    "image": "",
    "imageHint": "Tuhanarak",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21645,
      "atk": 859,
      "def": 1277,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Sun's Kiss",
      "Radiant Suffering",
      "Desert Fitness",
      "Inviolable [P]"
    ]
  },
  {
    "name": "Tunnel Steward",
    "image": "",
    "imageHint": "Tunnel-Steward",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 8925,
      "atk": 1255,
      "def": 903,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Vermin Killer",
      "Intensify"
    ]
  },
  {
    "name": "Turvold",
    "image": "",
    "imageHint": "Turvold",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1498,
      "def": 914,
      "spd": 93,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 42%",
    "skillNames": [
      "Crackling Blade",
      "Ancestors' Power",
      "Juggernaut"
    ]
  },
  {
    "name": "Twinclaw Disciple",
    "image": "",
    "imageHint": "Twinclaw",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11565,
      "atk": 1365,
      "def": 892,
      "spd": 85,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Disfigure",
      "Tendon Carve",
      "Tear to Shreds"
    ]
  },
  {
    "name": "Tyrant Ixlimor",
    "image": "",
    "imageHint": "Ixlimor",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21975,
      "atk": 771,
      "def": 1343,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Feast of Flame",
      "Hellfire Torrent",
      "Infernal Minions",
      "Fires of Doom [P]"
    ]
  },
  {
    "name": "Ugir the Wyrmeater",
    "image": "",
    "imageHint": "Ugir",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22800,
      "atk": 771,
      "def": 1288,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 70",
    "skillNames": [
      "Wyrmwrath",
      "Earth Puncture",
      "Ogryn Fortitude",
      "Scourge of Dragons [P]"
    ]
  },
  {
    "name": "Ultan of the Shell",
    "image": "",
    "imageHint": "Ultan",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1553,
      "def": 991,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 30%",
    "skillNames": [
      "Under the Skin",
      "Resurging Reversal",
      "Somnolence Spores",
      "Metabolism [P]"
    ]
  },
  {
    "name": "Ultimate Deathknight",
    "image": "",
    "imageHint": "Ultimate-Deathknight",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 782,
      "def": 1421,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 30%",
    "skillNames": [
      "Heckler of Legends",
      "Rats Off To Ya",
      "Get Comfy Everyone",
      "Too Awesome To Die [P]",
      "Didn't Need 'Em [P]"
    ]
  },
  {
    "name": "Ultimate Galek",
    "image": "",
    "imageHint": "Ultimate-Galek",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1332,
      "def": 958,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Fury Slash",
      "Crushing Hopes",
      "Burning Rage",
      "Brush It Off [P]"
    ]
  },
  {
    "name": "Umbral Enchantress",
    "image": "",
    "imageHint": "Umbral-Enchantress",
    "faction": "Demonspawn",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 925,
      "def": 1354,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Essence Scepter",
      "Immolate",
      "Undying Evil"
    ]
  },
  {
    "name": "Umetogi",
    "image": "",
    "imageHint": "Umetogi",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1564,
      "def": 859,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 15%",
    "skillNames": [
      "Sai Assassin",
      "Silent Parting",
      "Fade Into Nothing",
      "Standoff [P]"
    ]
  },
  {
    "name": "Underpriest Brogni",
    "image": "",
    "imageHint": "Brogni",
    "faction": "Dwarves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22965,
      "atk": 782,
      "def": 1266,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 90,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Doom Tower by 60",
    "skillNames": [
      "Deepcrystal Scourge",
      "Cavern's Grasp",
      "Resilient Glow",
      "Redoubt [P]"
    ]
  },
  {
    "name": "Urogrim",
    "image": "",
    "imageHint": "Urogrim",
    "faction": "Ogryn Tribes",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19155,
      "atk": 881,
      "def": 1145,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 20%",
    "skillNames": [
      "Skullstaff",
      "Tingly Tincture",
      "Bizarre Vapors"
    ]
  },
  {
    "name": "Urost the Soulcage",
    "image": "",
    "imageHint": "Urost",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 24450,
      "atk": 782,
      "def": 1167,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 80",
    "skillNames": [
      "Jagged Knuckles",
      "Fetid Eruption",
      "Soul Bounty",
      "Call of the Cage [P]"
    ]
  },
  {
    "name": "Ursala the Mourner",
    "image": "",
    "imageHint": "Ursala",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18000,
      "atk": 1167,
      "def": 936,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Doom Tower by 24%",
    "skillNames": [
      "Lance of Penitence",
      "Waves of Grief",
      "Requiem"
    ]
  },
  {
    "name": "Ursine Icecrusher",
    "image": "",
    "imageHint": "Ursine-Icecrusher",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 738,
      "def": 1409,
      "spd": 93,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 25%",
    "skillNames": [
      "Ravaging Paw",
      "Howling Gale",
      "Shroud of Winter [P]"
    ]
  },
  {
    "name": "Ursine Ironhide",
    "image": "",
    "imageHint": "Ursine-Ironhide",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 793,
      "def": 1222,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Confounding Crush",
      "Beat Back",
      "Rampaging Swipe",
      "Ursine Brutality [P]"
    ]
  },
  {
    "name": "Ursuga Warcaller",
    "image": "",
    "imageHint": "Ursuga",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23460,
      "atk": 485,
      "def": 1531,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Gigantic Cudgel",
      "Barrel Through",
      "Bottoms Up",
      "Golden Guard [P]"
    ]
  },
  {
    "name": "Urticata",
    "image": "",
    "imageHint": "Urticata",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1409,
      "def": 1057,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 15%",
    "skillNames": [
      "Mephitic Spines",
      "Poison Agonist",
      "Wretched Nexus",
      "Blood Borne [P]"
    ]
  },
  {
    "name": "Uugo",
    "image": "",
    "imageHint": "Uugo",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 738,
      "def": 1255,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Black Hand",
      "Maelstrom Wrack",
      "Uugo's Brew",
      "Final Spite [P]"
    ]
  },
  {
    "name": "Uzol of the Jade",
    "image": "",
    "imageHint": "Uzol",
    "faction": "Dwarves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1498,
      "def": 1068,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 33%",
    "skillNames": [
      "Ruthless Axmaster",
      "Stone-Hearted",
      "Royal Fury",
      "Jade King [P]"
    ]
  },
  {
    "name": "Vagabond",
    "image": "",
    "imageHint": "Vagabond",
    "faction": "Shadowkin",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1200,
      "def": 991,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Arena by 30",
    "skillNames": [
      "Dreamer's Curse",
      "Ominous Visit",
      "Join the Troupe"
    ]
  },
  {
    "name": "Valerie",
    "image": "",
    "imageHint": "Valerie",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 969,
      "def": 1002,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Faction Wars by 22%",
    "skillNames": [
      "Swing",
      "Energizing Presence",
      "Protect"
    ]
  },
  {
    "name": "Valkanen",
    "image": "",
    "imageHint": "Valkanen",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1531,
      "def": 1057,
      "spd": 96,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Arena by 30%",
    "skillNames": [
      "Dread Scythe",
      "Hex of Blades",
      "Death's Bargain",
      "Malice Unleashed",
      "Phantom Bulwark [P]"
    ]
  },
  {
    "name": "Valkyrie",
    "image": "",
    "imageHint": "Valkyrie",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 793,
      "def": 1597,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 33%",
    "skillNames": [
      "Denigration",
      "Stand Firm",
      "Jealousy [P]"
    ]
  },
  {
    "name": "Valla",
    "image": "",
    "imageHint": "Valla",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16845,
      "atk": 771,
      "def": 1409,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 45",
    "skillNames": [
      "Piercing Blade",
      "Crush The Wall",
      "Fortified Core",
      "Resolute Defense [P]"
    ]
  },
  {
    "name": "Vanguard",
    "image": "",
    "imageHint": "Vanguard",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 958,
      "def": 1090,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "\nIncreases Ally RES in All Battles by 30",
    "skillNames": [
      "Gathering Momentum",
      "Inescapable Wrath",
      "Dismay the Foe [P]"
    ]
  },
  {
    "name": "Varl the Destroyer",
    "image": "",
    "imageHint": "Varl",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15030,
      "atk": 1476,
      "def": 1101,
      "spd": 98,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Ravaging Leech",
      "Lay Waste",
      "Calamity Torrent",
      "Mass Murder [P]"
    ]
  },
  {
    "name": "Vasal of the Seal",
    "image": "",
    "imageHint": "Vasal",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 21315,
      "atk": 870,
      "def": 1288,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Abyssal Seal",
      "Infernal Darkness",
      "Daemon Possession",
      "Legion of Doom [P]"
    ]
  },
  {
    "name": "Vault Keeper Wixwell",
    "image": "",
    "imageHint": "Wixwell",
    "faction": "Sacred Order",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 771,
      "def": 1498,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 28%",
    "skillNames": [
      "Deadbolt",
      "Tempest of Knowledge",
      "Codex Intercipio",
      "Isolated Lunacy [P]"
    ]
  },
  {
    "name": "Venalicia Thrallmother",
    "image": "",
    "imageHint": "Venalicia",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22140,
      "atk": 892,
      "def": 1211,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Torturous Bolts",
      "Purge The Impure",
      "Mother Knows Best",
      "Warped Benevolence [P]"
    ]
  },
  {
    "name": "Venomage",
    "image": "",
    "imageHint": "Venomage",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 1002,
      "def": 1156,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 45",
    "skillNames": [
      "Toxicity",
      "Neurotoxin",
      "Fleshmelter Venom",
      "Pain Writhe [P]"
    ]
  },
  {
    "name": "Venus",
    "image": "",
    "imageHint": "Venus",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 1090,
      "def": 980,
      "spd": 112,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Pining",
      "Blind With Infatuation",
      "Burning Passion",
      "Pure Partner"
    ]
  },
  {
    "name": "Vergis",
    "image": "",
    "imageHint": "Vergis",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 925,
      "def": 1310,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 33%",
    "skillNames": [
      "Pierce",
      "Aegis",
      "Second Wind [P]"
    ]
  },
  {
    "name": "Vergumkaar",
    "image": "",
    "imageHint": "Vergumkaar",
    "faction": "Lizardmen",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22140,
      "atk": 914,
      "def": 1189,
      "spd": 99,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 55",
    "skillNames": [
      "Bejeweled Bulk",
      "Honored Ancient",
      "Crushing Trample",
      "Saurian Stoic [P]"
    ]
  },
  {
    "name": "Versulf the Grim",
    "image": "",
    "imageHint": "Versulf",
    "faction": "Knights Revenant",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22635,
      "atk": 870,
      "def": 1200,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Stern Admonishing",
      "Reign of Sorrow",
      "Quality Minions",
      "Infectious Fury [P]"
    ]
  },
  {
    "name": "Vestele Riverthorn",
    "image": "",
    "imageHint": "Vestele",
    "faction": "Sylvan Watchers",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1729,
      "def": 870,
      "spd": 106,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena battles by 30%",
    "skillNames": [
      "Raging River",
      "Erosive Force",
      "Meltwater Flood",
      "Student Of Glaicad [P]"
    ]
  },
  {
    "name": "Veteran",
    "image": "",
    "imageHint": "Veteran",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Rare",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 683,
      "def": 1321,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 15%",
    "skillNames": [
      "Disarm",
      "Head Hunter",
      "Massacre"
    ]
  },
  {
    "name": "Vigilante",
    "image": "",
    "imageHint": "Vigilante",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 760,
      "def": 826,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Holy Blade",
      "Branding Iron"
    ]
  },
  {
    "name": "Vildrax",
    "image": "",
    "imageHint": "Vildrax",
    "faction": "Demonspawn",
    "affinity": "Magic",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 738,
      "def": 1255,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Verminous Grasp",
      "Duke of Flies",
      "Swarm of Horrors",
      "Pestiferous [P]"
    ]
  },
  {
    "name": "Vilespawn",
    "image": "",
    "imageHint": "Vilespawn",
    "faction": "Demonspawn",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13875,
      "atk": 925,
      "def": 903,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hellblight",
      "Flesh Knit"
    ]
  },
  {
    "name": "Visionary",
    "image": "",
    "imageHint": "Visionary",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15360,
      "atk": 1277,
      "def": 1002,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 24%",
    "skillNames": [
      "Ectoplasm",
      "Haunt",
      "Dark Dealings"
    ]
  },
  {
    "name": "Visix the Unbowed",
    "image": "",
    "imageHint": "Visix",
    "faction": "Dark Elves",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 958,
      "def": 1476,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Faction Wars by 37%",
    "skillNames": [
      "Flanged Mace",
      "Sinister Allies",
      "Single Combat"
    ]
  },
  {
    "name": "Vitrius the Anointed",
    "image": "",
    "imageHint": "Vitrius",
    "faction": "Sacred Order",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1707,
      "def": 815,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 24%",
    "skillNames": [
      "Holy Terror",
      "Storm of Righteousness",
      "By My Hand!",
      "Inexorable [P]"
    ]
  },
  {
    "name": "Vizier Ovelis",
    "image": "",
    "imageHint": "Vizier",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1476,
      "def": 1013,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 34%",
    "skillNames": [
      "Accursed Blades",
      "Master of Misery",
      "Vizier of Poisons",
      "Unseen Assassin [P]"
    ]
  },
  {
    "name": "Vizug the Noxious",
    "image": "",
    "imageHint": "Vizug",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 22470,
      "atk": 881,
      "def": 1200,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "FAC-HP",
    "auraText": "Increases Ally HP in All Battles by 30%\n\n[Ogryn Tribes Only]\n\nIncreases Ally SPD in all battles by 15%",
    "skillNames": [
      "Render Flesh",
      "Venge-fire",
      "Despoiler of Anhelt",
      "Bonegrinder Brand [P]"
    ]
  },
  {
    "name": "Vlad the Nightborn",
    "image": "",
    "imageHint": "Vlad",
    "faction": "Undead Hordes",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15030,
      "atk": 1443,
      "def": 1134,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Ally C.RATE in All Battles by 24%",
    "skillNames": [
      "Thirsting Blade",
      "Exsanguinate",
      "Mind Shroud",
      "Notorious [P]"
    ]
  },
  {
    "name": "Vogoth",
    "image": "",
    "imageHint": "Vogoth",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19320,
      "atk": 804,
      "def": 1211,
      "spd": 89,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Horrendous Strength",
      "Wave of Revulsion",
      "Festering Dynamo [P]",
      "Eerie Presence [P]"
    ]
  },
  {
    "name": "Vrask",
    "image": "",
    "imageHint": "Vrask",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23460,
      "atk": 870,
      "def": 870,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in Dungeons by 33%",
    "skillNames": [
      "Whack",
      "Lightning Strike",
      "Cannibalism [P]"
    ]
  },
  {
    "name": "Vulkanos Fumor",
    "image": "",
    "imageHint": "Vulkanos",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 18330,
      "atk": 936,
      "def": 1421,
      "spd": 97,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "FAC-DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%\n\n[Demonspawn only]\n\nIncreases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Molten Blade",
      "Flaming Terror",
      "Demolition Burn",
      "Surging Demonfyre [P]"
    ]
  },
  {
    "name": "Vulpine",
    "image": "",
    "imageHint": "Vulpine",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Uncommon",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 11070,
      "atk": 1189,
      "def": 826,
      "spd": 87,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bare Fangs",
      "Alpha"
    ]
  },
  {
    "name": "Wagonbane",
    "image": "",
    "imageHint": "Wagonbane",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17175,
      "atk": 947,
      "def": 936,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Eye Blight",
      "Hackgore Magic",
      "Start The Mayhem"
    ]
  },
  {
    "name": "Walking Tomb Dreng",
    "image": "",
    "imageHint": "Dreng",
    "faction": "Knights Revenant",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23130,
      "atk": 870,
      "def": 1167,
      "spd": 99,
      "crate": 15,
      "cdmg": 57.0,
      "res": 50,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 30%",
    "skillNames": [
      "Corpsefire",
      "Exalted Pyre",
      "Death's Balance",
      "Fortress [P]"
    ]
  },
  {
    "name": "Wallmaster Othorion",
    "image": "",
    "imageHint": "Othorion",
    "faction": "High Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1454,
      "def": 1079,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Skyfall Arrow",
      "Falcon Shot",
      "Forever Marked",
      "No Foe Too Great [P]"
    ]
  },
  {
    "name": "Wanderer",
    "image": "",
    "imageHint": "Wanderer",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13050,
      "atk": 1443,
      "def": 716,
      "spd": 96,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 21%",
    "skillNames": [
      "Lay On",
      "Blade Symphony",
      "Pierce Through"
    ]
  },
  {
    "name": "War Mother",
    "image": "",
    "imageHint": "War-Mother",
    "faction": "Ogryn Tribes",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17505,
      "atk": 1509,
      "def": 903,
      "spd": 99,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in Faction Wars by 65",
    "skillNames": [
      "Cry Havoc",
      "Special Brew",
      "Mother's Touch"
    ]
  },
  {
    "name": "Warboy",
    "image": "",
    "imageHint": "Warboy",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Common",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 584,
      "def": 738,
      "spd": 91,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Plunder"
    ]
  },
  {
    "name": "Warcaster",
    "image": "",
    "imageHint": "Warcaster",
    "faction": "Banner Lords",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 1013,
      "def": 947,
      "spd": 106,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "CRATE",
    "auraText": "Increases Void Ally C.RATE in All Battles by 23%",
    "skillNames": [
      "Tactical Ace",
      "Sealing Strike",
      "Invincible Aura"
    ]
  },
  {
    "name": "Warchanter",
    "image": "",
    "imageHint": "Warchanter",
    "faction": "Orcs",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 716,
      "def": 771,
      "spd": 94,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Head Wound",
      "Frenzy"
    ]
  },
  {
    "name": "Warchief",
    "image": "",
    "imageHint": "Warchief",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18990,
      "atk": 848,
      "def": 1465,
      "spd": 102,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Brutal Force",
      "Marauder",
      "Standstill [P]"
    ]
  },
  {
    "name": "Warden",
    "image": "",
    "imageHint": "Warden",
    "faction": "Dark Elves",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17340,
      "atk": 870,
      "def": 1277,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in Arena by 30%",
    "skillNames": [
      "Deathmark",
      "Rending Flames",
      "Wall of Thorns"
    ]
  },
  {
    "name": "Warlord",
    "image": "",
    "imageHint": "Warlord",
    "faction": "Orcs",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 22305,
      "atk": 914,
      "def": 1178,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 80",
    "skillNames": [
      "Bludgeon",
      "Protection of Gods",
      "Orcish Rituals"
    ]
  },
  {
    "name": "Warmaiden",
    "image": "",
    "imageHint": "Warmaiden",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14700,
      "atk": 1321,
      "def": 727,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Ferocious Attack",
      "Opportunity Strike",
      "Crumbling Blast"
    ]
  },
  {
    "name": "Warpriest",
    "image": "",
    "imageHint": "Warpriest",
    "faction": "Sacred Order",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18165,
      "atk": 683,
      "def": 1134,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Admonish",
      "Divine Light",
      "Bless Weapons"
    ]
  },
  {
    "name": "Weregren Suncursed",
    "image": "",
    "imageHint": "Weregren",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15690,
      "atk": 1421,
      "def": 837,
      "spd": 98,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Bestial Leap",
      "Terror Assault",
      "Vitality Feast",
      "Prey on the Weak [P]"
    ]
  },
  {
    "name": "Whisper",
    "image": "",
    "imageHint": "Whisper",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16020,
      "atk": 1443,
      "def": 793,
      "spd": 95,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Dungeons by 29%",
    "skillNames": [
      "Softening Drive",
      "Charged Assault",
      "Unyielding Flurry",
      "Unrelenting [P]"
    ]
  },
  {
    "name": "White Dryad Nia",
    "image": "",
    "imageHint": "Nia",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20145,
      "atk": 683,
      "def": 1277,
      "spd": 98,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Strangling Plants",
      "Riotous Revival",
      "Bark Flesh",
      "Broad Roots [P]"
    ]
  },
  {
    "name": "Wight King Narses",
    "image": "",
    "imageHint": "Narses",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 23955,
      "atk": 705,
      "def": 1277,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "HP",
    "auraText": "Increases Ally HP in All Battles by 33%",
    "skillNames": [
      "Corruption Scepter",
      "Desecration Blast",
      "Spirits, Claim You",
      "Mantle of Undeath [P]"
    ]
  },
  {
    "name": "Wight Queen Ankora",
    "image": "",
    "imageHint": "Ankora",
    "faction": "Knights Revenant",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20805,
      "atk": 980,
      "def": 1211,
      "spd": 111,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Necrobolt",
      "Shield of Emaria",
      "Rise, My Love",
      "Queen Consort [P]"
    ]
  },
  {
    "name": "Windtalker",
    "image": "",
    "imageHint": "Windtalker",
    "faction": "Skinwalkers",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13710,
      "atk": 903,
      "def": 936,
      "spd": 87,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Thunder",
      "Spiritual Wind"
    ]
  },
  {
    "name": "Witness",
    "image": "",
    "imageHint": "Witness",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Rare",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14865,
      "atk": 1134,
      "def": 903,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Faction Wars by 30",
    "skillNames": [
      "Long Shot",
      "Support Fire",
      "Prayer of Comfort"
    ]
  },
  {
    "name": "Woad-Painted",
    "image": "",
    "imageHint": "Woad-Painted",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19815,
      "atk": 1013,
      "def": 969,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Crossup",
      "Undying Fury",
      "Overpower"
    ]
  },
  {
    "name": "Word Bearer",
    "image": "",
    "imageHint": "Word-Bearer",
    "faction": "Banner Lords",
    "affinity": "Magic",
    "rarity": "Uncommon",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 14535,
      "atk": 958,
      "def": 826,
      "spd": 96,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Noble Authority",
      "Royal Shield"
    ]
  },
  {
    "name": "Wretch",
    "image": "",
    "imageHint": "Wretch",
    "faction": "Undead Hordes",
    "affinity": "Force",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13215,
      "atk": 1432,
      "def": 716,
      "spd": 97,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Force Ally ATK in All Battles by 30%",
    "skillNames": [
      "Crypt Touch",
      "Lifeleech",
      "Gravefire"
    ]
  },
  {
    "name": "Wuji",
    "image": "",
    "imageHint": "Wuji",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 10080,
      "atk": 1498,
      "def": 1134,
      "spd": 97,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 20%",
    "skillNames": [
      "Dire Twinblade",
      "World of Darkness",
      "Shinobi Arts"
    ]
  },
  {
    "name": "Wurlim Frostking",
    "image": "",
    "imageHint": "Wurlim",
    "faction": "Knights Revenant",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 1035,
      "def": 1233,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "DEF",
    "auraText": "Increases Ally DEF in All Battles by 33%",
    "skillNames": [
      "Winds of Winter",
      "Frostbite Blast",
      "Icegrave Armor"
    ]
  },
  {
    "name": "Wuzgar",
    "image": "",
    "imageHint": "Wuzgar",
    "faction": "Ogryn Tribes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 881,
      "def": 1046,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Restorative Violence",
      "Shaman's Gift",
      "Tusked Protection",
      "Ogryn Restoration [P]"
    ]
  },
  {
    "name": "Wyrennon the Silken",
    "image": "",
    "imageHint": "Wyrennon",
    "faction": "Sylvan Watchers",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 17835,
      "atk": 848,
      "def": 1266,
      "spd": 104,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Faction Wars by 20%",
    "skillNames": [
      "Silken Spontoon",
      "Glide Steps",
      "Grace of Immortals"
    ]
  },
  {
    "name": "Wysteri Vineguard",
    "image": "",
    "imageHint": "Wysteri",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1310,
      "def": 892,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 25%",
    "skillNames": [
      "Drainvine Arrows",
      "Burrowbolt",
      "Ready, Aim...",
      "Deathleaf [P]"
    ]
  },
  {
    "name": "Wythir the Crowned",
    "image": "",
    "imageHint": "Wythir",
    "faction": "Demonspawn",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 24120,
      "atk": 793,
      "def": 1178,
      "spd": 108,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 50",
    "skillNames": [
      "Soul's Impalement",
      "Feel No Pain",
      "Azure Redeemer",
      "Eternal Flame [P]"
    ]
  },
  {
    "name": "Wyvernbane",
    "image": "",
    "imageHint": "Wyvernbane",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Rare",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 12555,
      "atk": 1288,
      "def": 903,
      "spd": 94,
      "crate": 15,
      "cdmg": 57.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Hobble Pierce",
      "Setback",
      "Cursefire Spear"
    ]
  },
  {
    "name": "Xena: Warrior Princess",
    "image": "",
    "imageHint": "Xena",
    "faction": "Barbarians",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 15690,
      "atk": 1542,
      "def": 1046,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 40,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena by 33%",
    "skillNames": [
      "Sword of Redemption",
      "Chakram Cyclone",
      "Whip of Destiny",
      "For the Greater Good! [P]"
    ]
  },
  {
    "name": "Xenomorph",
    "image": "",
    "imageHint": "Xenomorph",
    "faction": "Dark Elves",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17670,
      "atk": 1365,
      "def": 1035,
      "spd": 102,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Tail Stab",
      "Infestation",
      "Rip and Claw",
      "Caustic Blood [P]"
    ]
  },
  {
    "name": "Xiloco the Encrusted",
    "image": "",
    "imageHint": "Xiloco",
    "faction": "Lizardmen",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17835,
      "atk": 925,
      "def": 1465,
      "spd": 101,
      "crate": 15,
      "cdmg": 50.0,
      "res": 50,
      "acc": 0
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in all Battles by 20%",
    "skillNames": [
      "Bejeweled Club",
      "Primeval Secret",
      "Coccoon of Revival",
      "Temporal Scholar [P]"
    ]
  },
  {
    "name": "Yaga the Insatiable",
    "image": "",
    "imageHint": "Yaga",
    "faction": "Skinwalkers",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15195,
      "atk": 1365,
      "def": 925,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Virulent Cleaver",
      "Hungering Plague",
      "Rot From Within"
    ]
  },
  {
    "name": "Yakarl the Scourge",
    "image": "",
    "imageHint": "Yakarl",
    "faction": "Barbarians",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16350,
      "atk": 1597,
      "def": 892,
      "spd": 95,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Axe of Allwinter",
      "Blizzard Rider",
      "Glaciate",
      "Lord of Ice [P]"
    ]
  },
  {
    "name": "Yannica",
    "image": "",
    "imageHint": "Yannica",
    "faction": "High Elves",
    "affinity": "Spirit",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15525,
      "atk": 1487,
      "def": 1057,
      "spd": 100,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in all Battles by 30%",
    "skillNames": [
      "Even the Odds",
      "Baffling Speed",
      "Elven Judgment"
    ]
  },
  {
    "name": "Yelagirna",
    "image": "",
    "imageHint": "Yelagirna",
    "faction": "Orcs",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16515,
      "atk": 1365,
      "def": 837,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Faction Wars by 30%",
    "skillNames": [
      "Breath Taker",
      "Mortify",
      "Sword of Loss",
      "Great Cycle [P]"
    ]
  },
  {
    "name": "Yeoman",
    "image": "",
    "imageHint": "Yeoman",
    "faction": "Sacred Order",
    "affinity": "Magic",
    "rarity": "Common",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 9090,
      "atk": 903,
      "def": 694,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Volley"
    ]
  },
  {
    "name": "Yncensa Grail-bearer",
    "image": "",
    "imageHint": "Yncensa",
    "faction": "Sylvan Watchers",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 1200,
      "def": 1134,
      "spd": 110,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 20
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 70",
    "skillNames": [
      "Battle Catalyst",
      "Fumes of the Grail",
      "Malignant Growth",
      "Yncensed [P]"
    ]
  },
  {
    "name": "Yoshi the Drunkard",
    "image": "",
    "imageHint": "Yoshi",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19650,
      "atk": 1299,
      "def": 969,
      "spd": 103,
      "crate": 15,
      "cdmg": 50.0,
      "res": 40,
      "acc": 20
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in All Battles by 19%",
    "skillNames": [
      "Strong Booze",
      "Flaming Spirits",
      "Battle Toast",
      "Partier [P]"
    ]
  },
  {
    "name": "Yukimasa, Demon of Ice",
    "image": "",
    "imageHint": "Yukimasa",
    "faction": "Shadowkin",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 15855,
      "atk": 1608,
      "def": 914,
      "spd": 101,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in Arena battles by 33%.",
    "skillNames": [
      "Winnowing Winter",
      "Blizzard of Stikes",
      "Stain the Snows",
      "Solitary Demon [P]"
    ]
  },
  {
    "name": "Yumeko",
    "image": "",
    "imageHint": "Yumeko",
    "faction": "Shadowkin",
    "affinity": "Void",
    "rarity": "Legendary",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 21315,
      "atk": 870,
      "def": 1288,
      "spd": 105,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 60",
    "skillNames": [
      "Wereclaws",
      "Destiny's Mirror",
      "Dance of Time",
      "Deep Cover [P]"
    ]
  },
  {
    "name": "Yuzan the Marooned",
    "image": "",
    "imageHint": "Yuzan",
    "faction": "Skinwalkers",
    "affinity": "Void",
    "rarity": "Epic",
    "role": "HP",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 19980,
      "atk": 705,
      "def": 1266,
      "spd": 97,
      "crate": 15,
      "cdmg": 50.0,
      "res": 45,
      "acc": 0
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in All Battles by 40",
    "skillNames": [
      "Hammerhorn",
      "Thundering Charge",
      "Good Luck Charm",
      "Kind Soul [P]"
    ]
  },
  {
    "name": "Zargala",
    "image": "",
    "imageHint": "Zargala",
    "faction": "Orcs",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 16680,
      "atk": 1398,
      "def": 793,
      "spd": 103,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": "ACC",
    "auraText": "Increases Ally ACC in All Battles by 40",
    "skillNames": [
      "Split Apart",
      "Devastate",
      "Crack Armor"
    ]
  },
  {
    "name": "Zavia",
    "image": "",
    "imageHint": "Zavia",
    "faction": "Dark Elves",
    "affinity": "Force",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 18660,
      "atk": 1586,
      "def": 749,
      "spd": 105,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "ATK",
    "auraText": "Increases Ally ATK in All Battles by 33%",
    "skillNames": [
      "Transfix",
      "Poison Rain",
      "Deadly Catalyst",
      "Calamitous Partner"
    ]
  },
  {
    "name": "Zelotah",
    "image": "",
    "imageHint": "Zelotah",
    "faction": "Undead Hordes",
    "affinity": "Spirit",
    "rarity": "Epic",
    "role": "Support",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 20640,
      "atk": 826,
      "def": 1101,
      "spd": 95,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 15
    },
    "aura": "RES",
    "auraText": "Increases Ally RES in Arena by 70",
    "skillNames": [
      "Hypnotic Gaze",
      "Armored Scales",
      "Horrid Dreams"
    ]
  },
  {
    "name": "Zephyr Sniper",
    "image": "",
    "imageHint": "Zephyr-Sniper",
    "faction": "Barbarians",
    "affinity": "Spirit",
    "rarity": "Uncommon",
    "role": "Defense",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": true,
    "stats": {
      "hp": 13380,
      "atk": 617,
      "def": 1244,
      "spd": 100,
      "crate": 15,
      "cdmg": 50.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Suppressive Fire",
      "Ranger's Skill"
    ]
  },
  {
    "name": "Zii Ixchi",
    "image": "",
    "imageHint": "Zii",
    "faction": "Lizardmen",
    "affinity": "Force",
    "rarity": "Epic",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 14535,
      "atk": 1421,
      "def": 914,
      "spd": 99,
      "crate": 15,
      "cdmg": 60.0,
      "res": 30,
      "acc": 0
    },
    "aura": null,
    "auraText": null,
    "skillNames": [
      "Brush Choppers",
      "Crown Breaker",
      "Ancient Rage",
      "Assassin of Kings [P]"
    ]
  },
  {
    "name": "Zinogre Blademaster",
    "image": "",
    "imageHint": "Zinogre",
    "faction": "Shadowkin",
    "affinity": "Magic",
    "rarity": "Legendary",
    "role": "Attack",
    "obtainedFrom": "",
    "releaseYear": null,
    "invocable": false,
    "stats": {
      "hp": 17340,
      "atk": 1465,
      "def": 958,
      "spd": 104,
      "crate": 15,
      "cdmg": 63.0,
      "res": 30,
      "acc": 10
    },
    "aura": "SPD",
    "auraText": "Increases Ally SPD in Dungeons by 30%",
    "skillNames": [
      "Blade Combo",
      "Blade Strike",
      "Blade Spin",
      "Zinogre Essence [P]"
    ]
  }
];

/*
  Ordre de rarete utilise pour afficher les fleches "plus rare / moins rare"
  dans le comparateur. Ne pas modifier sauf si tu changes le systeme de
  rarete du jeu.
*/
const RARITY_ORDER = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythical"];
