import { FC } from 'react';

import { AppShell, Container, IntroHero, BlogHero, Footer } from '~/components';
import { getCookie } from '~/util';

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

export async function getServerSideProps({ req }) {
  const darkMode = getCookie(req, 'darkMode');

  return {
    props: {
      darkMode,
    }, // will be passed to the page component as props
  };
}
