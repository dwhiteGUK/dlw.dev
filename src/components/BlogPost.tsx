import { FC } from 'react';

const BlogPost: FC = ({ children }: { children: React.ReactNode }) => {
  return <article>{children}</article>;
};

export default BlogPost;
