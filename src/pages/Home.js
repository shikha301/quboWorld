import React from "react";
import Banner from "../components/Banner";
import Guardian from "../components/Guardian";
import Security from "../components/Security";
import Watchdog from "../components/watchdog/Watchdog";
import Guard from "../components/Guard";
import Lca from "../components/Lca";
import Fingertip from "../components/Fingertip";
import Qubocamera from "../components/Qubocamera/Qubocamera";
// import Specification from "../components/Specification/Specification";
import People from "../components/People";
import Survillance from "../components/survillance/Survillance";
import Completesecurity from "../components/Completesecurity";
import Sbc from "../components/Sbc";

// import Slider from "react-slick";
// import HomeSecuritySection from "../components/Homesecuritysection";

function Home() {
  return (
    <div>
        <Banner/>
        <Guardian/>
        <Security/>
        <Watchdog/>
        <Guard/>
        <Lca/>
        <Fingertip/>
        <Survillance/>
        <Qubocamera/>
        <Completesecurity/>
        <Sbc/>
        <People/>
        {/* <Specification/> */}
        
        {/* <HomeSecuritySection/> */}
        {/* <Slider/> */}
    </div>
  );
}

export default Home;