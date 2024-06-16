import * as React from "react";

function GuardianHeading() {
  return (
    <div className="flex flex-col items-center px-16 pt-12 pb-20 text-center max-md:px-5 bg-[url(../public/images/Rectangle-1538.png)]">
      <div className="flex flex-col w-full max-w-[1017px] max-md:max-w-full">
        <div className="self-center text-4xl text-sky-500 font-bold tracking-wider bg-clip-text  max-md:max-w-full">
          Smart AI Guardian for Home
        </div>
        <div className="mt-6 text-base tracking-wide leading-5 text-zinc-400 max-md:max-w-full">
          Discover the Smart Bullet Cam, not just a mere outdoor camera, but
          your vigilant eye, actively protecting your home whether it be a villa
          or an apartment. With its long-range connectivity & cutting edge AI
          you can remotely monitor every corner of your home from wherever you
          are and get instant alerts for any unusual activity detected.
        </div>
      </div>
    </div>
  );
}

export default GuardianHeading;

