import { FC } from 'react';
import Head from 'next/head';

import { Header } from '~/components/';

const AppShell: FC = ({
  children,
  pageTitle,
  snippet,
}: {
  children: React.ReactNode;
  pageTitle: string;
  snippet: string;
}) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="snippet" content={snippet}></meta>
      <title>{pageTitle}</title>
    </Head>
    <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 pt-20">
      <Header />
    </div>
    <main className="py-10">{children}</main>
  </>
);

export default AppShell;
