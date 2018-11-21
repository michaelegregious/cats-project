import { Form, Divider } from 'semantic-ui-react';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const SortButtons = props => {
  const {
    handleSortClick,
    handleFavoritesClick,
    handleAllCatsClick,
    favorites
  } = props;
  return (
    <Fragment>
      <Form>
        <Form.Group inline>
          <Form.Button color="green" onClick={handleAllCatsClick}>
            All the Cats
          </Form.Button>
          <Form.Button color="blue" onClick={handleSortClick}>
            Sort
          </Form.Button>
          <Form.Button color="red" onClick={handleFavoritesClick}>
            Favorites &nbsp; {favorites}
          </Form.Button>
        </Form.Group>
      </Form>
      <Divider hidden />
    </Fragment>
  );
};

const mapState = state => ({
  favorites: state.cats.favorites
});

export default connect(mapState)(SortButtons);
