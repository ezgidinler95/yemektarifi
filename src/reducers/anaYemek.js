import {
  ADD_ANA_YEMEK_PENDING,
  ADD_ANA_YEMEK_FULFILLED,
  ADD_ANA_YEMEK_REJECTED,
  ALL_ANA_YEMEK_PENDING,
  ALL_ANA_YEMEK_FULFILLED,
  ALL_ANA_YEMEK_REJECTED,
  GET_YEMEK_PENDING,
  GET_YEMEK_FULFILLED,
  GET_YEMEK_REJECTED,
  DELETE_YEMEK_PENDING,
  DELETE_YEMEK_FULFILLED,
  DELETE_YEMEK_REJECTED,
  UPDATE_YEMEK_PENDING,
  UPDATE_YEMEK_FULFILLED,
  UPDATE_YEMEK_REJECTED,
  ALL_TATLI_PENDING,
  ALL_TATLI_FULFILLED,
  ALL_TATLI_REJECTED,
  ALL_KAHVALTILIK_PENDING,
  ALL_KAHVALTILIK_FULFILLED,
  ALL_KAHVALTILIK_REJECTED
} from "../actions/anaYemek";

const initialState = {
  addAnaYemekResult: {},
  getYemekResult: {},
  deleteYemekResult: {},
  updateYemekResult: {},
  anaYemek: {},
  anaYemekler: [],
  loading: false
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
    case DELETE_YEMEK_PENDING:
      return {
        ...state
      };
    case DELETE_YEMEK_FULFILLED:
      return {
        ...state,
        deleteYemekResult: action.payload
      };
    case DELETE_YEMEK_REJECTED:
      return {
        ...state
      };
    case UPDATE_YEMEK_PENDING:
      return {
        ...state
      };
    case UPDATE_YEMEK_FULFILLED:
      return {
        ...state,
        updateYemekResult: action.payload
      };
    case UPDATE_YEMEK_REJECTED:
      return {
        ...state
      };
    case GET_YEMEK_PENDING:
      return {
        ...state,
        getStoreLoading: true
      };
    case GET_YEMEK_FULFILLED:
      return {
        ...state,
        ...action.payload.data,
        getStoreLoading: false
      };
    case GET_YEMEK_REJECTED:
      return {
        ...state,
        getStoreLoading: false
      };
    case ALL_ANA_YEMEK_PENDING:
      return {
        loading: true,
        ...state
      };
    case ALL_ANA_YEMEK_FULFILLED:
      return {
        ...state,
        ...action.payload.data,
        loading: false
      };
    case ALL_ANA_YEMEK_REJECTED:
      return {
        ...state,
        loading: false
      };
    case ALL_TATLI_PENDING:
      return {
        loading: true,
        ...state
      };
    case ALL_TATLI_FULFILLED:
      return {
        ...state,
        ...action.payload.data,
        loading: false
      };
    case ALL_TATLI_REJECTED:
      return {
        ...state,
        loading: false
      };
    case ALL_KAHVALTILIK_PENDING:
      return {
        loading: true,
        ...state
      };
    case ALL_KAHVALTILIK_FULFILLED:
      return {
        ...state,
        ...action.payload.data,
        loading: false
      };
    case ALL_KAHVALTILIK_REJECTED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
