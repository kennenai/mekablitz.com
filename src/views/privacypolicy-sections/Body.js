import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";


function Body() {
  return (
    <>
      <div className="section">
      <Container>
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h3 className="text-center">Last Updated</h3>
              <h5 className="text-center">5 October 2020</h5>
              <hr />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h1 className="text-center">Privacy Policy</h1>
              <p>This privacy policy governs your use of the software application M.E.K.A. Blitz (Application) for mobile devices. M.E.K.A. Blitz turns your phone into a rocket launcher. Use GPS, compass, and gyroscope readings to fire rockets and defend the top-secret research lab.</p>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h3 className="text-center">1.0 Information We Collect And How We Use It</h3>
              <p>If you allow it, M.E.K.A. Blitz can record your device's GPS location as well as compass bearing and angle (pitch). We use this to make a realistic gameplay environment. By having location data M.E.K.A. Blitz can use altitude, wind speed and direction, and other local weather conditions to impact the trajectory of your rockets.</p>
              <p>
              M.E.K.A. Blitz does not record or store any location, compass or gyroscope data on our servers and we cannot (and will not) use it to track you, identify you, or serve any advertisements.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h5 className="text-center">1.1 Automatically-collected information</h5>
              <p>In order to improve gameplay experience and identify sources of bugs or crashes, M.E.K.A. Blitz uses some third-party applications to collect aggregate, anonymous usage information about how you use the app. This information may include but is not limited to, the type of mobile device you use, the IP address of your mobile device, your mobile operating system, and information about the way you use the Application. No personally-identifiable information is provided to third parties. Below is the list of third-parties and the data we collect automatically:</p>
              <ul>
                <li>
                  <a className="text-secondary" href="https://firebase.google.com/docs/analytics/" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a>
                </li>
                <ul>
                  <li>
                    Unique gameplay sessions
                  </li>
                  <li>
                    Unique levels played
                  </li>
                  <li>
                    Difficulty setting
                  </li>
                  <li>
                    Handedness setting
                  </li>
                  <li>
                    Character gender selected
                  </li>
                  <li>
                    Gameplay statistics such as hit ratio and damage done
                  </li>
                  <li>
                    Gameplay outcome per level (success or failure)
                  </li>
                </ul>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h3 className="text-center">2.0 What Personal Information we collect about you and how we collect it</h3>
              <p>M.E.K.A. Blitz does not collect any personally-identifiable information about its users.</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h3 className="text-center">3.0 What rights do you, as the data subject, have</h3>
              <p>You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h3 className="text-center">4.0 Your Consent</h3>
              <p>By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. "Processing," means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the United States. If you reside outside the United States you should only use M.E.K.A. Blitz if it does not violate your government's rules and regulations concerning user-submitted data.</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
            <h5 className="text-center">4.1 Automatically-collected information</h5>
              <p>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy here and updating the app to display a prominent link to the new policy. Your continued use of M.E.K.A. Blitz after having been notified of an updated Privacy Policy is considered approval of all changes.</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
            <h5 className="text-center">4.2 Contacting us</h5>
              <p>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at <a href="mailto:hello@mekablitz.com">hello@mekablitz.com</a></p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h3 className="text-center">5.0 Information processing and transfers for EEA individuals</h3>
              <p>Information collected by M.E.K.A. Blitz is not shared with third parties with the exception of the non-identifying information listed in Section 1.1. No personally-identifying information is collected or transfered outside the EEA.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Body;
