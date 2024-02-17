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
            <h3>
              <Link to="/">Home</Link>
            </h3>
          )}
        </div>
        <div>
          {IsUserlog && (
            <h3>
              <Link to="/AddExpenses">Add-Expenses</Link>
            </h3>
          )}
        </div>

        {IsUserlog && (
          <button onClick={OnLogOutButtom} id="logout">
            Log Out
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
