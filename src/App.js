import "./App.css";

import { useState, useEffect } from "react";

// 4 - Import Custom hook
import { useFetch } from "./hooks/useFetch";

// Url Api
const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - Custom hooks
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Get data
  /*      useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []); */

  // 2 - Add products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // Codigo antigo para fazer Post
    /*  const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    // 3 - Loading dynamic
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]);
*/
    // 5 - Refactoring POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      {/* 6 - loading */}
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
     
      {!error &&(
        <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}

              { product && <input className="btn-delete" type="submit" value="Delete" />}
            </li>
          ))}
      </ul>
      )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          {/* 7 - State loading in post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
      
      
        </form>
      </div>
    </div>
  );
}

export default App;
