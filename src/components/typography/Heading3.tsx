import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

const Heading3: FC<typographyProps> = (props) => (
  <h3
    {...getProps({
      className: 'mt-2 text-xl leading-9 font-extrabold tracking-tight',
      ...props,
    })}
  />
);

export default Heading3;
