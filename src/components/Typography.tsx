import { FC } from 'react';

export const Heading1: FC = ({ heading }: { heading: string }) => (
  <h1 className="text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10">{heading}</h1>
);
