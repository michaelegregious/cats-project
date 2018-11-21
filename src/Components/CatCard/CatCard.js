import React from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const CatCard = props => {
  const { img, fact } = props;
  return (
    <Grid.Column>
      <Card>
        <Image src={img} />
        <Card.Content>
          <Card.Header>Did you know?</Card.Header>
          <Card.Description>{fact}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default CatCard;
