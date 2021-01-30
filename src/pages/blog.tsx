import { FC } from 'react';

import { AppShell, BlogItem, Container, Heading1 } from '~/components';
import { getAllFilesFrontMatter } from '~/lib';
import { useSortedPosts } from '~/hooks';

const Blog: FC = ({ posts }) => {
  const sortedPosts = useSortedPosts(posts);

  return (
    <AppShell>
      <Container>
        <Heading1>Blog</Heading1>
        <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-5">
          {sortedPosts.map((post) => (
            <BlogItem key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </AppShell>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
