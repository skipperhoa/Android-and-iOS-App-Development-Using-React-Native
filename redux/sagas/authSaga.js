import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
//import Api from '...'
import { AUTH_TYPES } from "@/redux/constants/authTypes";
import { CART_TYPES } from '@/redux/constants/cartTypes';
import {loginUser, getUserByToken, registerUser,checkToken} from "@/api/auth"
import {getCartItemsApi} from "@/api/cart"
import storageApi from '@/storage'
function* fetchUserAsync(action) {
  try {
    console.log("RUN FETCH USER ASYNC");
    //check token in storage
    const token = yield call(storageApi.getItem, '@authToken')
    const response = yield call(checkToken, { token: token })
   
    if (response?.status === 1) {
      // Xác thực token và lấy thông tin user
      const userResponse = yield call(getUserByToken, { token: token })

      // Nếu thành công → dispatch login success
      yield put({ type: AUTH_TYPES.LOGIN_SUCCESS, payload: userResponse })

      // Lấy giỏ hàng
      const { carts } = yield call(getCartItemsApi, { token: token })
      yield put({ type: CART_TYPES.SET_CART_ITEMS_SUCCESS, payload: carts })

      // Nếu muốn lưu user profile riêng
      yield put({ type: AUTH_TYPES.SET_USER, payload: userResponse })

    } else {
      // Nếu không có token thì báo lỗi
      yield put({ type: AUTH_TYPES.LOGIN_FAILURE, message: response.message })
    } 
  } catch (e) {
    console.log("ERROR LOGIN ASYNC", e)
    yield put({
      type: AUTH_TYPES.LOGIN_FAILURE,
      payload: e.message
    });
  }
}

/* login user */
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
    else if(user?.access_token){
       try {
           console.log("GET INFO USER FROM API")

            // Xác thực token và lấy thông tin user
            const userResponse = yield call(getUserByToken, { token: user.access_token })

            // Nếu thành công → dispatch login success
            yield put({ type: AUTH_TYPES.LOGIN_SUCCESS, payload: userResponse })

            // Lấy giỏ hàng
            const { carts } = yield call(getCartItemsApi, { token: user.access_token })
            yield put({ type: CART_TYPES.SET_CART_ITEMS_SUCCESS, payload: carts })

            // Nếu muốn lưu user profile riêng
            yield put({ type: AUTH_TYPES.SET_USER, payload: userResponse })

            // Lưu token vào AsyncStorage
            yield call(storageApi.storeItem, { token: user.access_token })
            
          } catch (error) {
            // Nếu lỗi thì logout hoặc báo login error
            yield put({ type: AUTH_TYPES.LOGIN_FAILURE, error })
            yield call(storageApi.clearItem, '@authToken')
          }
        
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

function* logoutUser() {
  try{
      yield call(storageApi.clearItem, '@authToken')
      yield put({ type: CART_TYPES.CLEAR_CART_SUCCESS })
      yield put({ type: AUTH_TYPES.LOGOUT_SUCCESS })
  }
  catch(e){
      console.log("ERROR LOGOUT", e)
      yield put({ type: AUTH_TYPES.LOGOUT_FAILURE, message: e.message })
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
  //console.log("RUN SAGA")
  yield takeLatest(AUTH_TYPES.LOGIN_REQUEST_ASYNC, fetchUserAsync)
  yield takeLatest(AUTH_TYPES.LOGIN_REQUEST, fetchUser)
  yield takeLatest(AUTH_TYPES.REGISTER_REQUEST, fetchUserRegister)
  yield takeLatest(AUTH_TYPES.LOGOUT_REQUEST, logoutUser)
}

export default authSaga