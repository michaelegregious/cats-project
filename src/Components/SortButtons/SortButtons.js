import { Button, Divider } from 'semantic-ui-react';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

// Named export for testing
export const SortButtons = ({
  handleFavoritesClick,
  handleAllCatsClick,
  handleSortClick,
  favorites
}) => (
  <Fragment>
    <Button.Group>
      <Button color="green" onClick={handleAllCatsClick}>
        All the Cats
      </Button>
      <Button color="blue" onClick={handleSortClick}>
        Sort
      </Button>
      <Button color="red" onClick={handleFavoritesClick}>
        Favorites {favorites}
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

export default connect(mapState)(SortButtons);
