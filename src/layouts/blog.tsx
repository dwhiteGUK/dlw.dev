import { FC } from 'react';

import { NextSeo } from 'next-seo';

import { AppShell, Container } from '~/components';

type FrontMatter = {
  title: string;
  snippet: string;
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
        <article>{children}</article>
      </Container>
    </AppShell>
  );
};

export default BlogDetails;
