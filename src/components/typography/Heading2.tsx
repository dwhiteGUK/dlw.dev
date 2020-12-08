import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

const Heading2: FC<typographyProps> = (props) => (
  <h2
    {...getProps({
      className: 'text-2xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10',
      ...props,
    })}
  />
);

export default Heading2;
