import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

export function Paragraph(props) {
  return (
    <p
      {...getProps({
        className: 'mt-1 text-base leading-7',
        ...props,
      })}
    />
  );
}
