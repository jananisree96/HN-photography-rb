import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">HN Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="w-100 d-flex justify-content-center align-items-center gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>            
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-info" className='d-inline-block' style={{ whiteSpace: "nowrap", padding: "10px 20px" }}>Book Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;