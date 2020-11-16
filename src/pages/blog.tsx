import { FC } from 'react';

import { AppShell, Container, Post } from '~/components/';

import { posts } from '~/getPosts';

const Blog: FC = () => (
  <AppShell>
    <Container>
      <p>Blog content</p>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </Container>
  </AppShell>
);

export default Blog;
