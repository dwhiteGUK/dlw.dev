import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

import { Heading1, FullScreen } from '~/components';

const IntroHero: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 lg:gap-5">
      <div className="bg-gray-700 hidden sm:inline-block">
        <FullScreen>
          <Image
            src="/images/xps-EzYq1HOl5_8-unsplash.jpg"
            width="10276"
            height="7340"
            alt="Placeholder image"
            layout="responsive"
            tabIndex="0"
          />
        </FullScreen>
      </div>
      <div className="">
        <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-500">Introduction</div>
        <Heading1 className="text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10">
          html, css and js developer with over 15 years experience.
        </Heading1>
        <p className="mt-3 text-lg leading-7 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
          scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
          duis.
        </p>
      </div>
    </div>
  );
};

export default IntroHero;
