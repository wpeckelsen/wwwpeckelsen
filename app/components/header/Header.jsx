import React from 'react';
import Link from 'next/link';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link href="/">Home</Link>
      </div>
      <div className="header-right">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
