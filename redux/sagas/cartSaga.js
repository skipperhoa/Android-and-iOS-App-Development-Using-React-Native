import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CART_TYPES } from "@/redux/constants/cartTypes";
import {addItemToCartApi, removeItemFromCartApi, getCartItemsApi} from "@/api/cart"
import storageApi from '@/storage'
const key = '@authToken'
function* fetchAddCartRequest(action) {
  const token = yield call(storageApi.getItem, key)
    // console.log('Token from storage', token);
    if (!token) {
      throw new Error('User is not authenticated');
    } 
    let data = {
      token: token,
      item: {
        id: action.payload.id,
        quantity:action.payload.quantity || 1
      }
    }
    const response = yield call(addItemToCartApi, data);
    return response;
}
function* addItemToCart(action) {
  try {

    const response = yield call(fetchAddCartRequest, action); // ✅ truyền action
   
    if (response?.carts?.length > 0) {
      yield put({
        type: CART_TYPES.SET_CART_ITEMS_SUCCESS,
        payload: response.carts,
      });
    }

  } catch (error) {

    yield put({ type: CART_TYPES.CART_ERROR, payload: error.message });
  }
}

/* Worker Saga: will be fired on REMOVE_ITEM action */
function* removeItemFromCart(action) {
  try {
    const token = yield call(storageApi.getItem, key)
    // console.log('Token from storage', token);
    if (!token) {
      throw new Error('User is not authenticated');
    } 
    const response = yield call(removeItemFromCartApi, {id: action.payload.id, token:token});
    yield put({ type: CART_TYPES.DELETE_CART_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: CART_TYPES.CART_ERROR, payload: error.message });
  }
}

/* Worker Saga: will be fired on INCREASE_ITEM_QUANTITY action INCREASE_QUANTITY*/
function* increaseItemQuantity(action) {
  try {
    yield call(fetchAddCartRequest, { payload: { id: action.payload.id, quantity: action.payload.quantity+1 } });
    yield put({ type: CART_TYPES.INCREASE_QUANTITY_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: CART_TYPES.CART_ERROR, payload: error.message });
  }
}
function* decreaseItemQuantity(action) {
  try {
    yield call(fetchAddCartRequest, { payload: { id: action.payload.id, quantity: action.payload.quantity-1 } });
    yield put({ type: CART_TYPES.DECREASE_QUANTITY_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: CART_TYPES.CART_ERROR, payload: error.message });
  }
}
/* Worker Saga: will be fired on CLEAR_CART action */
function* clearCart() {
  try {
   // const response = yield call(clearCartApi);
    yield put({ type: CART_TYPES.CLEAR_CART_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: CART_TYPES.CART_ERROR, payload: error.message });
  }
}

/* Worker Saga: will be fired on GET_CART_ITEMS action */
function* getCartItems() {
  try {
    const token = yield call(storageApi.getItem, '@authToken')
    // console.log('Token from storage', token);
    if (!token) {
      throw new Error('User is not authenticated');
    } 
    const response = yield call(getCartItemsApi,{ token: token});
    yield put({ type: CART_TYPES.SET_CART_ITEMS_SUCCESS, payload: response.carts });
  } catch (error) {
    yield put({ type: CART_TYPES.CART_ERROR, payload: error.message });
  }
} 

/* Watcher Saga 
takeLatest: Nếu người dùng dispatch cùng một action nhiều lần liên tiếp,
takeLatest sẽ chỉ chạy saga cho action cuối cùng, còn các saga đang chạy trước đó sẽ bị cancel (hủy)

*/
export function* cartSaga() {
  yield takeLatest(CART_TYPES.SET_CART_ITEMS_REQUEST, getCartItems);
  yield takeEvery(CART_TYPES.ADD_CART_REQUEST, addItemToCart);
  yield takeEvery(CART_TYPES.DELETE_CART_REQUEST, removeItemFromCart);
  yield takeEvery(CART_TYPES.INCREASE_QUANTITY_REQUEST, increaseItemQuantity);
  yield takeEvery(CART_TYPES.DECREASE_QUANTITY_REQUEST, decreaseItemQuantity);
  yield takeEvery(CART_TYPES.CLEAR_CART_REQUEST, clearCart);
  
}
export default cartSaga;