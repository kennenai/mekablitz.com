/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <a id="about">
              <img
                id="googlePlayLogo"
                alt="M.E.K.A. Blitz logo"
                className="n-logo"
                src={require("assets/img/logotype.png")}
              >
              </img>
              <UncontrolledTooltip target="#googlePlayLogo">
                Android version coming soon!
              </UncontrolledTooltip>
            </a>
            <h3>A family-friendly, immersive action game for iOS and Android. Defeat waves of invading robots and uncover the secret behind it all.</h3>
            <Row className="m-auto align-self-center">
              <Col md={6} lg={6}>
                <a href="https://apps.apple.com/us/app/m-e-k-a-blitz/id1516789635">
                  <img
                    style={{padding: 5}}
                    height="80"
                    alt="App Store Logo"
                    src={require("assets/img/appstore.png")}
                  ></img>
                </a>
              </Col>
              <Col md={6} lg={6}>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.rocketduel&referrer=mekablitz-home"
                >
                  <img
                    style={{padding: 5}}
                    height="80"
                    alt="Google Play Logo"
                    src={require("assets/img/playstore.png")}
                  ></img>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
