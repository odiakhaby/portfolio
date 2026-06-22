import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logoOumarDiakhaby from '../assets/Logo_Oumar_Diakhaby.png';
import { Link, useLocation } from 'react-router-dom';
import { CgFileDocument } from 'react-icons/cg';
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  const isEn = i18n.language === 'en';
  const prefix = isEn ? '/en' : '';

  const getLocaleSwitchPath = () => {
    const path = location.pathname;
    if (isEn) {
      return path.replace(/^\/en/, '') || '/';
    } else {
      return '/en' + (path === '/' ? '' : path);
    }
  };

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand href={prefix || '/'} className="d-flex">
          <img src={logoOumarDiakhaby} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to={prefix || '/'} onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> {t('navbar.home')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to={`${prefix}/project`} onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> {t('navbar.projects')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to={`${prefix}/about`} onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: '2px' }} /> {t('navbar.about')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to={`${prefix}/resume`} onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: '2px' }} /> {t('navbar.resume')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={getLocaleSwitchPath()}
                onClick={() => updateExpanded(false)}
                style={{ fontWeight: 'bold', letterSpacing: '0.05em' }}
              >
                {isEn ? '🇫🇷 FR' : '🇬🇧 EN'}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
