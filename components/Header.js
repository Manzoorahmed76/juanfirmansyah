import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full h-auto top-0 z-50 font-firacode">
      <div className="flex flex-col md:flex-row w-full h-20 justify-between items-center px-10">
        <div className="flex flex-wrap content-center h-full w-26 z-50">
          <h1 className="text-2xl text-white">J U A N</h1>
        </div>
        <div>
          <ul className="flex w-full h-full text-sm font-thin items-center text-white">
            <li>
              <a className="w-full h-full px-8">
                1. <span className="text-[#B4BEDE]">About</span>
              </a>
            </li>
            <li>
              <a className="w-full h-full px-8">
                2. <span className="text-[#B4BEDE]">Experience</span>
              </a>
            </li>
            <li>
              <a className="w-full h-full px-8">
                3. <span className="text-[#B4BEDE]">Work</span>
              </a>
            </li>
            <li>
              <a className="w-full h-full px-8">
                4. <span className="text-[#B4BEDE]">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
