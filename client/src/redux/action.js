export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const CLEAR_DOG_DETAIL = 'CLEAR_DOG_DETAIL';
export const SET_LOADING_DOG = 'SET_LOADING_DOG';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_SEARCH_DOG = 'GET_SEARCH_DOG';
export const FILTER_BY_DOG = 'FILTER_BY_DOG';
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT';
export const SORT_ALPHA = 'SORT_ALPHA';
export const SORT_WEIGHT = 'SORT_WEIGHT';
export const SET_PAGE = 'SET_PAGE';
export const ERROR = 'ERROR';

export const getAllDogs = () => {
  return async function (dispatch) {
    try {
      const response = await fetch('http://localhost:3001/dogs');
      const dogs = await response.json();
      return dispatch({ type: GET_ALL_DOGS, payload: dogs });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getDogDetail = id => {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:3001/dogs/${id}`);
      const dog = await response.json();

      return dispatch({
        type: GET_DOG_DETAIL,
        payload: Array.isArray(dog) ? dog[0] : dog,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const clearDogDetail = () => {
  return { type: CLEAR_DOG_DETAIL, payload: {} };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    try {
      const response = await fetch('http://localhost:3001/temperaments');
      const temperaments = await response.json();

      return dispatch({ type: GET_TEMPERAMENTS, payload: temperaments });
    } catch (error) {}
  };
};

export const getSearchDog = name => {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:3001/dogs?name=${name}`);
      const dogs = await response.json();

      return dispatch({ type: GET_SEARCH_DOG, payload: dogs });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const filterDogsByTemperament = temperament => {
  return { type: FILTER_BY_TEMPERAMENT, payload: temperament };
};

export const filterDogsByDogs = dog => {
  return { type: FILTER_BY_DOG, payload: dog };
};

export const sortByAlphabetic = order => {
  return { type: SORT_ALPHA, payload: order };
};

export const sortByWeight = order => {
  return { type: SORT_WEIGHT, payload: order };
};

export const setPage = num => {
  return { type: SET_PAGE, payload: num };
};
