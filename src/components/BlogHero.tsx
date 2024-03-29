import { getAllFilesFrontMatter } from '~/lib/mdx';

import { useSortedPosts } from '~/hooks/useSortedPosts';

import { BlogItem } from '~/components/blog/BlogItem';

type Post = {
  slug: string;
  title: string;
  snippet: string;
  timestamp: number;
};

export async function BlogHero() {
  const posts: any = await getAllFilesFrontMatter('blog');
  const sortedPosts = useSortedPosts(posts);

  return (
    <>
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">Blog</h2>
      <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-5">
        {sortedPosts.slice(0, 4).map((post: Post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}

export default BlogHero;
