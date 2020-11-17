import { FC } from 'react';

const Container: FC = ({ children, bg }: { children: React.ReactNode; bg: string }) => (
  <div className={`${bg && 'bg-gray-700'} py-10`}>
    <section className={`max-w-5xl mx-auto ${bg && 'bg-gray-700'}`}>{children}</section>
  </div>
);

export default Container;
