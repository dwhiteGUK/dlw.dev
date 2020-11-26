import Link from 'next/link';

import { Heading3, Paragraph, MoreLink } from '~/components';
import { useRelativeTime } from '~/hooks';

type Post = {
  link: string;
  module: {
    frontMatter: {
      title: string;
      snippet: string;
      timestamp: number;
    };
  };
};

const BlogItem = ({ post }: { post: Post }) => {
  const {
    link,
    module: { frontMatter },
  } = post;

  const relativeTime = useRelativeTime(frontMatter.timestamp);

  return (
    <div>
      <p className="font-semibold uppercase tracking-wider text-sm leading-5 text-gray-800 dark:text-gray-500">
        <time dateTime="2020-03-16">{relativeTime}</time>
      </p>
      <Link href={`blog${link}`}>
        <a href="#" className="block">
          <Heading3>{frontMatter.title}</Heading3>
          <Paragraph>{frontMatter.snippet}</Paragraph>
        </a>
      </Link>
      <div className="mt-2">
        <MoreLink text="Read" to={`blog${link}`} />
      </div>
    </div>
  );
};

export default BlogItem;
