import React, { Component, Fragment } from 'react';
import { Header, Grid, Message } from 'semantic-ui-react';
import CatCard from './../CatCard/CatCard';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

// var doc = parser.parseFromString(stringContainingXMLSource, 'application/xml');

const corsUrl = 'https://cors-anywhere.herokuapp.com/';

const imgUrl =
  'http://thecatapi.com/api/images/get?format=json&results_per_page=25';

// const factsUrl = 'https://catfact.ninja/facts?limit=25';

class App extends Component {
  state = {
    cats: []
  };

  async componentDidMount() {
    try {
      const { data } = await axios({
        method: 'get',
        url: corsUrl + imgUrl
      });
      this.setState({ cats: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log('CATS!!', this.state.cats);
    const cats = this.state.cats;

    return (
      <Fragment>
        <Header
          as="h1"
          content="Cat Facts!"
          style={style.h1}
          textAlign="center"
        />
        <Grid container columns={3}>
          {cats.map(cat => (
            <CatCard key={cat.id} img={cat.url} />
          ))}
        </Grid>
      </Fragment>
    );
  }
}

const style = {
  h1: {
    padding: '1.5em 0em'
  }
};

export default App;
