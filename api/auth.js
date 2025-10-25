import {BASE_URL} from '@/constants/apiType'
/* example function login */
const loginUser = async(data)=>{
    const response = await  fetch(BASE_URL + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const user = await response.json();
    console.log("USER SUCCESS", user)
    return user;
  }


/* example function login */
const getUserByToken = async(data)=>{
    const response = await  fetch(BASE_URL + '/auth/me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.token}`
      },
    })
    const user = await response.json();
    console.log("INFO USER FROM API", user)
    return user;
  }

/* register */
const registerUser = async(data)=>{
  const response = await  fetch(BASE_URL + '/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const user = await response.json();
  console.log("USER REISTER SUCCESS", user)
  return user;
}

const checkToken = async(data)=>{
  console.log("first", data.token)
  const response = await fetch(BASE_URL + '/auth/check/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${data.token}`
    },
  })
  const result = await response.json();
  return result;
}
  

export {loginUser, getUserByToken, registerUser, checkToken}