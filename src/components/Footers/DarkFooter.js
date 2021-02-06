/*eslint-disable*/
import React from "react";

import { Link } from "react-router-dom";
// reactstrap components
import { 
  Col,
  Container,
  Row 
} from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row>
          <Col>
            <p className="text-center">M.E.K.A. Blitz is &copy;{" "} {new Date().getFullYear()} James Wrubel</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">Email:{" "}<a className="text-primary" href="mailto://hello@mekablitz.com">hello@mekablitz.com</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">Art and visual design by{" "}<a
                href="https://maxlouiscreative.com/?ref=mekablitz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                MLC
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="text-center">
              <small><Link to="/privacypolicy">Privacy Policy</Link></small>
            </h2>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
