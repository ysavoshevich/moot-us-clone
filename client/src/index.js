import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { Router } from "react-router-dom";
import history from "./util/history";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router history={history}>
    <App />
  </Router>
);
