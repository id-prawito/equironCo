import { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "../config/GlobalStyles";
import { ThemeProvider } from "styled-components";
import AppContext from "../config/AppContext";
import RoutesSite from "../config/RouterSite";

import "./app.scss";

function App() {
  const { theme } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Route>
        <ThemeProvider theme={{ theme }}>
          <GlobalStyles />
          <RoutesSite />
        </ThemeProvider>
      </Route>
    </BrowserRouter>
  );
}

export default App;
