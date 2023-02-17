import Filters from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
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