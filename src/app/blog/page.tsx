import { getAllFilesFrontMatter } from '~/lib/mdx';

import { useSortedPosts } from '~/hooks/useSortedPosts';

import { BlogItem } from '~/components/blog/BlogItem';
import { Container } from '~/components/Container';
import { Heading1 } from '~/components/typography/Heading1';

export default async function BlogPage() {
  const posts: any = await getAllFilesFrontMatter('blog');
  const sortedPosts = useSortedPosts(posts);

  return (
    <Container>
      <Heading1>Blog</Heading1>
      <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-5">
        {sortedPosts.map((post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
