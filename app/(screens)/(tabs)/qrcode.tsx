import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest, logout } from '@/redux/actions/testAction'

export default function QRCodeScreen() {
  const dispatch = useDispatch()
  const { isAuthenticated, isLoading, user, error } = useSelector(state => state.auth2)
  useEffect(() => {
    console.log("Auth state changed:", { isAuthenticated, user, error });
  }, [isAuthenticated, user, error]);
  
  const handleLogin = () => {
    // Dispatch LOGIN_REQUEST action - saga sẽ bắt được và xử lý
    dispatch(loginRequest('admin', '123'))
  }
  
  const handleLogout = () => {
    // Dispatch LOGOUT action - saga sẽ bắt được và xử lý  
    dispatch(logout())
  }
  
  if (isLoading) {
    return <View><Text>Loading...</Text></View>
  }
  return (
    <View className='flex-1 justify-center items-center'>
      {isAuthenticated ? (
        <View>
          <Text>Chào mừng {user}!</Text>
          <TouchableOpacity onPress={handleLogout}><Text>Đăng xuất</Text></TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={handleLogin}><Text>Đăng nhập (admin/123)</Text></TouchableOpacity>
          {error && <Text style={{color: 'red'}}>Lỗi: {error}</Text>}
        </View>
      )}
    </View>
  )
      
   
  
}
