import React, { useState } from "react";
import { Link } from "react-router-dom";

function Store() {
  return (
    <div className="storecontainer">
      <div className="welcome-profile">
        <h1 className="title">Welcome to Expense Tracker!!!</h1>
        <p className="message">Your profile is incomplete. Complete now!</p>
        <button className="complete-button">
          <Link to="/Profile">Complete Profile</Link>
        </button>
      </div>
    </div>
  );
}

export default Store;
