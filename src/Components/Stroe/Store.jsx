import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OnuserOnClick } from "../../Reduex/Slices/Expenses";
import Expense from "../Expense/Expense";

function Store() {
  const ExpesesArray = useSelector((state) => state.Expense.value);
  const Active = useSelector((state) => state.Expense.flag);
  const dispatch = useDispatch();

  const Totalamount = ExpesesArray.reduce(
    (acc, cur) => acc + Number(cur.money),
    0
  );

  const textContent = ExpesesArray.map((expense) => {
    return `${expense.description}: ${expense.money}`;
  }).join("\n");
  console.log(textContent);

  const blob = new Blob([textContent], { type: "text/plain" });

  const downloadUrl = URL.createObjectURL(blob);

  return (
    <div className="storecontainer">
      {Totalamount > 10000 && (
        <button id="premeiun-buttom" onClick={() => dispatch(OnuserOnClick())}>
          {Active ? "Actived Premiun plan" : " Activate Premiun Plan"}
        </button>
      )}
      {Active && (
        <a href={downloadUrl} download="TotalAmount.txt" className="PDF">
          THE PDF OF YOUR EXPENSES ClICK THE LINE
        </a>
      )}

      <div className="welcome-profile">
        <h3 className="title">Welcome to Expense Tracker!!!</h3>
        <p className="message">Your profile is incomplete. Complete now!</p>
        <h3 className="c-profile">
          <Link to="/Profile">Complete Profile</Link>
        </h3>
      </div>
      <Expense />
    </div>
  );
}

export default Store;
