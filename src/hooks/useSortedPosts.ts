export const useSortedPosts = (posts) => posts.sort((a, b) => b.module.frontMatter.timestamp - a.module.frontMatter.timestamp);
