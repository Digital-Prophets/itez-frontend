// import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="ITEZ"
          description="A platform for comprehensive data management of intersex and trans-persons in Zambia"
        />
      }
    >
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        A platform for comprehensive data management of intersex and
        trans-persons in Zambia . <span role="img" aria-label="zap"></span>{' '}
      </p>
      <h2 className="font-semibold text-lg">ITEZ Frontend Stack and configs</h2>
      <ul>
        <li>
          <span role="img" aria-label="fire">
            🔥
          </span>{' '}
          <a href="https://nextjs.org" rel="nofollow">
            Next.js
          </a>{' '}
          for Static Site Generator
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{' '}
          Integrate with{' '}
          <a href="https://tailwindcss.com" rel="nofollow">
            Tailwind CSS
          </a>
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{' '}
          PostCSS for processing Tailwind CSS
        </li>
        <li>
          <span role="img" aria-label="tada">
            🎉
          </span>{' '}
          Type checking Typescript
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{' '}
          Linter with{' '}
          <a href="https://eslint.org" rel="nofollow">
            ESLint
          </a>
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
          Code Formatter with{' '}
          <a href="https://prettier.io" rel="nofollow">
            Prettier
          </a>
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{' '}
          Husky for Git Hooks
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🚫
          </span>{' '}
          Lint-staged for running linters on Git staged files
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🗂
          </span>{' '}
          VSCode configuration: Debug, Settings, Tasks and extension for
          PostCSS, ESLint, Prettier, TypeScript
        </li>
        <li>
          <span role="img" aria-label="robot">
            🤖
          </span>{' '}
          SEO metadata, JSON-LD and Open Graph tags with Next SEO
        </li>
        <li>
          <span role="img" aria-label="robot">
            ⚙️
          </span>{' '}
          <a
            href="https://www.npmjs.com/package/@next/bundle-analyzer"
            rel="nofollow"
          >
            Bundler Analyzer
          </a>
        </li>
        <li>
          <span role="img" aria-label="hundred">
            💯
          </span>{' '}
          Maximize lighthouse score
        </li>
        <li>
          <span role="img" aria-label="coffee">
            ☕
          </span>{' '}
          Minify HTML &amp; CSS
        </li>
        <li>
          <span role="img" aria-label="dash">
            💨
          </span>{' '}
          Live reload
        </li>
        <li>
          <span role="img" aria-label="white_check_mark">
            ✅
          </span>{' '}
          Cache busting
        </li>
      </ul>
    </Main>
  );
};

export default Index;
