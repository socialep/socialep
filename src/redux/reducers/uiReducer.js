import {
  SET_STRINGS,
  TOGGLE_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_LOGGED,
  SET_INTERESTS_FILLED,
  TOGGLE_LOADING_USER,
  SET_OPPS,
  SET_POSTS,
  SET_FAVS,
} from "../types";

const initialState = {
  strings: {},
  loading: false,
  loadingUser: false,
  error: null,
  logged: false,
  interestsFilled: false,
  opportunities: [],
  favorites: [],
  organization: {
    logo:
      "https://firebasestorage.googleapis.com/v0/b/socialep-3bdd5.appspot.com/o/Organizations-Images%2FPM0glpxJHHOkKKP1Mb02Gkr3oHA3%2Flogo?alt=media",
    name: "Organizaçã 1",
    phone: "71 3035-0761",
    address:
      "Cidade - UF, rua Lorem Ipsum, nº 12, complemento, referência, Bloco A",
    description:
      "Descrição resumida do projeto, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/socialep-3bdd5.appspot.com/o/Organizations-Images%2FPM0glpxJHHOkKKP1Mb02Gkr3oHA3%2Fphotos%2Fimage-0?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/socialep-3bdd5.appspot.com/o/Organizations-Images%2FPM0glpxJHHOkKKP1Mb02Gkr3oHA3%2Fphotos%2Fimage-1?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/socialep-3bdd5.appspot.com/o/Organizations-Images%2FPM0glpxJHHOkKKP1Mb02Gkr3oHA3%2Fphotos%2Fimage-2?alt=media",
    ],
    interests: {
      animals: true,
      education: true,
      environment: true,
      health: true,
      human_rights: true,
      sports: true,
    },
    rating: 4,
  },
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case SET_FAVS:
      return {
        ...state,
        favorites: action.payload,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_OPPS:
      return {
        ...state,
        opportunities: action.payload,
      };
    case TOGGLE_LOADING_USER:
      return {
        ...state,
        loadingUser: !state.loadingUser,
      };
    case SET_INTERESTS_FILLED:
      return {
        ...state,
        interestsFilled: action.payload,
      };
    case SET_LOGGED: {
      return {
        ...state,
        logged: action.payload,
      };
    }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_STRINGS:
      return {
        ...state,
        strings: action.payload,
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
  }
}
