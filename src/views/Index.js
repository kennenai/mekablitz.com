import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

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
