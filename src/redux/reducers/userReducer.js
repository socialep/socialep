import { SET_USER } from "../types";

const initialState = {
  id: "",
  name: "",
  email: "",
  photo: "",
  age: 0,
  region: "",
  schooling: "",
  description: "",
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
    case SET_USER:
      return {
        ...action.payload,
      };
  }
}
