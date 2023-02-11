import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

export function Heading1(props) {
  return (
    <h1
      {...getProps({
        className: 'text-3xl leading-9 tracking-tight font-bold sm:text-4xl sm:leading-10',
        ...props,
      })}
    />
  );
}
