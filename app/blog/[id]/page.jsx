// app/blog/[id]/page.jsx
'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import Link from 'next/link';
import './BlogPost.scss';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setLoading(false);
        setError('No post ID provided');
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('blog')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching blog post:', error);
          setError('Failed to load blog post');
        } else {
          setPost(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="loading-spinner"></div>
        <p>Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post-error">
        <h2>Post not found</h2>
        <p>{error || 'The requested blog post could not be found.'}</p>
        <Link href="/" className="back-home-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="blog-post-container">
      <div className="blog-post-content">
        {/* <Link href="/" className="blog-post-back">
          ← Back to all posts
        </Link> */}

        <header className="blog-post-header">

          <h1 className="blog-post-title">{post.title}</h1>
          {post.subtitle && (
            <h2 className="blog-post-subtitle">{post.subtitle}</h2>
          )}
          <p className="blog-post-date">
            {post.created_at && new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        <div className="blog-post-body">
          {post.body_full ? (
            <article className="blog-post-content-text">
              {/* <ReactMarkdown>{post.body_full}</ReactMarkdown> */}
              <ReactMarkdown>{post.body_full}</ReactMarkdown>
            </article>
          ) : (
            <p className="no-content">No content available for this post.</p>
          )}
        </div>

        <footer className="blog-post-footer">
          <Link href="/" className="back-home-link">
            ← Back to Home
          </Link>
          <div className="blog-post-meta">
            <span className="post-id">Post ID: {post.id}</span>
          </div>
        </footer>
      </div>
    </article>
  );
}