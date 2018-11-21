import React, { Component, Fragment } from 'react';
import { Form, Divider } from 'semantic-ui-react';

class SortButtons extends Component {
  render() {
    return (
      <Fragment>
        <Form>
          <Form.Group inline>
            <Form.Button primary>Sort</Form.Button>
            <Form.Button onClick={() => console.log('Favorites!')}>
              Favorites
            </Form.Button>
          </Form.Group>
        </Form>
        <Divider hidden />
      </Fragment>
    );
  }
}

export default SortButtons;
