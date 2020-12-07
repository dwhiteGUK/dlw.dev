import { FC } from 'react';

function getProps(props) {
  return {
    ...props,
  };
}

export const Heading1: FC = (props) => (
  <h1
    {...getProps({
      className: 'text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10',
      ...props,
    })}
  />
);

export const Heading2: FC = (props) => (
  <h2
    {...getProps({
      className: 'text-2xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10',
      ...props,
    })}
  />
);

export const Heading3: FC = (props) => (
  <h3
    {...getProps({
      className: 'mt-2 text-xl leading-9 font-extrabold tracking-tight',
      ...props,
    })}
  />
);

export const Paragraph: FC = (props) => (
  <p
    {...getProps({
      className: 'mt-1 text-base leading-7',
      ...props,
    })}
  />
);

export const aHref: FC = (props) => (
  <a
    {...getProps({
      className:
        'text-orange-500 hover:bg-black hover:text-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500',
      ...props,
    })}
  />
);
