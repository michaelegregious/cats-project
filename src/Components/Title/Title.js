import { Header } from 'semantic-ui-react';
import React from 'react';

const Title = () => (
  <Header as="h1" content="Cat Facts!" style={style.h1} textAlign="center" />
);

const style = {
  h1: {
    padding: '1.5em 0em'
  }
};

export default Title;
