import Link from 'next/link';

export function Ahref({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link href={to} passHref>
      {children}
    </Link>
  );
}
