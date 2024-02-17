import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Usecontextalltime } from "../Context/Context";

const Header = () => {
  const { Onlogout, IsUserlog } = Usecontextalltime();
  const navigate = useNavigate();

  const OnLogOutButtom = () => {
    Onlogout();
    navigate("/");
  };

  return (
    <>
      <div className="Header">
        <div>
          {IsUserlog && (
            <button>
              <Link to="/">Home</Link>
            </button>
          )}
        </div>
        <div>
          {IsUserlog && (
            <button>
              <Link to="/AddExpenses">Add Expenses</Link>
            </button>
          )}
        </div>

        <div className="log">
          {IsUserlog && <button onClick={OnLogOutButtom}>Log Out</button>}
        </div>
      </div>
    </>
  );
};

export default Header;
