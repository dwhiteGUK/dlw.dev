import { FC } from 'react';

import { ArrowNarrowRightIcon } from '~/components';

const BlogHero: FC = () => (
  <div className="flex py-16">
    <div className="w-full md:w-1/3">
      <h2 className="text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">Blog</h2>
    </div>
    <div className="w-full md:w-2/3">
      <div className="flex flex-col md:flex-row items-center justify-evenly pb-5 mb-4 border-b">
        <p className="text-sm leading-5 mr-5">
          <time dateTime="2020-03-16">2 days ago</time>
        </p>
        <a href="#" className="mr-5">
          <h3 className="text-xl leading-7 font-semibold">Boost your conversion rate</h3>
        </a>
        <div className="">
          <a
            href="#"
            className="inline-flex items-center justify-center text-base leading-6 font-semibold text-orange-500 hover:text-white transition ease-in-out duration-150"
          >
            Read
            <ArrowNarrowRightIcon className="ml-2 w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly pb-5 mb-4 border-b">
        <p className="text-sm leading-5 mr-5">
          <time dateTime="2020-03-16">2 days ago</time>
        </p>
        <a href="#" className="mr-5">
          <h3 className="text-xl leading-7 font-semibold">Boost your conversion rate</h3>
        </a>
        <div className="">
          <a
            href="#"
            className="inline-flex items-center justify-center text-base leading-6 font-semibold text-orange-500 hover:text-white transition ease-in-out duration-150"
          >
            Read
            <ArrowNarrowRightIcon className="ml-2 w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <p className="text-sm leading-5 mr-5">
          <time dateTime="2020-03-16">2 days ago</time>
        </p>
        <a href="#" className="mr-5">
          <h3 className="text-xl leading-7 font-semibold">Boost your conversion rate</h3>
        </a>
        <div className="">
          <a
            href="#"
            className="inline-flex items-center justify-center text-base leading-6 font-semibold text-orange-500 hover:text-white transition ease-in-out duration-150"
          >
            Read
            <ArrowNarrowRightIcon className="ml-2 w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BlogHero;
