import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-black">
      <Head>
        <title>Juan Firmansyah </title>
        <link rel="icon" href="/juan-favicon.svg" />
      </Head>

      <Header />

      <div className="flex flex-col justify-center w-full text-center font-fancy">
        {/* Banner */}
        <Banner />
        <SidebarLeft />
        <SidebarRight />

        {/* Project */}

        {/* Education */}
      </div>
    </div>
  );
}
