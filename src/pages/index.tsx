import { FC } from 'react';

import { AppShell, Container, IntroHero, BlogHero, Footer } from '~/components';

const IndexPage: FC = () => {
  return (
    <AppShell>
      <Container>
        <IntroHero />
      </Container>
      <Container bg>
        <BlogHero />
      </Container>
      <Container>
        <Footer />
      </Container>
    </AppShell>
  );
};

export default IndexPage;
