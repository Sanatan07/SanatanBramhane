import React from "react";
import { Col, Row } from "react-bootstrap";
import {
//   SiVscode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiLinux,
  SiWindows11,
  SiRender,
  SiHeroku,
  SiDocker,
  SiEclipseche,
  SiMongodb,
  SiIntellijidea,
  SiKubernetes,
  SiFramer
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      {/* <SiVscode /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiWindows11 /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFramer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseche />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
    </Row>
  );
}

export default Toolstack;
