# Dessin → Son

Une courbe dessinée au feutre devient un son numérique. Outil pédagogique pour la
conversion analogique → numérique : échantillonnage, quantification, repliement,
bruit, spectre.

## Utilisation

1. Imprimer les feuilles A, B, C (bouton dans la page) ou préparer une feuille
   blanche avec 4 carrés noircis dans les coins.
2. Tracer la courbe au feutre noir, photographier la feuille.
3. Importer la photo, écouter, observer l'oscilloscope et le spectre, enregistrer le WAV.

La fiche d'activité pour les élèves est dans `fiche-dessin-son.pdf`.

## Fonctionnement

Une seule page HTML en JavaScript sans framework. Tout le traitement se fait dans
le navigateur : aucune photo n'est envoyée sur Internet.

- Détection des 4 carrés (composantes connexes), redressement par homographie.
- Extraction du trait colonne par colonne avec suivi du trait.
- Synthèse par table d'onde, filtre anti-repliement par FFT, quantification sur n bits.
- Audio : Web Audio API ; export WAV 16 bits.
- Seule dépendance externe : [jsPDF](https://github.com/parallax/jsPDF) (via cdnjs)
  pour générer le PDF des feuilles. Polices : Google Fonts.

## Mise en ligne avec GitHub Pages

Settings › Pages › Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
La page est ensuite disponible à `https://<utilisateur>.github.io/<dépôt>/`.
