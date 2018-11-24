import { CatCard } from '../CatCard/CatCard';
import { shallow } from 'enzyme';
import React from 'react';

describe('<CatCard /> Component', () => {
  let mockToggle;
  let mockMatch;
  let mockCat;
  let catCard;

  beforeEach(() => {
    mockToggle = jest.fn();
    mockMatch = { params: { catId: undefined } };
    mockCat = {
      id: '1au',
      fact: 'Cats love you!',
      favorite: false,
      imgUrl: 'http://website.image1.gif'
    };
  });

  it('renders without crashing', () => {
    catCard = shallow(
      <CatCard toggleFavorite={mockToggle} cat={mockCat} match={mockMatch} />
    );
  });
});
