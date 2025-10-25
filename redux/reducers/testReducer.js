const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  token: null,
  error: null
}

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_LOGIN_LOADING':
      return {
        ...state,
        isLoading: true,
        error: null
      }
      
    case 'TEST_LOGIN_SUCCESS':
        console.log('Action Data:', action.data);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null
      }
      
    case 'TEST_LOGIN_ERROR':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null,
        error: action.error
      }
      
    case 'TEST_LOGOUT_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'RESET_LOGIN_PENDING':
      // cleanup khi authorize bị cancel
      return {
        ...state,
        isLoading: false,
      }
      
    case 'TEST_LOGOUT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null,
        error: null
      }
      
    default:
      return state
  }
}