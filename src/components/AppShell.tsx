import { FC } from 'react';

import { Header } from '~/components/';

const AppShell: FC = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 pt-20">
      <Header />
      <main className="py-10">{children}</main>
    </div>
  </>
);

export default AppShell;
