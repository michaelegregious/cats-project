import { Card, Image, Icon } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { toggleFavorite } from '../../store';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

export class CatCard extends Component {
  state = { hover: false };

  handleHover = () => this.setState({ hover: !this.state.hover });

  render() {
    const { toggleFavorite, cat, match } = this.props;
    const hovering = this.state.hover;
    const url = match.params.catId;
    return (
      <Card
        link
        raised={hovering}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <Link to={url === cat.id ? '/' : `/cats/${cat.id}`}>
          <Image id="catImg" src={cat.imgUrl} />
        </Link>
        <Card.Content>
          <Card.Header>Did you know?</Card.Header>
          <Card.Description>{cat.fact}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* eslint-disable-next-line */}
          <a id="catFav" onClick={() => toggleFavorite(cat.id)}>
            <Icon
              name="heart"
              size="large"
              color={cat.favorite ? 'red' : null}
            />
          </a>
          &nbsp;
          <Link id="catEye" to={url === cat.id ? '/' : `/cats/${cat.id}`}>
            <Icon
              name="eye"
              size="large"
              color={url === cat.id ? 'blue' : null}
            />
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

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
