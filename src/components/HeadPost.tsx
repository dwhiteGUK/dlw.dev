type Meta = {
  title: string;
  snippet: string;
  date: string;
  readTime: number;
};

const HeadPost = ({ meta, isBlogPost } : { meta: Meta, isBlogPost: boolean }) => (
  <>
    <h1 className={isBlogPost ? 'great-title' : null}>{meta.title}</h1>
    <div className="details">
      {isBlogPost ? null : <p>{meta.snippet}</p>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + ' min read'}
      </span>
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f39c12;
        }
        .great-title {
          font-size: 2rem;
        }
        .details span {
          color: #bdbdbd;
          margin-right: 1rem;
        }
        .details {
          margin-bottom: 1rem;
        }
      `}
    </style>
  </>
);

export default HeadPost;
