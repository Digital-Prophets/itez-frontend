import { ReactNode } from "react";
import { AuthProvider } from "../context/authContext";

import type { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/main.css";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return getLayout(
    <div className="grad">
      <AuthProvider>
        <Main meta={<Meta title="ITEZ" description="" />}>
          <Component {...pageProps} />
        </Main>
      </AuthProvider>
    </div>
  );
}

export default App;
