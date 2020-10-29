import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import ImageZoom from 'react-medium-image-zoom';

const screenshots = {
  'proximity': {
    'small': require("assets/img/screenshots/small/proximity.jpg"),
    'big': require("assets/img/screenshots/proximity.jpg"),
    'alt': 'The lab control center proximity alarm'
  },
  'gauntlet': {
    'small': require("assets/img/screenshots/small/gauntlet.jpg"),
    'big': require("assets/img/screenshots/gauntlet.jpg"),
    'alt': 'A weapons locker highlighting the prototype wrist-mounted rocket launcher'
  },
  'wreckage': {
    'small': require("assets/img/screenshots/small/wreckage.jpg"),
    'big': require("assets/img/screenshots/wreckage.jpg"),
    'alt': 'An autopsy table holding the wreckage of the destroyed M.E.K.A.'
  },
  'gameplay1': {
    'small': require("assets/img/screenshots/small/gameplay_1.jpg"),
    'big': require("assets/img/screenshots/gameplay_1.jpg"),
    'alt': 'A screenshot of gameplay'
  },
  'gameplay2': {
    'small': require("assets/img/screenshots/small/gameplay_2.jpg"),
    'big': require("assets/img/screenshots/gameplay_2.jpg"),
    'alt': 'A screenshot of gameplay'
  },
  'gameplay3': {
    'small': require("assets/img/screenshots/small/gameplay_3.jpg"),
    'big': require("assets/img/screenshots/gameplay_3.jpg"),
    'alt': 'A screenshot of gameplay'
  },
}

function Screenshots() {
  return (
    <>
      <div id="screenshots-section" className="section">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center"><a id="screenshots">Screenshots</a></h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <ImageZoom
                image={{
                  src: screenshots['proximity'].small,
                  alt: screenshots['proximity'].alt,
                  className: 'img',
                  style: { padding: '0.5em' }
                }}
                zoomImage={{
                  src: screenshots['proximity'].big,
                  alt: screenshots['proximity'].alt
                }}
              />
            </Col>
            <Col>
              <ImageZoom
                image={{
                  src: screenshots['gauntlet'].small,
                  alt: screenshots['gauntlet'].alt,
                  className: 'img',
                  style: { padding: '0.5em' }
                }}
                zoomImage={{
                  src: screenshots['gauntlet'].big,
                  alt: screenshots['gauntlet'].alt
                }}
              />
            </Col>
            <Col>
              <ImageZoom
                image={{
                  src: screenshots['wreckage'].small,
                  alt: screenshots['wreckage'].alt,
                  className: 'img',
                  style: { padding: '0.5em' }
                }}
                zoomImage={{
                  src: screenshots['wreckage'].big,
                  alt: screenshots['wreckage'].alt
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ImageZoom
                image={{
                  src: screenshots['gameplay1'].small,
                  alt: screenshots['gameplay1'].alt,
                  className: 'img',
                  style: { padding: '0.5em' }
                }}
                zoomImage={{
                  src: screenshots['gameplay1'].big,
                  alt: screenshots['gameplay1'].alt
                }}
              />
            </Col>
            <Col>
              <ImageZoom
                image={{
                  src: screenshots['gameplay2'].small,
                  alt: screenshots['gameplay2'].alt,
                  className: 'img',
                  style: { padding: '0.5em' }
                }}
                zoomImage={{
                  src: screenshots['gameplay2'].big,
                  alt: screenshots['gameplay2'].alt
                }}
              />
            </Col>
            <Col>
              <ImageZoom
                image={{
                  src: screenshots['gameplay3'].small,
                  alt: screenshots['gameplay3'].alt,
                  className: 'img',
                  style: { padding: '0.5em' }
                }}
                zoomImage={{
                  src: screenshots['gameplay3'].big,
                  alt: screenshots['gameplay3'].alt
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Screenshots;
