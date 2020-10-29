import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";


function Rating() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Rating</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-right">
              <img alt="This game is ESRB rated E for Everyone" src={require("assets/img/esrb-everyone.png")} />
              </p>
            </Col>
            <Col>
              <p className="text-left">
                <strong>Mild Cartoon Violence</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Rating;
