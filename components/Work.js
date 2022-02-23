import React from 'react';

export default function Work() {
  return (
    <section>
      <div className="flex flex-col max-w-6xl h-screen m-auto">
        <div className="absolute max-w-2xl text-white mt-16">
          <h2 className="text-9xl tracking-wide font-semibold text-white">
            Work
          </h2>
          <div className="w-24 h-1 bg-red-500 mt-7 rounded-full"></div>
          <div className="w-24 h-1 bg-red-500 mt-4 rounded-full ml-12"></div>
        </div>
      </div>
    </section>
  );
}
