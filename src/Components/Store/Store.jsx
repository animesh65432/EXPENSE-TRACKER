import React, { useState } from "react";
import { Link } from "react-router-dom";

function Store() {
  return (
    <div className="storecontainer">
      <div className="welcome-profile">
        <h3 className="title">Welcome to Expense Tracker!!!</h3>
        <p className="message">Your profile is incomplete. Complete now!</p>
        <button className="complete-button">
          <Link to="/Profile">Complete Profile</Link>
        </button>
      </div>
    </div>
  );
}

export default Store;
