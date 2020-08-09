import React, { Component } from "react";
import { Layout, Menu, Row, Col } from "antd";
import Logo from "./images/logo.svg";
import "./App.scss";

// Reveal
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

// picture
import Ling1 from "./images/lingkaran1.png";
import Ling2 from "./images/lingkaran2.png";
import Ling3 from "./images/lingkaran3.png";

// Icon
import { FaDribbble } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";

export default class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div className="App">
        <Layout style={{ backgroundColor: "transparent" }}>
          <Header className="header">
            <Bounce top>
              <img src={Logo} alt="" />
            </Bounce>
            <Fade top delay={300}>
              <Menu mode="horizontal">
                <Menu.Item key="1">Skills</Menu.Item>
                <Menu.Item key="2">Portofolio</Menu.Item>
                <Menu.Item key="3">Experience</Menu.Item>
                <Menu.Item key="4">Contact</Menu.Item>
              </Menu>
            </Fade>
          </Header>
          <Content className="content">
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
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}
