import Filters from './Components/Filters/Filters';
import { Home } from './Components/Home/Home';
import { Container } from './styles';
import { Cart } from './Components/ShoppingCart/Cart/Cart'
// import { GlobalStyle } from './GlobalStyle';
import {products} from './Assets/productsList';
import { useState } from 'react';

// console.log(products);

function App() {

  const [minFilter, setMinFilter] = useState('');
  const [maxFilter, setMaxFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [cartState, setCartState] = useState();
  const [amountState, setAmountState] = useState();

  const OCMinFilter = (e) => {
    setMinFilter(e.target.value);
  }

  const OCMaxFilter = (e) => {
    setMaxFilter(e.target.value);
  }

  const OCSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  }

  console.log(minFilter);
  console.log(maxFilter);
  console.log(searchFilter);

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
      <Home products={products}/>
      <Cart/>
    </Container>
  );
}
// console.log(products);
// console.log(typeof products);


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