import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./stores/store";
import "./i18next";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
