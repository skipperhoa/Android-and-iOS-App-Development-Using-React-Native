import { View, Text ,ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
const MenuScreen = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" />
      <ScrollView className='flex1 w-full h-full px-4 bg-gray-100'>
          <View className='w-full flex flex-row flex-wrap justify-between mt-4 py-4 bg-white rounded-md'>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/1.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Thời Trang Nam</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/2.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Điện Thoại & Phụ Kiện</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/3.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Thiết Bị Điện Tử</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/4.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Máy Tính & Laptop</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/5.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Máy Ảnh & Máy Quay Phim</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/6.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Giày Dép Nam</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/7.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Thiết Bị Điện Gia Dụng</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/8.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Thể Thao & Du Lịch</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/9.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Ô Tô & Xe Máy & Xe Đạp</Text>
                  </View>
              </TouchableOpacity>    
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/10.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Thời Trang Nữ</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/11.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Mẹ & Bé</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/12.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Nhà Cửa & Đời Sống</Text>
                  </View>
              </TouchableOpacity>      
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/13.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Sắc Đẹp</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/14.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Sức Khỏe</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/15.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Giày Dép Nữ</Text>
                  </View>
              </TouchableOpacity>   
              <TouchableOpacity className='w-1/3 mb-2 px-2'>
                  <View>
                      <View className='w-24 h-24 bg-gray-100 rounded-full m-auto'>
                      <Image source={require('@/assets/images/list/16.png')} className="w-20 h-20 m-auto block  rounded-xl" resizeMode="stretch"/>
                      </View>
                      <Text className='text-center font-bold mt-2'>Túi Ví Nữ</Text>
                  </View>
              </TouchableOpacity>            
              
          </View>
      </ScrollView>
    </>
    
  )
}

export default MenuScreen