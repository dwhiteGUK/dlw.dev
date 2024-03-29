import Link from 'next/link';

import { MoreLink } from '~/components/MoreLink';
import { Heading3 } from '~/components/typography/Heading3';
import { Paragraph } from '~/components/typography/Paragraph';
import { useRelativeTime } from '~/hooks';

type Post = {
  slug: string;
  title: string;
  snippet: string;
  timestamp: number;
};

export function BlogItem({ post }: { post: Post }) {
  const { title, timestamp, slug, snippet } = post;
  const relativeTime = useRelativeTime(timestamp);

  return (
    <div>
      <p className="font-semibold uppercase tracking-wider text-sm leading-5 text-gray-800 dark:text-gray-500">
        <time dateTime="2020-03-16">{relativeTime}</time>
      </p>
      <Link href={`blog/${slug}`} className="block">
        <Heading3>{title}</Heading3>
        <Paragraph>{snippet}</Paragraph>
      </Link>
      <div className="mt-2">
        <MoreLink text="Read" to={`blog/${slug}`} />
      </div>
    </div>
  );
}
