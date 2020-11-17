import { FC } from 'react';

import { AppShell, Container, Heading1, Post } from '~/components/';

import { posts } from '~/getPosts';

const Blog: FC = () => (
  <AppShell>
    <Container>
      <Heading1 heading="Blog" />
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </Container>
  </AppShell>
);

export default Blog;
