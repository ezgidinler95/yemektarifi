import axios from "axios";
import { API_URL } from "../config/config";

export const ADD_ANA_YEMEK_PENDING = "ADD_ANA_YEMEK_PENDING";
export const ADD_ANA_YEMEK_FULFILLED = "ADD_ANA_YEMEK_FULFILLED";
export const ADD_ANA_YEMEK_REJECTED = "ADD_ANA_YEMEK_REJECTED";

export const ALL_ANA_YEMEK_PENDING = "ALL_ANA_YEMEK_PENDING";
export const ALL_ANA_YEMEK_FULFILLED = "ALL_ANA_YEMEK_FULFILLED";
export const ALL_ANA_YEMEK_REJECTED = "ALL_ANA_YEMEK_REJECTED";

export const GET_YEMEK_PENDING = "GET_YEMEK_PENDING";
export const GET_YEMEK_FULFILLED = "GET_YEMEK_FULFILLED";
export const GET_YEMEK_REJECTED = "GET_YEMEK_REJECTED";

export const UPDATE_YEMEK_PENDING = "UPDATE_YEMEK_PENDING";
export const UPDATE_YEMEK_FULFILLED = "UPDATE_YEMEK_FULFILLED";
export const UPDATE_YEMEK_REJECTED = "UPDATE_YEMEK_REJECTED";

export const DELETE_YEMEK_PENDING = "DELETE_YEMEK_PENDING";
export const DELETE_YEMEK_FULFILLED = "DELETE_YEMEK_FULFILLED";
export const DELETE_YEMEK_REJECTED = "DELETE_YEMEK_REJECTED";

export function addAnaYemek(anaYemek) {
  return async dispatch => {
    await dispatch({
      type: "ADD_ANA_YEMEK",
      payload: axios
        .post(`${API_URL}/ana-yemek`, anaYemek)
        .then(result => result.data)
    });
  };
}

export function allAnaYemek() {
  return async dispatch => {
    await dispatch({
      type: "ALL_ANA_YEMEK",
      payload: axios.get(`${API_URL}/ana-yemek/all`).then(result => result.data)
    });
  };
}

export function getYemek(anaYemek) {
  return async dispatch => {
    await dispatch({
      type: "GET_YEMEK",
      payload: axios
        .get(`${API_URL}/ana-yemek/${anaYemek}`)
        .then(result => result.data)
    });
  };
}

export function updateYemek(anaYemek) {
  return async dispatch => {
    await dispatch({
      type: "UPDATE_YEMEK",
      payload: axios
        .put(`${API_URL}/ana-yemek`, anaYemek)
        .then(result => result.data)
    });
  };
}

export function deleteYemek(anaYemek) {
  return async dispatch => {
    await dispatch({
      type: "DELETE_YEMEK",
      payload: axios
        .delete(`${API_URL}/ana-yemek`, { data: { ...anaYemek } })
        .then(result => result.data)
    });
  };
}

