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
              <h2 className="text-center"><a id="connect">Connect With Us</a></h2>
              <hr />
              
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
              <Button
                className="btn-round twitter-blue btn-icon"
                id="tooltip-twitter"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
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
                <Button
                  className="btn-round youtube-red btn-icon"
                  id="tooltip-youtube"
                  size="lg"
                >
                  <i className="fab fa-youtube"></i>
                </Button>
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
