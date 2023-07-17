// import { Cards } from './components/Cards/Cards';
import { TrelloCards } from './components/TrelloCards/TrelloCards';

import { Container, Main } from './App.styled';

function App() {
  return (
    <Container>
      <Main>
        <TrelloCards />
        {/* <Cards /> */}
      </Main>
    </Container>
  );
}

export default App;
