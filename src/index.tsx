import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import objApplicationStore from "./redux/store/store";
import App from "./containers/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={objApplicationStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
