import * as React from "react";

function GuardianContent() {
    return (
        <div className="flex flex-col justify-center bg-[url(../public/images/Rectangle-1501.png)]">
            <div className="flex justify-center items-center p-16 w-full max-md:px-5 max-md:max-w-full">
                <div className="w-full max-w-[1140px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-wrap">
                                    <div className="shrink-0 self-end mt-5 w-6 blur-[5px] h-[118px]" />
                                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                        <div className="text-4xl font-bold text-white tracking-wider leading-10 bg-clip-text">
                                            Smarter Security <br />
                                            for Safer Home
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start pl-14 mt-1.5 text-base tracking-wide text-zinc-700 max-md:pl-5 max-md:max-w-full">
                                    <div className="mt-10 text-2xl font-semibold tracking-wide">
                                        Long range home security
                                    </div>
                                    <div className="mt-3.5">
                                        Outdoor camera with long range antenna <br />
                                        for better connectivity around the house to <br />
                                        boost all around security
                                    </div>

                                    <div className="mt-10 text-2xl font-semibold tracking-wide">
                                        Check in on what matters
                                    </div>
                                    <div className="mt-3.5">
                                        Remotely monitor your home through the <br />
                                        Qubo app and customise your home’s security
                                    </div>
                                    <div className="mt-10 text-2xl font-semibold tracking-wide">
                                        Get real-time alerts
                                    </div>
                                    <div className="mt-3.5">
                                        Get notifications on the Qubo App for <br />
                                        any unexpected or unusual activity
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="./images/scroll-3.png"
                                className="grow w-full aspect-[1.15] max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuardianContent;
