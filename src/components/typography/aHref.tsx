import { FC } from 'react';

type typographyProps = {
  className?: string;
};

function getProps(props) {
  return {
    ...props,
  };
}

export function aHref(props) {
  return (
    <a
      {...getProps({
        className:
          'text-orange-500 hover:bg-black hover:text-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500',
        ...props,
      })}
    />
  );
}
