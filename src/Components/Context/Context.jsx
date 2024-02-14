import React, { useContext, useState } from "react";

const con = React.createContext();

const Context = ({ children }) => {
  const [tokens, Setokens] = useState("");

  const IsUserlog = !!tokens;

  const Onlogin = (token) => {
    Setokens(token);
  };
  return <con.Provider value={{ Onlogin, IsUserlog }}>{children}</con.Provider>;
};

export default Context;

export function Usecontextalltime() {
  return useContext(con);
}
