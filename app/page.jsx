'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import '../app/style/styling.scss'
import Item from "./component/Item";

import { useEffect, useState } from 'react';
import { supabase } from "./supabase/supabaseClient";


export default function Home() {




  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from('codeprojects')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setItems(data);
      }
    };

    fetchItems();
  }, []);


  return (
    <main className={styles.main}>



      <div className="title">

        <h1>wwwpeckelsen</h1>
        <h2>Portfolio of Wessel Peckelsen</h2>
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
        {/* Render Item components based on fetched data */}
        {items.map((item) => (
          <Item
            key={item.id} // Assuming each item has a unique id
            title={item.title}
            description={item.description}
            tech={item.tech}
            date={item.date}
            website={item.url1} // Use the correct property for the website
            githubLink={item.url2} // Use the correct property for the GitHub link
          />
        ))}
      </div>

      <div className="image">
        <Image
          // src="/public/smile.jpg"
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
