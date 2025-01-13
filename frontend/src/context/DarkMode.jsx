import { createContext } from "react";

export const DarkMode = createContext();

const DarkModeProvider = ({ children }) => {
  let data = {};
  return <DarkMode.Provider value={data}>{children}</DarkMode.Provider>;
};

export default DarkModeProvider;
