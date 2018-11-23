import { Card, Image, Icon } from 'semantic-ui-react';
import { toggleFavorite } from '../../store';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import React from 'react';

const CatCard = ({ toggleFavorite, handleSingle, selected, cat }) => (
  <Card>
    <Image src={cat.imgUrl} />
    <Card.Content>
      <Card.Header>Did you know?</Card.Header>
      <Card.Description>{cat.fact}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a onClick={() => toggleFavorite(cat.id)}>
        <Icon name="heart" color={cat.favorite ? 'red' : null} />
      </a>
      &nbsp;
      <a onClick={() => handleSingle(cat.id)}>
        <Icon name="eye" color={selected === cat.id ? 'blue' : null} />
      </a>
    </Card.Content>
  </Card>
);

const mapDispatch = dispatch => ({
  toggleFavorite: catId => dispatch(toggleFavorite(catId))
});

const catPropType = propTypes.shape({
  id: propTypes.string,
  imgUrl: propTypes.string,
  fact: propTypes.string,
  favorite: propTypes.bool
});

CatCard.propTypes = {
  selected: propTypes.bool,
  handleSingle: propTypes.func,
  cat: catPropType
};

export default connect(
  null,
  mapDispatch
)(CatCard);
