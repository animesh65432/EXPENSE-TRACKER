import { useRef } from "react";
import ResetPassword from "../Customhooks/ResetPassword";
import { Link } from "react-router-dom";
import "./pass.css";
const SetPassword = () => {
  let useremail = useRef();

  const OnSubmitTheButtom = () => {
    if (useremail.current.value === "") {
      alert("please put email here");
    } else {
      ResetPassword(useremail.current.value);
    }
  };
  return (
    <>
      <div className="resetpassword">
        <div>
          <input placeholder="Email" ref={useremail}></input>

          <button onClick={OnSubmitTheButtom}>Submit</button>
          <button>
            <Link to="/">Go Back to Home</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SetPassword;
