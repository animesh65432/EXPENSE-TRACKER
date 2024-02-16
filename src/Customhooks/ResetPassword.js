import React from "react";
import axios from "axios";

const ResetPassword = (useremail) => {
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCeTJueOOOp9VIvedFWi7ZLOG_exHKBjq4`,
      { requestType: "PASSWORD_RESET", email: useremail }
    )
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

export default ResetPassword;
