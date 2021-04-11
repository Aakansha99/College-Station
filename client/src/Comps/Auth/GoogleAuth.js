import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import { AUTH1 } from "../../Constants/actionTypes";

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //Google-Login Success

  const googleSuccess = async (res) => {
    console.log(res);

    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH1, data: { result, token } });
      history.push("/");
      console.log("Google Sign In Success");
    } catch (error) {
      console.log(error);
    }
  };

  //Google-Login Error

  const googleError = (error) => {
    console.log(error);
    console.log("Google Sign In Failed");
  };

  return (
    <>
      <GoogleLogin
        clientId="822102600828-9nmno5md47cqni094jkr1cmd0h7tvtp8.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            type="button"
            className="google-btn"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            GOOGLE SIGN IN
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleError}
        cookiePolicy="single_host_origin"
      />
    </>
  );
};

export default GoogleAuth;
