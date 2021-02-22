import React from "react";
import { Row, Col, Card } from "antd";
import Fade from "react-reveal/Fade";

// Picture
import Skill1 from "../images/skills1.png";
import Skill2 from "../images/skills2.png";
import Skill3 from "../images/skills3.png";

const Skills = ({ skillRef }) => {
  const { Meta } = Card;
  return (
    <section className="skill-content" ref={skillRef}>
      <h1>Skills</h1>
      <div className="line-skills"></div>
      <div className="cards-skill">
        <Row justify="space-between">
          <Col md={7} sm={18}>
            <Fade delay={300} bottom>
              <Card
                className="card-skills"
                hoverable
                cover={<img src={Skill1} alt="Frontend Developer" />}
              >
                <Meta
                  description="ReactJs , Redux , Javascript , SASS , CSS Framework ( Bootstrap , Antd , Styled-Component ), Mobile Responsive & PWA"
                  title="Frontend Developer"
                />
              </Card>
            </Fade>
          </Col>
          <Col md={7} sm={18}>
            <Fade delay={300} bottom>
              <Card
                className="card-skills"
                hoverable
                cover={<img src={Skill2} alt="UI/UX Design" />}
              >
                <Meta
                  description="Adobe Illustrator & CorelDraw"
                  title="Graphic Design"
                />
              </Card>
            </Fade>
          </Col>
          <Col md={7} sm={18}>
            <Fade delay={300} bottom>
              <Card
                className="card-skills"
                hoverable
                cover={<img src={Skill3} alt="Graphic Design" />}
              >
                <Meta description="Adobe XD & Figma " title="UI/UX Design" />
              </Card>
            </Fade>
          </Col>
          {/* {data.skills.map((item, index) => {
               return (
               );
             })} */}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
