import { FC } from 'react';
import Head from 'next/head';

import { Header } from '~/components';

const AppShell: FC = ({
  children,
  pageTitle,
  snippet,
}: {
  children: React.ReactNode;
  pageTitle: string;
  snippet: string;
}) => {
  return (
    <div>
      <div className="min-h-screen text-gray-900 bg-white dark:text-gray-50 dark:bg-gray-900">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="snippet" content={snippet}></meta>
          <title>{pageTitle}</title>
        </Head>
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 pt-20">
          <Header />
        </div>
        <main className="py-10 space-y-5 s">{children}</main>
      </div>
    </div>
  );
};

export default AppShell;
