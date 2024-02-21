import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OnUserDelete } from "../../Reduex/Slices/AuthReducer";
import { Onchangetoggole } from "../../Reduex/Slices/toggoleSlice";
import ReactSwitch from "react-switch";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let value = useSelector((state) => state.Auth.tokens);
  const Flag = useSelector((state) => state.Expense.flag);
  const theme = useSelector((state) => state.toggole.value);
  let IsUserlog = !!value;
  const OnLogOutButtom = () => {
    dispatch(OnUserDelete());
    navigate("/");
  };

  return (
    <>
      <div className="Header">
        {IsUserlog && Flag && (
          <div className="switch">
            <label htmlFor="darkorlight">{theme}</label>
            <ReactSwitch
              onChange={() => {
                dispatch(Onchangetoggole());
              }}
              checked={theme}
            />
          </div>
        )}
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
        <div>
          {IsUserlog && (
            <h3>
              <Link to="/Userprofile">Profile</Link>
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
