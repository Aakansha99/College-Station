import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { AUTH, AUTH1, LOGOUT } from "../Constants/actionTypes";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const Studentsignup = async (formData, history) => {
    console.log(formData);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "/api/student/signup",
        formData,
        config
      );
      console.log(res.data);
      dispatch({ type: AUTH, payload: res.data });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const Investorsignup = async (formData, history) => {
    console.log(formData);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "/api/investor/signup",
        formData,
        config
      );
      console.log(res.data);
      dispatch({ type: AUTH1, payload: res.data });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const Innovatorsignup = async (formData, history) => {
    console.log(formData);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "/api/innovator/signup",
        formData,
        config
      );
      console.log(res.data);
      dispatch({ type: AUTH1, payload: res.data });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const Investorsignin = async (formData, history) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/investor/signin",
        formData,
        config
      );
      dispatch({ type: AUTH, payload: data });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const Innnovatorsignin = async (formData, history) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/innovator/signin",
        formData,
        config
      );
      dispatch({ type: AUTH, payload: data });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const Studentsignin = async (formData, history) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/student/signin",
        formData,
        config
      );
      dispatch({ type: AUTH, payload: data });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const logout = (history) => {
    dispatch({
      type: LOGOUT,
    });
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        Studentsignup,
        Investorsignup,
        Innovatorsignup,
        Studentsignin,
        Innnovatorsignin,
        Investorsignin,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
