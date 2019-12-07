import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk)); //reducers contains all the departments while thunk is the middleware that takes in both state & action

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
