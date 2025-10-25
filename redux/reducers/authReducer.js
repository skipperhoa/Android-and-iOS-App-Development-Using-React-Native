import { AUTH_TYPES } from "@/redux/constants/authTypes";

/* SETUP STATE */
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

/*  REDUCER */

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.LOGIN_REQUEST:
      console.log("LOGIN_REQUEST", action);
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_TYPES.LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS", action);
      return {
        ...state,
        user: null,
        token: action.payload.access_token,
        loading: false,
        error: null,
      };
    case AUTH_TYPES.LOGIN_FAILURE:
    
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: action.payload.message,
      };
    case AUTH_TYPES.SET_USER:
     
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        token:action.payload.authorization.access_token
      };
    case AUTH_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: null,
      };
    case AUTH_TYPES.LOGOUT_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};