import { Header } from 'semantic-ui-react';
import React from 'react';

const Title = () => (
  <Header as="h1" content="Cat Facts!" style={style.h1} textAlign="center" />
);

const style = {
  h1: {
    padding: '1em 0em 0.5em',
    fontFamily: 'Bungee Shade, cursive',
    fontSize: '3em',
    color: '#600560'
  }
};

export default Title;
