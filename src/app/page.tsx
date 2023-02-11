import { BlogHero } from '~/components/BlogHero';
import { Container } from '~/components/Container';
import { IntroHero } from '~/components/IntroHero';

const IndexPage = () => {
  return (
    <>
      <Container>
        <IntroHero />
      </Container>
      <Container bg>
        <BlogHero />
      </Container>
    </>
  );
};

export default IndexPage;
