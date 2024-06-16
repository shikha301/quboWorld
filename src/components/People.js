import React from 'react'

const People = () => {
    return (
        <div className='md:ml-20 md:mt-20'>
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <div className="max-w-sm bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="./images/mqdefault.jpg" alt="" />
                        </a>
                        
                    </div>
                    <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-center font-bold text-white  dark:text-white">
                                "Affordable, powerful and a must-have auto accessory for every automobile owner"
                                </h5>
                            </a>
                            <p className="mb-3 text-xl text-center text-white dark:text-gray-400">
                               Wandersane
                            </p>
                            
                        </div>

                </div>
                <div>
                    <div className="max-w-sm bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="./images/mqdefault(1).jpg" alt="" />
                        </a>
                        
                    </div>
                    <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-center font-bold text-white  dark:text-white">
                                "Absolute essential car accessory if you are planning to take a trip with your family"
                                </h5>
                            </a>
                            <p className="mb-3 text-xl text-center text-white dark:text-gray-400">
                            - Gogi Tech
                            </p>
                            
                        </div>

                </div>
                <div>
                    <div className="max-w-sm bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="./images/mqdefault(2).jpg" alt="" />
                        </a>
                        
                    </div>
                    <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-center font-bold text-white  dark:text-white">
                                "LED Lights are very useful in case your tyre gets punctured in a pitch dark location"
                                </h5>
                            </a>
                            <p className="mb-3 text-xl text-center text-white dark:text-gray-400">
                            Giznext
                            </p>
                            
                        </div>

                </div>
            </div>
        </div>
    )
}

export default People
