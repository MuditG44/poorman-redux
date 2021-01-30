import { combineReducers } from "../redux";
import userReducer from "./user.reducer";
import counterReducer from "./counter.reducer";

const rootReducer = combineReducers({
  users: userReducer,
  counter: counterReducer
});

export default rootReducer;