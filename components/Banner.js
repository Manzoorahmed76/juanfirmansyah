import React from 'react';

function Banner() {
  return (
    <section>
      <div className="flex flex-col justify-center max-w-5xl h-auto mx-auto">
        <div className="flex flex-col w-full h-auto mx-auto justify-center text-left text-white mt-28">
          <h1 className="w-full h-auto">Hi, my name is</h1>
          <h2 className="w-full h-auto mt-2 text-7xl font-semibold">
            Juan Firmansyah.
          </h2>
          <h3 className="w-full h-auto mt-4 text-5xl">
            I'm front-end developer.
          </h3>
          <p className="max-w-md mt-10 brightness-75">
            I'm a web developer specializing in design and developing website.
            Currently, I'm focused on front-end developer.
          </p>
          <button className="w-72 h-16 mt-16 border-2 rounded-md">
            <a href="" className="text-white">
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
