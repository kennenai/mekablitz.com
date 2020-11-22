import React from "react";

// reactstrap components
import { 
  Button,
  Col,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";

function Connect() {
  return (
    <>
      <div className="section">
      <Container>
          <Row>
            <Col>
              <h2 className="text-center">Connect With Us</h2>
              <hr />
              
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                <a href="https://twitter.com/mekablitz" target="_blank">
                  <Button
                    className="btn-round twitter-blue btn-icon"
                    id="tooltip-twitter"
                    size="lg"
                    onClick
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                </a>
              <UncontrolledTooltip delay={0} target="tooltip-twitter">
                M.E.K.A. Blitz on twitter
              </UncontrolledTooltip>
                <p>
                  M.E.K.A. Blitz on twitter
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <a href="https://www.youtube.com/channel/UC0TpY7Jp8IUf6WLh6pU7lsw/" target="_blank">
                  <Button
                    className="btn-round youtube-red btn-icon"
                    id="tooltip-youtube"
                    size="lg"
                  >
                    <i className="fab fa-youtube"></i>
                  </Button>
                </a>
                <UncontrolledTooltip delay={0} target="tooltip-youtube">
                  Check out our Youtube channel
                </UncontrolledTooltip>
                <p>
                  Check out our Youtube channel
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Connect;
