import { catsData, catsState } from '../testHelpers';
import reducer, { sortCatsByLastWord } from './cats';
import {
  selectAllFavorites,
  toggleFavorite,
  selectAllCats,
  defaultCats,
  gotCats
} from './cats';

describe('Cats Store functions', () => {
  describe('Cats Reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(defaultCats);
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

    it('sortCatsByLastWord(state, catId) should return sorted cats', () => {
      const lastWord = /[a-z]+(?=[^a-z]*$)/i;
      const expectedWordOrder = [
        'another',
        'away',
        'breath',
        'called',
        'cat',
        'Cats',
        'coat',
        'days',
        'diarrhea',
        'high',
        'hours',
        'length',
        'lover',
        'minute',
        'of',
        'own',
        'process',
        'steady',
        'stomachs',
        'theories',
        'through',
        'use',
        'ways',
        'years',
        'years'
      ];
      const sortedCats = sortCatsByLastWord({ cats: catsState });
      const actualWords = sortedCats.map(cat => cat.fact.match(lastWord)[0]);
      expect(actualWords).toEqual(expectedWordOrder);
    });
  });
});
