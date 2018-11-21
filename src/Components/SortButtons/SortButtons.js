import { Form, Divider } from 'semantic-ui-react';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const SortButtons = props => {
  const { handleSortClick, handleFavoritesClick, favorites } = props;
  return (
    <Fragment>
      <Form>
        <Form.Group inline>
          <Form.Button primary onClick={handleSortClick}>
            Sort
          </Form.Button>
          <Form.Button onClick={() => handleFavoritesClick()}>
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
