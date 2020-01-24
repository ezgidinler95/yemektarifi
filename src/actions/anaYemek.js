import axios from "axios";
import { API_URL } from "../config/config";

export const ADD_ANA_YEMEK_PENDING = "ADD_ANA_YEMEK_PENDING";
export const ADD_ANA_YEMEK_FULFILLED = "ADD_ANA_YEMEK_FULFILLED";
export const ADD_ANA_YEMEK_REJECTED = "ADD_ANA_YEMEK_REJECTED";

export const ALL_ANA_YEMEK_PENDING = "ALL_ANA_YEMEK_PENDING";
export const ALL_ANA_YEMEK_FULFILLED = "ALL_ANA_YEMEK_FULFILLED";
export const ALL_ANA_YEMEK_REJECTED = "ALL_ANA_YEMEK_REJECTED";

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
      type: "ALL_ANA_YEMEK_PENDING",
      payload: axios
        .post(`${API_URL}/ana-yemek/all`,)
        .then(result => result.data)
    });
  };
}

