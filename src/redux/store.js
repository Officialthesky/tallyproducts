import { combineReducers, createStore } from "redux";
import addProductReducer from "./reducers/addProductReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  addProductReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["addProductReducer"], // only navigation will be persisted
};

// for logut and clear state in redux
const reducerController = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducerController);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
