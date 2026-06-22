import { Col, Row } from 'react-bootstrap';
import { DiGit, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiReact } from 'react-icons/di';
import { SiBun, SiHono, SiPostgresql, SiTypescript } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBun />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiSolidity />*/}
      {/*</Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiNextdotjs />*/}
      {/*</Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHono />
      </Col>
    </Row>
  );
}

export default Techstack;
