import React, { useEffect, useState } from "react";

import { CookieBanner } from '@palmabit/react-cookie-law';

import { firebase } from '../components/firebase';

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";

// sections for this page
import Connect from "./index-sections/Connect.js";
import HeroVideo from "./index-sections/HeroVideo.js";
import Synopsis from "./index-sections/Synopsis.js";
import Rating from "./index-sections/Rating.js";
import Screenshots from "./index-sections/Screenshots.js";
import About from "./index-sections/About.js";
import SignUp from "./index-sections/SignUp.js";

function Index(props) {

  const [ accepted, setAccepted ] = useState(false);

  useEffect(() => {
    if (accepted) {
      firebase.analytics();
    }
  }, [accepted])

  useEffect(() => {
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

  useEffect(() => {
    const hash = props.history.location.hash
    if (hash && document.getElementById(hash.substr(1))) {
        document.getElementById(hash.substr(1)).scrollIntoView({behavior: "smooth"})
    }
  }, [props.history.location.hash])

  return (
    <>
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
        <CookieBanner
          message="M.E.K.A. Blitz uses 🍪 to give you the best experience. Is this okay?"
          policyLink={'/privacypolicy'}
          privacyPolicyLinkText={'privacy policy'}
          acceptButtonText={'🍪 👍'}
          wholeDomain={true}
          styles={{
            dialog: { position: 'fixed', bottom: 0, left: '50%', right: 0, backgroundColor: '#e3e3e3', padding: 12 },
            optionWrapper: {display: 'none'},
            button: { paddingLeft: 20, paddingRight: 20, backgroundColor: 'rgba(83, 134, 228, 1)'}
          }}
          showPreferencesOption={false}
          showStatisticsOption={false}
          showMarketingOption={false}
          onAccept = {() => setAccepted(true)}
        />
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
