import { FC } from 'react';

const Container: FC = ({ children, bg }: { children: React.ReactNode; bg: string }) => (
  <div className={`${bg ? 'bg-gray-200 dark:bg-gray-700' : ''} py-10`}>
    <section className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">{children}</section>
  </div>
);

export default Container;
