# Checkpoint 2 - JS

## Rappel - Que sont les checkpoints ?

Pour rappel un **checkpoint** est un terme utilisé dans la Wild Code School pour décrire une **auto-évaluation dans un temps donné**. Elle dure généralement une demi-journée (jusqu'à une journée complète ou plus).

Ces checkpoints sont conçus pour atteindre un certain nombre d’objectifs en te présentant :

> 1. ... une façon de mesurer tes progrès 📏📈
> 2. ... la possibilité d'utiliser tes compétences acquises dans un objectif qui a du sens 🚩🥅
> 3. ... la possibilité d'exercer les compétences de gestion du temps et de priorisation ⌛⬆️
> 4. ... l'opportunité de revoir et d'apprendre du code des autres, montrant qu'il existe toujours de nombreuses façons différentes d'accomplir une tâche 👥💬

## Les grandes lignes – Applicables à tous les checkpoints

Chaque checkpoint implique un ensemble d’étapes similaires :

1. Cloner le dépôt localement à l'aide des commandes git
2. Immédiatement après le clonage, créer une nouvelle branche localement et basculer dessus
3. Pour nommer ta branche, nous aimerions que tu utilises le modèle `{{firstname}}_{{LASTNAME}}` où :

- `{{firstname}}` est un placeholder qui doit être remplacé par ton prénom, en minuscules
- `{{LASTNAME}}` est un placeholder qui doit être remplacé par ton nom de famille, en majuscules

(par exemple, si ton prénom est John et ton nom Doe, le modèle `{{firstname}}_{{LASTNAME}}` donnera `john_DOE`)

4. Ouvrir le dépôt cloné dans ton IDE
5. Faire un commit après chaque étape, avec un message de commit qui met en évidence la partie terminée (par exemple `finished step 1`)
6. Pousser tes modifications vers GitHub, de préférence après chaque validation

## Instructions pour ce checkpoint

### Étape 1 - Algorithmes JS (~1 heure)

Résoud ces exercices :

> [algo1.ts](./algo/1/countLetters.ts)
>
> [algo2.ts](./algo/2/getFibonacciSequence.ts)

Des tests unitaires sont disponibles. Ils te permettront de savoir si tes algorithmes fonctionnent correctement !

Tout d'abord, installe les dépendances (avec `npm install` ou équivalent :wink:)".
Ensuite, tu peux exécuter les tests :

```sh
npm run algo:test # cette commande exécute tous les tests

npm run algo:test:1 # cette commande exécute des tests pour le premier algorithme uniquement
npm run algo:test:2 # cette commande exécute des tests pour le deuxième algorithme uniquement
# etc... pour chaque algorithme.
```

Si tu as plus de temps, tu peux travailler sur ces algos bonus (ceux-ci sont facultatifs, **ignore les pour l'instant et reviens dessus lorsque tu auras terminé la partie 2 du checkpoint)** :

> [algo3.ts](./algo/3/getPoints.ts)
>
> [algo4.ts](./algo/4/sumArrays.ts)

## Étape 2 – La fabrique de Cupcakes (~3 heures)

Ton objectif est de voir où tu en es sur :

- [ ] L'utilisation de fetch
- [ ] L'utilisation des props
- [ ] L'utilisation des states
- [ ] L'utilisation de `map` et `filter`
- [ ] Les loaders dans React Router
- [ ] Le hook `useEffect`
- [ ] La création de composants React
- [ ] La création de routes avec React Router

Copie le fichier `.env.sample` du dossier `server` et renomme ta copie `.env`.

Lance ensuite les commandes suivantes :

```bash
npm install
npm run dev
```

Et ouvre l'adresse http://localhost:3000/
