import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OnuserOnClick } from "../../Reduex/Slices/Expenses";

function Store() {
  const ExpesesArray = useSelector((state) => state.Expense.value);
  const dispatch = useDispatch();

  const Totalamount = ExpesesArray.reduce(
    (acc, cur) => acc + Number(cur.money),
    0
  );

  return (
    <div className="storecontainer">
      {Totalamount > 10000 && (
        <button id="premeiun-buttom" onClick={() => dispatch(OnuserOnClick())}>
          Active Premiun
        </button>
      )}
      <div className="welcome-profile">
        <h3 className="title">Welcome to Expense Tracker!!!</h3>
        <p className="message">Your profile is incomplete. Complete now!</p>
        <h3 className="c-profile">
          <Link to="/Profile">Complete Profile</Link>
        </h3>
      </div>
    </div>
  );
}

export default Store;
