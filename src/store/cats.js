import axios from 'axios';

// const corsUrl = 'https://cors-anywhere.herokuapp.com/';

// const imgUrl =
//   'http://thecatapi.com/api/images/get?format=json&results_per_page=25';

// const factsUrl = 'https://catfact.ninja/facts?limit=25';

const url = {
  cors: 'https://cors-anywhere.herokuapp.com/',
  facts: 'https://catfact.ninja/facts?limit=25',
  img: 'http://thecatapi.com/api/images/get?format=json&results_per_page=25'
};

// ACTION TYPES
const GET_CATS = 'GET_CATS';

// INITIAL STATE
const defaultCats = {
  byId: {
    0: {
      id: 0,
      imgUrl: '',
      fact: ''
    }
  },
  allIds: []
};

// ACTION CREATORS
export const gotCats = cats => ({
  type: GET_CATS,
  cats
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
    .then(array => {
      dispatch(gotCats(array));
    })
    .catch(error => console.error(error));

// API REQUESTS
const getImages = async () => {
  return axios.get(url.cors + url.img).then(images => images.data);

  // try {
  //   const images = await axios.get(url.cors + url.img);
  //   return images.data;
  // } catch (error) {
  //   console.log(error);
  // }
};

const getFacts = async () => {
  try {
    const facts = await axios.get(url.cors + url.facts);
    return facts.data.data;
  } catch (error) {}
};

// REDUCER
export default function(state = defaultCats, action) {
  switch (action.type) {
    case GET_CATS:
      return {
        byId: action.cats.reduce((result, cat) => {
          result[cat.id] = cat;
          return result;
        }, {}),
        allIds: action.cats.map(cat => cat.id)
      };
    default:
      return state;
  }
}

// SELECTORS
export const selectAllCats = state => {
  return state.cats.allIds.reduce((result, id) => {
    result.push(state.cats.byId[id]);
    return result;
  }, []);
};

export const sortCatsByLastWord = state => {
  return Object.values(state.cats.byId).sort(
    (a, b) => b.fact.split(' ')[0] - a.fact.split(' ')[0]
  );
};
