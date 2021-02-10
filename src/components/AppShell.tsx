import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, Footer, Header } from '~/components';

const AppShell: FC = ({
  children,
  customMeta,
}: {
  children: React.ReactNode;
  customMeta: {
    title: string;
    description: string;
    image: string;
    data: string;
    type: string;
  };
}) => {
  const router = useRouter();
  const meta = {
    title: 'Darren White – Web Developer, Hull, UK',
    description: `Front-end developer`,
    image: '',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <div className="min-h-screen dark:text-gray-50 dark:bg-gray-900 text-gray-900 bg-white">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:url" content={`https://darrenwhite.dev${router.asPath}`} />
          <link rel="canonical" href={`https://darrenwhite.dev${router.asPath}`} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Darren White" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dlw" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {/* {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )} */}
        </Head>
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 pt-20">
          <Header />
        </div>
        <main className="py-10 space-y-5 s">{children}</main>
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default AppShell;
