import { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import '~/styles/global.css';

Sentry.init({
  dsn: "https://4e946a49c3084809bcefbd08ebe39f83@o516046.ingest.sentry.io/5621907",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
