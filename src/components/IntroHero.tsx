'use client';
import { FC } from 'react';

import { Heading1 } from '~/components/typography/Heading1';
import { FSImage } from '~/components/FSImage';

export const IntroHero: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 lg:gap-5">
      <div className="bg-gray-700 hidden sm:inline-block">
        <FSImage
          src="/images/xps-EzYq1HOl5_8-unsplash.jpg"
          width="10276"
          height="7340"
          alt="Placeholder image"
          layout="responsive"
          tabIndex="0"
        />
      </div>
      <div className="">
        <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-500">
          Welcome, I'm Darren White.
        </div>
        <Heading1 className="text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10">
          A web developer with 15+ years of experience.
        </Heading1>
        <p className="mt-3 text-lg leading-7 text-gray-700 dark:text-gray-300">
          I build websites using HTML, CSS and JavaScript, often with React/Next.js.
        </p>
        <p className="mt-3 text-lg leading-7 text-gray-700 dark:text-gray-300">
          It's not just the front end, I can spin up services in AWS or a solution with Nodejs.
        </p>
      </div>
    </div>
  );
};
