# INDUSTRIELTECH

Application web pour **INDUSTRIELTECH** — Formations et Services Techniques Industriels au Maroc (Automatisme, Variateurs de vitesse, Maintenance, Électricité, Solaire & Électronique).

---

## 🚀 Guide de Déploiement & Git Push

### 1. Commandes Git pour publier le projet

Pour pousser l'intégralité du projet (fichiers sources, configurations et images `/public/images`) sur votre dépôt GitHub / GitLab :

```bash
# 1. Vérifier le statut des fichiers modifiés et ajoutés
git status

# 2. Ajouter tous les fichiers (y compris les images du dossier public)
git add .

# 3. Créer le commit
git commit -m "feat: site industrieltech avec images webp et routing de production"

# 4. Pousser vers la branche principale
git push origin main
```

---

## 🌐 Déploiement sur différentes plateformes

### Option A : Déploiement sur Vercel (Recommandé)
- **Framework Preset** : `Vite`
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- Le fichier `vercel.json` est déjà configuré à la racine pour gérer les redirections SPA et le cache des images.

### Option B : Déploiement sur Netlify
- **Build Command** : `npm run build`
- **Publish Directory** : `dist`
- Les fichiers `netlify.toml` et `_redirects` sont déjà configurés pour gérer les routes React Router.

### Option C : Déploiement sur GitHub Pages
- Le fichier `public/404.html` et le script SPA dans `index.html` permettent d'éviter les erreurs 404 lors du rechargement de page.

### Option D : Hébergement Apache / cPanel / Hostinger / OVH
- Uploader simplement le contenu généré dans le dossier `dist/` à la racine de votre dossier `public_html`.
- Le fichier `.htaccess` inclus gère automatiquement la réécriture d'URL.

---

## 🛠️ Développement Local

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser la version de production locale
npm run preview
```
