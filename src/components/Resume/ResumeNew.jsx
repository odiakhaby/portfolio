import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle.jsx';
import pdfFr from '../../assets/Resume/CV-Oumar_DIAKHABY-FR.pdf';
import pdfEn from '../../assets/Resume/CV-Oumar_DIAKHABY-EN.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import CV_FR from '../../assets/Resume/CV-Oumar_DIAKHABY-FR.jpg';
import CV_EN from '../../assets/Resume/CV-Oumar_DIAKHABY-EN.jpg';
import { useTranslation } from 'react-i18next';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

function ResumeNew() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const pdf = i18n.language === 'en' ? pdfEn : pdfFr;
  const resumeImage = i18n.language === 'en' ? CV_EN : CV_FR;
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: '250px' }}>
            <AiOutlineDownload />
            &nbsp;{t('resume.download')}
          </Button>
        </Row>

        <Row className="resume">
          <img
            src={resumeImage}
            alt="home pic"
            className="img-fluid"
            style={{maxWidth: '750px'}}
          />
        </Row>

        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank" style={{maxWidth: '250px'}}>
            <AiOutlineDownload />
            &nbsp;{t('resume.download')}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
