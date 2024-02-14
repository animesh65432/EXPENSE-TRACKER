import React, { useState } from "react";
import { useRef } from "react";
import { Auth } from "../../Auth/Auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import "./Singandlog.css";

const SingandLog = () => {
  const emailref = useRef();
  const Password = useRef();
  const ConfirmPassword = useRef();
  const [Islogin, Setlogin] = useState(false);
  const [UserErrors, SetUserErrors] = useState(false);

  const Ontgoole = () => {
    Setlogin((prev) => !prev);
  };

  const Onsubmithnadler = async (e) => {
    e.preventDefault();
    let Useremail = emailref.current.value;
    let UserPassword = Password.current.value;
    let UserConfirmpassword = ConfirmPassword.current.value;

    if (UserPassword !== UserConfirmpassword) {
      Password.current.focus();
      SetUserErrors(true);
      return;
    } else {
      SetUserErrors(false);
    }

    if (!Islogin) {
      try {
        let response = await createUserWithEmailAndPassword(
          Auth,
          Useremail,
          UserConfirmpassword
        );
        console.log(response);
      } catch (error) {
        SetUserErrors(true);
        alert(error);
      }
    } else {
      try {
        let response = await signInWithEmailAndPassword(
          Auth,
          Useremail,
          UserConfirmpassword
        );
        console.log(response);
      } catch (error) {
        SetUserErrors(true);
        alert(error);
      }
    }
  };

  return (
    <div className="fullpage">
      <div className="container">
        <form onSubmit={Onsubmithnadler}>
          <input
            type="text"
            placeholder="Email"
            ref={emailref}
            style={UserErrors ? { color: "red" } : null}
            onChange={() => SetUserErrors(false)}
          ></input>
          <input
            type="text"
            placeholder="Password"
            ref={Password}
            style={UserErrors ? { color: "red" } : null}
            onChange={() => SetUserErrors(false)}
          ></input>
          <input
            type="text"
            placeholder="Confirm Password"
            ref={ConfirmPassword}
            style={UserErrors ? { color: "red" } : null}
            onChange={() => SetUserErrors(false)}
          ></input>
          <button>{Islogin ? "log in" : "Sign in "}</button>
        </form>
        <button onClick={Ontgoole}>
          {!Islogin ? "Have an Account ? Log in " : "Create New Account"}
        </button>
      </div>
    </div>
  );
};

export default SingandLog;
