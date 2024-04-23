
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

        

        <Item
          title={"Reddit Multi Search"}
          date={"04-2024"}
          tech={"NextJS, Sass (frontend), Supabase (backend), Google Search API, planning to deploy on Vercel. "}
          description={"A web app that allows you to search multiple subreddits at once through a Google search API. This is a personal project that I am currently working on."}
          website={"/"}
          githubLink={"https://github.com/wpeckelsen/reddit-multi-search"}
        />


        <Item
          title={"=GetPrices(a2:c4)"}
          date={"02-2024"}
          tech={"Google Apps Script, JavaScript"}
          description={"A custom formula written for Google Sheets. Accepts a range, passes it on to OpenAI's API, and returns a range with useful data: URL, price and email. Useful in my daily work."}
          website={"/"}
          githubLink={"/"}
        />

        <Item
          title={"Domain Trimmer"}
          date={"06-2023"}
          tech={"ReactJS, deployed on Vercel. RegEx in JavaScript."}
          description={"A ReactJS web app. Trims URLs from all kinds of patterns down to a root domain. Useful in my daily work."}
          website={"https://domaintrimmer.vercel.app/"}
          githubLink={'https://github.com/wpeckelsen/domaintrimmer'}
        />

        <Item
          title={"CSV gluer"}
          date={"06-2023"}
          tech={"ReactJS, deployed on Vercel."}
          description={"A ReactJS web app. Accepts multiple CSV files and glues them together. All files are appended underneath each other, creating one big CSV file. Useful in my daily work."}
          website={"https://csvglue.vercel.app/"}
          githubLink={'https://github.com/wpeckelsen/domaintrimmer'}
        />
        <Item
          title={"Juice"}
          date={"05-2023"}
          tech={"Spring boot, Java (object oriented programming), REST API, PostgreSQL."}
          description={"Final project - backend, bootcamp 2022. REST API that can serve as backend for a marketplace in which a user can buy an item, and seller can agree, and a deal is made.  "}
          website={"/"}
          githubLink={"https://github.com/wpeckelsen/juice"}
        />


        <Item
          title={"Pagespeed X 5"}
          date={"05-2022"}
          tech={"ReactJS, Sass"}
          description={"Final project - Frontend, Bootcamp 2022"}
          website={"/"}
          githubLink={"https://github.com/wpeckelsen/page-speed-x-5"}
        />





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
