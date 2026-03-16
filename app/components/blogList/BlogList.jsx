'use client';

import { useState } from 'react';
import BlogPreview from "../blogPreview/BlogPreview"
import "./BlogList.scss"

const POSTS_PER_PAGE = 5;

export default function BlogList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="blog-overview">
      {posts.length > 0 ? (
        <>
          {currentPosts.map((post) => (
            <BlogPreview
              key={post.id}
              title={post.title}
              subTitle={post.subtitle || ''}
              date={post.created_at}
              url={`/blog/${post.id}`}
              headerImage={null}
              body={<p>{post.body_preview || post.body?.substring(0, 200) || ''}...</p>}
            />
          ))}
          <div className="pagination-controls">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              &larr; Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
              Next &rarr;
            </button>
          </div>
        </>
      ) : (
        <div className="no-posts">
          <p>No blog posts found.</p>
        </div>
      )}
    </div>
  )
}