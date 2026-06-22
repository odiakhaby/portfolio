import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";
import {FACEBOOK_URL, LINKEDIN_URL, TWITTER_URL} from '../../constant.js';
import { useTranslation } from 'react-i18next';

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('home2.title_1')} <span className="purple"> {t('home2.title_2')} </span>
            </h1>
            <p className="home-about-body">
              {t('home2.body_1')}
              <br />
              <br />{t('home2.body_2')}
              <i>
                <b className="purple"> Javascript/Typescript, Java, HTML et CSS. </b>
              </i>
              <br />
              <br />
              {t('home2.body_3')} &nbsp;
              <i>
                <b className="purple">{t('home2.body_web')} </b> {t('home2.body_and')} &nbsp;
                <b className="purple">
                   {t('home2.body_mobile')}
                </b>
              </i>&nbsp;
              {t('home2.body_4')}

              <br />
              <br />

              {t('home2.body_5')} <b className="purple">Bun, Node, React, Express</b> {t('home2.body_and')}
              <i>
                <b className="purple">
                  {" "}
                  {t('home2.body_6')}
                </b>
              </i>
              &nbsp; {t('home2.body_7')}
              <i>
                <b className="purple"> React, Hono</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t('home2.find_me')}</h1>
            <p>
              {t('home2.say_hello_1')} <span className="purple">{t('home2.wave')} </span> {t('home2.say_hello_2')}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://www.instagram.com/soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour home-social-icons"*/}
              {/*  >*/}
              {/*    <AiFillInstagram />*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
