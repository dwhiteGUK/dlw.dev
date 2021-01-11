import { FC } from 'react';

import { AppShell, BlogItem, Container, Heading1 } from '~/components';

import { posts } from '~/getPosts';
import { getCookie } from '~/util';

const Blog: FC = ({ darkMode }) => {
  return (
    <AppShell>
      <Container>
        <Heading1>Blog</Heading1>
        <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-5">
          {posts.map((post) => (
            <BlogItem key={post.link} post={post} />
          ))}
        </div>
      </Container>
    </AppShell>
  );
};

export default Blog;

export async function getServerSideProps({ req }) {
  const darkMode = getCookie(req, 'darkMode');

  return {
    props: {
      darkMode,
    }, // will be passed to the page component as props
  };
}
