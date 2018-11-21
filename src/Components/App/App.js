import { Header, Grid, Container } from 'semantic-ui-react';
import SortButtons from './../SortButtons/SortButtons';
import React, { Component, Fragment } from 'react';
import CatCard from './../CatCard/CatCard';
import { connect } from 'react-redux';
import {
  getCats,
  selectAllCats,
  sortCatsByLastWord,
  selectAllFavorites
} from '../../store';

const defaultState = {
  single: false,
  areSorted: false,
  areFavorites: false
};

class App extends Component {
  state = defaultState;

  componentDidMount = () => this.props.getCats();

  handleAllCats = () => this.setState(defaultState);

  handleSort = () => this.setState({ ...defaultState, areSorted: true });

  handleFavorites = () =>
    this.setState({
      ...defaultState,
      areFavorites: true
    });

  handleSingle = catId => {
    return this.state.single === catId
      ? this.setState(defaultState)
      : this.setState({ ...defaultState, single: catId });
  };

  render() {
    let { cats, sorted, favorites } = this.props;
    const { areSorted, areFavorites, single } = this.state;
    if (areSorted) cats = sorted;
    else if (single) cats = cats.filter(c => c.id === single);
    else if (areFavorites && favorites.length) cats = favorites;
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
            handleSortClick={this.handleSort}
            handleFavoritesClick={this.handleFavorites}
            handleAllCatsClick={this.handleAllCats}
          />
          <Grid columns={3}>
            {cats.map(cat => (
              <Fragment key={cat.id}>
                <Grid.Column>
                  <CatCard
                    cat={cat}
                    handleSingle={this.handleSingle}
                    selected={single}
                  />
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
