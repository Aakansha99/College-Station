import React, { useReducer } from "react";
import axios from "axios";
import ProfileContext from "./ProfileContext";
import ProfileReducer from "./ProfileReducer";
import {
  GET_PROFILE,
  SET_CURRENT_PROFILE,
  GET_PROFILE_BYID,
  CLEAR_CURRENT_PROFILE,
  UPDATE_PROFILE,
  ADD_EXP,
  SET_CURRENT_EXP,
  CLEAR_CURRENT_EXP,
  EDIT_EXP,
  ADD_EDU,
  EDIT_EDU,
  SET_CURRENT_EDU,
  CLEAR_CURRENT_EDU,
  PROFILE_CREATE_REVIEW,
  GETAllPROFILE,
  GETAllSTUDENT,
  FILTER_PROFILE,
  CLEAR_FILTER_PROFILE,
} from "../Constants/actionTypes";

const ProfileState = (props) => {
  const initialState = {
    profile: [],
    student: [],
    filtered: null,
    currentProfile: null,
    currentExp: null,
    currentEdu: null,
  };
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  const GetProfile = async (id) => {
    try {
      const res = await axios.get(`/api/profile/${id}`);
      console.log(res);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getProfileById = async (id) => {
    try {
      const res = await axios.get(
        `/api/profile/${id}/byid`
      );
      console.log(res);
      dispatch({
        type: GET_PROFILE_BYID,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updateProfile = async (profile, history, id) => {
    console.log(id);
    const config = {
      headers: {
        "Conten-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        `/api/profile/${id}`,
        profile,
        config
      );
      console.log(res.data);
      dispatch({ type: UPDATE_PROFILE, payload: res.data });
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  const setCurrent = (profile) => {
    dispatch({ type: SET_CURRENT_PROFILE, payload: profile });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_PROFILE });
  };
  const AddExperience = async (exp, history, id) => {
    const config = {
      headers: {
        "Conten-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        `/api/experience/add/${id}`,
        exp,
        config
      );
      dispatch({
        type: ADD_EXP,
        payload: exp,
      });
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  const EditExperience = async (exp, history, id) => {
    const config = {
      headers: {
        "Conten-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        `/api/experience/edit/${id}`,
        exp,
        config
      );
      dispatch({
        type: EDIT_EXP,
        payload: exp,
      });
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  const setCurrentExp = (exp) => {
    dispatch({ type: SET_CURRENT_EXP, payload: exp });
  };
  const clearCurrentExp = () => {
    dispatch({ type: CLEAR_CURRENT_EXP });
  };
  const AddEducation = async (edu, history, id) => {
    const config = {
      headers: {
        "Conten-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        `/api/education/add/${id}`,
        edu,
        config
      );
      dispatch({
        type: ADD_EDU,
        payload: edu,
      });
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  const EditEducation = async (edu, history, id) => {
    const config = {
      headers: {
        "Conten-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        `/api/education/edit/${id}`,
        edu,
        config
      );
      dispatch({
        type: EDIT_EDU,
        payload: edu,
      });
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  const setCurrentEdu = (edu) => {
    dispatch({ type: SET_CURRENT_EDU, payload: edu });
  };
  const clearCurrentEdu = () => {
    dispatch({ type: CLEAR_CURRENT_EDU });
  };

  const createProfileReview = async (id, review) => {
    const config = {
      headers: {
        "Conten-Type": "application/json",
      },
    };

    try {
      await axios.post(`/api/profile/${id}/reviews`, review, config);
      dispatch({
        type: PROFILE_CREATE_REVIEW,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const GetAllProfile = async () => {
    try {
      const res = await axios.get(`/api/profile`);
      console.log(res.data);
      dispatch({
        type: GETAllPROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const GetAllStudent = async () => {
    try {
      const res = await axios.get(`/api/profile/allstudents`);
      console.log("=========================================");
      console.log(res.data);
      console.log("=========================================");
      dispatch({
        type: GETAllSTUDENT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const filterProfile = (text) => {
    dispatch({ type: FILTER_PROFILE, payload: text });
  };
  const clearFilter = (text) => {
    dispatch({ type: CLEAR_FILTER_PROFILE, payload: text });
  };
  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        filtered: state.filtered,
        currentProfile: state.currentProfile,
        currentExp: state.currentExp,
        currentEdu: state.currentEdu,
        student: state.student,
        GetProfile,
        setCurrent,
        clearCurrent,
        updateProfile,
        AddExperience,
        setCurrentExp,
        clearCurrentExp,
        EditExperience,
        AddEducation,
        EditEducation,
        setCurrentEdu,
        clearCurrentEdu,
        createProfileReview,
        GetAllProfile,
        filterProfile,
        clearFilter,
        getProfileById,
        GetAllStudent,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
