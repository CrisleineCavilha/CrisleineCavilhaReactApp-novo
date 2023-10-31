import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

export default function Body() {
  return (
    <Container fluid>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </Container>
  );
}
