import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MyContextProvider } from "./store/matches-record-context";

ReactDOM.render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);