'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import '../app/style/styling.scss'
import { useEffect, useState } from 'react';
import { supabase } from "./supabase/supabaseClient";
import { fetchImageUrl } from "./supabase/fetchImageUrl";
import BlogComponent from "./component/BlogComponent";

export default function Home() {

  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  // Combined useEffect for fetching blog posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch blog posts
        const { data, error } = await supabase
          .from('blog')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setBlogPost(data || []);
        }

        // Fetch image 
        const imageUrl = await fetchImageUrl('blogimages', 'flags/d25tadtiyyw41.png');
        if (imageUrl) {
          setImageUrl(imageUrl);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  // Loading state
  if (loading) {
    return (
      <main className={styles.main}>
        <div className="loading">
          Loading...
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className="header">
        <div className="blueBox">
          <h1 className="titleGrid">
            <span className="grid-a"> w w w </span>
            <span className="grid-b">p e c </span>
            <span className='grid-c'>k e l </span>
            <span className="grid-d">s e n</span>
          </h1>
        </div>
      </div>

      <div className="title">
    
<h2>Wessel Peckelsen</h2>    
        

        <ul>
          <br />
          <li><Link href="mailto:wpeckelsen@gmail.com">wpeckelsen@gmail.com</Link></li>
          <br />
          <li><Link href="https://github.com/wpeckelsen">Github</Link></li>
          <br />
          <li><Link href="https://www.linkedin.com/in/wpeckelsen/">LinkedIn</Link></li>
        </ul>
      </div>

      <div className="content">
        <div className="blog-overview">
          {blogPost.length > 0 ? (
            blogPost.map((post) => (
              <BlogComponent
                key={post.id}
                title={post.title}
                subTitle={post.subtitle || ''}
                url={`/blog/${post.id}`} // Added leading slash for Next.js routing
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
      </div>

      <div className="image">
        <Image
          src={"/smile.png"}
          width={50}
          height={50}
          alt="Smiley"
          priority // If this is above the fold
        />
      </div>
    </main>
  );
}