import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

function Mynavbar() {
  return (
    <Navbar expand="lg" className="nav-shadow, bg-body-tertiary, fixed-top, navybar " >
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>FINDme</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Link</Nav.Link>
            <Nav.Link href="#home" style={{ color: 'white' }}>Sign in</Nav.Link>
          </Nav>
          <div className="buttons-container">
          <Button className='found-b' href="./detail-form" variant="secondary" size="lg">
            +LOST
          </Button>
          <span className="separator"></span>
          <Button className='lost-b' href="./
          FoundItemForm" variant="secondary" size="lg">
            +FOUND
          </Button>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;