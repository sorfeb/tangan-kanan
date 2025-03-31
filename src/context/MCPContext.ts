import { createContext, useContext, useState } from "react";

const MCPContext = createContext(null);

export const MCPProvider = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState({});

  return (
    <MCPContext.Provider value={{ context, setContext }}>
      {children}
    </MCPContext.Provider>
  );
};

export const useMCP = () => useContext(MCPContext);