import React, { Component } from "react";
import { Layout, Menu, Row, Col, Card, Carousel } from "antd";
import Logo from "./images/logo.svg";
import "./App.scss";

// Reveal
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

// picture
import Ling1 from "./images/lingkaran1.png";
import Ling2 from "./images/lingkaran2.png";
import Ling3 from "./images/lingkaran3.png";
// import Portofolio1 from "./images/portofolio1.png";
// import Portofolio2 from "./images/portofolio2.png";

// Icon
import {
  FaDribbble,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";

// Data
import data from "./data.json";

export default class App extends Component {
  _handleScrollSkill = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 650,
    });
  };
  _handleScrollPortofolio = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 1050,
    });
  };
  _handleScrollExperience = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 1820,
    });
  };
  _handleScrollContact = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 2290,
    });
  };
  render() {
    const { Header, Content, Footer } = Layout;
    const { Meta } = Card;
    return (
      <div className="App">
        <Layout style={{ backgroundColor: "transparent" }}>
          <Header className="header">
            <Bounce top>
              <img src={Logo} alt="" />
            </Bounce>
            <Fade top delay={300}>
              <Menu mode="horizontal">
                <Menu.Item key="1">
                  <button type="button" onClick={this._handleScrollSkill}>
                    Skills
                  </button>
                </Menu.Item>
                <Menu.Item key="2">
                  <button type="button" onClick={this._handleScrollPortofolio}>
                    Portofolio
                  </button>
                </Menu.Item>
                <Menu.Item key="3">
                  <button type="button" onClick={this._handleScrollExperience}>
                    Experience
                  </button>
                </Menu.Item>
                <Menu.Item key="4">
                  <button type="button" onClick={this._handleScrollContact}>
                    Contact
                  </button>
                </Menu.Item>
              </Menu>
            </Fade>
          </Header>
          <Content className="content">
            {/* Hero */}
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
                      <GrLinkedin />
                    </Fade>
                    <Fade delay={350} left>
                      <AiOutlineGithub />
                    </Fade>
                    <Fade delay={400} left>
                      <FaDribbble />
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
            {/* End of Hero */}

            {/* Skills */}
            <section className="skill-content">
              <h1>Skills</h1>
              <div className="line-skills"></div>
              <div className="cards-skill">
                <Row justify="space-between">
                  {data.skills.map((item, index) => {
                    return (
                      <Col md={7} sm={18}>
                        <Fade delay={300 * index} bottom>
                          <Card
                            key={`item-${index}`}
                            className="card-skills"
                            hoverable
                            cover={
                              <img src={item.image} alt="Web Development" />
                            }
                          >
                            <Meta
                              description={item.description}
                              title={item.title}
                            />
                          </Card>
                        </Fade>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </section>
            {/* End of Skills */}

            {/* Portofolio */}
            <section className="portofolio">
              <h1>Portofolio</h1>
              <div className="line-skills" />
              <div className="portofolio-content">
                <Row>
                  {data.portofolio.map((item, index) => {
                    return (
                      <Col span={24} className="colom-portofolio">
                        <Row justify="space-between">
                          <Col md={14} sm={15}>
                            <Carousel autoplay>
                              {item.image.map((item, index) => {
                                return (
                                  <div className="img-wrapper">
                                    <img
                                      src={item.img}
                                      alt="kattamata"
                                      className="img-cover"
                                    />
                                  </div>
                                );
                              })}
                            </Carousel>
                          </Col>
                          <Col md={8} sm={10}>
                            <div className="meta-portofolio">
                              <h2>{item.title}</h2>
                              <p>{item.role}</p>
                              <h3>{item.description}</h3>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </section>
            {/* End Of Portofolio */}

            {/* Experience */}
            <section className="experience">
              <h1>Experience</h1>
              <div className="line-skills" />
              <div className="experience-content">
                <Row justify="space-between">
                  {data.experience.map((item, index) => {
                    return (
                      <Col md={7} sm={24} key={`experience-${index}`}>
                        <div className="wrapper">
                          <div className="card-experience">
                            <h2>{item.year}</h2>
                            <h3>{item.month}</h3>
                            <p>{item.status}</p>
                            <h4>{item.role}</h4>
                            <h5>{item.office}</h5>
                          </div>
                          <div className="circle" />
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </section>
            {/* End of Experience */}

            {/* Contact */}
            <section className="contact">
              <h1>Contact</h1>
              <div className="line-skills" />
              <div className="contact-content">
                {data.contact.map((item, index) => {
                  return (
                    <div className="contact-item">
                      <img src={item.image} alt={`item-${index}`} />
                      <h2>{item.description}</h2>
                    </div>
                  );
                })}
              </div>
            </section>
            {/* End of Contact */}
          </Content>
          <Footer className="footer">
            <div className="content-footer">
              <div className="head-footer">
                <img src={Logo} alt="Logo" />
                <h2>Zhafran Tharif.</h2>
              </div>
              <Row md={18} sm={10}>
                <Col>
                  <div className="content-icon-footer">
                    <a href="/">
                      <GrLinkedin />
                    </a>
                    <a href="/">
                      <FaDribbble />
                    </a>
                    <a href="/">
                      <AiOutlineGithub />
                    </a>
                    <a href="/">
                      <FaInstagram />
                    </a>
                    <a href="/">
                      <FaTwitter />
                    </a>
                    <a href="/">
                      <FaFacebookSquare />
                    </a>
                  </div>
                </Col>
              </Row>
              <p>Copyright 2020 © Zhafran Tharif</p>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
