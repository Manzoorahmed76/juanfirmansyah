import React from 'react';

function SidebarLeft() {
  return (
    <section>
      <div className="absolute h-[270px] bottom-0 left-0">
        <div className="flex flex-col gap-6 justify-center w-44 h-full mx-auto text-white">
          <h1>Git</h1>
          <h1>IG</h1>
          <h1>Twitter</h1>
          <h1 className="">Linked</h1>
          <div className="w-[2px] h-80 block bg-white mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default SidebarLeft;
