import { MDXRemote } from 'next-mdx-remote';

import { BlogDetails } from '~/layouts';
import { getFiles, getFileBySlug } from '~/lib';
import MdxComponents from '~/components/MdxComponents';

export default function BlogPost({ mdxSource, frontMatter }) {
  return (
    <BlogDetails frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MdxComponents} />
    </BlogDetails>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
