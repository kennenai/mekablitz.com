/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
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
            <img
              alt="M.E.K.A. Blitz logo"
              className="n-logo"
              src={require("assets/img/logotype.png")}
            ></img>
            <h3>A family-friendly, immersive action game for iOS and Android. Defeat waves of invading robots and uncover the secret behind it all.</h3>
            <Row className="m-auto align-self-center">
              <Col>
                <a href="#">
                  <img
                    alt="App Store Logo"
                    src={require("assets/img/appstore.png")}
                  ></img>
                </a>
              </Col>
              <Col>
                <a href="#">
                  <img
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
