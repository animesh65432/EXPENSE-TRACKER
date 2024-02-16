import { useState, useRef, useContext, Fragment } from "react";
import { Usecontextalltime } from "../Context/Context";
import { Link } from "react-router-dom";

const SingandLog = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { Onlogin, Onuseradd } = Usecontextalltime();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setEmail("");
    setPasswordConfirmation("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setEmail(enteredEmail);
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeTJueOOOp9VIvedFWi7ZLOG_exHKBjq4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCeTJueOOOp9VIvedFWi7ZLOG_exHKBjq4";
    }
    if (!isLogin && enteredPassword !== passwordConfirmation) {
      alert("Password and confirmation password do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        const data = await response.json();
        let errorMessage = "Authentication failed";

        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      const token = data.idToken;
      if (isLogin) {
        Onlogin(token);
        Onuseradd(enteredEmail);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="auth">
        <div id="title">
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        </div>
        <form onSubmit={submitHandler} className="loginfrom">
          <div className="form-control">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>

          {!isLogin && (
            <div className="form-control">
              <label htmlFor="passwordConfirmation">Confirm Password</label>
              <input
                type="password"
                id="passwordConfirmation"
                required
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
          )}
          <div className="form-actions">
            {!isLoading ? (
              <button className="btn">{isLogin ? "Login" : "Sign Up"}</button>
            ) : (
              <p>Loading...</p>
            )}

            <button
              type="button"
              className="btn toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
            <button id="reset-buttom">
              <Link to="/Reset">Reset Pssword</Link>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SingandLog;
