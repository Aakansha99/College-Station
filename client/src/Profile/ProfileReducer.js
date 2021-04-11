import {
  GET_PROFILE,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILE_BYID,
  SET_CURRENT_PROFILE,
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
  FILTER_PROFILE,
  CLEAR_FILTER_PROFILE,
  GETAllSTUDENT,
} from "../Constants/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE: {
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    }
    case GET_PROFILE_BYID: {
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    }
    case SET_CURRENT_PROFILE:
      console.log(action.payload);
      return {
        ...state,
        currentProfile: action.payload,
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: null,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: [],
      };
    case SET_CURRENT_EXP:
      console.log(action.payload);
      return {
        ...state,
        currentExp: action.payload,
      };
    case CLEAR_CURRENT_EXP:
      return {
        ...state,
        currentExp: null,
      };
    case EDIT_EXP:
      return {
        ...state,
        currentExp: null,
        profile: [],
      };
    case SET_CURRENT_EDU:
      console.log(action.payload);
      return {
        ...state,
        currentEdu: action.payload,
      };
    case CLEAR_CURRENT_EDU:
      return {
        ...state,
        currentEdu: null,
        currentExp: null,
      };
    case EDIT_EDU:
      return {
        ...state,
        currentEdu: null,
        profile: [],
      };
    case PROFILE_CREATE_REVIEW:
      return {
        ...state,
        success: true,
      };
    case GETAllPROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case GETAllSTUDENT:
      return {
        ...state,
        student: action.payload,
        loading: false,
      };
    case FILTER_PROFILE:
      return {
        ...state,
        filtered: state.profile.filter((pro) => {
          const regex = new RegExp(`${action.payload}`, `gi`);
          return pro.name.match(regex); // || pro.username.match(regex)
        }),
      };
    case CLEAR_FILTER_PROFILE:
      return {
        ...state,
        filtered: null,
      };
    default:
      return {
        ...state,
      };
  }
};
