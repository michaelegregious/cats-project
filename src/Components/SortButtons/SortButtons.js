import React, { Fragment } from 'react';
import { Form, Divider } from 'semantic-ui-react';

const SortButtons = props => {
  const { handleSortClick } = props;
  return (
    <Fragment>
      <Form>
        <Form.Group inline>
          <Form.Button primary onClick={handleSortClick}>
            Sort
          </Form.Button>
          <Form.Button onClick={() => console.log('Favorites!')}>
            Favorites
          </Form.Button>
        </Form.Group>
      </Form>
      <Divider hidden />
    </Fragment>
  );
};

export default SortButtons;
