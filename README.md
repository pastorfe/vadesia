# Vadesia

Landing y assets de Vadesia — identidad y sitio estático.

Cómo usar

- Servir localmente (Python):

```bash
python3 -m http.server 8000
```

- Recomendado: instalar `nvm` y Node 18, luego instalar dev-deps y usar `npm` scripts:

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
nvm install 18
npm install
npm run format
npm run lint:css
```

Scripts

- `npm run format` — formatea con Prettier
- `npm run lint:css` — ejecuta Stylelint

Contacto

hola@vadesia.com
