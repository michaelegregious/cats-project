import { catsData, catsState, catsArray } from '../testHelpers';
import {
  selectAllFavorites,
  selectSingleCat,
  toggleFavorite,
  selectAllCats,
  gotCats
} from './cats';
import reducer from './cats';

describe('Cats Store functions', () => {
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
      expect(
        reducer(undefined, { type: gotCats().type, cats: catsData })
      ).toEqual(catsState);
    });

    it('should handle toggleFavorite() action creator', () => {
      const toggledOnce = reducer(catsState, {
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
  describe('Cats Selectors', () => {
    it('selectAllCats(state) should return all cats array', () => {
      const selectedCats = selectAllCats({ cats: catsState });
      expect(selectedCats).toHaveLength(25);
      expect(selectedCats).toEqual(
        expect.arrayContaining([
          catsState.byId['13v'],
          catsState.byId['17h'],
          catsState.byId['17o'],
          catsState.byId['1e4']
        ])
      );
    });

    it('selectAllFavorites(state) should return all favorites', () => {
      const stateWithOneFav = reducer(catsState, {
        type: toggleFavorite().type,
        catId: 'fv'
      });

      let selectedFavs = selectAllFavorites({ cats: stateWithOneFav });

      expect(selectedFavs).toHaveLength(1);

      const stateWithTwoFavs = reducer(stateWithOneFav, {
        type: toggleFavorite().type,
        catId: 'nb'
      });

      selectedFavs = selectAllFavorites({ cats: stateWithTwoFavs });

      expect(selectedFavs).toHaveLength(2);
    });

    it('selectSingleCat(state, catId) should return single cat', () => {
      const selectedCat = selectSingleCat({ cats: catsState }, 'nb');
      expect(selectedCat).toHaveLength(1);
    });
  });
});
