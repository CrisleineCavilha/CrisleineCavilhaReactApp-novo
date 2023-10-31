import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark-subtle pt-5">
      <Container>
        <Row>
          <Col md={6}>
            <p>contato@pizzariabomsabor.com.br</p>
            <p>
              Telefone: (47) 99999-9999 <br />
              Endereço: Rua das Flores, 123{" "}
            </p>
            <p>
              Horário de atendimento: De terça-feira a domingo <br />
              das 18:00 às 23:30{" "}
            </p>
          </Col>
          <Col md={6}>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/">Página Inicial</Link>
              </li>
              <li className="list-group-item">
                <Link to="/cardapio">Cardápio</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <div className="alerta2">
              <p>2023 © Pizzaria Bom Sabor. Todos os direitos reservados</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
