import React from "react";
import { Row, Col } from "antd";

const Experience = ({ experienceRef }) => {
  return (
    <section className="experience" ref={experienceRef}>
      <h1>Experience</h1>
      <div className="line-skills" />
      <div className="experience-content">
        <Row justify="space-between">
          <Col md={7} sm={24}>
            <div className="wrapper">
              <div className="card-experience">
                <h2>2018</h2>
                <h3>Mei - July</h3>
                <p>Internship</p>
                <h4>UI/UX Designer</h4>
                <h5>PT.TELKOM INDONESIA</h5>
              </div>
              <div className="circle" />
            </div>
          </Col>
          <Col md={7} sm={24}>
            <div className="wrapper">
              <div className="card-experience">
                <h2>2019</h2>
                <h3>June - December</h3>
                <p>Internship</p>
                <h4>QA Engineer</h4>
                <h5>PT.TELKOM INDONESIA</h5>
              </div>
              <div className="circle" />
            </div>
          </Col>
          <Col md={7} sm={24}>
            <div className="wrapper">
              <div className="card-experience">
                <h2>2020</h2>
                <h3>July - Now</h3>
                <p>Fulltime</p>
                <h4>UI/UX Designer</h4>
                <h4>Frontend Developer</h4>
                <h5>Ekselen.id</h5>
              </div>
              <div className="circle" />
            </div>
          </Col>
          {/* {data.experience.map((item, index) => {
                    return (
                    );
                  })} */}
        </Row>
      </div>
    </section>
  );
};

export default Experience;
