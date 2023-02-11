import { getFileBySlug } from '~/lib/mdx';
export default async function Head({ params }: { params: { slug: string } }) {
  const {
    frontMatter: { title, snippet, timestamp },
  } = await getFileBySlug('blog', params.slug);

  const meta = {
    title,
    description: snippet,
    image: '',
    timestamp,
    type: 'website',
  };

  return (
    <>
      <title>{`${meta.title} | dlw`}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      {/* <meta property="og:url" content={`https://darrenwhite.dev${router.asPath}`} />
          <link rel="canonical" href={`https://darrenwhite.dev${router.asPath}`} /> */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Darren White" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dlw" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.timestamp && <meta property="article:published_time" content={meta.timestamp} />}
    </>
  );
}
