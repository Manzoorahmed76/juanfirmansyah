import React from 'react';

function SidebarRight() {
  return (
    <section>
      <div className="absolute h-[270px] bottom-0 right-0">
        <div className="flex flex-col gap-6 justify-center items-center w-44 h-full mx-auto text-white">
          <a
            href="mailto:juanfirmansyah.jf@gmail.com"
            className="flex items-center h-96 rotate-90"
          >
            juanfirmansyah.jf@gmail.com
          </a>
          <div className="w-[2px] h-60 mt-14 bg-white mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default SidebarRight;
