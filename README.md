# Raidle — Pokédle pour Raid Shadow Legends

Un petit jeu web (façon Pokédle / LoLdle) où on doit deviner un champion
mystère de Raid: Shadow Legends en comparant faction, affinité, rôle,
rareté, mode d'obtention et année de sortie.

## Structure du projet

```
raid-pokedle/
├── index.html      → structure de la page
├── style.css       → tout le style visuel
├── script.js       → toute la logique du jeu
├── data.js         → LA SEULE CHOSE À MODIFIER pour ajouter tes champions
└── images/         → dépose ici les portraits des champions
```

## Comment ajouter tes champions

`data.js` contient maintenant **les 1053 champions de ta base**, générés
automatiquement à partir du fichier `.db` que tu m'as donné. Chaque
champion ressemble à ça :

```js
{
  name: "Joan the Luminant",
  image: "",              // vide -> à toi de remplir avec un nom de fichier dans /images
  imageHint: "Joan",      // le nom/slug d'origine dans ta base, pour t'aider à nommer ton fichier
  faction: "Banner Lords",
  affinity: "Magic",
  rarity: "Mythical",
  role: "Support",
  obtainedFrom: "",       // vide -> pas dans ta base, à compléter si tu veux ce critère
  releaseYear: null,      // vide -> pas dans ta base, à compléter si tu veux ce critère
  invocable: true,
  stats: { hp: 22635, atk: 958, def: 1387, spd: 109, crate: 15, cdmg: 50.0, res: 50, acc: 0 },
  aura: "RES",
  auraText: "Increases Ally RES in all battles by 80",
  skillNames: ["Sacred Lance", "Symbol of Hope", "Faith Restored", "Metamorph", "Eternally Adored [P]"]
}
```

Je n'ai volontairement **pas repris les descriptions complètes des sorts**
de ta base (ce sont des textes du jeu protégés par le droit d'auteur de
Plarium) — j'ai gardé uniquement les noms des sorts dans `skillNames`. Le
jeu actuel ne s'en sert pas encore ; si tu veux les intégrer comme critère
de comparaison plus tard, dis-le moi et je peux écrire des résumés courts
avec mes propres mots plutôt que de les copier tels quels.

Les champs `stats`, `aura`, `auraText`, `invocable` sont là en plus (utiles
si tu veux enrichir le comparateur plus tard, par ex. comparer la vitesse
ou l'affinité de l'aura), mais ne sont pas encore utilisés par le jeu.

Tu peux bien sûr en supprimer une partie si tu ne veux pas des 1053
d'un coup — le site s'adapte automatiquement à la taille du tableau
(l'autocomplétion, le mode quotidien et le mode infini utilisent tous la
même liste).

**Important** : écris toujours les valeurs de `faction`, `affinity`,
`rarity` et `role` exactement de la même façon d'un champion à l'autre
(mêmes majuscules), sinon le comparateur ne pourra pas les faire
correspondre.

## Comment ajouter les images

1. Dépose tes fichiers d'images dans le dossier `images/` (ex :
   `images/kael.png`, `images/athel.jpg`...).
2. Dans `data.js`, mets le nom exact du fichier dans le champ `image`.
3. Si tu laisses `image: ""`, le jeu affiche un symbole provisoire à la
   place — donc tu peux commencer à tester le jeu avant d'avoir toutes
   les images.

Le portrait est affiché en silhouette noire tant que la partie n'est pas
terminée, et se révèle en couleur une fois le champion trouvé (ou après
un abandon).

## Comment jouer

- **Défi du jour** : un seul champion mystère, le même pour tout le monde
  ce jour-là (calculé automatiquement à partir de la date). La progression
  est sauvegardée dans le navigateur, donc on peut fermer l'onglet et
  reprendre plus tard.
- **Partie infinie** : un champion aléatoire à chaque nouvelle partie,
  guesses illimités, bouton "Nouveau champion" à la fin.
- Le bouton "Copier le résultat" génère une petite grille d'émojis
  façon Wordle, à coller où tu veux pour partager ton score.

## Comment l'héberger / le tester

C'est un site 100% statique (pas de serveur, pas de base de données), donc
plusieurs options simples :

- **En local** : ouvre `index.html` directement dans ton navigateur, ou
  lance un petit serveur local (ex : `python3 -m http.server` depuis le
  dossier, puis va sur `http://localhost:8000`).
- **En ligne, gratuitement** : dépose le dossier tel quel sur
  [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.com)
  (glisser-déposer le dossier) ou [Vercel](https://vercel.com).

Aucune étape de build n'est nécessaire — c'est juste du HTML/CSS/JS brut.

## Idées d'évolutions possibles

- Ajouter un champ "livres/skill" à comparer.
- Ajouter un mode "silhouette qui se floute progressivement".
- Ajouter une limite de tentatives.

Dis-moi si tu veux que j'ajoute une de ces options, ou toute autre idée.
