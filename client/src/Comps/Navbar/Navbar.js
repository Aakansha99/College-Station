import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import AuthContext from "../../Auth/AuthContext";

import { LinkContainer } from "react-router-bootstrap";
import Dropdown from "./Dropdown/dropdown";

const Header = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, logout } = authContext;

  let flag = null;
  if (localStorage.token) {
    flag = true;
  } else {
    flag = false;
  }
  const Exit = () => {
    logout();
  };
  return (
    <>
      {/* <header>
        <div className="logo">
          <h1>
            <Link to="/">✮Shodhshala</Link>
          </h1>
        </div>

        <ul style={transForm}>
          <li>
            {flag ? (
              <>
               
                <div className="dropdown">
                  <button className="dropbtn">{localStorage.name}</button>
                  <div class="dropdown-content">
                    <LinkContainer to="/profile">
                      <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/create-post">
                      <Nav.Link>New Posts</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/">
                      <Nav.Link onClick={Exit}>Logout</Nav.Link>
                    </LinkContainer>
                  </div>
                </div>
                
              </>
            ) : (
              <Dropdown />
            )}
          </li>
        </ul>
            </header>*/}
    </>
  );
};

export default Header;
