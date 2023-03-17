import Filters from './Components/Filters/Filters';
import { Home } from './Components/Home/Home';
import { Container } from './styles';
import { Cart } from './Components/ShoppingCart/Cart/Cart'
import { products } from './Assets/productsList';
import { useState } from 'react';

function App() {

  const [updates] = useState(0);

  const [minFilter, setMinFilter] = useState('');
  const [maxFilter, setMaxFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [cartState, setCartState] = useState([]);
  const [amountState, setAmountState] = useState(0);

  const OCMinFilter = (e) => {
    setMinFilter(e.target.value);
  }

  const OCMaxFilter = (e) => {
    setMaxFilter(e.target.value);
  }

  const OCSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  }

  const OCAmountState = (e) => {
    setAmountState(e.target.value);
  }

  // const filtrado = products.filter(function(obj) { return obj.id === 2;})

  // console.log(filtrado);

  document.title='Update contagem='+updates
  return (
    <Container>


      <Filters 
      minFilter={minFilter}
      OCMinFilter={OCMinFilter}
      maxFilter={maxFilter}
      OCMaxFilter={OCMaxFilter}
      searchFilter={searchFilter}
      OCSearchFilter={OCSearchFilter}
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


  /* <header className="App-header">
          <p>
            Funcionando!!!!!!!!!!!!
          </p>
        </header> */

//como colocar um link bonitinho
/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */