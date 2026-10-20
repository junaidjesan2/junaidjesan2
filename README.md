# Junaid Jesan — Portfolio

A responsive personal portfolio for Junaid Ahamed Jesan. It brings together his work as the founder of Porte Jai, software QA and React development experience, technical skills, projects, and contact information.

**Live portfolio:** [junaidjesan.netlify.app](https://junaidjesan.netlify.app/)

## What's inside

- **Introduction and Porte Jai:** background, leadership experience, and achievements.
- **Skills:** browsable skill cards grouped by category, with detail dialogs.
- **Problem solving:** competitive programming profiles and a small interactive activity panel.
- **SQA test lab:** an interactive demonstration of sample Playwright and API test scenarios.
- **Projects and GitHub activity:** selected work and public GitHub statistics.
- **Contact:** social links and an inquiry form with an email fallback.

## Built with

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons

## Run locally

Install [Node.js](https://nodejs.org/) and npm, then run:

```bash
npm ci
npm run dev
```

Vite starts the development server at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production site in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run the TypeScript compiler without emitting files. |

## Build and deploy

Run `npm run build` to generate the static site in `dist/`. Deploy that directory with a static hosting provider such as Netlify or Vercel. The contact form submits through FormSubmit, and GitHub statistics are loaded from the GitHub Readme Stats service.

## Project layout

```text
src/
  components/   Portfolio sections and reusable UI
  data/         Profile, skills, project, and judge-profile content
  App.tsx       Page composition
  main.tsx      React entry point
  index.css     Tailwind import and global styles
index.html      Page metadata and document shell
```

## Contact

- Email: [junaidjesan2@gmail.com](mailto:junaidjesan2@gmail.com)
- LinkedIn: [linkedin.com/in/junaidjesan2](https://linkedin.com/in/junaidjesan2)
