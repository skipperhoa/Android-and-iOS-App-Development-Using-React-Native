import { call, put, takeEvery, takeLatest, take,fork,cancel,cancelled } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Api = {
  // Giả lập API login
  authorize: (user, password) => {
    return new Promise((resolve, reject) => {
      console.log(`🔐 API: Đang xác thực ${user}...`)
      
      // Giả lập delay API
      setTimeout(() => {
        if (user === 'admin' && password === '123') {
          console.log('✅ API: Xác thực thành công!')
          resolve('token-abc-123')
        } else {
          console.log('❌ API: Sai thông tin đăng nhập!')
          reject(new Error('Invalid credentials'))
        }
      }, 5000) // Giả lập 2 giây
    })
  },

  // Lưu token vào localStorage
 storeItem: async ({ token }) => {
  try {
    console.log('💾 API: Lưu token vào AsyncStorage...');
    await AsyncStorage.setItem('@authToken', token);
    setTimeout(() => {
      console.log('✅ API: Token đã được lưu!');
    }, 500);
  } catch (error) {
    console.log('❌ API: Lưu token thất bại!', error);
  }
},

  // Xóa token khỏi AsyncStorage
  clearItem: async (key) => {
    try {
      console.log('🗑️ API: Xóa token khỏi AsyncStorage...');
      await AsyncStorage.removeItem(key);
      console.log('✅ API: Token đã được xóa!');
    } catch (error) {
      console.log('❌ API: Xóa token thất bại!', error);
    }
  }
}

function* authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password)
     let payload = {
        'user': user,
        'token': token
    }
    yield put({type: 'TEST_LOGIN_SUCCESS', payload})
   
    yield call(Api.storeItem, {token})
    return token
  } catch(error) {
    yield put({type: 'TEST_LOGIN_ERROR', error})
  } finally {
    if (yield cancelled()) {
      // ví dụ: reset trạng thái pending
      yield put({ type: 'RESET_LOGIN_PENDING' })
    }
  }
}
function* loginFlow() {
  while (true) {
    const { user, password } = yield take('TEST_LOGIN_REQUEST')

    // Dispatch action bắt đầu loading
    yield put({ type: 'TEST_LOGIN_LOADING' })

    // fork return a Task object
    const task = yield fork(authorize, user, password)

    // Chờ LOGOUT hoặc LOGIN_ERROR
    const action = yield take(['TEST_LOGOUT', 'TEST_LOGIN_ERROR'])

    if (action.type === 'TEST_LOGOUT') {
      console.log('📨 Saga: Nhận yêu cầu logout!')
      // Hủy task authorize
      yield cancel(task)

      // Dispatch action logout loading
      yield put({ type: 'TEST_LOGOUT_LOADING' })

      // Xóa token
      yield call(Api.clearItem, 'token')

      // Dispatch action logout thành công
      yield put({ type: 'TEST_LOGOUT_SUCCESS' })
    } else {
      console.log('⚠️ Saga: Login thất bại!')
      // TEST_LOGIN_ERROR đã được authorize dispatch rồi, không cần thêm logout
    }

    console.log('🔄 Saga: Quay lại chờ login mới...')
  }
}

export default loginFlow;