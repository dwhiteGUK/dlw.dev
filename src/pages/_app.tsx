import { FC } from 'react';
import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '~/context';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider darkMode={pageProps.darkMode}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
