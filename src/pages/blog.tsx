import { FC } from 'react';

import { AppShell, BlogItem, Container, Heading1 } from '~/components';

import { posts } from '~/getPosts';
import { useSortedPosts } from '~/hooks';

const Blog: FC = () => {
  const sortedPosts = useSortedPosts(posts);

  return (
    <AppShell>
      <Container>
        <Heading1>Blog</Heading1>
        <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-5">
          {sortedPosts.map((post) => (
            <BlogItem key={post.link} post={post} />
          ))}
        </div>
      </Container>
    </AppShell>
  );
};

export default Blog;
