
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import '../app/style/styling.scss'
import Item from "./component/Item";
export default function Home() {







  return (
    <main className={styles.main}>



      <div className="title">

        <h1>wwwpeckelsen</h1>
        <h2>Wessel Peckelsen, portfolio</h2>
        <ul>
          <li><Link href="mailto:wpeckelsen@gmail.com">wpeckelsen@gmail.com</Link></li>

          <li><Link href="https://github.com/wpeckelsen">Github</Link></li>
          
          <li><Link href="https://www.linkedin.com/in/wpeckelsen/">LinkedIn</Link></li>

        </ul>
      </div>

      <div className="content">
{/* supabase here */}
        




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
