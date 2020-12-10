import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import proflie from "../assets/Profile Edward.png"

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>My Intro Page</h1>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">

            <div className="kaiwei">
              <img src={proflie} className="profile" alt="KaiWei" />

              <p>
                Welcome! Thank you for taking the time out of your day to view my
                progress so far. My name is KaiWei Edward Shen, I graduated from UC Davis with Food Science and Technology degree. I decided to learn coding to expand my skill set and challenge myself in a field I had no experience until recently. My reasoning for entering coding bootcamp is seeing better opprotunity for career as coding is an ever expanding market I want to be part of.
              </p>

              <p>
                I've recently finished my stint at U.C. Davis and
                persuing a career as a full stack web developer. Throughout my time with U.C Davis, I've gained experience on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS. Although it was quite challenging, I look forward to use and
                learn more with the current languages I am familiar with and new languages to create software products.
              </p>

              <p>
                Please explore the other pages and the work I have put into my portfolio. I have several projects with different types of coding structures to them. The first row focuses on basic HTML, CSS, and Javascript.
                The middle has more variety, using backend coding and handlebars for the project. Last project uses React as the template.
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
