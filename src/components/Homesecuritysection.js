import React from 'react'

function HomeSecuritySection() {
    return (
      <section className="pl-20 bg-slate-900 max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:w-full">
            <img
              loading="lazy"
              src="./images/complete-home-left.png"
              alt=""
              className="grow shrink-0 mt-16 max-w-full aspect-[0.67] w-[313px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative z-10 flex-col grow items-start py-20 pr-20 shadow-sm min-h-[531px] max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="./images/with-wave-n.png"
                alt=""
                className="object-cover absolute inset-0 size-full"
              />
              <h1 className="relative mt-36 text-5xl font-bold text-white bg-clip-text leading-[51px] w-[647px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Complete <br />
                Home Security <br />
                through Qubo App
              </h1>
              <p className="relative mt-4 text-lg leading-6 text-white max-md:max-w-full">
                Monitor your home’s outdoor as well as indoors
                <br />
                with Qubo’s complete home security solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function MyComponent() {
    return (
      <main>
        <HomeSecuritySection />
      </main>
    );
  }
  



export default HomeSecuritySection
