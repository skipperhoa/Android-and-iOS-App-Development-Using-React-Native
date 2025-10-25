export const loginRequest = (user, password) => ({
  type: 'TEST_LOGIN_REQUEST',
  user,
  password
})

// Action creator cho logout
export const logout = () => ({
  type: 'TEST_LOGOUT'
})
