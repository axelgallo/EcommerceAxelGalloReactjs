import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imagen from '../../assets/img/logo.png';
import '../../styles.css';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><a href=""><img src={ imagen } alt="" className="logo"/></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-dark">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Preventa</Nav.Link>
            <Nav.Link href="#features">Comic</Nav.Link>
            <Nav.Link href="#pricing">Manga</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar