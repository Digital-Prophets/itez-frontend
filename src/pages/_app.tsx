import { ReactNode } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/main.css";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import { Provider } from "react-redux";
import { useStore } from "../store";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: Props) {
  const store = useStore(pageProps.initialReduxState);

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
