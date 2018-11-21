import React, { Component, Fragment } from 'react';
import { Header, Grid, Container, Divider, Form } from 'semantic-ui-react';
import CatCard from './../CatCard/CatCard';
import SearchBar from './../SearchBar/SearchBar';
import axios from 'axios';
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
      <div>
        <Header
          as="h1"
          content="Cat Facts!"
          style={style.h1}
          textAlign="center"
        />
        <Container>
          <Form>
            <SearchBar />
            {/* <Field
              component={Form.Input}
              label="First name"
              name="firstName"
              placeholder="First name"
            /> */}
          </Form>
          <Divider hidden />
          <Grid columns={3}>
            {catImages.map((image, i) => (
              <Fragment>
                <Grid.Column>
                  <CatCard key={i} img={image.url} fact={catFacts[i].fact} />
                </Grid.Column>
              </Fragment>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

const style = {
  h1: {
    padding: '1.5em 0em'
  }
};

export default App;
