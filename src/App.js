import Filters from './Components/Filters/Filters';
import { Home } from './Components/Home/Home';
import { Container } from './styles';
import { Cart } from './Components/ShoppingCart/Cart/Cart'
import Items from './Components/ShoppingCart/Items/Items';


function App() {
  return (
    <Container>
      <Filters />
      <Home/>
        {/* <header className="App-header">
          <p>
            Funcionando!!!!!!!!!!!!
          </p>
        </header> */}
      <Cart/>
      <Items/>
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