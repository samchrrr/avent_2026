# 🎄 Calendrier de l'Avent connecté

Chaque matin du 1er au 24 décembre, vers 8h, elle reçoit une notif sur son iPhone. Un tap ouvre la case du jour : une enveloppe ancienne apparaît, son cachet de cire saute, le rabat s'ouvre dans une pluie de neige, de feuille d'or ou de pétales, puis ta lettre se dévoile mot à mot sur du papier vieilli.

**Compte 30 à 45 minutes en tout, à faire avant le 30 novembre.**

---

## Ce qu'il y a dans le dossier

| Fichier | À quoi ça sert |
|---|---|
| `messages.js` | **Le seul fichier à modifier** : son prénom, ta signature et les 24 mots |
| `index.html` | Le calendrier (pas besoin d'y toucher) |
| `img/` | Les aquarelles : décor, cases (unies, tartan, houx), cachets de cire, guirlande, houx, nœud, enveloppe, papier |
| `photos/` | Tes photos (facultatif), si tu veux en glisser certains jours |
| `fond-ecran-iphone.jpg` | Le fond d'écran assorti, en taille iPhone |
| `notif/` | Les 24 vignettes jointes aux notifs |
| `.github/workflows/notif-du-matin.yml` | L'envoi automatique de la notif chaque matin |

---

## 1. Écrire les mots

Ouvre `messages.js` avec un éditeur de texte (TextEdit en mode texte brut, ou VS Code).

- `prenom` : son prénom ou ton surnom pour elle. Il s'affiche dans le titre (« Le calendrier de l'Avent de … ») et sur chaque carte.
- `signature` : comment tu signes.
- Remplace chaque `"Écris ici ton mot du …"` par ton texte. Garde bien les guillemets autour.
  - Pour aller à la ligne : `\n`
  - Pour mettre un guillemet dans le texte : `\"`
- **Pluie de cœurs** : ajoute `coeurs: true` sur la case de ton choix (elle est sur le 14 par défaut). À l'ouverture, une explosion de cœurs sort de l'enveloppe, puis il pleut des cœurs sur tout l'écran pendant quelques secondes.
- **Photo (facultatif)** : mets l'image dans `photos/` (en JPG, idéalement moins de 1 Mo), puis écris par exemple `photo: "photos/plage.jpg"`.

**Pour tester sur ton ordi** : ouvre `index.html` dans Chrome ou Safari, puis ajoute `?test=1` à la fin de l'adresse pour débloquer toutes les cases. Ce mode est réservé au test, ne lui envoie jamais un lien qui contient `?test=1`.

---

## 2. Mettre le calendrier en ligne (GitHub, gratuit)

1. Crée un compte sur [github.com](https://github.com) si tu n'en as pas.
2. Clique sur **New repository**. Choisis un nom en minuscules, par exemple `avent-2026`, et coche **Public**.
3. Sur la page du dépôt, clique sur **uploading an existing file**, puis glisse tout le contenu du dossier : `index.html`, `messages.js`, `icone.png`, `fond-ecran-iphone.jpg`, et les dossiers `fonts`, `img`, `notif` et `photos`. Valide avec **Commit changes**.
4. Le dossier `.github` est caché sur Mac, donc le plus simple est de le créer à la main :
   **Add file → Create new file**, tape exactement `.github/workflows/notif-du-matin.yml` comme nom, colle le contenu du fichier du même nom, puis **Commit changes**.
5. Va dans **Settings → Pages**. Dans *Source*, choisis **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`, et clique sur **Save**.
   Au bout d'une minute ou deux, ton calendrier est en ligne à l'adresse
   `https://TON-PSEUDO.github.io/avent-2026/`

> 🔒 **Vie privée** : comme le dépôt est public, toute personne qui le trouve peut lire tes mots. Le risque reste faible, mais si tu préfères un dépôt **privé**, héberge plutôt le site sur [Netlify Drop](https://app.netlify.com/drop) en y glissant le dossier. Ajoute ensuite dans GitHub une variable `SITE_URL` qui contient l'adresse Netlify (Settings → Secrets and variables → Actions → onglet *Variables*).

---

## 3. Brancher les notifications (ntfy)

ntfy est une appli gratuite qui reçoit des notifs sur un « canal » secret.

1. **Ton canal secret** (déjà tiré au hasard pour toi, garde-le pour vous deux) :
   ```
   avent-targb67z2utu3n
   ```
2. Dans GitHub, va dans **Settings → Secrets and variables → Actions → New repository secret**.
   Mets `NTFY_TOPIC` comme nom et `avent-targb67z2utu3n` comme valeur.
3. **Teste d'abord sur ton propre iPhone** : installe **ntfy** depuis l'App Store, appuie sur **+**, entre le canal `avent-targb67z2utu3n` (laisse le serveur `ntfy.sh`) et autorise les notifications.
4. Dans GitHub, ouvre l'onglet **Actions**, choisis **Notif du matin**, clique sur **Run workflow** et entre le jour `1`. La notif doit arriver en quelques secondes. Touche-la pour vérifier que la case s'ouvre.
   *(Tant qu'on n'est pas le 1er décembre, la case 1 te dira « pas encore ouverte ». C'est normal.)*
5. Une fois le test réussi, tu peux te désabonner du canal sur ton téléphone pour ne pas te spoiler.

À partir du 1er décembre, l'envoi part tout seul chaque matin. Il n'y a plus rien à faire.

---

## 4. L'installer sur son iPhone

Fais-le avec elle le 30 novembre au soir ou le 1er au matin : ça fait partie de la surprise.

1. Installe **ntfy**, abonne-toi au canal `avent-targb67z2utu3n` et **autorise les notifications**.
2. *(Bonus)* Ouvre l'adresse du calendrier dans Safari, puis Partager → **Sur l'écran d'accueil**. Le calendrier s'affiche alors comme une petite appli, avec son icône cachet de cire.
3. **Le fond d'écran** : envoie-lui `fond-ecran-iphone.jpg` (par AirDrop par exemple). Ensuite, dans Photos : Partager → **Utiliser en fond d'écran**.

---

## Bon à savoir

- **Les cases s'ouvrent à minuit, heure de Paris.** Elle peut donc ouvrir sa case avant la notif si elle est curieuse. Si elle essaie une case encore scellée, la case gigote et un petit mot la taquine.
- **Tu peux modifier un mot même en décembre** : dans GitHub, clique sur `messages.js`, puis sur le crayon ✏️, puis sur **Commit changes**. La modif est en ligne en environ 1 minute.
- **Si une notif est en retard** : GitHub peut décaler l'envoi de quelques minutes, parfois jusqu'à 30 les jours chargés. Si tu veux, tu peux renvoyer la notif à la main depuis l'onglet Actions.
- **La vignette jointe à la notif** ne s'affiche pas forcément sur iPhone, selon la version de ntfy. Le titre et le lien, eux, marchent toujours.
- Les polices (IM Fell English, Cormorant Garamond et Pinyon Script) sont sous licence libre OFL, les licences sont dans le dossier `fonts/`.
- Les photos s'affichent avec un léger filtre sépia, pour rester dans l'ambiance.
