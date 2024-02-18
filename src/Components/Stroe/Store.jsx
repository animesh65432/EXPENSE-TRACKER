import React, { useState } from "react";
import { Link } from "react-router-dom";

function Store() {
  return (
    <div className="storecontainer">
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
