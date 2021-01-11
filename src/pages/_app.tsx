import { FC } from 'react';
import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '~/context';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  console.log('🚀 ~ file: _app.tsx ~ line 8 ~ pageProps', pageProps);

  return (
    <ThemeProvider darkMode={pageProps.darkMode}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
