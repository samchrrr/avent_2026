/* =========================================================
   ✏️  C'EST ICI QUE TU ÉCRIS TOUT
   Modifie uniquement le texte entre les guillemets " ".
   - Pour aller à la ligne dans un mot : écris \n
   - Pour un guillemet dans le texte : écris \"
   - Photo (facultatif) : mets le fichier dans le dossier photos/
     puis écris son nom, ex. photo: "photos/plage.jpg"
     (laisse photo: "" s'il n'y en a pas)
   ========================================================= */

const CONFIG = {
  prenom: "Ma chérie",          // son prénom ou ton surnom pour elle
  signature: "Ton amoureux",    // comment tu signes
  annee: 2026,                  // année du calendrier
  sousTitre: "Un petit mot par jour jusqu'à Noël"
};

const MESSAGES = {
  1:  { texte: "Un petit calendrier pour toi, rempli de petites attentions, parce que mon plus beau cadeau, c'est toi.", photo: "" },
  2:  { texte: "Même à distance, je t'envoie un gros câlin pour illuminer ta journée.", photo: "" },
  3:  { texte: "Ma journée sera forcément belle, puisqu'elle se terminera dans tes bras.", photo: "" },
  4:  { texte: "Un bisou pour toi, parce que tu me manques même quand tu es là.", photo: "" },
  5:  { texte: "Une journée d'amour et d'eau fraîche… enfin surtout d'amour et d'huîtres !", photo: "" },
  6:  { texte: "Pas besoin de grand-chose pour être heureux : juste toi, moi et notre lit !", photo: "" },
  7:  { texte: "J-18 avant Noël, mais… le meilleur cadeau est déjà à tes côtés !", photo: "" },
  8:  { texte: "Dernière ligne droite avant la liberté ! Courage ma chérie, après ça, place au repos, aux bisous et aux moments rien qu'à nous.", photo: "" },
  9:  { texte: "Home sweet home… surtout quand tu es là. Va jeter un petit coup d'œil sous le lit, une surprise t'y attend !", photo: "" },
  10: { texte: "Prépare ton estomac et ton plus beau sourire, ce soir c'est tartiflette, tv et amour à volonté !", photo: "" },
  11: { texte: "Avec toi, même quand il y a des jours de Dommage, je garde la tête Sur la lune, parce que notre histoire est ma plus belle Bienvenue chez moi.", photo: "" },
  12: { texte: "En route pour une petite escapade à deux, et c'est toi qui choisis la destination !", photo: "" },
  13: { texte: "Merci d'être ma personne préférée.", photo: "" },
  14: { texte: "Livraison spéciale : des fleurs et plein de petits cœurs remplis d'amour, rien que pour toi !.", photo: "", coeurs: true },
  15: { texte: "Ce soir, tu n'as rien à faire, juste à te détendre… Je m'occupe du massage .", photo: "" },
  16: { texte: "Depuis notre Rencontre, ma vie a pris des airs de Mélodrama… Mais avec toi, même les petits drames deviennent de belles histoires, parce que tu rends chaque instant Sublime.", photo: "" },
  17: { texte: "Aujourd'hui, je dis OUI à presque tout ! Alors, profite-en bien… mais attention, les demandes abusives seront soumises à négociation !", photo: "" },
  18: { texte: "Ce soir, on fait fondre le fromage  Au programme : raclette, bisous et gros bidous bien remplis.", photo: "" },
  19: { texte: "Encore quelques jours avant Noël… Alors, dis-moi, quelle est la chose que tu aimerais absolument faire avec moi avant la fin de l'année ?", photo: "" },
  20: { texte: "On monte un peu la température… Oublie le chauffage, j'ai prévu de quoi te réchauffer !", photo: "" },
  21: { texte: "Petit rappel : parmi toutes les jolies choses de ma vie, tu es clairement ma préférée.", photo: "" },
  22: { texte: "Direction Bordeaux ! Enfile tes chaussures, prends ma main et prépare-toi à marcher… sauf si on trouve une terrasse sympa avant !", photo: "" },
  23: { texte: "Top départ du marathon des repas de Noël ! Au programme : manger, rire, se resservir… et regretter d'avoir autant mangé !", photo: "" },
  24: { texte: "À travers ces 24 petites surprises, j’espère t’avoir rappelé à quel point tu es précieuse pour moi. Tu es mon bonheur, mon plus beau sourire et la personne avec qui j’ai envie de partager tous les moments de la vie. Je peux le dire Je t'aime", photo: "" }
};
