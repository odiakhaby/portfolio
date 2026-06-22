import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

function ExperienceCard(props) {
  const { t } = useTranslation();
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.logoUrl} alt="card-img" style={{ background: 'white'}} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        <Card.Title>{t('experience.mission')}</Card.Title>
        <Card.Text>{props.mission}</Card.Text>
        {props.mission2 &&
          <>
            <Card.Title>{t('experience.mission2')}</Card.Title>
            <Card.Text>{props.mission2}</Card.Text>
          </>
        }
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
