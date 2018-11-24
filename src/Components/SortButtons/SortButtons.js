import { Button, Divider } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import React, { Fragment } from 'react';
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
      <Button
        color="red"
        onClick={() => favorites && history.push('/favorites')}
      >
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
  // history: propTypes.object,
  favorites: propTypes.number
};

export default withRouter(connect(mapState)(SortButtons));
