import Link from 'next/link';

import { MoreLink } from '~/components';
import { useRelativeTime } from '~/hooks';

type Post = {
  link: string;
  module: {
    meta: unknown;
  };
};

const BlogItem = ({ post }: { post: Post }) => {
  const {
    link,
    module: { meta },
  } = post;

  console.log('BlogHeroItem -> link', link);
  const relativeTime = useRelativeTime(meta.date);

  return (
    <div>
      <p className="font-semibold uppercase tracking-wider text-sm leading-5 text-gray-500">
        <time dateTime="2020-03-16">{relativeTime}</time>
      </p>
      <Link href={`blog${link}`}>
        <a href="#" className="block">
          <h3 className="mt-2 text-xl leading-9 font-extrabold tracking-tight ">Boost your conversion rate</h3>
          <p className="mt-1 text-base leading-7 text-gray-300">{meta.description}</p>
        </a>
      </Link>
      <div className="mt-2">
        <MoreLink text="Read" to={`blog${link}`} />
      </div>
    </div>
  );
};

export default BlogItem;