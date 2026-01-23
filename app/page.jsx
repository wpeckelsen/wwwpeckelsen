// app/page.jsx
'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';
import { supabase } from "./supabase/supabaseClient";
import Hero from "./components/hero/Hero";
import BlogList from "./components/blogList/BlogList";
import TitleComponent from "./components/title/TitleComponent";
import './style/styling.scss'; // Keep if you still have styling here

export default function Home() {
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error } = await supabase
          .from('blog') //table is called 'Blog', capital B.
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching data:', error);
          setError('Failed to load blog posts');
        } else {
          setBlogPost(data || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Better loading state
  if (loading) {
    return (
      <main className="main-container">
        <Hero />
        <TitleComponent />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading blog posts...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="main-container">
      <Hero />
      <TitleComponent />
      
      {/* Error state */}
      {error && (
        <div className="error-container">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      )}
      
      {/* Blog list */}
      <div className="blog-list-container">
        <BlogList posts={blogPost} />
      </div>

      {/* Optional: Add a footer or decorative element */}
      <footer className="page-footer">
        <div className="smiley-container">
          <Image
            src="/smile.png"
            width={50}
            height={50}
            alt="Smiley"
            priority={false} // Remove priority if not above the fold
            className="smiley-image"
          />
          <p className="footer-text">Made with Next.js & Supabase</p>
        </div>
      </footer>
    </main>
  );
}