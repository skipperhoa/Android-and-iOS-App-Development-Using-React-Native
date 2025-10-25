import { CART_TYPES } from "@/redux/constants/cartTypes";
/* 
Đây là các action để thực hiện các thao tác khác nhau liên quan đến giỏ hàng
Các action này đều có một thuộc tính type để xác định loại action và một thuộc tính payload để chứa dữ liệu cần truyền đi.
Các action này sẽ được sử dụng trong reducer để cập nhật trạng thái của giỏ hàng trong Redux store.
*/
/*GET NUMBER CART*/
export const GetNumberCart = () => {
  return {
    type: CART_TYPES.GET_NUMBER_CART
  };
};

export const AddCart = (payload) => {
  return {
    type: CART_TYPES.ADD_CART_REQUEST,
    payload,
  };
};
export const UpdateCart = (payload) => {
  return {
    type: CART_TYPES.UPDATE_CART_REQUEST,
    payload,
  };
};
export const DeleteCart = (payload) => {
  return {
    type: CART_TYPES.DELETE_CART_REQUEST,
    payload,
  };
};

export const IncreaseQuantity = (payload) => {
  return {
    type: CART_TYPES.INCREASE_QUANTITY_REQUEST,
    payload,
  };
};
export const DecreaseQuantity = (payload) => {
  return {
    type: CART_TYPES.DECREASE_QUANTITY_REQUEST,
    payload,
  };
};

export const ClearCart = () => {
  return {
    type: CART_TYPES.CLEAR_CART_REQUEST,
  };
};



export const setCartItems = (payload) => {
  return {
    type: CART_TYPES.SET_CART_ITEMS_REQUEST,
    payload,
  };
}
