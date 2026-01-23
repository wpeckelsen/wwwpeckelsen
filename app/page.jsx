// app/page.jsx
'use client'
import Image from "next/image";
import styles from "./page.module.css";
import '../app/style/styling.scss'
import { useEffect, useState } from 'react';
import { supabase } from "./supabase/supabaseClient";
import Hero from "./components/hero/Hero";
import BlogList from "./components/blogList/BlogList";
import TitleComponent from "./components/title/TitleComponent";

export default function Home() {
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Blog')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setBlogPost(data || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className="loading">Loading...</div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      
      <Hero/>
      <TitleComponent/>
      
      
        <BlogList posts={blogPost} />
        
      

      <div className="image">
        <Image
          src={"/smile.png"}
          width={50}
          height={50}
          alt="Smiley"
          priority
        />
      </div>
    </main>
  );
}