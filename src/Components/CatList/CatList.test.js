import { mountWrap } from '../../TestHelpers/contextWrap';
import { CatList } from '../CatList/CatList';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<CatList /> Component', () => {
  let catList;
  let mockMatch;
  let mockFetching;
  let mockCats;

  beforeEach(() => {
    mockFetching = false;
    mockCats = [];
    mockMatch = { url: '/' };
  });

  it('renders without crashing', () => {
    catList = shallow(
      <CatList isFetching={mockFetching} cats={mockCats} match={mockMatch} />
    );
  });

  it('handles loading properly', () => {
    mockFetching = true;
    catList = shallow(
      <CatList isFetching={mockFetching} cats={mockCats} match={mockMatch} />
    );
    expect(catList.text()).toEqual('Loading...');
  });

  it('handles empty favorites array', () => {
    mockFetching = false;
    mockMatch.url = '/favorites';
    catList = shallow(
      <CatList isFetching={mockFetching} cats={mockCats} match={mockMatch} />
    );
    expect(catList.text()).toEqual(`You don't have any favorites yet!`);
  });

  it('displays one cat properly', () => {
    mockCats = [
      {
        id: '1au',
        fact: 'Cats love you!',
        favorite: false,
        imgUrl: 'http://website.image1.gif'
      }
    ];
    catList = mountWrap(
      <CatList isFetching={mockFetching} cats={mockCats} match={mockMatch} />
    );
    expect(catList.find('CatCard')).toHaveLength(1);
  });

  it('displays multiple cats properly', () => {
    mockCats = [
      {
        id: '1au',
        fact: 'Cats love you!',
        favorite: false,
        imgUrl: 'http://website.image1.gif'
      },
      {
        id: '2au',
        fact: 'Cats love you!',
        favorite: false,
        imgUrl: 'http://website.image1.gif'
      },
      {
        id: '3au',
        fact: 'Cats love you!',
        favorite: false,
        imgUrl: 'http://website.image1.gif'
      }
    ];
    catList = mountWrap(
      <CatList isFetching={mockFetching} cats={mockCats} match={mockMatch} />
    );
    expect(catList.find('CatCard')).toHaveLength(3);
  });
});
