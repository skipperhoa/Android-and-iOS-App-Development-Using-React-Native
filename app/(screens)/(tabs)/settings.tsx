import { View, Text ,Image,  ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from 'expo-constants';

const SettingScreen = () => {
  
  return (
  <>
     <View style={{ height: Constants.statusBarHeight , backgroundColor: '#DCDCDC'}} />
      <ScrollView className='flex-1 w-full h-full bg-[#DCDCDC] px-4'>
        {/* account */}
          <View className='w-full mt-10 bg-white rounded-md relative flex flex-col items-center'>
              <View className='absolute -top-10'>
                  <View className='w-24 h-24 block m-auto bg-gray-200 rounded-full relative'>
                      <Image source={{uri:'https://hoanguyenit.com/images/hoanguyencoder.jpg'}}
                      className='w-20 h-20 block m-auto rounded-full'></Image>
                      <View className='absolute right-0 bottom-0'>
                          <FontAwesome name="check-circle" size={24} color="green" />
                      </View>
                </View>
              </View>
              <View className='pt-16'>
                  <Text className='text-xl font-bold block text-center'>Hoa Nguyen Coder</Text>
                  <View className='flex flex-row items-center gap-2 pt-2'>
                      <Text className='text-xl font-bold text-gray-500'>0975595084</Text>
                      <View className='w-auto bg-green-500 rounded-full'>
                          <Text className='p-2 px-4 text-white font-bold'>Đã xác thực</Text>
                      </View>
                  </View>
              </View>
              <View className='w-full flex flex-row items-center justify-between pt-3'>
                 <TouchableOpacity className='w-1/2 pr-1 '>
                    <View className='w-full flex flex-row items-center justify-center bg-[#F1F1F1] py-2 rounded-bl-md'>
                        <MaterialCommunityIcons name="account-details" size={24} color="#FA50E8" />
                        <Text className='text-md px-2 text-black'>Trang cá nhân</Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" />
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-1/2 pl-1'>
                    <View className='w-full flex flex-row items-center justify-center bg-[#F1F1F1] py-2 rounded-br-md'>
                        <AntDesign name="API" size={24} color="#4353F3" />
                        <Text className='text-md px-2 text-black'>Giới thiệu app</Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" />
                    </View>
                 </TouchableOpacity>
              </View>
          </View>

          {/* setting */}
          <View className='w-full'>
              <Text className='text-xl text-black font-bold block text-left pt-10'>Cài đặt</Text>
              <View className='w-full bg-white rounded-md mt-4 p-2'>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                            <MaterialIcons name="account-box" size={24} color="#105FD0" />
                            <Text className='flex-1 text-md p-2 text-black'>Quản lý tài khoản/thẻ</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <Ionicons name="settings-outline" size={24} color="#D010C2"/>
                            <Text className='flex-1 text-md p-2 text-black'>Cài đặt thanh toán</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <AntDesign name="login" size={24} color="#797703" />
                            <Text className='flex-1 text-md p-2 text-black'>Đăng nhập bảo mật</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <EvilIcons name="bell" size={24} color="#E19507" />
                            <Text className='flex-1 text-md p-2 text-black'>Cài đặt thông báo</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
              </View>
              
        
          </View>

           {/* tiện ích */}
           <View className='w-full'>
              <Text className='text-xl text-black font-bold block text-left pt-10'>Tiện ích</Text>
              <View className='w-full bg-white rounded-md mt-4 p-2'>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                            <MaterialIcons name="account-box" size={24} color="#105FD0" />
                            <Text className='flex-1 text-md p-2 text-black'>Điểm tin cậy app</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <Ionicons name="settings-outline" size={24} color="#D010C2"/>
                            <Text className='flex-1 text-md p-2 text-black'>Quản lý đặt chổ</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <AntDesign name="login" size={24} color="#797703" />
                            <Text className='flex-1 text-md p-2 text-black'>Thanh toán hoá đơn</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <EvilIcons name="bell" size={24} color="#E19507" />
                            <Text className='flex-1 text-md p-2 text-black'>Quản lý chi tiêu</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
              </View>
              
        
          </View>

          {/* trợ giúp */}
          <View className='w-full'>
              <Text className='text-xl text-black font-bold block text-left pt-10'>Trợ giúp</Text>
              <View className='w-full bg-white rounded-md mt-4 p-2'>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                            <MaterialIcons name="account-box" size={24} color="#105FD0" />
                            <Text className='flex-1 text-md p-2 text-black'>Điểm tin cậy app</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <Ionicons name="settings-outline" size={24} color="#D010C2"/>
                            <Text className='flex-1 text-md p-2 text-black'>Quản lý đặt chổ</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <AntDesign name="login" size={24} color="#797703" />
                            <Text className='flex-1 text-md p-2 text-black'>Thanh toán hoá đơn</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className='w-full'>
                     <View className='w-full flex flex-row items-center justify-between bg-[#fff] py-3'>
                        <View className='w-full flex flex-row items-center px-2'>
                        <EvilIcons name="bell" size={24} color="#E19507" />
                            <Text className='flex-1 text-md p-2 text-black'>Quản lý chi tiêu</Text>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                     </View>
                 </TouchableOpacity>
              </View>
              
        
          </View>
      </ScrollView>
  </>
  )
}

export default SettingScreen