import React, { useContext, useState } from "react";

const con = React.createContext();

const Context = ({ children }) => {
  const intialstate = localStorage.getItem("token");
  const [tokens, Setokens] = useState(intialstate);
  const [UserEmail, SetUserEmail] = useState("");

  const IsUserlog = !!tokens;

  const Onlogin = (token) => {
    Setokens(token);
    localStorage.setItem("token", token);
  };

  const Onuseradd = (email) => {
    SetUserEmail(email);
  };
  return (
    <con.Provider value={{ Onlogin, IsUserlog, tokens, UserEmail, Onuseradd }}>
      {children}
    </con.Provider>
  );
};

export default Context;

export function Usecontextalltime() {
  return useContext(con);
}
