import React, { useContext, useState } from "react";

const con = React.createContext();

const Context = ({ children }) => {
  const intialstate = localStorage.getItem("token");
  const [tokens, Setokens] = useState(intialstate);

  const IsUserlog = !!tokens;

  const Onlogin = (token) => {
    Setokens(token);
    localStorage.setItem("token", token);
  };
  return (
    <con.Provider value={{ Onlogin, IsUserlog, tokens }}>
      {children}
    </con.Provider>
  );
};

export default Context;

export function Usecontextalltime() {
  return useContext(con);
}
