# Just Stream It
[![Node](https://badgen.net/badge/node/18.4/yellow)](https://nodejs.org/fr/)
[![NPM](https://badgen.net/badge/npm/8.12/yellow)](https://www.npmjs.com/)
[![SASS](https://badgen.net/badge/sass/1.52/pink)](https://sass-lang.com/)
## Description
Just Stream It est une interface web permettant d'afficher des informations sur des films classés par genre et popularité.
## Installation
La récupération de données se base sur l'API OCMovies. Il est nécessaire de l'installer et de lancer l'application disponible sur le lien suivant :

[Télécharger OCMovies](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR)

Si l'API n'est pas lancée localement, il est possible de renseigner son adresse en modifiant la constante `BASE_API_URL` du fichier `src/constants.js`.

## Développement
Après toute modification d'un fichier SASS :

```bash
npm run sass # Génère le fichier public/css/style.css
npm run autoprefix # Génère le fichier public/css/prefixed/style.css
```

Après toute modification d'un fichier JS :

```bash
npm run build # Génère le fichier dist/app.bundle.js
```