import * as React from "react";

function Header() {
  return (
    <div className="flex flex-col justify-center py-px text-sm text-white">
      <div className="font-semibold bg-slate-600 flex justify-center py-2 ">
          <span className="text-white">
            Qubo Festive Sale is LIVE - Prices Slashed!
          </span>{" "}
          Shop Now -{" "}
          <span className="text-white ">No Promo Code needed.</span>
      </div>
      <div className="flex flex-col items-center px-16 pb-5 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start mt-3 w-full max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="./images/logo.png"
              className="shrink-0 max-w-full aspect-[3.57] w-[130px]"
            />
            <div className="flex gap-5 items-center mt-2 max-md:flex-wrap">
              <div className="grow self-stretch my-auto">Smart Home</div>
              <div className="flex-auto self-stretch my-auto">
                Connected Auto
              </div>
              <div className="flex-auto self-stretch my-auto">
                Smart Accessories
              </div>
              <div className="self-stretch my-auto">Store</div>
              <div className="flex-auto self-stretch my-auto">
                Qubo Community
              </div>
              <div className="self-stretch my-auto">Contact Us</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Header;

