import { FC } from 'react';
import { AppProps } from 'next/app';

import useDarkMode from 'use-dark-mode';
import "tailwindcss/tailwind.css";
import { ThemeProvider } from '~/context';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { value } = useDarkMode();
  console.log('🚀 ~ file: _app.tsx ~ line 9 ~ value', value);

  return (
    <ThemeProvider darkMode={value}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
  }

export default App;
