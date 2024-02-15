import React, {
  Fragment,
  useRef,
  useState,
  useCallback,
  useEffect
} from "react";
import "./Profile.css";
import { Usecontextalltime } from "../Context/Context";
import axios from "axios";

const Profile = () => {
  const fullNameRef = useRef();
  const profilePicRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { tokens } = Usecontextalltime();

  const getProfileData = useCallback(() => {
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCeTJueOOOp9VIvedFWi7ZLOG_exHKBjq4`,
        {
          idToken: tokens
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("hello");
    getProfileData();
  }, [getProfileData]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const profilePic = profilePicRef.current.value;

    if (!fullName || !profilePic) {
      setError("Please fill out all fields.");
      return;
    }

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCeTJueOOOp9VIvedFWi7ZLOG_exHKBjq4",
        {
          idToken: tokens,
          displayName: fullName,
          photoUrl: profilePic,
          returnSecureToken: true
        }
      )
      .then((res) => {
        console.log("you have made sucessfully call", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div className="user-profile-form-container">
        <h1>Contact Details</h1>
        <form onSubmit={submitHandler} className="user-profile-form">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              ref={fullNameRef}
              required
            />
          </div>

          <div>
            <label htmlFor="profilePic">Profile Photo URL</label>
            <input
              type="url"
              placeholder="Enter a valid profile photo URL"
              ref={profilePicRef}
              required
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          {success && (
            <div className="alert alert-success">
              Profile updated successfully!
            </div>
          )}

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Profile;
