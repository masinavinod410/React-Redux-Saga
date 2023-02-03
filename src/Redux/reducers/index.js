import { combineReducers } from "redux";
import ordersReducer from "./reducer";
//import userReducer from "./reducer";

export default combineReducers({
  ordersReducer: ordersReducer,
});
