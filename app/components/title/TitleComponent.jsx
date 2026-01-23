import './TitleComponent.scss';
import Link from 'next/link';

export default function TitleComponent() {
  return (
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
  );
}