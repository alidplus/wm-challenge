import Image from 'next/image'
import { FC } from 'react'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import AppSideBar from './AppSideBar';
import LogoMotion from './LogoMotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog, faMessage } from '@fortawesome/free-solid-svg-icons'

const AppNavBar: FC = () => {
  return (
    <>
      <Navbar bg="secondary" variant='dark' expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#home">
            <LogoMotion fill='#ffffff' stroke='none' />
          </Navbar.Brand>
          <Nav
            className="d-none d-md-flex"
            activeKey="/home"
            onSelect={(selectedKey: string | null) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link className="mx-2" eventKey="user">
                <FontAwesomeIcon icon={faMessage} width={16} color="white" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="mx-2" eventKey="configs">
                <FontAwesomeIcon icon={faCog} width={16} color="white" />
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="John Dow" id="nav-dropdown" align="end">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <AppSideBar />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <AppSideBar className="fixed-side-bar d-none d-lg-inline-block bg-light shadow shadow-sm" />
    </>
  )
}

export default AppNavBar