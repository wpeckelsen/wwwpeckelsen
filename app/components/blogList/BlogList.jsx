import BlogPreview from "../blogPreview/BlogPreview";

export default function BlogList({ posts }) {
  return (
    <div className="blog-overview">
      {posts.length > 0 ? (
        posts.map((post) => (
          <BlogPreview
            key={post.id}
            title={post.title}
            subTitle={post.subtitle || ''}
            url={`/blog/${post.id}`}
            headerImage={null}
            body={<p>{post.body_preview || post.body?.substring(0, 150) || ''}...</p>}
          />
        ))
      ) : (
        <div className="no-posts">
          <p>No blog posts found.</p>
        </div>
      )}
    </div>
  );
}