// components/blogList/BlogList.jsx
import BlogPreview from "../blogPreview/BlogPreview"
import "./BlogList.scss"

export default function BlogList({ posts }) {
  return (
    <div className="blog-overview">
      {posts.length > 0 ? (
        posts.map((post) => (
          <BlogPreview
            key={post.id}
            title={post.title}
            subTitle={post.subtitle || ''}
            date={post.created_at}
            url={`/blog/${post.id}`}
            headerImage={null}
            body={<p>{post.body_preview || post.body?.substring(0, 200) || ''}...</p>}
          />
        ))
      ) : (
        <div className="no-posts">
          <p>No blog posts found.</p>
        </div>
      )}
    </div>
  )
}