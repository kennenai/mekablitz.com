import React from "react";

import { Helmet } from "react-helmet";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Connect from "./index-sections/Connect.js";
import HeroVideo from "./index-sections/HeroVideo.js";
import Synopsis from "./index-sections/Synopsis.js";
import Rating from "./index-sections/Rating.js";
import Screenshots from "./index-sections/Screenshots.js";
import About from "./index-sections/About.js";
import SignUp from "./index-sections/SignUp.js";

function Index(props) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  React.useEffect(() => {
    console.log(props.history.location.hash)
    const hash = props.history.location.hash
    if (hash && document.getElementById(hash.substr(1))) {
        document.getElementById(hash.substr(1)).scrollIntoView({behavior: "smooth"})
    }
  }, [props.history.location.hash])
  return (
    <>
      <Helmet>
        <title>M.E.K.A. Blitz - Save the planet from evil robots!</title>
        <meta name="description" content="M.E.K.A. Blitz is a unique location-based mobile game that uses your device's compass and gyroscope to let you fight waves of invading robots. Available for iOS and Android." />
        <meta name="keywords" content="mobile game, location-based game, action game, robot game, meka blitz, mekablitz" />
        <meta property="og:title" content="M.E.K.A. Blitz - Save the planet from evil robots!"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={require('../assets/img/unfurlimage.png')}/>
        <meta property="og:description" content="M.E.K.A. Blitz is a unique location-based mobile game that uses your device's compass and gyroscope to let you fight waves of invading robots. Available for iOS and Android."/>
        <meta property="og:url" content="https://mekablitz.com/"/>
        <meta property="og:site_name" content="M.E.K.A. Blitz"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mekablitz" />
        <meta name="twitter:creator" content="@jameswrubel" />
        <meta name="twitter:image:alt" content="Gameplay image for the mobile game M.E.K.A. Blitz"></meta>
      </Helmet>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <HeroVideo />
          <Synopsis />
          <Rating />
          <Screenshots />
          <About />
          <SignUp />
          <Connect />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
