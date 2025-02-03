import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link href="/">
          <Image
            src="/img/doja-logo.webp"
            alt="doja logo"
            width={50}
            height={50}
            className="logo"
          />
        </Link>
        <nav className="link">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/doja">Doja</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
