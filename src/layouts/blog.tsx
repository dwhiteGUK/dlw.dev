import { FC, useEffect, useState } from 'react';

import { NextSeo } from 'next-seo';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';

import { AppShell, Container, Heading1, Heading2, Paragraph, aHref } from '~/components';

type FrontMatter = {
  title: string;
  snippet: string;
  timestamp: number;
  readingTime: {
    text: string;
  };
  image: string;
};

const mdxComponents = {
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
  a: aHref,
};

const BlogDetails = ({
  frontMatter: { title, snippet, timestamp, readingTime, image },
  children,
}: {
  frontMatter: FrontMatter;
  children: React.ReactNode;
}) => {
  const postDate = new Date(timestamp);
  const formattedDate = Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(postDate);

  const customMeta = {
    title: `${title} - Darren White`,
    description: snippet,
    image: `/images/blog/${image}`,
    date: postDate.toISOString(),
    type: 'article',
  }

  return (
    <AppShell customMeta={customMeta}>
      <NextSeo title={`${title} | dlw`} description={snippet} />
      <Container>
        <Heading1>{title}</Heading1>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formattedDate}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {readingTime.text}
          </div>
        </div>        
        <MDXProvider components={mdxComponents}>
          <article className="prose dark:prose-dark mt-6">{children}</article>
        </MDXProvider>
      </Container>
    </AppShell>
  );
};

export default BlogDetails;
