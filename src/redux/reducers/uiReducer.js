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
  SET_ORG,
  SET_OPP,
  SET_USERS_REGISTERED,
  UPDATE_POST_LIKES,
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
    logo: "",
    name: "",
    phone: "",
    address: "",
    description: "",
    photos: [],
    interests: {
      animals: false,
      education: false,
      environment: false,
      health: false,
      human_rights: false,
      sports: false,
    },
    rating: 0,
  },
  posts: [],
  opportunity: {
    rating: 0,
    photos: [],
    name: "",
    description: "",
    interests: {
      animals: false,
      education: false,
      environment: false,
      health: false,
      human_rights: false,
      sports: false,
    },
    requirements: "",
    address: "",
    period: "",
    duration: "",
    id: "",
    usersRegistered: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case UPDATE_POST_LIKES: {
      const { likes, postId } = action.payload;
      const aux = [];

      state.posts.map((post) => {
        if (post.id === postId) aux.push({ ...post, likes });
        else aux.push(post);
      });

      return { ...state, posts: aux };
    }
    case SET_USERS_REGISTERED:
      return {
        ...state,
        opportunity: {
          ...state.opportunity,
          usersRegistered: action.payload,
        },
      };
    case SET_OPP:
      return {
        ...state,
        opportunity: action.payload,
      };
    case SET_ORG:
      return {
        ...state,
        organization: action.payload,
      };
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
