import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const composeEnhancers =
  process.env.NODE_ENV === "development" ? reduxDevTools : compose;

const arrMiddlewares = [thunk];

const objStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...arrMiddlewares))
);

export default objStore;
