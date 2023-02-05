import Link from 'next/link';

const Ahref = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link href={to} passHref>
      {children}
    </Link>
  );
};

export default Ahref;
