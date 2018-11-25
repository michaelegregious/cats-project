import { shallow } from 'enzyme';
import Title from './Title';
import React from 'react';

describe('<Title /> component', () => {
  it('renders without crashing', () => {
    shallow(<Title />);
  });
});
