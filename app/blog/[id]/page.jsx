// app/blog/[id]/page.jsx
'use client'
import { useParams } from 'next/navigation'; // Add this
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import Link from 'next/link';

export default function BlogPost() {
  const { id } = useParams(); // Get ID from params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('Blog') // Make sure this matches exactly
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching blog post:', error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <main>
      <Link href="/">← Back to Home</Link>
      <h1>{post.title}</h1>
      {post.subtitle && <h2>{post.subtitle}</h2>}
      <div>{post.body_full}</div>
    </main>
  );
}