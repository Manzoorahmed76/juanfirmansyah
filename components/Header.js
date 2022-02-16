import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full h-auto top-0">
      <nav className="flex w-full h-20 justify-between items-center px-10 bg-black">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div className="flex flex-wrap content-center h-full w-26">
          <h1 className="text-4xl tracking-widest text-white">J U A N</h1>
        </div>
        <div></div>
      </nav>
      <div
        className={`${
          isOpen ? 'block' : '-translate-y-full text-white'
        } absolute top-0 z-10 flex flex-row w-full h-64 bg-black text-white text-center transition-all ease-in duration-1000`}
      >
        <div className="flex w-full h-full text-lg font-medium items-center">
          <Link href="/umi-beauty">
            <a className="w-full h-full px-8 py-32  tracking-normal">Project</a>
          </Link>
          <Link href="/contact">
            <a className="w-full h-full px-8 py-32  tracking-wider">Contact</a>
          </Link>
          <Link href="/about">
            <a className="w-full h-full px-8 py-32  tracking-wider">About</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
