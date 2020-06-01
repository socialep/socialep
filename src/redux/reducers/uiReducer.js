import {
  SET_STRINGS,
  TOGGLE_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_LOGGED,
  SET_INTERESTS_FILLED,
  TOGGLE_LOADING_USER,
} from "../types";

const initialState = {
  strings: {},
  loading: false,
  loadingUser: false,
  error: null,
  logged: false,
  interestsFilled: false,
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
      id: "1",
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
      id: "2",
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
      id: "2",
    },
  ],
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
  posts: [
    {
      body: "Venham Participar da Segunda Feijoada do Amor !!!",
      createdAt: "2020-02-09T14:59:36.928Z",
      id: "63T0GAofi0WqCFDeY3GF",
      image:
        "https://firebasestorage.googleapis.com/v0/b/socialep-3bdd5.appspot.com/o/Organizations-Images%2FPM0glpxJHHOkKKP1Mb02Gkr3oHA3%2Fposts%2F63T0GAofi0WqCFDeY3GF-image?alt=media",
      likes: [],
      orgId: "PM0glpxJHHOkKKP1Mb02Gkr3oHA3",
      orgLogo:
        "https://firebasestorage.googleapis.com/v0/b/socialep-3bdd5.appspot.com/o/Organizations-Images%2FPM0glpxJHHOkKKP1Mb02Gkr3oHA3%2Flogo?alt=media",
      orgName: "GAAC - Grupo de Apoio a Criança com Câncer",
    },
    {
      body:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      createdAt: "2020-02-09T14:59:36.928Z",
      id: "63T0GAofi0WqCFDeY3GF",
      image:
        "https://firebasestorage.googleapis.com/v0/b/socialep-3bdd5.appspot.com/o/Organizations-Images%2FPM0glpxJHHOkKKP1Mb02Gkr3oHA3%2Fposts%2F63T0GAofi0WqCFDeY3GF-image?alt=media",
      likes: [],
      orgId: "PM0glpxJHHOkKKP1Mb02Gkr3oHA3",
      orgLogo:
        "https://firebasestorage.googleapis.com/v0/b/socialep-3bdd5.appspot.com/o/Organizations-Images%2FPM0glpxJHHOkKKP1Mb02Gkr3oHA3%2Flogo?alt=media",
      orgName: "GAAC - Grupo de Apoio a Criança com Câncer",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
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
