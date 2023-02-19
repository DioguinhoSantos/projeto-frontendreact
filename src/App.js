import Filters from './Components/Filters/Filters';
import { Home } from './Components/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <Filters />
      <Home/>
        <header className="App-header">
          <p>
            Funcionando!!!!!!!!!!!!
          </p>
        </header>
        <Cart />
    </Container>
  );
}

export default App;

//como colocar um link bonitinho
/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */