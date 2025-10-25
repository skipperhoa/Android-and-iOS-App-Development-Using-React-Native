/* 
CART_TYPES là một đối tượng định nghĩa các hằng số cho các hành động khác nhau liên quan đến chức năng giỏ hàng
Ví dụ, khi người dùng nhấp vào nút "Thêm vào giỏ hàng", một hành động với kiểu ADD_CART_REQUEST có thể được 
gửi đi để khởi tạo quá trình thêm sản phẩm vào giỏ hàng
Nếu thêm sản phẩm thành công, một hành động với kiểu ADD_CART_SUCCESS có thể được gửi đi để cập nhật trạng thái của giỏ hàng trong store của Redux
*/
export const CART_TYPES = {
  // 🛒 Thêm sản phẩm
  ADD_CART_REQUEST: 'ADD_CART_REQUEST',     
  ADD_CART_SUCCESS: 'ADD_CART_SUCCESS',     

  // 🗑️ Xóa sản phẩm
  DELETE_CART_REQUEST: 'DELETE_CART_REQUEST',
  DELETE_CART_SUCCESS: 'DELETE_CART_SUCCESS',

  // 🔼 Tăng số lượng
  INCREASE_QUANTITY_REQUEST: 'INCREASE_QUANTITY_REQUEST',
  INCREASE_QUANTITY_SUCCESS: 'INCREASE_QUANTITY_SUCCESS',

  // 🔽 Giảm số lượng
  DECREASE_QUANTITY_REQUEST: 'DECREASE_QUANTITY_REQUEST',
  DECREASE_QUANTITY_SUCCESS: 'DECREASE_QUANTITY_SUCCESS',

  // ♻️ Xóa toàn bộ giỏ
  CLEAR_CART_REQUEST: 'CLEAR_CART_REQUEST',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',

  // 📦 Lấy danh sách sản phẩm trong giỏ
  SET_CART_ITEMS_REQUEST: 'SET_CART_ITEMS_REQUEST',
  SET_CART_ITEMS_SUCCESS: 'SET_CART_ITEMS_SUCCESS',

  // 🔢 Đếm số lượng sản phẩm trong giỏ (optional)
  GET_NUMBER_CART: 'GET_NUMBER_CART',

  // ⚙️ Cập nhật giỏ (nếu có API riêng)
  UPDATE_CART_REQUEST: 'UPDATE_CART_REQUEST',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',

  // ❌ Lỗi
  CART_ERROR: 'CART_ERROR',
};
