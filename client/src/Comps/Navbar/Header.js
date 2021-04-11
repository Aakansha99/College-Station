import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import Logo from "./assets/Logo.png";
import useStyles from "./style";

import AuthContext from "../../Auth/AuthContext";
import Dropdown from "./Dropdown/dropdown";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, logout } = authContext;

  let flag = null;
  if (localStorage.token) {
    flag = true;
  } else {
    flag = false;
  }
  const Exit = () => {
    logout(history);
  };
  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h4"
            align="center"
          >
          <img src={Logo} style={{height: "80px", width: "180px", margin: "2rem", borderRadius: "10px"}} alt="Brand logo"/>
          
          </Typography>
          {/*<img
            className={classes.image}
            src={memories}
            alt="icon"
            height="40"
  />*/}
        </div>

        <Toolbar className={classes.toolbar}>
          {flag ? (
            <>
              <div className="dropdown">
                <button className="dropbtn" type="button">
                  <Link to="/chat">Study Together</Link>
                </button>
              </div>

              <div className="dropdown">
                <button className="dropbtn" type="button">
                  <a href="http://localhost:8000/roomstart.html">
                    Code Together
                  </a>
                </button>
              </div>
              <div>
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    Query
                  </button>
                  <div className="dropdown-content">
                    <LinkContainer to="/askQuery">
                      <Nav.Link className={classes.navLink}>
                        Ask Your Query
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="askedByPeers">
                      <Nav.Link className={classes.navLink}>
                        Answer Peers Queries
                      </Nav.Link>
                    </LinkContainer>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn" type="button">
                  Projects
                </button>
                <div className="dropdown-content">
                  <LinkContainer to="/projects">
                    <Nav.Link className={classes.navLink}>
                      View Project
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/create-post">
                    <Nav.Link className={classes.navLink}>
                      New Project Idea
                    </Nav.Link>
                  </LinkContainer>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn" type="button">
                  Notes
                </button>
                <div className="dropdown-content">
                  <LinkContainer to="/uploadnotes">
                    <Nav.Link className={classes.navLink}>
                      Upload Notes
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/getnotes">
                    <Nav.Link className={classes.navLink}>Get Notes</Nav.Link>
                  </LinkContainer>
                </div>
              </div>

              <div></div>
              <div className={classes.profile}>
                <Link to={"/profile"}>
                  <Avatar className={classes.purple} alt={localStorage.name}>
                    {localStorage.name.charAt(0).toUpperCase()}
                  </Avatar>
                </Link>

                <Typography className={classes.userName} variant="h6">
                  {localStorage.name}
                </Typography>

                <Button
                  variant="contained"
                  className={classes.logout}
                  color="secondary"
                  onClick={Exit}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <Dropdown />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
