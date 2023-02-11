const meta = {
  title: 'Darren White – Web Developer, Hull, UK',
  description: `Front-end developer`,
  image: '',
  type: 'website',
};

export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
    </>
  );
}
