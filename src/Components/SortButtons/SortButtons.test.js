import { Button } from 'semantic-ui-react';
import { SortButtons } from './SortButtons';
import { shallow, mount } from 'enzyme';
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
    sortButtons = shallow(<SortButtons />);
  });

  it('renders without crashing', () => {
    sortButtons = shallow(<SortButtons />);
  });

  it('displays three buttons', () => {
    expect(sortButtons.find(Button).length).toEqual(3);
  });

  it('calls onClick event on click of each button', () => {
    const wrapper = mount(
      <SortButtons
        handleAllCatsClick={handleAll}
        handleFavoritesClick={handleFav}
        handleSortClick={handleSort}
      />
    );
    wrapper.find('[color="green"]').simulate('click');
    expect(handleAll.mock.calls.length).toBe(1);

    wrapper.find('[color="blue"]').simulate('click');
    expect(handleSort.mock.calls.length).toBe(1);

    wrapper.find('[color="red"]').simulate('click');
    expect(handleFav.mock.calls.length).toBe(1);
  });

  it('displays number of favorites based on props', () => {
    const wrapper = mount(<SortButtons favorites={favorites} />);

    const favButton = wrapper
      .find('[color="red"]')
      .children()
      .text();

    expect(favButton).toEqual('Favorites 5');
    console.log(
      'INNER text',
      wrapper
        .find('[color="red"]')
        .children()
        .text()
    );
  });
});
