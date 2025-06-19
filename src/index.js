import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { AppContextProvider } from "../src/config/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
