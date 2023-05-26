import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext<any>({});
export const Data = ({ children }: { children?: any }) => {
  const [bankDetail, setBankDetail] = useState<any>([]);

  return <Context.Provider value={{ bankDetail, setBankDetail }}>{children}</Context.Provider>;
};
