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
      console.log("LOGIN_FAILURE", action);
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: action.payload.error,
      };
    case AUTH_TYPES.GET_USER:
      console.log("GET_USER", action);
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        token:action.payload.authorization.access_token
      }
    default:
      return state;
  }
};