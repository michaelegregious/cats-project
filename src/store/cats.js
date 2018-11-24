import axios from 'axios';

const url = {
  cors: 'https://cors-anywhere.herokuapp.com/',
  facts: 'https://catfact.ninja/facts?limit=25',
  img: 'http://thecatapi.com/api/images/get?format=json&results_per_page=25'
};

// ACTION TYPES
const GET_CATS = 'GET_CATS';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

// INITIAL STATE
const defaultCats = {
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

// ACTION CREATORS
export const gotCats = cats => ({
  type: GET_CATS,
  cats
});

export const toggleFavorite = catId => ({
  type: TOGGLE_FAVORITE,
  catId
});

// THUNK CREATORS
// Composition of getImages and getFacts
export const getCats = () => dispatch =>
  Promise.all([getImages(), getFacts()])
    .then(array => {
      const [images, facts] = array;
      return images.map((img, i) => ({
        id: img.id,
        imgUrl: img.url,
        fact: facts[i].fact
      }));
    })
    .then(array => dispatch(gotCats(array)))
    .catch(err => console.error(err));

// API REQUESTS
const getImages = () =>
  axios
    .get(url.cors + url.img)
    .then(images => images.data)
    .catch(err => console.error(err));

const getFacts = () =>
  axios
    .get(url.cors + url.facts)
    .then(facts => facts.data.data)
    .catch(err => console.error(err));

// REDUCER
export default function(state = defaultCats, action) {
  switch (action.type) {
    case GET_CATS:
      return {
        isFetching: false,
        byId: action.cats.reduce((result, cat) => {
          cat.favorite = false;
          result[cat.id] = cat;
          return result;
        }, {}),
        allIds: action.cats.map(cat => cat.id),
        favorites: 0
      };
    case TOGGLE_FAVORITE:
      let cat = state.byId[action.catId];
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.catId]: { ...cat, favorite: !cat.favorite }
        },
        favorites: cat.favorite ? state.favorites - 1 : state.favorites + 1
      };
    default:
      return state;
  }
}

// SELECTORS
export const selectAllCats = state =>
  state.cats.allIds.reduce((result, id) => {
    result.push(state.cats.byId[id]);
    return result;
  }, []);

export const selectAllFavorites = state => {
  return state.cats.allIds.reduce((result, id) => {
    let cat = state.cats.byId[id];
    if (cat.favorite) result.push(cat);
    return result;
  }, []);
};

export const selectSingleCat = (state, catId) =>
  Object.values(state.cats.byId).filter(cat => cat.id === catId);

// Matches the last word (letters only, A thru Z, no numbers or punctuation) in a string.
const lastWord = /[a-z]+(?=[^a-z]*$)/i;

export const sortCatsByLastWord = state =>
  Object.values(state.cats.byId).sort((catA, catB) => {
    catA = catA.fact.match(lastWord)[0];
    catB = catB.fact.match(lastWord)[0];
    return catA.localeCompare(catB);
  });
