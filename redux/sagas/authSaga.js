import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
//import Api from '...'
import { AUTH_TYPES } from "@/redux/constants/authTypes";
import {loginUser, getUserByToken, registerUser} from "@/api/auth"


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    console.log("RUN FETCH USER");
    const user = yield call(loginUser, {
      email: action.payload.email,
      password: action.payload.password
    })
    console.log("user", user)
    if(user?.error){
      yield put({ type: AUTH_TYPES.LOGIN_FAILURE, payload: user.error })
    }
    if(user?.access_token){

        yield put({ type: AUTH_TYPES.LOGIN_SUCCESS, payload: user })
        // chúng ta sẽ lấy thông tin user bằng token đã có 
        console.log("GET INFO USER FROM API")
        // call api , sau do put update user

        const userResponse = yield call(getUserByToken, {token:user.access_token})
       
        yield put({ type: AUTH_TYPES.GET_USER, payload: userResponse })
    }
   
  } catch (e) {
   console.log("ERROR LOGIN", e)
    yield put({ type: AUTH_TYPES.LOGIN_FAILURE, message: e.message })
  }
}

/* register user */
function* fetchUserRegister(action){
   try{
      const user = yield call(registerUser, {
        name: action.payload.name,
         email: action.payload.email,
         password: action.payload.password
      })
      console.log("USER REGISTER SUCCESS", user)
      if(user?.status===200){
         yield put({ type: AUTH_TYPES.REGISTER_SUCCESS, payload: user })
      }
   }catch(e){
      console.log("ERROR REGISTER", e)
      yield put({ type: AUTH_TYPES.REGISTER_FAILURE, message: e.message })
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
//function* mySaga() {
  // takeEvery : Xử lý mọi Action ( nó không huỷ các action trước đó)
 // yield takeEvery(AUTH_TYPES.LOGIN_REQUEST, fetchUser)
//}

/*ß
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* authSaga() {
 // takeLatest :  Chỉ chạy lần mới nhất, có nghĩa là, nó sẽ huỷ các action trước đó :))
  console.log("RUN SAGA")
  yield takeLatest(AUTH_TYPES.LOGIN_REQUEST, fetchUser)

  yield takeLatest(AUTH_TYPES.REGISTER_REQUEST, fetchUserRegister)
}

export default authSaga