import React, { Component, Fragment } from 'react';
import { Header, Grid, Message } from 'semantic-ui-react';
import CatCard from './../CatCard/CatCard';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

const corsUrl = 'https://cors-anywhere.herokuapp.com/';

const imgUrl =
  'http://thecatapi.com/api/images/get?format=json&results_per_page=25';

const factsUrl = 'https://catfact.ninja/facts?limit=25';

class App extends Component {
  state = {
    catImages: [],
    catFacts: []
  };

  async componentDidMount() {
    try {
      const images = await axios.get(corsUrl + imgUrl);
      this.setState({ catImages: images.data });
      const facts = await axios.get(corsUrl + factsUrl);
      this.setState({ catFacts: facts.data.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { catFacts, catImages } = this.state;
    console.log('CATFACTS', catFacts);
    return !catFacts[0] || !catImages[0] ? (
      'Loading...'
    ) : (
      <Fragment>
        <Header
          as="h1"
          content="Cat Facts!"
          style={style.h1}
          textAlign="center"
        />
        <Grid container columns={3}>
          {catImages.map((image, i) => (
            <CatCard key={i} img={image.url} fact={catFacts[i].fact} />
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
