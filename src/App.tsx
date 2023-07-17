import { useState } from 'react';

import { Cards } from './components/Cards/Cards';

import { Container, Main } from './App.styled';

function App() {
  return (
    <Container>
      <Main>
        <Cards />
      </Main>
    </Container>
  );
}

export default App;
