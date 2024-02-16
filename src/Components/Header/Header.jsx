import React from "react";
import { Usecontextalltime } from "../Context/Context";

const Header = () => {
  const { Onlogout, IsUserlog } = Usecontextalltime();
  const OnLogOutButtom = () => {
    Onlogout();
  };
  return (
    <>
      <div className="Header">
        <div className="buttomdiv">
          {IsUserlog && <button onClick={Onlogout}>Log Out</button>}
        </div>
      </div>
    </>
  );
};

export default Header;
