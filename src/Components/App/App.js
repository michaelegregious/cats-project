import SortButtons from '../SortButtons/SortButtons';
import { Container } from 'semantic-ui-react';
import Routes from '../Routes/Routes';
import Title from '../Header/Header';
import React from 'react';

const App = () => (
  <Container>
    <Title />
    <SortButtons />
    <Routes />
  </Container>
);

export default App;
