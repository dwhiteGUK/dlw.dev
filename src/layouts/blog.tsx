import { FC } from 'react';

import { NextSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { AppShell, Container, Heading1 } from '~/components';

type FrontMatter = {
  title: string;
  snippet: string;
};

const mdxComponents = {
  h1: Heading1,
};

const BlogDetails: FC = ({
  frontMatter: { title, snippet },
  children,
}: {
  frontMatter: FrontMatter;
  children: React.ReactNode;
}) => {
  return (
    <AppShell>
      <NextSeo title={`${title} | dlw`} description={snippet} />
      <Container>
        <MDXProvider components={mdxComponents}>
          <article className="prose">{children}</article>
        </MDXProvider>
      </Container>
    </AppShell>
  );
};

export default BlogDetails;
