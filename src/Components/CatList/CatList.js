import { Grid, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import CatCard from './../CatCard/CatCard';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectAllCats,
  sortCatsByLastWord,
  selectAllFavorites
} from '../../store';

export const CatList = ({ isFetching, cats, match }) => {
  const { url } = match;
  return isFetching ? (
    'Loading...'
  ) : !cats[0] && url === '/favorites' ? (
    `You don't have any favorites yet!`
  ) : (
    <Container>
      <Grid>
        {cats.map(cat => (
          <Fragment key={cat.id}>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <CatCard cat={cat} />
            </Grid.Column>
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
};

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

const mapSingle = (state, { match }) => {
  const cat = state.cats.byId[match.params.catId];
  // Ternary in case of hard refresh while single selected
  return { cats: cat ? [cat] : [] };
};

CatList.propTypes = {
  cats: PropTypes.array,
  sorted: PropTypes.array,
  favorites: PropTypes.array
};

export const AllCats = withRouter(connect(mapAll)(CatList));
export const SingleCat = withRouter(connect(mapSingle)(CatList));
export const SortedCats = withRouter(connect(mapSorted)(CatList));
export const FavoriteCats = withRouter(connect(mapFavorites)(CatList));
