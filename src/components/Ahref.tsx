import { FC } from 'react';
import Link from 'next/link';

const Ahref: FC = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link href={to} passHref>
      <a>{children}</a>
    </Link>
  );
};

export default Ahref;
