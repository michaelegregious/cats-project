import React, { Component, Fragment } from 'react';
import { Header, Grid, Container } from 'semantic-ui-react';
import CatCard from './../CatCard/CatCard';
import SortButtons from './../SortButtons/SortButtons';

import { connect } from 'react-redux';
import './App.css';
import { getCats, selectAllCats } from '../../store';

class App extends Component {
  componentDidMount() {
    this.props.getCats();
  }

  render() {
    const { cats } = this.props;
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
          <SortButtons />
          <Grid columns={3}>
            {cats.map(cat => (
              <Fragment key={cat.id}>
                <Grid.Column>
                  <CatCard img={cat.imgUrl} fact={cat.fact} />
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
