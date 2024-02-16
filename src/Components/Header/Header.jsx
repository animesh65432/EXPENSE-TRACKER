import React from "react";
import { Usecontextalltime } from "../Context/Context";

const Header = () => {
  const { Onlogout } = Usecontextalltime();
  const OnLogOutButtom = () => {
    Onlogout();
  };
  return (
    <>
      <div className="buttom">
        <button onClick={Onlogout}>Log Out</button>
      </div>
    </>
  );
};

export default Header;
