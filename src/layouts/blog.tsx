import { FC } from 'react';

import { NextSeo } from 'next-seo';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import useDarkMode from 'use-dark-mode';
import { AppShell, Container, Heading1, Heading2, Paragraph, aHref } from '~/components';

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
  const darkMode = useDarkMode(false);

  return (
    <AppShell>
      <NextSeo title={`${title} | dlw`} description={snippet} />
      <Container>
        <MDXProvider components={mdxComponents}>
          <article className={`${darkMode.value ? 'prose prose-dark' : 'prose'}`}>{children}</article>
        </MDXProvider>
      </Container>
    </AppShell>
  );
};

export default BlogDetails;
