import * as React from "react";

function SpecificationItem({ text, src, alt }) {
  return (
    <>
      <div className="flex gap-3 mt-5 leading-[514%]">
        {src && <img loading="lazy" src={src} alt={alt} className="shrink-0 self-start w-4 aspect-[1.45]" />}
        <div className="flex-auto">{text}</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43e6cf292b3dbd99289d20067d5ffe59b7812db9f5049dfdd869e195e03b3874?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&"
        alt=""
        className="mt-10 max-w-full border border-dashed border-neutral-600 stroke-[1px] stroke-neutral-600 w-[289px] max-md:mt-10"
      />
    </>
  );
}

function TechnicalSpecifications({ specificationsAndIcons }) {
  return (
    <section className="flex flex-col px-5">
      <header className="flex gap-5 px-20 py-9 w-full text-center text-white rounded-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="text-2xl font-medium">Technical Specifications</div>
        <div className="text-5xl max-md:text-4xl">+</div>
      </header>
      <h2 className="self-center mt-12 text-4xl font-bold tracking-wider text-center bg-clip-text leading-[69.16px] max-md:mt-10 max-md:max-w-full">
        Powerful long range outdoor surveillance
      </h2>
      <h3 className="self-center mt-4 text-3xl font-medium tracking-wide text-center leading-[68.88px] text-neutral-400 max-md:max-w-full">
        Dual Antenna for Long Range Transmission
      </h3>
      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <div className="grow items-start px-8 pt-14 pb-9 mt-24 w-full text-xl font-medium tracking-wide text-white rounded-3xl leading-[72px] max-md:mt-10">
              <span className="leading-7">Long Range Connected Security</span> <br />
              Field of View <br />
              Expandable Storage <br />
              Weatherproof <br />
              Multiple Recording Options <br />
              AI powered features
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-14 pt-12 pb-8 w-full text-sm font-light tracking-wide text-white bg-zinc-800 max-md:px-5 max-md:max-w-full">
              <div className="self-stretch text-4xl font-bold tracking-wider text-sky-400 leading-[51px]">Qubo</div>
              <div className="shrink-0 self-stretch mt-6 h-px border border-solid bg-neutral-400 border-neutral-400" />
              {specificationsAndIcons.map((item, index) => (
                <SpecificationItem key={index} text={item.text} src={item.src} alt={item.alt} />
              ))}
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-8 py-12 mx-auto w-full text-sm font-light tracking-wide leading-5 text-white rounded-none max-md:px-5">
              <div className="self-stretch text-4xl font-bold tracking-wider leading-[51px]">Other Brands</div>
              <div className="shrink-0 self-stretch mt-7 h-px bg-sky-600 border border-sky-600 border-solid" />
              <div className="flex gap-5 self-stretch mt-14 leading-[514%] max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5535bb2ff95d1d10bac28ca45baf182fb5cc41dd5e79cf4d5770f97dda57f045?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&" alt="Villas & Large Apartments" className="shrink-0 self-start w-4 aspect-[1.45]" />
                <div className="flex-auto">Ideal for Villas & Large Apartments</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43e6cf292b3dbd99289d20067d5ffe59b7812db9f5049dfdd869e195e03b3874?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&"
                alt=""
                className="mt-10 max-w-full border border-dashed border-neutral-600 stroke-[1px] stroke-neutral-600 w-[289px]"
              />
              {[
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85596f53fb98caf5075e2b565737f804df8f4eb6e5ad494cc6a0e6ea0df32664?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&", text: "85 deg" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a29fa36113c06aaf07e2afcc22d372adaef352f4e683070567251486c3583c3b?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&", text: "Expandable SD card storage up to 256 GB" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1157ebd0546d587ec083c15aee5e3a2a2ad26ed49829b1092d71c70ae17b70ff?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&", alt: "", className: "mt-8 aspect-square w-[13px]" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c8c1d110b3ef3a18735ae135df66d8c27f806ff1a4ae4f7b9bc0821957fcb22?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&", text: "Continuous recording only" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fada4d87f929a779c97575b8734e19c585dae4feb808266819af6ae2a69762d?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&", text: "Only AI powered-Person Detection" }
              ].map((item, index) => (
                <SpecificationItem key={index} text={item.text} src={item.src} alt={item.alt} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default function MyComponent() {
  const specificationsAndIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbc236bb27ba1e8add7ba39bf6225694cbde48f18616f42c34d03bbc6f9516bf?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&",
      text: "Ideal for Villas & Large Apartments",
      alt: "Icon for villas and large apartments"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e77c7e6f4b5b731429a19df5b60d5bf61ea0f9acad1c2057dd4dee54a1d4721?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&",
      text: "130 deg",
      alt: "Icon suggesting field of view"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/43d3f5ccd084b0030e4529e46df2b1206606d7fb52090f2dffed91fe63ea58b7?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&",
      text: "Anti-theft Cloud Storage, recover your videos even in case of security camera damage. Expandable SD card storage up to 1 TB",
      alt: "Icon for cloud storage and SD card storage"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/16f4a7bc4541b071cac3321561fd30220e512eb206af84fc11d319bce148c02d?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&",
      text: "IP66",
      alt: "Weatherproof rating icon"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d64c198658366ba0ca35cbacd55b53d14260e9296467bcbf56da4a7fbb4c895a?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&",
      text: "Continuous, Event & Loop Recording",
      alt: "Icon for recording options"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f994f94b384a3703b8e910c6d1bd0f02360e989ed2704b03f18324190ac91af2?apiKey=1f8e764b52ef426c97642c6fe7e4eb06&",
      text: "AI powered features-Person Detection, Motion Detection",
      alt: "Icon for AI-powered features"
    }
  ];

  return <TechnicalSpecifications specificationsAndIcons={specificationsAndIcons} />;
}