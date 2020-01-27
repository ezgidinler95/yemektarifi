import { combineReducers } from "redux";

import anaYemekReducer from "./anaYemek";
import userReducer from "./userReducer";

export default combineReducers({
  anaYemekReducer,
  userReducer
});
