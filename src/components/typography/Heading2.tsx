import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

export function Heading2(props) {
  return (
    <h2
      {...getProps({
        className: 'text-2xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10',
        ...props,
      })}
    />
  );
}
