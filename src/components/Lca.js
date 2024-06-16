import React from 'react'

const Lca = () => {
  return (
    <div className="flex flex-col justify-center">
    <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[602px] max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="./images/car-slide-3.jpg"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center  w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-20 max-w-full w-[916px] max-md:mt-10">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-bold text-white leading-10 bg-clip-text max-md:max-w-full">
                    Lights, Camera, AI-ction
                  </div>
                  <div className="mt-7 text-lg tracking-wide text-white max-md:max-w-full">
                    Advanced night security with spotlight sensor assisted by
                    AI.
                    <br />
                    Monitor your home in better even in low light or in case
                    of <br />
                    any unusual activity, that too in full colour
                  </div>
                  <div className="flex gap-0 items-start self-start mt-12 max-md:mt-10">
                    <div className="flex flex-col items-center text-lg tracking-wider text-white whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="./images/slide-icon-1.png"
                        className="bg-sky-500 rounded-full aspect-square h-[72px] w-[72px] p-3"
                      />
                      <div className="mt-4">Auto</div>
                    </div>
                    <div className="shrink-0 mt-9 h-0.5 bg-sky-500 border-2 border-sky-500 border-solid w-[45px]" />
                    <div className="flex flex-col text-lg tracking-wider text-white whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="./images/slide-icon-2.png"
                        className="self-center rounded-full border-2 border-solid aspect-square bg-zinc-300 bg-opacity-0 border-stone-400 h-[72px] stroke-[2px] w-[72px] p-3"
                      />
                      <div className="mt-4">Event</div>
                    </div>
                    <div className="flex flex-col self-stretch">
                      <div className="flex gap-0">
                        <div className="shrink-0 my-auto h-0.5 border-2 border-solid bg-stone-400 border-stone-400 w-[53px]" />
                        <img
                          loading="lazy"
                          srcSet="./images/slide-icon-3.png"
                          className="shrink-0 rounded-full border-2 border-solid aspect-square bg-zinc-300 bg-opacity-0 border-stone-400 h-[72px] stroke-[2px] w-[72px] p-3"
                        />
                      </div>
                      <div className="mt-4 text-lg tracking-wider text-center text-white">
                        Colourized
                        <br /> Night Vision
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                <div className="mt-60 text-2xl font-bold tracking-wide leading-7 text-black max-md:mt-10">
                  Spotlight triggered <br />
                  by low light
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-start self-center mt-20 ml-24 max-md:mt-10">
            <div className="shrink-0 w-4 h-4 rounded-full border border-solid bg-zinc-300 bg-opacity-0 border-stone-300 stroke-[1px]" />
            <div className="shrink-0 w-4 h-4 rounded-full border-2 border-sky-500 border-solid bg-zinc-300 bg-opacity-0 stroke-[1.5px]" />
            <div className="shrink-0 h-4 rounded-full border border-solid bg-zinc-300 bg-opacity-0 border-stone-300 stroke-[1px] w-[15px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Lca
