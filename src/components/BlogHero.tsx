import { FC } from 'react';

import { BlogItem } from '~/components';
import { posts } from '~/getPosts';

const BlogHero: FC = () => (
  <>
    <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">Blog</h2>
    <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-5">
      {posts.map((post) => (
        <BlogItem key={post.link} post={post} />
      ))}
    </div>
  </>
);

export default BlogHero;
