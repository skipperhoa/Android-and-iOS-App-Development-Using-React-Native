import AsyncStorage from '@react-native-async-storage/async-storage';
const storageApi = {
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
// get token từ AsyncStorage
 getItem: async (key) => {
  try {
    console.log('🔑 API: Lấy token từ AsyncStorage...');
    const token = await AsyncStorage.getItem(key);
    console.log('✅ API: Lấy token thành công!', token);
    return token;
  } catch (error) {
    console.log('❌ API: Lấy token thất bại!', error);
    return null;
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

export default storageApi;
