import React from 'react';
import Sliderdaisy from './Sliderdaisy';

const Watchdog = () => {
    return (
        <div>
            <div className="hero-pattern text-center flex-col flex text-white bg-[url(../public/images/dog.png)]">
                <div className="text-3xl font-bold items-center leading-10 text-center bg-clip-text max-w-[525px] mx-auto my-5">
                    24<span className="text-3xl">X</span>7 Watchdog
                    <br />
                    <span className="text-3xl">Never sleeps. Never misses</span>
                </div>
                <div className="flex gap-5 justify-end px-10 text-2xl font-semibold leading-6 text-white max-md:flex-wrap" style={{marginBottom: '2em'}}>
                    {/* <Slider/> */}
                    <Sliderdaisy/>
                </div>
            </div>

        </div>


    )
}

export default Watchdog
