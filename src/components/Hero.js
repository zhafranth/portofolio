import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Row, Col } from "antd";

// picture
import Ling1 from "../images/lingkaran1.png";
import Ling2 from "../images/lingkaran2.png";
import Ling3 from "../images/lingkaran3.png";

import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { FaDribbble } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <Row justify="space-between">
        <Col md={10} sm={20}>
          <div className="content-hero">
            <Fade delay={300} left>
              <h1>Zhafran Tharif.</h1>
            </Fade>
            <Fade delay={300} left>
              <div className="line" />
            </Fade>
            <div className="content-icon ">
              <Fade delay={300} left>
                <a
                  href="https://www.linkedin.com/in/zhafrantharif/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLinkedin />
                </a>
              </Fade>
              <Fade delay={350} left>
                <a
                  href="https://github.com/zhafranth"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </a>
              </Fade>
              <Fade delay={400} left>
                <a
                  href="https://dribbble.com/zhafranth"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDribbble />
                </a>
              </Fade>
            </div>
          </div>
        </Col>
        <Col md={10} sm={20}>
          <div className="content-hero-right">
            <Fade delay={300} right>
              <p>-Introduction</p>
              <h2>
                Frontend Developer, UI/UX Designer, based in{" "}
                <span>Jakarta</span>
              </h2>
            </Fade>
          </div>
        </Col>
      </Row>
      <div className="lingkaran">
        <Bounce right delay={300} speed="2000s">
          <div className="lingkaran1">
            <img src={Ling1} alt="Lingkarang Hero 1" />
          </div>
        </Bounce>
        <Bounce right delay={500} speed="2000s">
          <div className="lingkaran2">
            <img src={Ling2} alt="Lingkarang Hero 2" />
          </div>
        </Bounce>
        <Bounce right delay={700} speed="2000s">
          <div className="lingkaran3">
            <img src={Ling3} alt="Lingkarang Hero 3" />
          </div>
        </Bounce>
      </div>
    </>
  );
};

export default Hero;
