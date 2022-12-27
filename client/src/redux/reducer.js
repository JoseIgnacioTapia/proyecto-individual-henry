import {
  GET_ALL_DOGS,
  GET_DOG_DETAIL,
  CLEAR_DOG_DETAIL,
  GET_TEMPERAMENTS,
  GET_SEARCH_DOG,
  FILTER_BY_TEMPERAMENT,
  FILTER_BY_DOG,
  SORT_ALPHA,
  SORT_WEIGHT,
  SET_PAGE,
  ERROR,
} from './action';
import { averageWeight } from '../helpers/helpers.js';

const initialState = {
  dogs: [],
  allDogs: [],
  dogDetail: {},
  temperaments: [],
  statePage: 1,
  error: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case CLEAR_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_SEARCH_DOG:
      return {
        ...state,
        dogs: action.payload,
      };

    case FILTER_BY_TEMPERAMENT:
      const allDogs = state.allDogs;
      const temperamentsFiltered =
        action.payload === 'default'
          ? allDogs
          : allDogs.filter(d =>
              d.temperament
                ?.toLowerCase()
                .includes(action.payload.toLowerCase())
            );

      return {
        ...state,
        dogs: temperamentsFiltered,
      };

    case FILTER_BY_DOG:
      const allDogsTwo = state.allDogs;
      const dogsFiltered =
        action.payload === 'default'
          ? allDogsTwo
          : allDogsTwo.filter(d => d.name === action.payload);
      return {
        ...state,
        dogs: dogsFiltered,
      };

    case SORT_ALPHA:
      let sortedArr =
        action.payload === 'asc'
          ? state.dogs.sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              else return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              else return 0;
            });
      return {
        ...state,
        dogs: sortedArr,
      };

    case SORT_WEIGHT:
      let sortedWeight =
        action.payload === 'asc'
          ? state.dogs.sort((a, b) => {
              return averageWeight(a.weight) - averageWeight(b.weight);
            })
          : state.dogs.sort((a, b) => {
              return averageWeight(b.weight) - averageWeight(a.weight);
            });
      return {
        ...state,
        dogs: sortedWeight,
      };

    case SET_PAGE:
      return {
        ...state,
        statePage: action.payload,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
