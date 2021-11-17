import type { ReactNode } from 'react';
import React from 'react';

import type { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/main.css';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return getLayout(
    <div className="grad w-screen">
      <Main meta={<Meta title="ITEZ" description="" />}>
        <Component {...pageProps} />
      </Main>
    </div>
  );
}

export default App;
