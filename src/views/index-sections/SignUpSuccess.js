import React from "react";

// reactstrap components
import {
  Col,
  Container,
  Row
} from "reactstrap";

function SignUpSuccess() {

  return (
    <>
      <div
        id="connect-section"
        className="section section-contact-us text-center"
      >
        <Container>
            <Row>
              <Col>
                <h2 className="text-center"><a id="connect">Thank you for signing up!</a></h2>
                <hr />
                <p>Look forward to new game modes, research and unlocks, new levels, new M.E.K.A.s, and more!</p>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default SignUpSuccess;
