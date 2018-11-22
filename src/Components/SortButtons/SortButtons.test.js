import React from 'react';
import { mount } from 'enzyme';
import SortButtons from './SortButtons';

describe('SortButtons', () => {
  let props;
  let mountedSortButtons;
  const sortButtons = () => {
    if (!mountedSortButtons) {
      mountedSortButtons = mount(<SortButtons {...props} />);
    }
    return mountedSortButtons;
  };

  beforeEach(() => {
    props = {
      handleSortClick: undefined,
      handleFavoritesClick: undefined,
      handleAllCatsClick: undefined
    };
    mountedSortButtons = undefined;
  });

  it('always renders a div', () => {
    const divs = SortButtons().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
