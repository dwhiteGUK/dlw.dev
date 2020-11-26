import { FC } from 'react';

const Container: FC = ({ children, bg }: { children: React.ReactNode; bg: string }) => (
  <div className={`${bg ? 'bg-gray-200 dark:bg-gray-700' : ''} py-20`}>
    <section className="max-w-5xl mx-auto">{children}</section>
  </div>
);

export default Container;
