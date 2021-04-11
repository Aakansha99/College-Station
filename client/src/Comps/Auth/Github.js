import React from "react";
import "../../styles/authScreen.css";

const GithubAuth = () => {
  return (
    <div>
      <button type="button" className="google-btn">
       <a href='https://github.com/login/oauth/authorize?client_id=97fc0a120edbecf65fa1'>    GITHUB SIGN IN</a>    
      </button>
    </div>
  );
};

export default GithubAuth;
