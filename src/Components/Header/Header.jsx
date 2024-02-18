import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OnUserDelete } from "../../Reduex/Slices/AuthReducer";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let value = useSelector((state) => state.Auth.tokens);
  let IsUserlog = !!value;

  const OnLogOutButtom = () => {
    dispatch(OnUserDelete());
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
