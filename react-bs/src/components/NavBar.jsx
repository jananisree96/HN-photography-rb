import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomButton from './CustomButton';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid className="d-flex align-items-center justify-content-between">
        {/* Left Side - Brand */}
        <Navbar.Brand href="#" className="fw-bold">HN Photography</Navbar.Brand>

        {/* Center - Navigation */}
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

        {/* Right Side - Custom Button (Always in the same row) */}
        <div className="d-lg-block">
          <CustomButton />
        </div>
      </Container>
    </Navbar>
  );
}
export default NavBar;