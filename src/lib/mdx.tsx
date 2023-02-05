import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // parse front matter
import { serialize } from 'next-mdx-remote/serialize'; // Utilities for loading mdx from any remote source as data, rather than as a local import
import mdxPrism from 'mdx-prism'; // code highlighting/formatting
import readingTime from 'reading-time';

const root = process.cwd();

export async function getFiles(type) {
  const files = fs.readdirSync(path.join(root, 'src/data', type));

  return files;
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'src/data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'src/data', type, postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}

export async function getFileBySlug(type, slug) {
  const source = fs.readFileSync(path.join(root, 'src/data', type, `${slug}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content);

  return {
    mdxSource,
    frontMatter: {
      ...data,
      readingTime: readingTime(content),
    },
  };
}
