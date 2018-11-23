import { Grid, Container } from 'semantic-ui-react';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import CatCard from './../CatCard/CatCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectAllCats,
  sortCatsByLastWord,
  selectAllFavorites
} from '../../store';

class CatList extends Component {
  state = { single: false };

  handleSingle = catId =>
    this.state.single === catId
      ? this.setState({ single: false })
      : this.setState({ single: catId });

  render() {
    const { single } = this.state;
    const url = this.props.match.url;
    let { cats, isFetching } = this.props;
    cats = single ? cats.filter(cat => cat.id === single) : cats;
    return isFetching ? (
      'Loading...'
    ) : !cats[0] && url === '/favorites' ? (
      `You don't have any favorites yet!`
    ) : (
      <Container>
        <Grid columns={3}>
          {cats.map(cat => (
            <Fragment key={cat.id}>
              <Grid.Column>
                <CatCard
                  cat={cat}
                  handleSingle={this.handleSingle}
                  selected={this.state.single}
                />
              </Grid.Column>
            </Fragment>
          ))}
        </Grid>
      </Container>
    );
  }
}

const mapAll = state => ({
  cats: selectAllCats(state),
  isFetching: state.cats.isFetching
});

const mapSorted = state => ({
  cats: sortCatsByLastWord(state),
  isFetching: state.cats.isFetching
});

const mapFavorites = state => ({
  cats: selectAllFavorites(state),
  isFetching: state.cats.isFetching
});

CatList.propTypes = {
  cats: PropTypes.array,
  sorted: PropTypes.array,
  favorites: PropTypes.array
};

export const AllCats = withRouter(connect(mapAll)(CatList));
export const SortedCats = withRouter(connect(mapSorted)(CatList));
export const FavoriteCats = withRouter(connect(mapFavorites)(CatList));
