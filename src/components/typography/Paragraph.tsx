import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

const Paragraph: FC<typographyProps> = (props) => (
  <p
    {...getProps({
      className: 'mt-1 text-base leading-7',
      ...props,
    })}
  />
);

export default Paragraph;