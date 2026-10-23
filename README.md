# Hasnat | Portfolio

React + Vite + Tailwind CSS portfolio. Content lives in data files; styling is Tailwind utility classes.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Update content
- `src/data/content.js`: contact details, social links, resume link, projects, skills, education, experience
- `src/data/icons.js`: skill and social logos
- `public/`: put `resume.pdf` and `photo.jpg` here, then set them in `content.js`

## Styling
- Edit Tailwind classes directly in `src/components/*.jsx`
- Theme colors (light and dark) are at the top of `src/index.css`. Use them as `bg-bg`, `bg-card`, `text-ink`, `text-muted`, `border-line`, `text-brand`, `from-brand`, `to-brand2`
- Shared class strings (buttons, cards, headings) are in `src/ui.js`

## Contact form
Uses [Web3Forms](https://web3forms.com). Set `WEB3FORMS_KEY` in `src/data/content.js`.

## Deploy
Netlify or Vercel: connect the repo (build `npm run build`, output `dist`). GitHub Pages: upload the contents of `dist/`.
