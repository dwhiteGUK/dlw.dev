import hydrate from 'next-mdx-remote/hydrate';

import { BlogDetails } from '~/layouts';
import { getFiles, getFileBySlug } from '~/lib';
import { MdxComponents } from '~/components';

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components: MdxComponents });
  return <BlogDetails frontMatter={frontMatter}>{content}</BlogDetails>;
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
