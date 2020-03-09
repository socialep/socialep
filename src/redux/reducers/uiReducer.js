import { SET_STRINGS, TOGGLE_LOADING, SET_ERROR, CLEAR_ERROR } from "../types";

const initialState = {
  strings: {},
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_STRINGS:
      return {
        ...state,
        strings: action.payload
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      };
  }
}
