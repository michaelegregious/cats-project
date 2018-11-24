import { BrowserRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { shape } from 'prop-types';
import store from '../store';

// Source: https://stackoverflow.com/questions/50025717/jest-enzyme-invariant-violation-you-should-not-use-route-or-withrouter-ou

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: { params: { catId: undefined } }
  }
};

const createContext = () => ({
  context: { router, store },
  childContextTypes: { router: shape({}), store: shape({}) }
});

export function mountWrap(node) {
  return mount(node, createContext());
}

export function shallowWrap(node) {
  return shallow(node, createContext());
}
