import './TitleComponent.scss';
import Link from 'next/link';

export default function TitleComponent() {
  return (
    <div className="title-one">
      <div className="title-two">
        <h2 className="name">Wessel Peckelsen</h2>
        <p className="bio">I write about design, marketing, and software.</p>
      </div>

      <div className="contact-links">

        <ul>
          <li>
            <Link href="mailto:wpeckelsen@gmail.com">wpeckelsen@gmail.com</Link>
          </li>
          <li>
            <Link href="https://github.com/wpeckelsen" target="_blank" rel="noopener noreferrer">Github</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/wpeckelsen/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          </li>
        </ul>



      </div>
    </div>
  );
}