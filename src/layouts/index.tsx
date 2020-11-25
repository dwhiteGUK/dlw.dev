import { FC } from 'react';

import { AppShell, Container } from '~/components';

const BlogDetails: FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell>
      <Container>
        <h1>TEST</h1>
        <article>{children}</article>
      </Container>
    </AppShell>
  );
};

export default BlogDetails;
