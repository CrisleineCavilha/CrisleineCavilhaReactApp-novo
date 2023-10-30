import { Link } from "react-router-dom";
import './footer.css';

export default function Footer() {
  return (

        <footer className="bg-dark-subtle">
            <div className="contato">
                 <div className="row py-5">
                 <div className="col-md-15">
                     <p>contato@pizzariabomsabor.com.br</p>
                     <p>Telefone: (47) 99999-9999 <br />
                    Endereço: Rua das Flores, 123 </p>
                     <p>Horário de atendimento: De terça-feira a domingo <br />
                     das 18:00 às 23:30 </p>                                                
                 </div>
                 </div>    
             </div> 
            <div className="alerta1">                
                    <div className="col-md-5">
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="/Home">Página Inicial</Link></li>
                            <li className="list-group-item"><Link to="/Cardapio">Cardápio</Link></li>
                        </ul>
                    </div>
                    <div className="alerta2">
                        <p>2023 © Pizzaria Bom Sabor. Todos os direitos reservados</p>
                    </div>                    
                </div>
           
        </footer>
    )
}