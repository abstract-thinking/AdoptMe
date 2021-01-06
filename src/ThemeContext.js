import { createContext } from "react";

// state and updater
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
