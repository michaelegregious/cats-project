import { Button, Divider } from 'semantic-ui-react';
import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

// Named export for testing
export const SortButtons = ({ favorites, history }) => (
  <Fragment>
    <Button.Group>
      <Button color="green" onClick={() => history.push('/')}>
        All the Cats
      </Button>
      <Button color="blue" onClick={() => history.push('/sorted')}>
        Sort
      </Button>
      <Button color="red" onClick={() => history.push('/favorites')}>
        Favorites &nbsp; {favorites}
      </Button>
    </Button.Group>
    <Divider hidden />
  </Fragment>
);

const mapState = state => ({
  favorites: state.cats.favorites
});

SortButtons.propTypes = {
  handleSortClick: propTypes.func,
  handleFavoritesClick: propTypes.func,
  handleAllCatsClick: propTypes.func,
  favorites: propTypes.number
};

export default withRouter(connect(mapState)(SortButtons));
