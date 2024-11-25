'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import '../app/style/styling.scss'
import { useEffect, useState } from 'react';
import { supabase } from "./supabase/supabaseClient";
import { fetchImageUrl } from "./supabase/fetchImageUrl";
import CodingComponent from "./component/CodingComponent";
import BlogComponent from "./component/BlogComponent";

export default function Home() {

  const [codingItem, setCodingItem] = useState([]);
  const [blogPost, setBlogPost] = useState([]);
  const [choice, setChoice] = useState('coding');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from(choice)
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {

        if (choice === 'coding') {
          setCodingItem(data);
        } else { setBlogPost(data) }

      }
    };
    fetchItems();
  }, [choice]);

  useEffect(() => {
    async function getImage() {
      const imageUrl = await fetchImageUrl('blogimages', 'flags/d25tadtiyyw41.png');
      if (imageUrl) {
        setImageUrl(imageUrl);
        console.log("+PAGE.JSX+ imageUrl: " + imageUrl + " +PAGE.JSX+")
      }
    }
    getImage();
  }, []);


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
        <span className="switch">
          <h3
            onClick={() => { setChoice('coding') }}
            className={choice === 'coding' ? 'active' : 'inactive'}>
            Coding Portfolio
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

        {choice === 'coding' ? (
          codingItem.map((item) => (

            <CodingComponent
              key={item.id}
              title={item.title}
              description={item.description}
              tech={item.tech}
              date={item.date}
              website={item.url1}
              githubLink={item.url2}
            />
          ))
        ) : (
          <>   <div className="blog-overview">
            <BlogComponent
              title={"A test blog!"}
              subTitle={"A quick subtitle for a blog entry"}
              url={"google.com"}
              headerImage={<>
                <Image
                  src={imageUrl}
                  alt="a flag"
                  width={500}
                  height={300}
                /></>}
              body={<>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis sequi maiores, quos, eos repudiandae quod cum illum explicabo non sunt at quas odit ex eveniet! Corrupti recusandae quis repellat?</p>

              </>}


            />

          </div>
          </>


        )}


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
