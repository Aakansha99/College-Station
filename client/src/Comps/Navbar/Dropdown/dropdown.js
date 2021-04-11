import React from "react";
import { Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const dropdown = () => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">SIGN IN</button>
        <div className="dropdown-content">
          <LinkContainer to="/student-auth">
            <Nav.Link>Student</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/investor-auth">
            <Nav.Link>Investor</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/mentor-auth">
            <Nav.Link>Mentor</Nav.Link>
          </LinkContainer>
        </div>
      </div>
    </>
  );
};

export default dropdown;
