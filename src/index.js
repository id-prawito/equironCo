import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { AppContextProvider } from "../src/config/AppContext";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
