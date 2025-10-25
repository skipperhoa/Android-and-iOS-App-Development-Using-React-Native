import { CART_TYPES } from "@/redux/constants/cartTypes";

const initCart = {
  numberCart: 0,
  items: [],
};

export const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case CART_TYPES.GET_NUMBER_CART:
      return {
        ...state,
        numberCart: action.payload,
      };
    case CART_TYPES.SET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload, // danh sach carts
      };
    case CART_TYPES.ADD_CART_SUCCESS:
    
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.items.push(cart);
      } else {
        let check = false;
        state.items.map((item, key) => {
          if (item.id == action.payload.id) {
            state.items[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.items.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case CART_TYPES.INCREASE_QUANTITY_SUCCESS:
    
      let cartIndex = state.items.findIndex((item) => item.id == action.payload.id);
      state.items[cartIndex].quantity++;
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case CART_TYPES.DECREASE_QUANTITY_SUCCESS:
      let position = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      let quantity = state.items[position].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.items[position].quantity--;
      }

      return {
        ...state,
      };
    case CART_TYPES.DELETE_CART_SUCCESS:
      return {
        ...state,
        numberCart:state.numberCart--,
        items:state.items.filter((item) => {
          return item.id != action.payload.id
        })
      };
    case CART_TYPES.CLEAR_CART_SUCCESS:
      return {
        ...state,
        numberCart: 0,
        items: [],
      };
    case CART_TYPES.CART_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
