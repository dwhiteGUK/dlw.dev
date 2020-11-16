import { FC } from 'react';
import Link from 'next/link';

import { ArrowNarrowRightIcon, HeadPost } from '~/components';

type Post = {
  link: string;
  module: {
    meta: unknown;
  };
};

const Post: FC = ({ post }: { post: Post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <HeadPost meta={meta} />
      <Link href={`blog${link}`}>
        <a className="inline-flex items-center justify-center py-3 border border-transparent text-base leading-6 font-medium transition duration-150 ease-in-out text-orange-500 hover:text-white">
          {' '}
          Read More <ArrowNarrowRightIcon className="ml-2 w-6 h-6" />
        </a>
      </Link>
    </article>
  );
};

export default Post;
