import React,{useContext,useState} from "react";
import useStyles from "./style.js";
import Input from "./input";
import Icon from "./icon";
import AuthContext from "../../Auth/AuthContext";

import Navbar from "../Navbar/Header";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const InvestorAuth = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const { Investorsignup, Investorsignin } = authContext;
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isInvestorSignup, setIsInvestorSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    if (isInvestorSignup) {
      Investorsignup(formData, history);
    } else {
      Investorsignin(formData, history);
    }
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsInvestorSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  return (
    <>
    {/* <Navbar /> */}
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            {isInvestorSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isInvestorSignup && (
                <>
                  <Input
                    name="name"
                    label="Name"
                    handleChange={handleChange}
                    autoFocus
                  />
                </>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />

              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />

              {/*{isSignup && (
                  <Input
                    name="confirmPassword"
                    label="Repeat Password"
                    handleChange={handleChange}
                    type="password"
                  />
                )}*/}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isInvestorSignup ? "Sign Up" : "Sign In"}
            </Button>

            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isInvestorSignup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default InvestorAuth;
