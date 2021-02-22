import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Logo from "./images/logo.svg";
import "./App.scss";

// Component
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Portofolio from "./components/Portofolio";
import FooterMain from "./components/Footer";

// Reveal
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
// Data

export default class App extends Component {
  constructor(props) {
    super(props);
    this.skillRef = React.createRef();
    this.portofolioRef = React.createRef();
    this.experienceRef = React.createRef();
    this.contactRef = React.createRef();
  }
  _handleScrollSkill = () => {
    window.scrollTo({
      top: this.skillRef.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  _handleScrollPortofolio = () => {
    window.scrollTo({
      top: this.portofolioRef.current.offsetTop + 100,
      behavior: "smooth",
    });
  };
  _handleScrollExperience = () => {
    window.scrollTo({
      top: this.experienceRef.current.offsetTop + 30,
      behavior: "smooth",
    });
  };
  _handleScrollContact = () => {
    window.scrollTo({
      top: this.contactRef.current.offsetTop + 90,
      behavior: "smooth",
    });
  };
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
            <Hero />
            {/* End of Hero */}

            {/* Skills */}
            <Skills skillRef={this.skillRef} />
            {/* End of Skills */}

            {/* Portofolio */}
            <Portofolio portofolioRef={this.portofolioRef} />
            {/* End Of Portofolio */}

            {/* Experience */}
            <Experience experienceRef={this.experienceRef} />
            {/* End of Experience */}

            {/* Contact */}
            <Contact contactRef={this.contactRef} />
            {/* End of Contact */}
          </Content>
          <Footer className="footer">
            <FooterMain />
          </Footer>
        </Layout>
      </div>
    );
  }
}
