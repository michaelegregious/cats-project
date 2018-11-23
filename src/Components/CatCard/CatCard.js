import { Card, Image, Icon } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { toggleFavorite } from '../../store';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import React from 'react';

const CatCard = ({ toggleFavorite, cat, match }) => {
  const url = match.params.catId;
  return (
    <Card>
      <Link to={url === cat.id ? '/' : `/cats/${cat.id}`}>
        <Image src={cat.imgUrl} />
      </Link>
      <Card.Content>
        <Card.Header>Did you know?</Card.Header>
        <Card.Description>{cat.fact}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a onClick={() => toggleFavorite(cat.id)}>
          <Icon name="heart" size="large" color={cat.favorite ? 'red' : null} />
        </a>
        &nbsp;
        <Link to={url === cat.id ? '/' : `/cats/${cat.id}`}>
          <Icon
            name="eye"
            size="large"
            color={url === cat.id ? 'blue' : null}
          />
        </Link>
      </Card.Content>
    </Card>
  );
};

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
  cat: catPropType
};

export default withRouter(
  connect(
    null,
    mapDispatch
  )(CatCard)
);
