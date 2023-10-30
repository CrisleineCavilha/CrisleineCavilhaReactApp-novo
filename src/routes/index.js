import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import Home from "../screens/Home";
import Cardapio from "../screens/Cardapio";



export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<Home />} path="/" />
          <Route element={<Cardapio />} path="/cardapio" />
          
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}
