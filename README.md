# M.K. Gopinath – MERN Portfolio

## Run
```bash
# API (needs MongoDB; copy .env.example to .env)
cd server && npm install && npm run dev      # http://localhost:5000

# Website
cd client && npm install && npm run dev      # http://localhost:5173 (proxies /api to :5000)
```

## Edit your content
All text and links live in `client/src/data/content.js`.
- Set `profile.github` and each project's `demo` / `github` URL. Empty values show a disabled button.
- Resume file: `client/public/Gopinath_Resume.pdf` (replace to update the download).
- Profile photo: see the comment in `components/Hero.jsx`. Project screenshots: see `components/Projects.jsx`.

For production, set `VITE_API_URL` in the client and `CLIENT_ORIGIN` in the server `.env`.
