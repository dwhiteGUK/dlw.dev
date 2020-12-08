import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

const Heading1: FC<typographyProps> = (props) => (
  <h1
    {...getProps({
      className: 'text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10',
      ...props,
    })}
  />
);

export default Heading1;
