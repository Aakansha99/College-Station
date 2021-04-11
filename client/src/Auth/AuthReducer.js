import { AUTH, AUTH1,LOGOUT } from "../Constants/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case AUTH:
    case AUTH1:
      console.log(action.payload.data.name);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("id", action.payload.data._id);
      localStorage.setItem("name", action.payload.data.name);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data,
      };
      case LOGOUT:
        localStorage.clear();
        console.log(localStorage);
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: true,
          user: null,
        };
    default:
      return {
        ...state,
      };
  }
};
