import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const tokens = useSelector((state) => state.Auth.tokens);
  const [username, Setusername] = useState("");
  const [photourl, setthephotourl] = useState("");
  const [useremail, Setuseremail] = useState("");

  useEffect(() => {
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCeTJueOOOp9VIvedFWi7ZLOG_exHKBjq4`,
        {
          requestType: "VERIFY_EMAIL",
          idToken: tokens
        }
      )
      .then((res) => {
        const Userdata = res?.data?.users;
        const name = Userdata[0].displayName;
        const email = Userdata[0].email;
        const photo = Userdata[0].photoUrl;
        Setusername(name);
        setthephotourl(photo);
        Setuseremail(email);
        console.log(useremail, username);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("Clean up the UserProfile component");
    };
  });

  if (username === "" && photourl === "" && useremail === "") {
    return (
      <div>
        <p>Please fill the from</p>
      </div>
    );
  }

  return (
    <>
      <div id="userprofilecomponent">
        {(username === "" || photourl === "" || useremail === "") && (
          <div>
            <p>Please fill the form</p>
          </div>
        )}

        {username !== "" && photourl !== "" && useremail !== "" && (
          <div id="userprofilecomponent-container">
            <div id="userphoto">
              <img src={photourl} className="userphoto" alt="User"></img>
            </div>
            <div>
              <p>USERNAME : {username}</p>
            </div>
            <div>
              <p>USEREMAIL : {useremail}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
