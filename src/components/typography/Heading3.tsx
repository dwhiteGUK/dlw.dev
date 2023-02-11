import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

export function Heading3(props) {
  return (
    <h3
      {...getProps({
        className: 'mt-2 text-xl leading-9 font-extrabold tracking-tight',
        ...props,
      })}
    />
  );
}
