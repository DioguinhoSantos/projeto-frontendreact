import Filters from './Components/Filters/Filters';
import { Home } from './Components/Home/Home';
import { Container } from './styles';
import { Cart } from './Components/ShoppingCart/Cart/Cart'
// import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Container>
      <Filters />
      <Home/>
      <Cart/>
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