import React from 'react'

const Security = () => {
    return (
        <div className="flex flex-col items-center px-16 pt-12 pb-20 text-center max-md:px-5 bg-[url(../public/images/Rectangle-1538.png)]">
            <div className="flex flex-col w-full max-w-[1017px] max-md:max-w-full">
                <div className="self-center text-4xl text-white font-bold tracking-wider bg-clip-text leading-[69.16px] max-md:max-w-full">
                    High Definition Home Security
                </div>
                <div className="mt text-base text-white leading-5  max-md:max-w-full">
                    <p> Full HD camera with 2MP sharp sensor to record everything
                    </p>
                    <p>with incredible clarity</p>
                </div>
            </div>

            <div className='mt-10 relative'>
                <img className="rounded-lg"  src="./images/high-reg.png" alt="" />
                <div class="absolute left-0 top-0 m-6 pl-4 pr-4 border-solid border-2 rounded-lg bg-black	 opacity-25 text-white">Qubo 1080p Full HD</div>
                <div class="absolute right-0 top-0 m-6 pl-4 pr-4 border-solid border-2 rounded-lg bg-black	 opacity-25 text-white">Other Brands</div>
            </div>
        </div>
    )
}

export default Security
