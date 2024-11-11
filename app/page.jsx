'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import '../app/style/styling.scss'
import Item from "./component/portfolioItem";

import { useEffect, useState } from 'react';
import { supabase } from "./supabase/supabaseClient";


export default function Home() {




  const [portfolioItem, setPortfolioItem] = useState([]);
  const [blogPost, setBlogPost] = useState([]);
  const [choice, setChoice] = useState('portfolio');

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        // .from('codeprojects')
        .from({ choice })
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {

        if (choice === 'portfolio') {
          setPortfolioItem(data);
        } else { setBlogPost(data) }

      }
    };
    fetchItems();
  }, [choice]);


  return (
    <main className={styles.main}>



      <div className="title">



        <h1>wwwpeckelsen</h1>
        <h2>Wessel Peckelsen</h2>



        <span className="switch">
          <h3
            onClick={() => { setChoice('portfolio') }}
            className={choice === 'portfolio' ? 'active' : 'inactive'}>
            Portfolio
          </h3>

          <h3>{'/'}</h3>

          <h3 onClick={() => { setChoice('blog') }}
            className={choice === 'blog' ? 'active' : 'inactive'}>
            Blog
          </h3>
        </span>

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

        {choice === 'portfolio' ? (
          portfolioItem.map((item) => (
            <portfolioItem
              key={item.id}
              title={item.title}
              description={item.description}
              tech={item.tech}
              date={item.date}
              website={item.url1}
              githubLink={item.url2}
            />
          ))
        ) : ('blog section here')}


      </div>

      <div className="image">
        <Image
          src={"/smile.png"}
          margin={20}
          width={50}
          height={50}
          alt="Smiley"
        />
      </div>


    </main>
  );
}
