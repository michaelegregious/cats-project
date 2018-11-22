import { Button } from 'semantic-ui-react';
import SortButtons from './SortButtons';
import { shallow, mount } from 'enzyme';
import store from '../../store';
import React from 'react';

describe('<SortButtons /> component', () => {
  let sortButtons;
  let handleFav;
  let handleAll;
  let handleSort;
  let favorites;

  beforeEach(() => {
    handleFav = jest.fn();
    handleAll = jest.fn();
    handleSort = jest.fn();
    favorites = 5;
    sortButtons = mount(<SortButtons />, { context: { store } });
  });

  it('renders without crashing', () => {
    shallow(<SortButtons />, { context: { store } });
  });

  it('displays three buttons', () => {
    expect(sortButtons.find('button').length).toEqual(3);
  });
});
