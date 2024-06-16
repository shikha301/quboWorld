import React from 'react'

const Guard = () => {
  return (
    <div>
       <div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-20 min-h-[602px] max-md:px-5">
      <img
        loading="lazy"
        srcSet="./images/alwayson-gard.png"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col md:mt-18 md:ml-30 max-w-full w-[478px] max-md:mt-10">
        <div className="text-4xl font-bold text-white leading-10 bg-clip-text max-md:max-w-full">
          Always on guard <br />
          Built for all conditions
        </div>
        <div className="mt-6 text-sm tracking-wide leading-0 text-white max-md:max-w-full">
          All weather resistant outdoor camera with IP66 rating.
        </div>
        <div className="flex justify-between mt-10 max-w-full text-xs  text-white whitespace-nowrap w-[372px] max-md:mt-10">
          <div>
            <img src="./images/safe-home-1.png" className='w-20' alt="" />
            <p className='text-center mt-2'>Cold</p>
        </div>
          <div>
          <img src="./images/safe-home-2.png" className='w-20' alt="" />
            <p className='text-center mt-2'>Heat</p>
          </div>
          <div> 
            <img src="./images/safe-home-3.png" className='w-20' alt="" />
            <p className='text-center mt-2'>Rain</p></div>
          <div> 
            <img src="./images/safe-home-4.png" className='w-20' alt="" />
            <p className='text-center mt-2'>Dust</p></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Guard
