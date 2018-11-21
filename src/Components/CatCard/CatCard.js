import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

const CatCard = props => {
  const { img, fact } = props;
  return (
    <Card>
      <Image src={img} />
      <Card.Content>
        <Card.Header>Did you know?</Card.Header>
        <Card.Description>{fact}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CatCard;
