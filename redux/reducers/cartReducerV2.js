import { CART_TYPES } from "@/redux/constants/cartTypes";

const initCart = {
  numberCart: 0,
  items: [],
};

export const cartReducerV2 = (state = initCart, action) => {
  switch (action.type) {
    case CART_TYPES.GET_NUMBER_CART:
      return {
        ...state,
        numberCart: action.payload,
      };
    case CART_TYPES.SET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case CART_TYPES.ADD_CART_SUCCESS:
      return {
        ...state,
        numberCart: state.numberCart + 1,
        items:action.payload
      };
    
    default:
      return state;
  }
};
