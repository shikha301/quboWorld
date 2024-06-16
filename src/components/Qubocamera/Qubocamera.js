import React from 'react'
import "./Qubocamera.css";

const Qubocamera = () => {
    return (
        <div className='bg-black'>
            {/* <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2>
                        SMART TECH FOR
                        STRONG DEFENSE </h2>
                    <h2 className='tri-color'>
                        MADE IN INDIA
                    </h2>
                </div>
                <div>
                    <iframe class="w-full aspect-video " src="./images/make-bulletcam.mp4"></iframe>
                </div>
            </div> */}

            <div className="flex flex-row ml-5 max-md:ml-0 max-md:w-full text-center">
                <div className="basis-3/4 self-stretch my-auto max-md:mt-10">
                    <div className="text-6xl font-bold tracking-wider leading-none text-white bg-clip-text">
                        <div class="make-box-flex-col make-left-box uppercase">
                            <div><span class="make-head-light">Smart</span><span class="make-head-strong"> Tech </span><span class="make-head-light">For</span></div>
                            <div class="make-head-strong">Strong Defense</div>
                            <div class="make-in-heading tri-color">Made in india</div>
                        </div>
                    </div>

                </div>
                <div class="make-box-flex-col">
                <video autoPlay loop muted  >
                    <source src="./images/make-bulletcam.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            </div>
        </div>
    )
}

export default Qubocamera
