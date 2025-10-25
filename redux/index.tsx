import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { AUTH_TYPES } from '@/redux/constants/authTypes'
/* import reducer */
import { authReducer } from '@/redux/reducers/authReducer'
import { cartReducer } from '@/redux/reducers/cartReducer'

import { testReducer } from '@/redux/reducers/testReducer'

/* import saga */
import authSaga from '@/redux/sagas/authSaga'
import cartSaga from '@/redux/sagas/cartSaga'
import testSaga from '@/redux/sagas/testSaga'
import { all } from 'redux-saga/effects'

// Tạo saga gốc
function* rootSaga() {
  yield all([
    authSaga(),
    cartSaga(),
    testSaga(),
    // thêm các saga khác nếu có
  ])
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    auth2: testReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(rootSaga)
// ✅ Gọi saga LOGIN_REQUEST_ASYNC mặc định khi app load
store.dispatch({ type: AUTH_TYPES.LOGIN_REQUEST_ASYNC })

// ...existing code...
export type RootState = ReturnType<typeof store.getState>;

export default store;