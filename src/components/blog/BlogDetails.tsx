import { FC } from 'react';

import { AppShell, Container } from '~/components';

const BlogDetails: FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell>
      <Container>
        <article>{children}</article>
      </Container>
    </AppShell>
  );
};

export default BlogDetails;
