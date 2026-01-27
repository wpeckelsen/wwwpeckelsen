import Image from 'next/image'
import './Footer.scss'

export default function Footer({ text = '' }) {
  return (
    <footer className="page-footer">
      <div className="smiley-container">
        <Image
          src="/smile.png"
          width={50}
          height={50}
          alt="Smiley"
          priority={false}
          className="smiley-image"
        />
        <p className="footer-text">{text}</p>
      </div>
    </footer>
  )
}