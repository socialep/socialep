import { SET_STRINGS, TOGGLE_LOADING, SET_ERROR, CLEAR_ERROR } from "../types";

const initialState = {
  strings: {},
  loading: false,
  error: null,
  opportunities: [
    {
      rating: 3.5,
      photos: [
        "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      ],
      name: "Oportunidade de Teste 1",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
      liked: false,
      interests: {
        animals: true,
        education: false,
        environment: false,
        health: true,
        human_rights: true,
        sports: false,
      },
      requirements:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
      address: "Alamenda Bosque imperial, 507, Salvador - Ba",
      period: "Julho a Novembro",
      duration: "2 Semanas",
    },
    {
      rating: 3.5,
      photos: [
        "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      ],
      name: "Oportunidade de Teste 2",
      description:
        "Oportunidade de Teste Oportunidade de Teste Oportunidade de Teste",
      liked: true,
      interests: {
        animals: true,
        education: true,
        environment: true,
        health: true,
        human_rights: true,
        sports: true,
      },
      requirements:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
      address: "Alamenda Bosque imperial, 507, Salvador - Ba",
      period: "Julho a Novembro",
      duration: "2 Semanas",
    },
  ],
  favorites: [
    {
      rating: 3.5,
      photos: [
        "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      ],
      name: "Oportunidade de Teste 2",
      description:
        "Oportunidade de Teste Oportunidade de Teste Oportunidade de Teste",
      liked: true,
      interests: {
        animals: true,
        education: true,
        environment: true,
        health: true,
        human_rights: true,
        sports: true,
      },
      requirements:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
      address: "Alamenda Bosque imperial, 507, Salvador - Ba",
      period: "Julho a Novembro",
      duration: "2 Semanas",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
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
