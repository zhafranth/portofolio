import React from "react";
import { Row, Col } from "antd";
import {
  FaDribbble,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import Logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div className="content-footer">
      <div className="head-footer">
        <img src={Logo} alt="Logo" />
        <h2>Zhafran Tharif.</h2>
      </div>
      <Row md={18} sm={10}>
        <Col>
          <div className="content-icon-footer">
            <a
              href="https://www.linkedin.com/in/zhafrantharif/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin />
            </a>
            <a
              href="https://dribbble.com/zhafranth"
              target="_blank"
              rel="noreferrer"
            >
              <FaDribbble />
            </a>
            <a
              href="https://github.com/zhafranth"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.instagram.com/zhafranth/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/zhafranth"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/Zhafranth/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </div>
        </Col>
      </Row>
      <p>Copyright 2021 © Zhafran Tharif</p>
    </div>
  );
};

export default Footer;
