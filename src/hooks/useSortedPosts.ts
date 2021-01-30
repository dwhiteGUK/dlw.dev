export const useSortedPosts = (posts) => posts.sort((a, b) => b.timestamp - a.timestamp);
