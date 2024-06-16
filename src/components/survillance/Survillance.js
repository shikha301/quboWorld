import * as React from "react";

const featuresLeft = [
  {
    imgSrc: "../images/exp-1.png",
    imgAlt: "Continuous recording icon",
    description: "Continuous recording",
    imgWidth: "82px"
  },
  {
    imgSrc: "../images/reverse-arrow.png",
    imgAlt: "Loop recording icon",
    description: "Loop recording",
    imgWidth: "51px"
  },
  {
    imgSrc: "../images/exp-3.png",
    imgAlt: "Expandable SD card storage icon",
    description: "",
  }
];

const featuresRight = [
  {
    imgSrc: "../images/exp-4.png",
    imgAlt: "Expandable storage icon",
    description: "Expandable SD card storage upto 1 TB",
    imgWidth: "29px"
  },
  {
    imgSrc: "../images/exp-5.png",
    imgAlt: "Encrypted storage icon",
    description: "Encrypted Cloud Storage housed in India",
    imgWidth: "47px"
  },
  {
    imgSrc: "../images/exp-6.png",
    imgAlt: "Antitheft storage icon",
    description: "Antitheft cloud storage",
    imgWidth: "44px"
  }
];

const FeatureCard = ({ imgSrc, imgAlt, description, imgWidth }) => (
  <div className="flex gap-5 justify-between px-8 py-6 text-xl font-medium tracking-wide leading-6 text-white rounded-xl border border-sky-700 border-solid max-md:px-5">
    <img loading="lazy" src={imgSrc} alt={imgAlt} className="shrink-0 aspect-1.5" style={{ width: imgWidth || 'inherit' }} />
    <div>{description}</div>
  </div>
);

function Survillance() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 min-h-[783px] max-md:px-5">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c04fd095662e19960e7de7f4e0ba116bbfd354aa5c3ab8d899922e878aa2271?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative justify-center items-center px-16 py-20 w-full max-w-[1440px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-3.5 w-full max-w-[1234px] max-md:max-w-full">
          <h1 className="text-5xl font-bold tracking-wider text-center bg-clip-text leading-[68.88px] max-md:max-w-full">Powerful long range outdoor surveillance</h1>
          <p className="mt-4 text-3xl font-medium tracking-wide text-center leading-[68.88px] text-neutral-400 max-md:max-w-full">Dual Antenna for Long Range Transmission</p>
          
          <section className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col">
                  {featuresLeft.slice(0, 2).map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                  ))}
                  <div className="flex gap-1 px-14 py-6 mt-7 rounded-xl border border-sky-700 border-solid max-md:px-5">
                    {featuresLeft.slice(2).map((feature, index) => (
                      <img key={index} loading="lazy" src={feature.imgSrc} alt={feature.imgAlt} className="shrink-0 self-start max-w-full" />
                    ))}
                  </div>
                </div>
              </div>
              
              <figure className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01235fb028850a68040910ee10b06135ce6ff3b8d6ee896f04b3b7088166498a?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&" alt="Surveillance image" className="self-stretch my-auto w-full aspect-[1.96] max-md:mt-9 max-md:max-w-full" />
              </figure>
              
              <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl font-medium tracking-wide leading-6 text-white max-md:mt-3.5">
                  {featuresRight.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="flex gap-4 mt-20 text-3xl font-semibold tracking-wider text-center capitalize leading-[68px] max-md:flex-wrap max-md:mt-10">
            <img src="../images/powerfull-wifi-icon.png" alt="Wi-Fi & Ethernet Icon" className="shrink-0 aspect-[1.27] w-[58px]" />
            <span className="flex-auto self-start mt-3 bg-clip-text max-md:max-w-full">Wi-Fi & Ethernet Connectivity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survillance;