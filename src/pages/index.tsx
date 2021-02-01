import { FC } from 'react';

import { AppShell, Container, IntroHero, BlogHero, Footer } from '~/components';
import { getAllFilesFrontMatter } from '~/lib';
import { useSortedPosts } from '~/hooks';

const IndexPage= ({ posts }: { posts: [] }) => {
  const sortedPosts = useSortedPosts(posts);

  return (
    <AppShell>
      <Container>
        <IntroHero />
      </Container>
      <Container bg>
        <BlogHero posts={sortedPosts} />
      </Container>
    </AppShell>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
