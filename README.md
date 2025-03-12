# Nico's Personal Website


## Setup
```sh
npm install
npm run dev
```
## 🚀 Project Structure

To add a new entry to the projects section, edit the `src/data/projects.ts` file.
Add matching content to `public/images/<project>` for the new project.
The structure of the file is as follows:

```text
/
├── public/
│   ├── favicon.svg
│   └── images
│       └── midi2ae
│           └── midi2ae_pickwhip.gif
├── src/
│   ├── ...
│   │
│   └── data/
│       └── projects.ts
└── package.json
```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

