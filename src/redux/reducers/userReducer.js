import { SET_USER, SET_FAVS_LIST } from "../types";

const initialState = {
  id: "",
  name: "",
  email: "",
  photo: "",
  bornDay: "",
  nationality: "",
  gender: "",
  course: "",
  institution: "",
  presentation: "",
  linkedin: "",
  facebook: "",
  twitter: "",
  languages: [],
  skills: [],
  interests: {},
  favoritesOpportunities: [],
  accountFilled: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case SET_FAVS_LIST:
      return {
        ...state,
        favoritesOpportunities: action.payload,
      };
    case SET_USER:
      return {
        ...action.payload,
      };
  }
}
