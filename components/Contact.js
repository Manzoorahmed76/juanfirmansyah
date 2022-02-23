import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section>
      <div className="flex flex-col max-w-6xl h-screen m-auto text-left">
        <div className="absolute max-w-4xl text-white mt-16">
          <h2 className="text-9xl tracking-wide font-semibold text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-red-500 mt-7 rounded-full"></div>
          <div className="w-24 h-1 bg-red-500 mt-4 rounded-full ml-12"></div>
          <p className="h-auto max-w-md mt-5">
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <div className="brightness-125 mt-8 text-left">
            <Link href="mailto:juanfirmansyah.jf@gmail.com">
              <button
                className="bg-red-600 w-auto h-14 rounded-xl hover:scale-105
            "
              >
                <a className="p-6">Say Hello</a>
              </button>
            </Link>
            <ul>
              <li className="grid grid-cols-3 w-40 mt-7">
                <a
                  href="https://github.com/JuanFirmansyah"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="h-6 w-auto" />
                </a>
                <a
                  href="https://github.com/JuanFirmansyah"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="h-6 w-auto" />
                </a>
                <a
                  href="https://github.com/JuanFirmansyah"
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="h-6 w-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
