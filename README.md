# 🚀 A Frontend microservice platform for a comprehensive data management of intersex and trans-persons in Zambia.

### Features

ITEZ Frontend stack composition:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode)
- 💅 PostCSS for processing Tailwind CSS and integrated to `styled-jsx`
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 💯 Maximize lighthouse score
- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js and npm

### Getting started - Local development

Run the following command on your local environment:

```
git clone https://github.com/Digital-Prophets/itez-frontend.git
cd itez-frontend
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see the project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

To create an optimized production build of assets, run:

```
npm run build-prod
```

At this point the platform is ready to be deployed. All generated files are located at `out` folder, which can be deployed.
### VSCode information (optional)

For VSCode, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to the ITEZ project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2021

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Digital-Prophets](https://digitpro.com)

[![Sponsor itez](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/Digital-Prophets)
