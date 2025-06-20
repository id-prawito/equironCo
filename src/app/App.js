import { useContext } from "react";
import GlobalStyles from "../config/GlobalStyles";
import { ThemeProvider } from "styled-components";
import AppContext from "../config/AppContext";
import RoutesSite from "../config/RouterSite";

import "./app.scss";

function App() {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyles />
      <RoutesSite />
    </ThemeProvider>
  );
}

export default App;
