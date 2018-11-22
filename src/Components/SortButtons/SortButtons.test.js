import SortButtons from './SortButtons';
import { shallow } from 'enzyme';
import store from '../../store';
import React from 'react';
import '../../setupTests';

describe('<SortButtons /> component', () => {
  it('renders without crashing', () => {
    shallow(<SortButtons />, { context: { store } });
  });
});
