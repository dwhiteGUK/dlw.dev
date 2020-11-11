import { FC } from 'react';

import { AppShell, Container, IntroHero, BlogHero } from '~/components/';

const IndexPage: FC = () => (
  <AppShell>
    <Container>
      <IntroHero />
    </Container>
    <Container bg>
      <BlogHero />
    </Container>
  </AppShell>
);

export default IndexPage;
