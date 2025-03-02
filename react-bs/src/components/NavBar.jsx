import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomButton from './CustomButton';
import Image from 'react-bootstrap/Image';
import logo from '../images/hnlogo.png';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#" className="fw-bold">
        <Image src={logo} width={50} height={50} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="d-flex align-items-center gap-3">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-lg-block">
          <CustomButton />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
