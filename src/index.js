import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import reducer from "./store/reducers";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(
  reducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// / connect React app with Redux
ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);

export default store;
serviceWorker.unregister();
