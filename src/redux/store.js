import { combineReducers, createStore } from "redux";
import addProductReducer from "./reducers/addProductReducer";
const rootReducer = combineReducers({
  addProductReducer,
});

export const store = createStore(rootReducer);
