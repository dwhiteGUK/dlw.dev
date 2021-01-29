import { FC, useEffect, useState } from 'react';

import { NextSeo } from 'next-seo';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';

import { AppShell, Container, Heading1, Heading2, Paragraph, aHref } from '~/components';
import { useTheme } from 'next-themes';

type FrontMatter = {
  title: string;
  snippet: string;
};

const mdxComponents = {
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
  a: aHref,
};

const BlogDetails: FC = ({
  frontMatter: { title, snippet },
  children,
}: {
  frontMatter: FrontMatter;
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <AppShell>
      <NextSeo title={`${title} | dlw`} description={snippet} />
      <Container>
        <MDXProvider components={mdxComponents}>
          <article className={`${theme === 'dark' ? 'prose prose-dark' : 'prose'}`}>{children}</article>
        </MDXProvider>
      </Container>
    </AppShell>
  );
};

export default BlogDetails;
