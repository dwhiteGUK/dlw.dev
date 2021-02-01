import { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '~/styles/global.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
