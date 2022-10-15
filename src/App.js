import logo from "./logo.svg";
import "./App.css";

import { useState, useEfect } from "react";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 1 - Get data
  useState(() => {
    
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <h1>Lista de Produtos</h1>
    </div>
  );
}

export default App;
