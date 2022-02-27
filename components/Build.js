import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  return (
    <section>
      <div className="flex flex-col md:flex-row w-full h-screen mt-28">
        <div className="flex flex-col w-full md:w-1/2 md:h-full text-center md:text-left text-white justify-center z-50 pl-0 md:pl-44 ">
          <h2 className="flex w-1/3 md:w-full h-auto text-4xl md:text-8xl tracking-wide font-semibold text-white pl-24 md:pl-0">
            Something I've Built
          </h2>
          <div className="w-1/3 md:w-24 md:24 h-1 bg-red-500 mt-7 rounded-full ml-32 md:ml-0"></div>
          <div className="w-1/5 md:w-24 md:24 h-1 bg-red-500 mt-4 rounded-full ml-[155px] md:ml-12"></div>
        </div>
        <div className="flex w-full md:w-1/2 md:h-full overflow-hidden overflow-y-visible z-20 mt-8 md:mt-0">
          <div className="flex flex-wrap flex-1 w-full h-full text-white md:mt-0 bg-gray-700 text-2xl">
            <Link href="https://www.aicocreative.com/">
              <div className="w-full h-1/4 md:h-1/5 bg-bg-1 bg-cover">
                <h3 className="w-full h-full font-semibold hover:bg-black hover:bg-opacity-50 text-white drop-shadow-md transform transition-all pt-10 opacity-0 hover:opacity-100 hover:pt-14 delay-100 z-10">
                  Aico Creative
                </h3>
              </div>
            </Link>
            <Link href="https://clone-60078.firebaseapp.com/">
              <div className="w-full h-1/4 md:h-1/5 bg-bg-4 bg-cover">
                <h3 className="w-full h-full font-semibold hover:bg-gray-600 hover:bg-opacity-50 text-white drop-shadow-md transform transition-all pt-10 opacity-0 hover:opacity-100 hover:pt-14 delay-100 z-10">
                  Google <span className="font-firacode text-xs">clone</span>
                </h3>
              </div>
            </Link>
            <Link href="https://netflix-clone-7d963.firebaseapp.com/">
              <div className="w-full h-1/4 md:h-1/5 bg-bg-2 bg-cover justify-center">
                <h3 className="w-full h-full font-semibold hover:bg-gray-600 hover:bg-opacity-50 text-white drop-shadow-md transform transition-all pt-10 opacity-0 hover:opacity-100 hover:pt-14 delay-100 z-10">
                  Netflix <span className="font-firacode text-xs">clone</span>
                </h3>
              </div>
            </Link>
            <Link href="https://airbnb-clone-eta-six.vercel.app/">
              <div className="w-full h-1/4 md:h-1/5 bg-bg-3 bg-cover">
                <h3 className="w-full h-full font-semibold hover:bg-gray-600 hover:bg-opacity-50 text-white drop-shadow-md transform transition-all pt-10 opacity-0 hover:opacity-100 hover:pt-14 delay-100 z-10">
                  Airbnb <span className="font-firacode text-xs">clone</span>
                </h3>
              </div>
            </Link>
            <Link href="https://amazon-clone-6d9f7.firebaseapp.com/">
              <div className="w-full h-1/4 md:h-1/5 bg-bg-5 bg-blue-700 ">
                <h3 className="w-full h-full font-semibold hover:bg-gray-600 hover:bg-opacity-50 text-white drop-shadow-md transform transition-all pt-10 opacity-0 hover:opacity-100 hover:pt-14 delay-100 z-10">
                  Amazon <span className="font-firacode text-xs">clone</span>
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
