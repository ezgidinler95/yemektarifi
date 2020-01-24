import {
  ADD_ANA_YEMEK_PENDING,
  ADD_ANA_YEMEK_FULFILLED,
  ADD_ANA_YEMEK_REJECTED,
  ALL_ANA_YEMEK_PENDING,
  ALL_ANA_YEMEK_FULFILLED,
  ALL_ANA_YEMEK_REJECTED
} from "../actions/anaYemek";

const initialState = {
  addAnaYemekResult: {},
  anaYemek: {},
  anaYemekler: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANA_YEMEK_PENDING:
      return {
        ...state
      };
    case ADD_ANA_YEMEK_FULFILLED:
      return {
        ...state,
        addAnaYemekResult: action.payload
      };
    case ADD_ANA_YEMEK_REJECTED:
      return {
        ...state
      };

    case ALL_ANA_YEMEK_PENDING:
      return {
        ...state
      };
    case ALL_ANA_YEMEK_FULFILLED:
      return {
        ...state,
        ...action.payload.data
      };
    case ALL_ANA_YEMEK_REJECTED:
      return {
        ...state
      };

    default:
      return state;
  }
};
