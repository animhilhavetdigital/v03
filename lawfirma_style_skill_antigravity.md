# Lawfirma Style Skill — Antigravity Website Design System

> Objectif : utiliser ce fichier comme **skill design** dans Antigravity pour créer un site web inspiré du style visuel de `lawfirma-wbs.framer.website`, sans copier le contenu exact ni les assets propriétaires.  
> Style général : **cabinet juridique premium**, clair, élégant, éditorial, minimaliste, avec touches chaudes orange/caramel et brun profond.

---

## 1. Direction artistique globale

Le site doit donner une impression de :

- Cabinet d’avocats / conseil juridique haut de gamme
- Élégance sobre, professionnelle et rassurante
- Luxe discret, sans surcharge visuelle
- Grande confiance, expertise, clarté et autorité
- Design éditorial avec beaucoup d’espace blanc
- Style premium proche d’un site Framer moderne
- Ambiance humaine, calme et stratégique

Le design doit être **clair**, respirant, très structuré, avec des sections longues, aérées, peu chargées, et une forte hiérarchie typographique.

---

## 2. Moodboard visuel

### Ambiance

- Fond principal très clair : blanc cassé / crème
- Accents orange brûlé / caramel
- Texte principal brun foncé presque noir
- Grandes images juridiques avec effet doux
- Cartes arrondies, élégantes, avec ombre légère
- Typographie serif expressive pour les grands titres
- Typographie sans-serif discrète pour les textes et menus
- Sections très espacées verticalement
- Atmosphère premium, calme, posée

### Sensation recherchée

Le visiteur doit ressentir :

- Sérieux
- Protection
- Expertise
- Accompagnement humain
- Clarté juridique
- Défense personnalisée
- Confiance immédiate

---

## 3. Palette couleurs

### Couleurs principales

```css
--color-bg: #F8F6F2;
--color-bg-soft: #F1EEE8;
--color-card: #FFFFFF;
--color-card-warm: #FBF7F2;

--color-text: #2B1A12;
--color-text-soft: #6E5B50;
--color-muted: #9B8A80;

--color-primary: #D9833F;
--color-primary-hover: #C87534;
--color-primary-soft: #F3C39D;
--color-primary-light: #FCE8D6;

--color-brown: #4A260F;
--color-brown-dark: #321707;
--color-border: #E8DDD3;
--color-border-soft: #F0E7DF;
```

### Usage

- **Fond global** : `#F8F6F2` ou blanc cassé
- **Texte principal** : brun très foncé `#2B1A12`
- **Accent / CTA** : orange caramel `#D9833F`
- **Footer** : brun profond `#4A260F` ou `#321707`
- **Cartes** : blanc ou crème très léger
- **Bordures** : beige clair très subtil

### Règles de contraste

- Ne jamais utiliser orange clair sur fond clair pour du petit texte important.
- Les CTA orange doivent avoir texte brun foncé ou blanc selon contraste.
- Les grands titres doivent rester très lisibles.
- Les textes secondaires doivent rester doux mais lisibles.

---

## 4. Typographie

### Style recommandé

Le site utilise une logique typographique très éditoriale :

- Gros titres en serif élégante
- Texte courant en sans-serif moderne et discret
- Petits labels en uppercase ou petite taille

### Fonts recommandées

Si disponibles :

```css
--font-heading: "Cormorant Garamond", "Playfair Display", Georgia, serif;
--font-body: "Inter", "Manrope", Arial, sans-serif;
```

Alternative :

```css
--font-heading: "Libre Baskerville", Georgia, serif;
--font-body: "Inter", sans-serif;
```

### Hiérarchie

#### H1

- Serif
- Très élégant
- Taille desktop : 58px à 76px
- Taille mobile : 38px à 46px
- Line-height : 0.95 à 1.05
- Font-weight : 400 ou 500
- Tracking légèrement serré

#### H2

- Serif
- Taille desktop : 44px à 58px
- Taille mobile : 32px à 40px
- Line-height : 1.05
- Font-weight : 400

#### H3

- Serif ou sans-serif selon contexte
- Taille : 22px à 30px
- Line-height : 1.15

#### Body

- Sans-serif
- Taille : 14px à 16px
- Line-height : 1.6
- Couleur : brun/gris doux

#### Labels

- Sans-serif
- Taille : 11px à 13px
- Letter-spacing : 0.04em à 0.08em
- Couleur : orange ou brun doux

---

## 5. Style des textes

### Titres

Les titres doivent souvent mélanger brun foncé et mot accent orange.

Exemple :

```html
<h1>Expert legal <span>defense</span><br />counsel for you</h1>
```

Règles :

- Mettre 1 ou 2 mots importants en orange.
- Garder une composition centrée ou très éditoriale.
- Éviter les titres trop longs sans retour à la ligne.
- Utiliser des breaks contrôlés sur desktop.

### Ton rédactionnel

- Professionnel
- Direct
- Rassurant
- Premium
- Humain
- Orienté résultat

Éviter :

- Trop de jargon
- Phrases trop commerciales
- Ton agressif
- Surcharge de promesses

---

## 6. Layout général

### Container

```css
.container {
  width: min(1120px, calc(100% - 48px));
  margin-inline: auto;
}
```

Mobile :

```css
.container {
  width: min(100% - 28px, 1120px);
}
```

### Espacements verticaux

- Section standard desktop : 96px à 150px
- Hero : 80px à 120px après navbar
- Section compacte : 64px à 88px
- Mobile : réduire à 56px à 86px

### Composition

- Beaucoup d’espace blanc
- Sections centrées avec largeur maîtrisée
- Alternance : section centrée / section 2 colonnes / grande image / cartes
- Éviter les grilles trop denses

---

## 7. Navbar

### Style

Navbar très fine, premium, centrée, minimaliste.

Caractéristiques :

- Position en haut, largeur contenue
- Fond blanc/crème légèrement transparent
- Border-radius pill ou arrondi doux
- Petite hauteur : 44px à 56px
- Menu centré
- Logo à gauche
- CTA à droite
- Texte très petit et propre

### Structure

```txt
[Logo]     Home  Practice  Team  Blog  Pricing     [CTA]
```

### CSS direction

```css
.navbar {
  height: 52px;
  background: rgba(255,255,255,0.72);
  border: 1px solid var(--color-border-soft);
  border-radius: 999px;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(74,38,15,0.06);
}
```

### Mobile

- Logo à gauche
- Burger ou menu compact à droite
- CTA peut être masqué ou placé dans le menu

---

## 8. Hero section

### Direction

Le hero est très important. Il doit ressembler à une composition premium :

- Petit label au-dessus
- Grande image horizontale avec coins arrondis
- Dégradé blanc/crème en bas de l’image
- Gros titre superposé ou juste sous l’image
- CTA principal + micro preuve sociale
- Section centrée

### Structure recommandée

```txt
[small breadcrumb/label]

[large rounded image]
  gradient bottom overlay
  [H1 large serif with orange accent]
  [CTA primary] [small trust indicator]

[3 service cards overlapping below]
```

### Image hero

- Ratio : 16/9 ou 21/9
- Largeur : 760px à 900px
- Border-radius : 18px à 24px
- Ombre très douce
- Dégradé bas : crème transparent vers fond clair

### Overlay gradient

```css
.hero-image::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 42%;
  background: linear-gradient(to bottom, rgba(248,246,242,0), #F8F6F2 85%);
}
```

### Titre hero

- Centré
- Serif très grand
- Brun foncé
- Mot-clé orange
- Line-height serré

### CTA hero

Bouton principal orange arrondi :

```css
.btn-primary {
  background: var(--color-primary);
  color: #fff;
  border-radius: 999px;
  padding: 12px 22px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(217,131,63,0.25);
}
```

---

## 9. Boutons

### Bouton principal

- Orange caramel
- Arrondi pill
- Texte court
- Petite icône flèche possible
- Hover : orange plus foncé + léger lift

```css
.btn-primary:hover {
  transform: translateY(-2px);
  background: var(--color-primary-hover);
  box-shadow: 0 16px 28px rgba(217,131,63,0.28);
}
```

### Bouton secondaire

- Fond blanc ou crème
- Bordure beige
- Texte brun
- Hover : fond légèrement chaud

```css
.btn-secondary {
  background: #fff;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 11px 20px;
}
```

### Petits boutons

- Utilisés pour tags, services, mini CTA
- Taille compacte
- Arrondi complet
- Fond crème/orange très clair

---

## 10. Cartes services

### Style

Cartes services visibles juste après le hero :

- 3 cartes en grille
- Images en haut ou en background
- Coins arrondis
- Ombre douce
- Texte centré
- Titre serif
- Description courte
- Légère superposition sur la section précédente

### Structure

```txt
[Image]
Title service
Short description
```

### CSS

```css
.service-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid var(--color-border-soft);
  box-shadow: 0 18px 45px rgba(74,38,15,0.08);
  transition: transform .35s ease, box-shadow .35s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 60px rgba(74,38,15,0.12);
}
```

### Images cartes

- Ratio 4/3
- Effet légèrement désaturé possible
- Luminosité douce
- Pas d’images trop contrastées

---

## 11. Section badges / domaines d’expertise

### Direction

Une zone avec plusieurs petits badges horizontaux, puis un badge central plus important.

Objectif : montrer les domaines d’intervention sans gros bloc lourd.

### Style

- Petits pills arrondis
- Icône fine + texte
- Fond blanc
- Bordure beige
- Disposition en lignes autour d’un bloc central
- Bloc central rond ou card douce avec icône juridique

### CSS

```css
.practice-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.8);
  border: 1px solid var(--color-border-soft);
  color: var(--color-text-soft);
  font-size: 13px;
}
```

---

## 12. Section mission / stats

### Direction

Section très centrée avec :

- Petit portrait/avatar ou image carrée arrondie
- Grand mot très pâle en arrière-plan, par exemple “Justice”
- H2 au centre
- Texte court
- Statistiques en ligne

### Style

- Mot background énorme en serif, opacité très faible
- Contenu centré au-dessus
- Stats orange clair, très grandes
- Texte minimal

### CSS background word

```css
.background-word {
  position: absolute;
  font-family: var(--font-heading);
  font-size: clamp(96px, 18vw, 220px);
  color: rgba(74,38,15,0.055);
  z-index: 0;
}
```

### Stats

```txt
30+ cases handled
98% success rate
$2B+ saved/recovered
```

Utiliser le contenu réel du projet si disponible.

---

## 13. Testimonials / success section

### Direction

Carte large avec :

- Colonne gauche : titre “Proven success and recognition”
- Colonne droite : 2 ou 3 cartes témoignages
- Stars orange
- Avatar + nom
- Logos ou marques en bas

### Style

- Grand container blanc
- Border-radius 18px à 24px
- Ombre légère
- Fond intérieur crème
- Texte doux
- Très propre, premium

### CSS

```css
.testimonial-panel {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 22px;
  box-shadow: 0 24px 70px rgba(74,38,15,0.08);
  padding: 28px;
}
```

---

## 14. Section stratégie / split layout

### Direction

Section 2 colonnes :

- Gauche : image juridique avec légende courte
- Droite : titre + texte + petite icône orange + trait décoratif

### Style

- Beaucoup d’espace autour
- Image arrondie
- Titre aligné gauche
- Mot accent orange
- Très peu de texte

### Exemple structure

```txt
[Image card]
[caption]

[Label]
Where strategy meets unwavering advocacy
[icon]
[paragraph]
```

---

## 15. Grande bannière image

### Direction

Grande image horizontale pleine largeur contenue, avec :

- Coins arrondis
- Dégradé bas crème
- Titre superposé en bas centre
- 3 points/avantages en dessous
- Petit CTA au centre

### Style

Très proche d’un bloc hero secondaire.

### Image

- Ratio large
- Hauteur desktop : 420px à 520px
- Mobile : 300px à 360px

---

## 16. Section équipe

### Direction

Section avec :

- Texte à gauche : “Your experienced legal team”
- CTA orange
- Signatures / mini avatars
- Photos équipe à droite en 2 cartes

### Style

- Photos portrait verticales
- Border-radius 12px à 18px
- Texte minimal
- Nom + rôle sous la photo
- Layout asymétrique premium

---

## 17. Section processus / chiffres étapes

### Direction

Bande claire avec 4 étapes numérotées :

```txt
01 Free consultation
02 Case evaluation
03 Strategy creation
04 Execution and support
```

### Style

- Numéros très grands en orange clair
- Titres courts
- Descriptions courtes
- Alignement en grille 4 colonnes desktop
- 2 colonnes tablette
- 1 colonne mobile

### CSS

```css
.step-number {
  font-family: var(--font-heading);
  font-size: 56px;
  color: rgba(217,131,63,0.55);
  line-height: 1;
}
```

---

## 18. Section contact / formulaire

### Direction

Section 2 colonnes :

- Gauche : image avocat/client + infos contact
- Droite : formulaire dans carte blanche

### Formulaire

Champs :

- Name
- Email
- Phone
- Message
- Button submit

### Style formulaire

- Carte blanche
- Inputs crème très clair
- Bordures beige
- Radius 8px à 12px
- CTA orange pleine largeur ou centré

### CSS input

```css
.input {
  background: #FBF7F2;
  border: 1px solid var(--color-border-soft);
  border-radius: 10px;
  padding: 13px 14px;
  color: var(--color-text);
}

.input:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 4px rgba(217,131,63,0.12);
}
```

---

## 19. FAQ

### Direction

Section FAQ simple :

- Gauche : titre “Frequently asked questions” + petit CTA
- Droite : accordion

### Style

- Accordion blanc / crème
- Lignes fines beige
- Plus icon à droite
- Ouverture douce
- Pas de gros effets

---

## 20. Footer

### Direction

Footer brun foncé, très premium.

Structure :

```txt
[Logo]
Exceptional legal defense for your rights.        [CTA]

Pages              Company              Contact
Home               About                Address
Practice           Blog                 Email
Team               Privacy Policy       Phone

Bottom: copyright + social icons + small badge
```

### Style

- Fond brun profond
- Texte blanc cassé
- Accent orange
- Bouton orange clair ou crème
- Beaucoup de padding
- Typographie serif pour le grand texte

### CSS

```css
.footer {
  background: var(--color-brown-dark);
  color: #F8F1E9;
  padding: 80px 0 32px;
}

.footer a {
  color: rgba(248,241,233,0.72);
}

.footer a:hover {
  color: #fff;
}
```

---

## 21. Images et direction photo

### Types d’images recommandés

- Poignée de main professionnelle
- Avocat au bureau
- Balance de justice
- Documents juridiques
- Consultation client
- Portraits équipe
- Salle de réunion
- Détails premium : stylo, contrat, dossiers, robe d’avocat

### Traitement image

- Lumière naturelle
- Couleurs chaudes
- Contraste doux
- Légère désaturation
- Pas d’images trop corporate stock agressives
- Coins arrondis
- Dégradés crème sur certaines images

### Prompt image direction si génération nécessaire

```txt
Premium legal office photography, warm natural light, elegant law firm atmosphere, professional lawyer consulting client, soft beige and brown color palette, cinematic but realistic, refined, high-end, minimal, no text, no watermark.
```

---

## 22. Icônes

### Style

- Icônes fines lineaires
- Couleur orange ou brun doux
- Taille 16px à 24px
- Pas d’icônes cartoon
- Utiliser des symboles juridiques subtils : balance, shield, document, pen, courthouse, check, arrow

### Règles

- Icônes toujours cohérentes en stroke width
- Ne pas mélanger trop de styles
- Icônes dans petits cercles crème/orange clair si besoin

---

## 23. Animations

### Direction

Animations très subtiles, premium, type Framer.

Utiliser :

- Fade in au scroll
- Légère translation Y
- Scale très léger sur images/cartes
- Hover lift sur cards
- Boutons avec transition douce
- Apparition progressive des stats
- Accordion FAQ fluide

### Durées

```css
--transition-fast: 180ms ease;
--transition-normal: 320ms ease;
--transition-slow: 650ms cubic-bezier(.22,1,.36,1);
```

### Exemples

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .7s ease, transform .7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### À éviter

- Animations rapides agressives
- Effets flashy
- Parallax trop lourd
- Rotation excessive
- Sur-animation des textes

---

## 24. Responsive design

### Desktop

- Container max 1120px
- Hero image large mais centrée
- Grilles 3 ou 4 colonnes selon section
- Espacement vertical généreux

### Tablet

- Réduire les titres
- Grilles passent en 2 colonnes
- Garder les images bien proportionnées

### Mobile

- H1 max 42px
- Sections en une colonne
- Cards full width
- Navbar compacte
- CTA lisibles
- Éviter les titres coupés bizarrement
- Garder 24px minimum de padding horizontal

---

## 25. Architecture recommandée de page

Utiliser cette structure si le fichier content ne précise pas une autre structure :

1. Navbar
2. Hero premium avec image + CTA
3. Cards services / domaines principaux
4. Badges domaines d’expertise
5. Mission / promesse / stats
6. Testimonials / preuves sociales
7. Section stratégie / approche
8. Grande bannière image + bénéfices
9. Équipe / experts
10. Processus en 4 étapes
11. Contact / formulaire
12. FAQ
13. Footer brun premium

---

## 26. Règles d’intégration avec un fichier content

Quand un autre fichier MD de contenu est fourni :

- Utiliser ce skill uniquement pour le design.
- Utiliser le fichier content pour les vrais textes.
- Ne pas remplacer le contenu par du texte juridique générique.
- Si le contenu n’a pas de section précise, organiser le contenu selon l’architecture recommandée.
- Garder les titres courts et premium.
- Mettre les mots importants en accent orange.
- Ne pas créer de fausses statistiques si elles ne sont pas fournies.
- Ne pas inventer de témoignages si non fournis.
- Si une section manque de contenu, créer une version minimaliste avec placeholders propres.

---

## 27. Qualité attendue

Le résultat final doit être :

- Premium
- Élégant
- Minimaliste
- Très lisible
- Rassurant
- Cohérent
- Responsive
- Fidèle à une esthétique cabinet juridique haut de gamme
- Compatible avec une landing page professionnelle
- Visuellement proche de l’inspiration, sans copie directe

---

## 28. Prompt court à donner avec ce skill

```txt
Use this markdown file as the complete visual design skill for the website.
Apply this style system to the content file I provide separately.
The website must feel like a premium legal / consulting / expert service website with a warm luxury editorial design.
Follow the colors, typography, spacing, buttons, cards, sections, image treatment, footer style, and animation rules from this file.
Do not create a generic template.
Use the content file for the real copy and this file only for the design direction.
Build a fully responsive polished website.
```

---

## 29. Prompt complet pour Antigravity avec 2 fichiers MD

```txt
I am giving you 2 markdown files.

FILE 1 = DESIGN STYLE SKILL
This file defines the complete visual identity and UI system inspired by a premium warm legal website.
Use it for the design direction, colors, typography, spacing, buttons, cards, image treatment, animations, section rhythm, and footer style.

FILE 2 = CONTENT SOURCE
This file contains the actual website content, headings, section copy, services, offers, CTA text, and business-specific information.

TASK:
Build a complete responsive website by combining both files.

RULES:
1. FILE 1 controls the design and visual system.
2. FILE 2 controls the real content.
3. Do not invent random content when content exists in FILE 2.
4. Do not ignore the premium warm legal/editorial aesthetic from FILE 1.
5. Do not create a generic template.
6. Keep the page elegant, professional, clear, and conversion-focused.
7. Use large serif headings, warm orange accents, cream backgrounds, rounded image cards, subtle shadows, refined buttons, and a dark brown premium footer.
8. Make the website fully responsive on desktop, tablet, and mobile.
9. Use subtle reveal animations and hover effects only.
10. If FILE 2 has missing sections, create minimal coherent sections without fake claims.

OUTPUT:
Generate the full website/page directly with polished UI, strong hierarchy, clean layout, premium spacing, and the exact business content from FILE 2.
```
