
import './home.css';

export default function HomeScreen() {
  return (

        <div className="alerta">
          <img src={require('../assets/images/pizza.jpg')}></img>
          <p>A Pizzaria Bom Sabor foi fundada em 1990, na cidade de Joinville em Santa Catarina,  com o objetivo de levar 
          aos clientes um pouco do sabor da Itália. Nossos ingredientes são selecionados e nossa massa de longa fermentação
          é feita com muito carinho e cuidado. <br/>
          Venha nos conhecer e experimentar nossas deliciosas pizzas!</p>          
        </div>     
   
  );
}