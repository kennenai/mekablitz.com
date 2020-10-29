import React from "react";

import { Helmet } from "react-helmet";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Body from "./privacypolicy-sections/Body";

function PrivacyPolicy() {
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
  return (
    <>
      <Helmet>
        <title>M.E.K.A. Blitz - Privacy Policy</title>
        <meta name="description" content="Privacy Policy for the mobile game M.E.K.A." />
        <meta name="keywords" content="mobile game, location-based game, action game, robot game, meka blitz, mekablitz" />
        <meta property="og:title" content="M.E.K.A. Blitz - Privacy Policy"/>
        <meta property="og:type" content="article"/>
        <meta property="og:image" content={require('../assets/img/unfurlimage.jpg')}/>
        <meta property="og:description" content="Privacy Policy for the mobile game M.E.K.A."/>
        <meta property="og:url" content="https://mekablitz.com/privacypolicy"/>
        <meta property="og:site_name" content="M.E.K.A. Blitz"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mekablitz" />
        <meta name="twitter:creator" content="@jameswrubel" />
        <meta name="twitter:image:alt" content="Gameplay image for the mobile game M.E.K.A. Blitz"></meta>
      </Helmet>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          <Body />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default PrivacyPolicy;