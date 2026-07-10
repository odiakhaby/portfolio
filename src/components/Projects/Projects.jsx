import {Col, Container, Row} from 'react-bootstrap';
import ProjectCard from './ProjectCards.jsx';
import Particle from '../Particle.jsx';
import freelance from '../../assets/Projects/freelance.png';
import chatify from '../../assets/Projects/chatify.png';
import amadeus from '../../assets/Companies/amadeus.png';
import edf from '../../assets/Companies/edf.png';
import luminess from '../../assets/Companies/luminess.png';

import dataFr from '../../../data.json';
import dataEn from '../../../data_en.json';
import ExperienceCard from './ExpérienceCard.jsx';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t, i18n } = useTranslation();
  const ProjectsData = i18n.language === 'en' ? dataEn : dataFr;

  const getImage = (index) => {
    if(index === 0 || index === 0) {
      return freelance;
    } else if(index === 1) {
      return amadeus;
    }else if(index === 2) {
      return edf;
    } else {
      return luminess;
    }
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.title_1')} <strong className="purple">{t('projects.title_2')} </strong>
        </h1>
        <p style={{color: 'white'}}>{t('projects.subtitle')}</p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          {ProjectsData.projects.map(project => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title={project.title}
                description={project.description}
                demoLink={project.link}
              />
            </Col>
          ))}
        </Row>
        <h1 className="project-heading">
          {t('projects.exp_title_1')} <strong className="purple">{t('projects.exp_title_2')}</strong>
        </h1>
        <p style={{color: 'white'}}>{t('projects.exp_subtitle')}</p>
        <Row md={3} style={{justifyContent: 'center', paddingBottom: '10px' }}>
        {ProjectsData.experiences.map((experience, index) => (
          <Col className="project-card" key={experience.title}>
            <ExperienceCard
              imgPath={amadeus}
              logoUrl={getImage(index)}
              title={experience.title}
              description={experience.description}
              mission={experience.mission}
              mission2={experience.mission2}
            />
          </Col>
        ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
