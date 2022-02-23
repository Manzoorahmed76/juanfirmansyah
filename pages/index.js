import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-gradient-to-tr from-black via-[#071F3D] to-[#405369]">
      <Head>
        <title>Juan Firmansyah </title>
        <link rel="icon" href="/juan-favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />

      <div className="flex flex-col justify-center w-full h-auto text-center font-fancy">
        {/* Banner */}
        <Banner />
        <About />
        <Work />
        <Contact />

        <SidebarLeft />
        <SidebarRight />

        {/* Project */}

        {/* Education */}
      </div>
    </div>
  );
}
