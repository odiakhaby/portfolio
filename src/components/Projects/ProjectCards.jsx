import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { CgWebsite } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';

function ProjectCards(props) {
  const { t } = useTranslation();
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>

        {props.technologies && props.technologies.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
            {props.technologies.map((tech) => (
              <Badge
                key={tech}
                style={{
                  border: '1px solid #c770f0',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '0.75em',
                  padding: '4px 8px',
                  borderRadius: '4px',
                }}
                bg="transparent"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: '10px' }}>
            <CgWebsite /> &nbsp;
            {t('projects.see')}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
