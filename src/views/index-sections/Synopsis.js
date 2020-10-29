import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";


function Synopsis() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Synopsis</h1>
              <p className="text-center">
                In a top secret research lab, scientists have made a discovery that will change the world. As the lab's chief scientist feuds with her corporate backer over the implications, a mysterious floating metal object triggers the lab's proximity sensor. The lab's head of security, armed with a prototype wrist-mounted rocket launcher, heads out to investigate...
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Synopsis;
