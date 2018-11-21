import React, { Component, Fragment } from 'react';
import { Header, Grid, Container } from 'semantic-ui-react';
import CatCard from './../CatCard/CatCard';
import SortButtons from './../SortButtons/SortButtons';
import { connect } from 'react-redux';
import './App.css';
import {
  getCats,
  selectAllCats,
  sortCatsByLastWord,
  selectAllFavorites
} from '../../store';

class App extends Component {
  state = {
    areSorted: false,
    areFavorites: false
  };

  componentDidMount = () => {
    this.props.getCats();
  };

  handleSortClick = () => {
    this.setState({
      areSorted: true,
      areFavorites: false
    });
  };

  handleFavoritesClick = () => {
    this.setState({
      areSorted: false,
      areFavorites: true
    });
  };

  render() {
    let { cats, sorted, favorites } = this.props;
    if (this.state.areSorted) cats = sorted;
    else if (this.state.areFavorites) cats = favorites;
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
          <SortButtons
            handleSortClick={this.handleSortClick}
            handleFavoritesClick={this.handleFavoritesClick}
          />
          <Grid columns={3}>
            {cats.map(cat => (
              <Fragment key={cat.id}>
                <Grid.Column>
                  <CatCard cat={cat} />
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
  cats: selectAllCats(state),
  sorted: sortCatsByLastWord(state),
  favorites: selectAllFavorites(state)
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
