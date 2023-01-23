import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext({});
export const Data = ({ children }: { children?: any }) => {
  const [value, setValue] = useState<string>("hi");
  console.log("valuevalue", value);

  return <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>;
};
