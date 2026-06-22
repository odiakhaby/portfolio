import { Col, Container, Row } from 'react-bootstrap';
import Particle from '../Particle.jsx';
import Techstack from './Techstack.jsx';
import Aboutcard from './AboutCard.jsx';
import laptopImg from '../../assets/about.png';
import Toolstack from './Toolstack.jsx';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              {t('about.title_1')} <strong className="purple">{t('about.title_2')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: '120px', paddingBottom: '50px' }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">{t('about.skills_1')} </strong> {t('about.skills_2')}
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t('about.tools_1')}</strong> {t('about.tools_2')}
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
