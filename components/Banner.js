import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <section>
      <div className="flex w-full h-screen justify-center">
        <div className="absolute left-0 top-20 z-10 flex-col justify-center max-w-6xl h-auto md:pl-44">
          <div className="flex flex-col w-full h-auto mx-auto justify-center text-left text-white mt-28 pl-8">
            <h1 className="w-full h-auto tracking-wider font-firacode font-thin">
              Hi, my name is
            </h1>
            <h2 className="max-w-3xl h-auto text-4xl md:text-7xl font-bold tracking-wider">
              JUAN FIRMANSYAH
            </h2>
            <h3 className="w-full h-auto text-xl md:text-5xl">
              I'm front-end developer.
            </h3>
            <div className="w-24 h-1 bg-red-500 mt-7 rounded-full"></div>
            <div className="w-24 h-1 bg-red-500 mt-4 rounded-full ml-12"></div>
            <p className="max-w-md mt-10 brightness-75 tracking-widest text-md md:text-lg">
              I'm a web developer specializing in design and developing website.
              Currently, I'm focused on front-end developer.
            </p>
            <button className="w-32 md:w-72 h-14 md:h-16 mt-16 border-2 rounded-md hover:cursor-pointer">
              <a className="text-white font-firacode">Contact Me</a>
            </button>
          </div>
        </div>

        <div className="flex gap-2 md:gap-8 w-full h-full text-white text-center justify-center items-center">
          <div className="relative h-96 md:h-full w-full -mt-56 md:mt-96 ml-16 md:ml-[500px] shadow-2xl overflow-hidden ">
            <Image src={'/juan4.jpg'} layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-96 md:h-full w-full mt-0 shadow-2xl overflow-hidden">
            <Image src={'/juan3.png'} layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-96 md:h-full w-full -mt-56 md:mt-96 shadow-2xl overflow-hidden">
            <Image src={'/juan1.jpg'} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
