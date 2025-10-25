import { useSelector } from 'react-redux';
import { AuthState, CartState } from '@/types/index';
export const useAuthStore = () => {
  return useSelector((state: { auth: AuthState }) => state.auth);
};

export const useCartStore = () => {
  return useSelector((state: { cart: CartState }) => state.cart);
};