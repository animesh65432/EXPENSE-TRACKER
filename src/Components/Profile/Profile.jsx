import React, { useState } from "react";
import "./Profile.css";
import axios from "axios";
import { Usecontextalltime } from "../Context/Context";

function Profile() {
  const [fullName, setFullName] = useState("");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
  const [Isloading, Setloading] = useState(false);

  const { tokens } = Usecontextalltime();
  const handleSubmit = async (event) => {
    Setloading(true);
    event.preventDefault();

    try {
      const payload = {
        idToken: tokens,
        displayName: fullName,
        photoUrl: profilePhotoUrl,
        returnSecureToken: true
      };

      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD3_cYhD3OyDKCdB6LmnFkL3lyEwtFjaoM`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: tokens,
            displayName: fullName,
            photoUrl: profilePhotoUrl,
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/JSON"
          }
        }
      );

      console.log("Profile updated successfully:", response);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    Setloading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Your Profile</h2>
      <button type="button">Cancel</button>
      <br />
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <label htmlFor="profilePhotoUrl">Profile Photo URL:</label>
      <input
        type="url"
        id="profilePhotoUrl"
        name="profilePhotoUrl"
        value={profilePhotoUrl}
        onChange={(e) => setProfilePhotoUrl(e.target.value)}
      />
      <button type="submit">{Isloading ? "Loading" : "Update"}</button>
    </form>
  );
}

export default Profile;
