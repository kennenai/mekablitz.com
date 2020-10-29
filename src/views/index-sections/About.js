import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";


function About() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">About The Game</h1>
              <p className="text-center">
                In M.E.K.A. Blitz you'll battle waves of invading robots using a unique gameplay style that includes:
              </p>
            </Col>
          </Row>
          <Row >
            <Col md="4">
              <div className="text-center">
                <img
                  alt="Map component from in-game, showing the location of enemy robots"
                  className="game-highlight rounded-circle img-raised"
                  src={require("assets/img/compass.jpg")}
                ></img>
                <p>
                  Your device puts <em>you</em> in the action! M.E.K.A.s will attack from all directions. Use your compass to orient on them, hold your phone at an angle, and launch rockets to destroy them!
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="text-center">
                <img
                  alt="Weather report in game showing cloud cover, wind direction, and wind speed"
                  className="game-highlight rounded-circle img-raised"
                  src={require("assets/img/weather.jpg")}
                ></img>
                <p>
                  Gameplay is based on real conditions near you! The game world changes based on day and night, and your rockets are affected by wind speed and direction. It's never the same game twice!
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="text-center">
                <img
                  alt="Cutscene from the game showing a character and dialogue"
                  className="game-highlight rounded-circle img-raised"
                  src={require("assets/img/story.jpg")}
                ></img>
                <p>
                  Uncover the story behind it all through a unique Instagram-style cutscene experience that lets you explore the secrets of the research lab!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
