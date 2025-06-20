import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { AppContextProvider } from "../src/config/AppContext";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <AppContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
