import reducer from './cats';
import { gotCats, toggleFavorite } from './cats';
import { catData, catState } from './sampleCatState';

describe('Cats Reducer', () => {
  let defaultState;

  it('should return the initial state', () => {
    defaultState = {
      isFetching: true,
      byId: {
        0: {
          id: 0,
          imgUrl: '',
          fact: '',
          favorite: false
        }
      },
      allIds: [],
      favorites: 0
    };
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it('should handle gotCats() action creator', () => {
    expect(reducer(undefined, { type: gotCats().type, cats: catData })).toEqual(
      catState
    );
  });

  it('should handle toggleFavorite() action creator', () => {
    const toggledOnce = reducer(catState, {
      type: toggleFavorite().type,
      catId: 'nb'
    });

    expect(toggledOnce.byId.nb.favorite).toBe(true);

    const toggledTwice = reducer(toggledOnce, {
      type: toggleFavorite().type,
      catId: 'nb'
    });

    expect(toggledTwice.byId.nb.favorite).toBe(false);
  });
});
