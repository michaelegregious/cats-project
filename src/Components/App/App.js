import React, { Component, Fragment } from 'react';
import { Header, Grid, Container, Divider, Form } from 'semantic-ui-react';
import CatCard from './../CatCard/CatCard';
import SearchBar from './../SearchBar/SearchBar';
import { connect } from 'react-redux';
import './App.css';
import { getCats, selectAllCats } from '../../store';

class App extends Component {
  // state = {
  //   catImages: [],
  //   cats: []
  // };

  // async componentDidMount() {
  //   try {
  //     const images = await axios.get(url.cors + url.img);
  //     this.setState({ catImages: images.data });
  //     const facts = await axios.get(url.cors + url.facts);
  //     this.setState({ catFacts: facts.data.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  componentDidMount() {
    console.log('in ComponentDidMount');
    this.props.getCats();
  }

  render() {
    const { cats } = this.props;
    console.log('CATS in render()', cats);
    return !cats[0] ? (
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
            {cats.map(cat => (
              <Fragment>
                <Grid.Column>
                  <CatCard key={cat.id} img={cat.imgUrl} fact={cat.fact} />
                </Grid.Column>
              </Fragment>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapState = state => ({
  cats: selectAllCats(state)
});

const mapDispatch = dispatch => ({
  getCats: () => {
    dispatch(getCats());
  }
});

const style = {
  h1: {
    padding: '1.5em 0em'
  }
};

export default connect(
  mapState,
  mapDispatch
)(App);
