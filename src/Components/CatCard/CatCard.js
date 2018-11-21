import { Card, Image, Icon } from 'semantic-ui-react';
import { toggleFavorite } from '../../store';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatCard extends Component {
  handleToggle = id => {
    this.props.toggleFavorite(id);
  };

  render() {
    const { id, imgUrl, fact, favorite } = this.props.cat;
    return (
      <Card>
        <Image src={imgUrl} />
        <Card.Content>
          <Card.Header>Did you know?</Card.Header>
          <Card.Description>{fact}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a onClick={() => this.handleToggle(id)}>
            <Icon name="heart" color={favorite ? 'red' : null} />
            &nbsp;Favorite
          </a>
        </Card.Content>
      </Card>
    );
  }
}

const mapDispatch = dispatch => ({
  toggleFavorite: catId => {
    dispatch(toggleFavorite(catId));
  }
});

export default connect(
  null,
  mapDispatch
)(CatCard);
