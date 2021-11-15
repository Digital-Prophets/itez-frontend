import { AppProps } from 'next/app';

import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  <div className="grad">
    {' '}
    <Component {...pageProps} />
  </div>
);

export default App;
