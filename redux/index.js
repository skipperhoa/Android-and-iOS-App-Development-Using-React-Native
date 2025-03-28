import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

/* import reducer */
import { authReducer } from '@/redux/reducers/authReducer'

/* import saga */
import authSaga from '@/redux/sagas/authSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(authSaga)

// render the application

export default store