# Maman, Pas à Pas

Site éditorial complet développé avec Next.js, TypeScript et CSS natif.

## Fonctions incluses

- Page d’accueil responsive
- 5 rubriques thématiques
- Bibliothèque d’articles avec recherche et filtres
- Pages d’article dynamiques
- Dates, temps de lecture et sources
- Pages À propos, méthode, contact, mentions légales et confidentialité
- Sitemap et robots.txt automatiques
- SEO de base avec métadonnées Open Graph
- Menu mobile accessible
- Formulaire de contact utilisant `mailto:`
- Illustrations SVG originales, sans image externe

## 1. Installer le projet

Installez Node.js 20 ou une version plus récente.

```bash
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:3000`.

## 2. Modifier les informations importantes

- Nom, URL et e-mail : `lib/site.ts`
- Articles et catégories : `lib/articles.ts`
- Couleurs et styles : `app/globals.css`
- Mentions légales : `app/mentions-legales/page.tsx`
- Confidentialité : `app/politique-confidentialite/page.tsx`

Les mentions légales contiennent volontairement des champs `[À COMPLÉTER]`.

## 3. Ajouter un article

Ouvrez `lib/articles.ts`, puis dupliquez un objet dans le tableau `articles`.

Chaque article doit avoir un `slug` unique. La page est créée automatiquement à l’adresse :

```text
/articles/votre-slug
```

## 4. Mettre le site sur GitHub

Depuis le dossier du projet :

```bash
git init
git add .
git commit -m "Création du site Maman Pas à Pas"
git branch -M main
git remote add origin https://github.com/VOTRE-PSEUDO/maman-pas-a-pas.git
git push -u origin main
```

Vous pouvez aussi créer un dépôt vide sur GitHub, puis utiliser l’option « Upload files ».

## 5. Déployer avec Vercel

1. Créez un compte sur Vercel.
2. Cliquez sur « Add New Project ».
3. Importez le dépôt GitHub.
4. Conservez les réglages Next.js détectés automatiquement.
5. Cliquez sur « Deploy ».
6. Ajoutez ensuite `mamanpasapas.fr` dans les réglages de domaine du projet.
7. Modifiez les DNS chez votre registrar selon les indications de Vercel.

## 6. Formulaire de contact

Le formulaire actuel ouvre l’application de messagerie. Pour recevoir les messages directement,
connectez un service comme Resend, Brevo ou Formspree et mettez à jour la politique de confidentialité.

## 7. Avant publication

- Remplir toutes les mentions légales
- Confirmer l’adresse e-mail
- Faire relire les articles de santé par un professionnel qualifié
- Vérifier chaque source et chaque lien
- Ajouter une vraie identité visuelle si nécessaire
- Tester le site sur téléphone et ordinateur

## Licence

Projet privé. Adaptez la licence selon vos besoins.
