# Mémo cyber

Petite application de révision (installable sur le téléphone, utilisable hors ligne) pour apprendre le vocabulaire du réseau et de la cybersécurité : des QCM avec répétition espacée, et un lexique des mots qu'on confond souvent (HTTP / HTML, masque / passerelle, port client / port serveur…).

**En ligne** : https://gameandasmr-lang.github.io/memo-cyber/
Sur Android : ouvrir le lien dans Chrome → ⋮ → Ajouter à l'écran d'accueil.

## Comment ça marche
- **Réviser** : une session de 10 questions. Une question réussie revient de plus en plus tard (1, 2, 4, 8, 16 jours), une question ratée revient à la fin de la session puis le lendemain (boîtes de Leitner). Le bouton « Test aléatoire » tire 10 questions au hasard.
- **Lexique** : chaque paire de mots, avec une phrase simple, une image simple et le piège à éviter.
- La progression reste dans le navigateur du téléphone (rien n'est envoyé nulle part).

## Fichiers
- `index.html` : l'application (générée, ne pas modifier ici).
- `memo-cyber.json` : les cartes (paires et questions).
- `manifest.webmanifest`, `sw.js`, `icon-*.png` : installation et fonctionnement hors ligne.

La source vit dans un autre dossier de travail ; ce dépôt est mis à jour par un script de déploiement qui reconstruit `index.html`, copie les cartes et change le numéro de cache.
