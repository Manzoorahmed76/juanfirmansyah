import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 7,
        },
      }),
        animation2.start({
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 4,
          },
        });
    }
    if (!inView) {
      animation.start({
        x: '-200px',
        opacity: 0,
      }),
        animation2.start({
          y: '200px',
          opacity: 0,
        });
    }
  }, [inView]);
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
