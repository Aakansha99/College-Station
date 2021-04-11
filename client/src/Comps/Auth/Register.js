import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const handleSubmit = () => {};
  const handleChangeInput = () => {};
  return (
    <>
      {/* <Navbar /> */}

      <div className="login_page">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              onChange={handleChangeInput}
            />
          </div>

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

          <div>
            <label htmlFor="cf_password">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              id="cf_password"
              name="cf_password"
              onChange={handleChangeInput}
            />
          </div>

          <div className="row">
            <button type="submit">Register</button>
          </div>
        </form>

        <p>
          Already an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
