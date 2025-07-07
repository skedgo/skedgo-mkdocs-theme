# SkedGo custome theme for MKDocs
A custom MkDocs theme built for SkedGo documentation sites.

## 🚀 Getting Started
1. Go to your MkDocs project directory
2. Install the theme from GitHub: ````pip install git+https://github.com/skedgo/skedgo-mkdocs-theme````
3. In your `mkdocs.yml` file, update the theme section:
  ```
  theme:
    name: skedgo
  ```
4. Then run your MKDocs project locally to see the new is applied

## 📝 Develop theme
1. Go to `skedgo_mkdocs_theme` folder: `cd skedgo_mkdocs_theme`
2. Run `npm install`
3. Run `npm run dev`

## 🧰 Build theme
1. Increase `version` number in file `setup.py`
2. Increase `theme_version` number in file `mkdocs_theme.yml`
3. Run `npm run build`
