//import { configureStore } from "@reduxjs/toolkit";
// //import { createStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import rootReducer from "./reducers/index";
// import createSagaMiddleware from "redux-saga";

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore(
//   { reducer: rootReducer },
//   applyMiddleware(thunk)
// );

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/index";
import flowSaga from "../Saga/WatcherSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(flowSaga);

export { store };
