import Filters from "./Components/Filters/Filters";
import { Home } from "./Components/Home/Home";
import { Container } from "./styles";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { products } from "./Assets/productsList";
import React, { useState, useEffect } from "react";

function App() {
  
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cartState, setCartState] = useState([]);
  const [amountState, setAmountState] = useState(0);
  
  
  const guardaCarrinho = () => {
      if (cartState.length > 0) {
    let testeLS = JSON.stringify(cartState);
    console.log(testeLS)
    localStorage.setItem('teste', testeLS);
      }
  }

  const resgataCarrinho = () => {
    const carrinhoResgatado = localStorage.getItem('teste');
      if (carrinhoResgatado !== ''){
        const carrinhoResgatadoToArray = JSON.parse(carrinhoResgatado);
        console.log(carrinhoResgatadoToArray);
        setCartState(carrinhoResgatadoToArray);
      }
  }

  useEffect(() => {
    
    guardaCarrinho();
    
  }, [cartState]
  )
  
  useEffect(() => {
  
    resgataCarrinho();

  }, []
  )

  const OCMinFilter = (e) => {
    setMinFilter(e.target.value);
  };

  const OCMaxFilter = (e) => {
    setMaxFilter(e.target.value);
  };

  const OCSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const OCAmountState = (e) => {
    setAmountState(e.target.value);
  };

  // const guardaCarrinho = () => {
  //   let testeLS = JSON.stringify(cartState);
  //   // console.log(testeLS)
  //   localStorage.setItem('teste', testeLS);
  // }


  return (
    <Container>
      <Filters
        minFilter={minFilter}
        OCMinFilter={OCMinFilter}
        maxFilter={maxFilter}
        OCMaxFilter={OCMaxFilter}
        searchFilter={searchFilter}
        OCSearchFilter={OCSearchFilter}
        guardaCarrinho={guardaCarrinho}
        resgataCarrinho={resgataCarrinho}
      />

      <Home
        products={products}
        cartState={cartState}
        setCartState={setCartState}
        minFilter={minFilter}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
      />

      <Cart
        cartState={cartState}
        setCartState={setCartState}
        amountState={amountState}
        setAmountState={setAmountState}
        OCAmountState={OCAmountState}
      />
    </Container>
  );
}

export default App;
