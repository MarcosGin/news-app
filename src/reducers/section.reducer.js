import {
  GET_SECTIONS,
  ALL_SECTIONS,
  ERROR_ALL_SECTIONS,
  API_START,
  API_END,
} from '../actions/types';

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

export default sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_SECTIONS:
      return {
        ...state,
        data: action.payload,
      };

    case API_START:
      switch (action.payload) {
        case GET_SECTIONS:
          return {
            ...state,
            isLoading: true,
          };
        default:
          return {...state};
      }
    case API_END:
      switch (action.payload) {
        case GET_SECTIONS:
          return {
            ...state,
            isLoading: false,
          };
        default:
          return {...state};
      }
    default:
      return state;
  }
};
