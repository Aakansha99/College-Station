import React, { useContext, useState } from "react";
import Navbar from '../Navbar/Header'
import useStyles from "./style.js";
import Input from "./input";

import AuthContext from '../../Auth/AuthContext'



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

const UserAuth = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const{ Studentsignup ,Studentsignin}=authContext
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isStudentSignup, setIsStudentSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  
  const history = useHistory();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    if (isStudentSignup) {
      Studentsignup(formData, history);
    } else {
      Studentsignin(formData, history);
    }
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsStudentSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            {isStudentSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isStudentSignup && (
                <>
                  <Input
                    name="name"
                    label="Name"
                    handleChange={handleChange}
                    autoFocus
                  />
                  <Input
                    name="username"
                    label="UserName"
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
              {isStudentSignup ? "Sign Up" : "Sign In"}
            </Button>
{/* 
            <GoogleAuth />
            <LinkedinAuth /> */}
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isStudentSignup
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

export default UserAuth;
