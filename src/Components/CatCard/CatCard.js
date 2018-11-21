import React from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';
// import myPic from '../../assets/weddingMBsquare.jpg';

const CatCard = props => {
  const { img } = props;
  console.log('IMAGE', img);
  return (
    <Grid.Column>
      <Card>
        <Image src={img} />
        <Card.Content>
          <Card.Header>Michael</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <a>
        <Icon name="user" />
        22 Friends
      </a> */}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default CatCard;
