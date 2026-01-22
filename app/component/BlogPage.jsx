'use client'
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import Image from 'next/image';
import Link from 'next/link';
import '../../style/styling.scss'; // Assuming global styles or reuse of main styles

export default function BlogPost({ params }) {
    const { id } = params;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('blog')
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

        if (id) {
            fetchPost();
        }
    }, [id]);

    if (loading) return <div className="content"><p>Loading...</p></div>;
    if (!post) return <div className="content"><p>Post not found.</p></div>;

    return (
        <div className="content blog-post-page">
            <Link href="/" style={{ textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
                ← Back to Home
            </Link>
            
            <h1>{post.title}</h1>
            {post.subtitle && <h2>{post.subtitle}</h2>}
            <p className="date">{post.created_at ? new Date(post.created_at).toLocaleDateString() : ''}</p>

            <div className="body-text">{post.body_full}</div>
        </div>
    );
}