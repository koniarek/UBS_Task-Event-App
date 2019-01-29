import { routerMiddleware, connectRouter } from "connected-react-router";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
import { loadState } from "./utils/local-storage";


const middleware = [thunk];

middleware.push(routerMiddleware(history));

const persistedState = loadState();

export const store = createStore(
  connectRouter(history)(reducer),
  persistedState,
  applyMiddleware(...middleware)
);
