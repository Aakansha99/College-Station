import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const handleSubmit = () => {};
  const handleChangeInput = () => {};
  return (
    <>
      <div className="login_page">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              id="email"
              name="email"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              onChange={handleChangeInput}
            />
          </div>

          <div className="row">
            <button type="submit">Login</button>
          </div>
        </form>

        <div className="hr">Or Login With</div>

        <div className="social">
          {/*<GoogleLogin
            clientId="Your google client id"
            buttonText="Login with google"
            onSuccess={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />

          <FacebookLogin
            appId="Your facebook app id"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
          />*/}
        </div>

        <p>
          New Customer? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
