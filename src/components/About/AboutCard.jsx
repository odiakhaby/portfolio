import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import { LINKEDIN_URL } from '../../constant.js';
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            {t('aboutCard.iam')} <span className="purple">Oumar DIAKHABY </span>
            {t('aboutCard.from')} <span className="purple"> {t('aboutCard.location')}</span>
            <br />
            {t('aboutCard.profession')}
            <br />
            <br />
            {t('aboutCard.line2_1')} <span className="purple">{t('aboutCard.bac')}</span> {t('aboutCard.line2_2')}
            <br />
            {t('aboutCard.line3')}
            <br />
            <br />
            {t('aboutCard.line4_1')}
            <span className="purple"> {t('aboutCard.wonderful_world')}</span> {t('aboutCard.line4_2')}{' '}
            <span className="purple">{t('aboutCard.dut')}</span> {t('aboutCard.line4_3')}{' '}
            <span className="purple">{t('aboutCard.engineer')}</span> {t('aboutCard.line4_4')}{' '}
            <span className="purple">{t('aboutCard.first_school')}</span> {t('aboutCard.line4_5')}{' '}
            <span className="purple">
              {t('aboutCard.insa')}
              <a href={LINKEDIN_URL} target="_blank" style={{ color: 'purple' }} rel="noopener noreferrer">
                <i>
                  <span className="purple">{t('aboutCard.ranking')}</span>
                </i>
              </a>
              {t('aboutCard.insa_close')}
            </span>{' '}
            <br />
            <br />{t('aboutCard.activities_intro')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.activity_1')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.activity_2')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.activity_3')}
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            {t('aboutCard.quote')}{' '}
          </p>
          <footer className="blockquote-footer">{t('aboutCard.quote_author')}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
