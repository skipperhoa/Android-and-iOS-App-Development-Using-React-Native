import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
//import Api from '...'
import { AUTH_TYPES } from "@/redux/constants/authTypes";

/* example function login */
const loginUser = async(data)=>{
  const response = await  fetch('http://127.0.0.1:8000/api/auth/login', {
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



// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    console.log("RUN FETCH USER");
    const user = yield call(loginUser, {
      email: 'abcdef@example.com',
      password: '12345678'
    })
    yield put({ type: AUTH_TYPES.LOGIN_SUCCESS, payload: action.payload })
  } catch (e) {
    yield put({ type: AUTH_TYPES.LOGIN_FAILURE, message: e.message })
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
}

export default authSaga