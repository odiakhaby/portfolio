import {Col, Container, Row} from 'react-bootstrap';
import {AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FACEBOOK_URL, LINKEDIN_URL, TWITTER_URL} from '../constant.js';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Oumar DIAKHABY</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} OD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={FACEBOOK_URL}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={TWITTER_URL}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={LINKEDIN_URL}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/*<li className="social-icons">*/}
            {/*  <a*/}
            {/*    href="https://www.instagram.com/soumyajit4419"*/}
            {/*    style={{ color: "white" }}*/}
            {/*    target="_blank" */}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    <AiFillInstagram />*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
