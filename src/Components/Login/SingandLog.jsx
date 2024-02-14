import React, { useState } from "react";
import { useRef } from "react";
import { Auth } from "../../Auth/Auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import "./Singandlog.css";
import { Usecontextalltime } from "../Context/Context";

const SingandLog = () => {
  const emailref = useRef();
  const Password = useRef();
  const ConfirmPassword = useRef();
  const [Islogin, Setlogin] = useState(false);
  const [UserErrors, SetUserErrors] = useState(false);
  const [Loading, Setloading] = useState(false);

  const { Onlogin, IsUserlog } = Usecontextalltime();

  const Ontgoole = () => {
    Setlogin((prev) => !prev);
  };

  const Onsubmithnadler = async (e) => {
    e.preventDefault();
    Setloading(true);

    let Useremail = emailref.current.value;
    let UserPassword = Password.current.value;
    if (IsUserlog) {
      let UserConfirmpassword = ConfirmPassword.current.value;
    }

    if (IsUserlog && UserPassword !== UserConfirmpassword) {
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
          UserPassword
        );
        console.log(response);

        Setlogin(true);
      } catch (error) {
        SetUserErrors(true);
        alert(error);
      }
    } else {
      try {
        let response = await signInWithEmailAndPassword(
          Auth,
          Useremail,
          UserPassword
        );
        Onlogin(response.user.uid);
      } catch (error) {
        SetUserErrors(true);
        alert(error);
      }
    }
    Setloading(false);
  };

  return (
    <div className="fullpage">
      <div className="container">
        <h1>{Islogin ? "LOG IN" : "SIGN UP"}</h1>
        <form onSubmit={Onsubmithnadler}>
          <input
            type="text"
            placeholder="Email"
            ref={emailref}
            style={UserErrors ? { color: "red" } : null}
            onChange={() => SetUserErrors(false)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            ref={Password}
            style={UserErrors ? { color: "red" } : null}
            onChange={() => SetUserErrors(false)}
          ></input>
          {!Islogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              ref={ConfirmPassword}
              style={UserErrors ? { color: "red" } : null}
              onChange={() => SetUserErrors(false)}
            ></input>
          )}
          <p>{Loading ? "Lodaing" : null}</p>
          <button>{Islogin ? "Log in" : "Sign up"}</button>
        </form>
        <button onClick={Ontgoole}>
          {Islogin ? "Create New Account" : "Have an Account? Log in"}
        </button>
      </div>
    </div>
  );
};

export default SingandLog;
