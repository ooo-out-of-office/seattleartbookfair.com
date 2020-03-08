import { createContext } from "react";

const StaticConfigContext = createContext({});

export const StaticConfigProvider = ({ children, value }) => {
  return (
    <StaticConfigContext.Provider value={{ ...value }}>
      {children}
    </StaticConfigContext.Provider>
  );
};

export default StaticConfigContext;
