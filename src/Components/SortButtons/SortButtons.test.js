import { SortButtons } from './SortButtons';
import { Button } from 'semantic-ui-react';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<SortButtons /> component', () => {
  let sortButtons;
  let mockFavorites;

  beforeEach(() => {
    mockFavorites = 5;
    sortButtons = shallow(<SortButtons />);
  });

  it('renders without crashing', () => {
    sortButtons = shallow(<SortButtons />);
  });

  it('displays three buttons', () => {
    expect(sortButtons.find(Button).length).toEqual(3);
  });

  it('calls proper url route with click of each button', () => {
    const mockHistory = { push: jest.fn() };
    const wrapper = mount(
      <SortButtons favorites={mockFavorites} history={mockHistory} />
    );

    wrapper.find('[color="green"]').simulate('click');
    expect(mockHistory.push.mock.calls[0]).toEqual(['/']);

    wrapper.find('[color="blue"]').simulate('click');
    expect(mockHistory.push.mock.calls[1]).toEqual(['/sorted']);

    wrapper.find('[color="red"]').simulate('click');
    expect(mockHistory.push.mock.calls[2]).toEqual(['/favorites']);
  });

  it('displays number of favorites based on props', () => {
    const wrapper = mount(<SortButtons favorites={mockFavorites} />);

    const favButton = wrapper
      .find('[color="red"]')
      .children()
      .text();

    expect(favButton).toEqual('Favorites \u00a0 5');
  });
});
