import axios from "axios";

const Gettheuseremail = async (obj) => {
  try {
    let response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCeTJueOOOp9VIvedFWi7ZLOG_exHKBjq4`,
      obj
    );

    let email = response.data.email;
    console.log(email);
    return email;
  } catch (error) {
    let message = error.message;
    return message;
  }
};

export default Gettheuseremail;
