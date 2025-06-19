// AppContext.js
import { createContext, useReducer } from "react";
import themeList from "./themeList";

const AppContext = createContext();
const lightTheme = themeList.light;
const darkTheme = themeList.dark;

const initialState = {
  theme: getInitialTheme(),
  language: localStorage.getItem("language") || "id",
};

function getInitialTheme() {
  const theme = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (theme) return theme;
  return prefersDark ? darkTheme : lightTheme;
}

const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === darkTheme ? lightTheme : darkTheme;
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };

    case "TOGGLE_LANGUAGE":
      const newLang = state.language === "id" ? "en" : "id";
      localStorage.setItem("language", newLang);
      return { ...state, language: newLang };

    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    theme: state.theme,
    language: state.language,
    toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
    toggleLanguage: () => dispatch({ type: "TOGGLE_LANGUAGE" }),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
export { AppContextProvider };
