# MIRZARAHIM — Personal Developer Portfolio

Premium personal portfolio for **Mirzarahim Murodullayev** — Mobile / Flutter / Python developer based in Jizzakh, Uzbekistan.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Router

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Configuration

### Social links

Edit `src/config/socialLinks.ts`:

- Set real `href` values
- Switch `configured` to `true` so links become clickable

### Contact form

Set `contactFormEndpoint` in `src/config/socialLinks.ts` when you have an API or email service. Until then, the form validates and shows a clear “not configured” message — it does not pretend to send mail.

### Profile photo

Replace `public/images/profile-placeholder.svg` with your photo (or update the path in `src/sections/Hero.tsx`).

### Project media / links

- Preview images live in `public/images/`
- Project data: `src/data/projects.ts` (`href` for live links)

## Languages

UZ (default) / RU / EN — selection is stored in `localStorage`.

Translations: `src/i18n/translations.ts`

## Project structure

```
src/
  components/
  sections/
  pages/
  data/
  i18n/
  hooks/
  config/
```
