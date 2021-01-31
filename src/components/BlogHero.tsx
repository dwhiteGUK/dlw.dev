import { BlogItem } from '~/components';

type Post = {
  slug: string;
  title: string;
  snippet: string;
  timestamp: number;
};

const BlogHero = ({ posts }: { posts: []}) => {
  return (
    <>
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">Blog</h2>
      <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-5">
        {posts.slice(0, 4).map((post: Post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogHero;
