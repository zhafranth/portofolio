import React from "react";
import { Row, Col } from "antd";
import Portofolio1 from "../images/portofolio1.png";
import Portofolio2 from "../images/portofolio2.jpg";
import Portofolio3 from "../images/portofolio3.png";
import Portofolio4 from "../images/portofolio4.png";
import Portofolio5 from "../images/portofolio5.png";
import Portofolio6 from "../images/portofolio6.png";
const Portofolio = ({ portofolioRef }) => {
  return (
    <section className="portofolio" ref={portofolioRef}>
      <h1>Portofolio</h1>
      <div className="line-skills" />
      <div className="portofolio-content">
        <Row justify="space-between">
          <Col lg={13}>
            <a href="https://ekselen.id/" target="_blank" rel="noreferrer">
              <div className="card-portofolio">
                <div className="img-wrapper-portofolio">
                  <img
                    src={Portofolio1}
                    alt="Ekselen Id"
                    className="img-cover-portofolio"
                  />
                  <div className="card-portofolio-hover">
                    <h3 className="title-portofolio">
                      Ekselen.id <span>Online Learning Course</span>
                    </h3>
                    <div className="border" />
                    <p className="tools">React JS, Redux, Antd, Bootstrap</p>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col lg={10}>
            <a href="http://estudiacourse.id/" target="_blank" rel="noreferrer">
              <div className="card-portofolio">
                <div className="img-wrapper-portofolio">
                  <img
                    src={Portofolio2}
                    alt="Ekselen Id"
                    className="img-cover-portofolio"
                  />
                  <div className="card-portofolio-hover">
                    <h3 className="title-portofolio">
                      Estudia Spanish <span>Learning Course</span>
                    </h3>
                    <div className="border" />
                    <p className="tools">React JS, Styled Component, Strapi</p>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col lg={10}>
            <a
              href="https://happy-agnesi-bc52a3.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-portofolio">
                <div className="img-wrapper-portofolio">
                  <img
                    src={Portofolio3}
                    alt="Ekselen Id"
                    className="img-cover-portofolio"
                  />
                  <div className="card-portofolio-hover">
                    <h3 className="title-portofolio">
                      Furniture App Commerce <span>Online Store</span>
                    </h3>
                    <div className="border" />
                    <p className="tools">React JS, Bootstrap</p>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col lg={13}>
            <a
              href="https://zhafranth.github.io/corona/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-portofolio">
                <div className="img-wrapper-portofolio">
                  <img
                    src={Portofolio4}
                    alt="Ekselen Id"
                    className="img-cover-portofolio"
                  />
                  <div className="card-portofolio-hover">
                    <h3 className="title-portofolio">Corona Tracker</h3>
                    <div className="border" />
                    <p className="tools">React JS, Styled-Component</p>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col lg={13}>
            <a
              href="https://naughty-banach-dcae03.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-portofolio">
                <div className="img-wrapper-portofolio">
                  <img
                    src={Portofolio5}
                    alt="Ekselen Id"
                    className="img-cover-portofolio"
                  />
                  <div className="card-portofolio-hover">
                    <h3 className="title-portofolio">
                      Login / Register <span>Smooth Animation</span>
                    </h3>
                    <div className="border" />
                    <p className="tools">React JS, Styled-Component</p>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col lg={10}>
            <a
              href="https://zhafranth.github.io/card-bowl/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-portofolio">
                <div className="img-wrapper-portofolio">
                  <img
                    src={Portofolio6}
                    alt="Ekselen Id"
                    className="img-cover-portofolio"
                  />
                  <div className="card-portofolio-hover">
                    <h3 className="title-portofolio">
                      Food Bowl <span>Card Animation</span>
                    </h3>
                    <div className="border" />
                    <p className="tools">React JS, Styled-Components</p>
                  </div>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Portofolio;
