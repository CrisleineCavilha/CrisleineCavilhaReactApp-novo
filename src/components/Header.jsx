import { Link } from "react-router-dom";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
// import "./header.css";

export default function Header() {
  return (
    <Container fluid>
      <Navbar expand="lg" className=" bg-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={require("../assets/images/logo_pizzaria.jpg")}
              alt="logo_pizzaria"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-light">
              <Link to="/" className="nav-link">
                <strong>Página Inicial</strong>
              </Link>
              <Link to="/cardapio" className="nav-link">
                <strong>Cardápio</strong>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
