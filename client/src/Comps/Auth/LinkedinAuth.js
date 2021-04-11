import React from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";


const LinkedinAuth = () => {
  const handleSuccess = async (res) => {
    console.log(res);
  };

  const handleError = (error) => {
    console.log(error);
    console.log(" LINKEDIN SIGN IN FAILED");
  };

  return (
    <div>
      <LinkedIn
        clientId="78g81ieryh9jkj"
        onFailure={handleError}
        onSuccess={handleSuccess}
        redirectUri="http://localhost:3000/welcome1"
        renderElement={({ onClick, disabled }) => (
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className="google-btn"
          >
            LINKEDIN SIGN IN
          </button>
        )}
      />
      </div>
  );
};


export default LinkedinAuth;
