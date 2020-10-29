import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from 'react-player/youtube'
// core components

function HeroVideo() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col>
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url='https://youtu.be/C2vT1PlKmeM'
                  width='100%'
                  height='100%'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeroVideo;
