import { Carousel } from "bootstrap";
import { Container, Image } from "react-bootstrap";
import './home.css';

export default function HomeScreen() {
  return (
    <Container>
      <div className="alerta">
        <h1><strong>Pizzaria Bom Sabor</strong></h1>
        <img src={require('../assets/images/pizza.jpg')}></img>
          
      </div>

      
    </Container>
  );
}
