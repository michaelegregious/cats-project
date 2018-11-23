import SortButtons from '../SortButtons/SortButtons';
import { Header, Container } from 'semantic-ui-react';
import Routes from '../Routes/Routes';
import React from 'react';

const App = () => (
  <div>
    <Container>
      <Header
        as="h1"
        content="Cat Facts!"
        style={style.h1}
        textAlign="center"
      />
      <SortButtons />
      <Routes />
    </Container>
  </div>
);

const style = {
  h1: {
    padding: '1.5em 0em'
  }
};

export default App;
