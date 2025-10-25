import { AUTH_TYPES } from "@/redux/constants/authTypes";

/*LOGIN REQUEST */
export const loginRequest = (data) =>{
    return {
        type : AUTH_TYPES.LOGIN_REQUEST,
        payload : data
    }
}

/* LOGIN SUCCESS */
export const loginSuccess = (data) =>{
    return {
        type : AUTH_TYPES.LOGIN_SUCCESS,
        payload : data
    }
}

/* LOGIN FAILURE   */
export const loginFailure = (data) =>{
    return {
        type : AUTH_TYPES.LOGIN_FAILURE,
        payload : data
    }
}

export const getUser = (data)=>{
    return {
        type : AUTH_TYPES.GET_USER,
        payload : data
    }
}
export const chectToken = ()=>{
    return {
        type : AUTH_TYPES.CHECK_,
    }
}
export const logoutRequest = ()=>{
    return {
        type : AUTH_TYPES.LOGOUT_REQUEST,
    }
}
