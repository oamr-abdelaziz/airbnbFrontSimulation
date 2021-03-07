import { createStore,applyMiddleware } from "redux";
import combineReducers from "./reducers/combineReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(combineReducers ,composeWithDevTools(applyMiddleware(thunk)));

export default store;
