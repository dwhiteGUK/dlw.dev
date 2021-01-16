function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(fileName),
  }));
}

export const posts = importAll(require.context('./pages/blog', true, /\.mdx$/)).sort(
  (a, b) => b.module.frontMatter.timestamp - a.module.frontMatter.timestamp,
);
