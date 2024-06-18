import { View, Text,ScrollView ,TextInput, TouchableOpacity, Alert,Image,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
// icon
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const HomeScreen = () => {
  return (
    <SafeAreaProvider>
        {/* show content */}
        <ScrollView className='flex-1 w-full h-full bg-white' >
              <View className='w-full h-full bg-white'>
                   {/* search food */}
                   <View className='px-4 relative mt-2'>
                       <TextInput placeholder='Search food' 
                       className='border-[1px] bg-[#fff] border-[#F2F2F3] rounded-full h-10 px-4 pl-10 placeholder-gray-400'/>
                      <TouchableOpacity className='w-10 absolute z-10 left-6 top-[30%] -translate-y-[50%]' onPress={() => {Alert.alert('Search food')}}>
                          <EvilIcons name="search" size={24} color="black" />
                      </TouchableOpacity>
                   </View>

                   {/* category */}

                   <View className='w-full px-4 mt-4'>
                        <ScrollView 
                        // 🔥 Nếu bạn muốn viết kiểu Tailwindcss, thì cài thư viện "nativewind"
                        className='w-full' 
                        // 🚚 cho nó chạy theo chiều ngang
                        horizontal 
                        // 🚀 Viết css cấu hình cho ScrollView
                        contentContainerStyle={styles.contentContainer}
                        // 🎉 Ẩn thanh scroll trong ScrollView. Sẽ thấy thanh màu "xám", khi scrollView theo chiều ngang
                        showsHorizontalScrollIndicator={false}
                        >
                          <View className='w-full flex flex-row gap-3'>
                                  <TouchableOpacity>
                                      <View className='flex flex-row items-center justify-center p-2 bg-orange-500 rounded-full'>
                                          <Image source={require('@/assets/products/1.png')} className='w-14 h-14 rounded-full' /> 
                                          <Text className='px-2 font-bold text-center text-white'>Mì kim chi sườn sụn</Text>
                                      </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                      <View className='flex flex-row items-center justify-center p-2 bg-[#E99C03] rounded-full'>
                                          <Image source={require('@/assets/products/2.png')} className='w-14 h-14 rounded-full' /> 
                                          <Text className='px-2 font-bold text-center text-white'>Mì kim chi cá</Text>
                                      </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                      <View className='flex flex-row items-center justify-center p-2 bg-[#BB7E03] rounded-full'>
                                          <Image source={require('@/assets/products/1.png')} className='w-14 h-14 rounded-full' /> 
                                          <Text className='px-2 font-bold text-center text-white'>Mì xúc xích</Text>
                                      </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                      <View className='flex flex-row items-center justify-center p-2 bg-[#015D03] rounded-full'>
                                          <Image source={require('@/assets/products/1.png')} className='w-14 h-14 rounded-full' /> 
                                          <Text className='px-2 font-bold text-center text-white'>Mì kim chi bò mỹ</Text>
                                      </View>
                                  </TouchableOpacity>
                              </View>
                          </ScrollView>
                   </View>

                   {/* products */}

                   <View className='w-full px-4'>
                          <ScrollView className='w-full' horizontal  showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity className='w-1/2 px-2'>
                                    <View className='w-full p-4'>
                                          <Image source={require('@/assets/products/3.png')} className='w-40 h-40 m-auto block'  resizeMode='contain'/>
                                          <Text className='text-center font-bold text-[16px] pt-2'>Mì kim chi sườn sụn</Text>
                                          <Text className='text-center text-gray-500 text-sm pt-2'>Món mì cay</Text>
                                          <View className='w-full flex flex-row items-center justify-between pt-2'>
                                               <Text className='font-bold text-black text-[16px]'>₫ 50.000</Text>
                                               <MaterialIcons name="favorite" size={24} color="#D78D03" />
                                          </View>
                                      </View>  
                                </TouchableOpacity> 
                                <TouchableOpacity className='w-1/2 px-2'>
                                    <View className='w-full p-4'>
                                          <Image source={require('@/assets/products/6.png')} className='w-40 h-40 m-auto block'  resizeMode='contain'/>
                                          <Text className='text-center font-bold text-[16px] pt-2'>Mì kim chi sườn sụn</Text>
                                          <Text className='text-center text-gray-500 text-sm pt-2'>Món mì cay</Text>
                                          <View className='w-full flex flex-row items-center justify-between pt-2'>
                                               <Text className='font-bold text-black text-[16px]'>₫ 50.000</Text>
                                               <MaterialIcons name="favorite" size={24} color="#D78D03" />
                                          </View>
                                      </View>  
                                </TouchableOpacity> 
                               
                           </ScrollView> 
                   </View>

                   {/* Top san pham */}

                  <View className='w-full mt-4 px-4'>
                      <View className='flex flex-row items-center justify-between py-2'>
                          <Text className='font-bold text-xl'>Top sản phẩm</Text>
                          <TouchableOpacity>
                          <EvilIcons name="arrow-right" size={30} color="#D78D03" />
                          </TouchableOpacity>
                      </View>
                      <View className='w-full mt-2'>
                          <ScrollView horizontal className='w-full'  showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity className='w-1/2 px-2'>
                                    <View className='w-full p-4 shadow-md border-[1px] border-[#F5F5F5] rounded-full bg-white flex flex-row items-center'>
                                        <Image source={require('@/assets/products/3.png')} className='w-20 h-20 m-auto block'  resizeMode='contain'/>
                                        <View className='pl-2'>
                                            <Text className='text-center font-bold text-[16px] pt-2'>Mì kim chi sửa sụn</Text>
                                            <View className='flex flex-row items-center gap-1 pt-1'>
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='w-1/2 p-2'>
                                    <View className='w-full p-4 shadow-md border-[1px] border-[#F5F5F5] rounded-full bg-white flex flex-row items-center'>
                                        <Image source={require('@/assets/products/6.png')} className='w-20 h-20 m-auto block'  resizeMode='contain'/>
                                        <View className='pl-2'>
                                            <Text className='text-center font-bold text-[16px] pt-2'>Mì kim chi sửa sụn</Text>
                                            <View className='flex flex-row items-center gap-1 pt-1'>
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            <AntDesign name="star" size={16} color="#F1E604" />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                          </ScrollView>
                      </View>
                  </View>

                  {/* product */}

                  <View className='w-full mt-4 pb-10'> 
                    <View className='flex flex-row items-center justify-between py-2 px-4'>
                          <Text className='font-bold text-xl'>Sản phẩm mới</Text>
                          <TouchableOpacity>
                          <EvilIcons name="arrow-right" size={30} color="#D78D03" />
                          </TouchableOpacity>
                      </View>
                      <View className='w-full px-2 mt-2'>
                          <View className='flex flex-row flex-wrap'>
                               <TouchableOpacity className='w-1/2 p-2'>
                                   <View className='w-full p-4 shadow-md border-[1px] border-[#F5F5F5] rounded-md bg-white relative'>
                                       <Image source={require('@/assets/products/3.png')} className='w-full h-28 m-auto block' 
                                        resizeMode='stretch'/>
                                       <Text className='text-center font-bold text-[16px] pt-2'>Mì kim chi sửa sụn</Text>
                                       <Text className='text-gray-400 text-center'>Mi cay 2 do</Text>
                                       <View className='flex flex-row items-center justify-between pt-1'>
                                          <Text className='font-bold'>$50.000</Text>
                                          <Ionicons name="arrow-forward-circle" size={24} color="black" />
                                       </View>
                                      <TouchableOpacity className='absolute top-2 right-2'>
                                         <MaterialIcons name="favorite-outline" size={24} color="red" />
                                      </TouchableOpacity>
                                   </View>
                               </TouchableOpacity>
                               <TouchableOpacity className='w-1/2 p-2'>
                                   <View className='w-full p-4 shadow-md border-[1px] border-[#F5F5F5] rounded-md bg-white relative'>
                                       <Image source={require('@/assets/products/2.png')} className='w-full h-28 m-auto block' 
                                        resizeMode='stretch'/>
                                       <Text className='text-center font-bold text-[16px] pt-2'>Mì kim chi sửa sụn</Text>
                                       <Text className='text-gray-400 text-center'>Mi cay 2 do</Text>
                                       <View className='flex flex-row items-center justify-between pt-1'>
                                          <Text className='font-bold'>$50.000</Text>
                                          <Ionicons name="arrow-forward-circle" size={24} color="black" />
                                       </View>
                                       <TouchableOpacity className='absolute top-2 right-2'>
                                         <MaterialIcons name="favorite-outline" size={24} color="red" />
                                      </TouchableOpacity>
                                   </View>
                               </TouchableOpacity>

                               <TouchableOpacity className='w-1/2 p-2'>
                                   <View className='w-full p-4 shadow-md border-[1px] border-[#F5F5F5] rounded-md bg-white ralative'>
                                       <Image source={require('@/assets/products/5.png')} className='w-full h-28 m-auto block' 
                                        resizeMode='stretch'/>
                                       <Text className='text-center font-bold text-[16px] pt-2'>Mì kim chi sửa sụn</Text>
                                       <Text className='text-gray-400 text-center'>Mi cay 2 do</Text>
                                       <View className='flex flex-row items-center justify-between pt-1'>
                                          <Text className='font-bold'>$50.000</Text>
                                          <Ionicons name="arrow-forward-circle" size={24} color="black" />
                                       </View>
                                       <TouchableOpacity className='absolute top-2 right-2'>
                                         <MaterialIcons name="favorite-outline" size={24} color="red" />
                                      </TouchableOpacity>
                                   </View>
                               </TouchableOpacity>

                               <TouchableOpacity className='w-1/2 p-2'>
                                   <View className='w-full p-4 shadow-md border-[1px] border-[#F5F5F5] rounded-md bg-white ralative'>
                                       <Image source={require('@/assets/products/6.png')} className='w-full h-28 m-auto block' 
                                        resizeMode='stretch'/>
                                       <Text className='text-center font-bold text-[16px] pt-2'>Mì kim chi sửa sụn</Text>
                                       <Text className='text-gray-400 text-center'>Mi cay 2 do</Text>
                                       <View className='flex flex-row items-center justify-between pt-1'>
                                          <Text className='font-bold'>$50.000</Text>
                                          <Ionicons name="arrow-forward-circle" size={24} color="black" />
                                       </View>
                                       <TouchableOpacity className='absolute top-2 right-2'>
                                         <MaterialIcons name="favorite-outline" size={24} color="red" />
                                      </TouchableOpacity>
                                   </View>
                               </TouchableOpacity>
                          </View>

                      </View>
                  </View>
                   
                  


              </View>
        </ScrollView>
        {/* fix footer */}
        <View className='w-full pb-5 px-4 pt-1 bg-white'>
             <View className='w-full flex flex-row items-center justify-between bg-yellow-500 py-4 px-5 rounded-full'>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="format-list-text" size={30} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <MaterialCommunityIcons name="cart-outline" size={30} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity className='relative'>
                     <View className='w-full flex flex-col items-center justify-center'>
                        <View className='absolute -top-16 w-16 h-16 bg-yellow-800 rounded-full items-center justify-center border-[4px] border-white shadow-xl'>
                                <AntDesign name="plus" size={30} color="white" />
                        </View>
                     </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                     <Ionicons name="notifications-outline" size={30} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <AntDesign name="user" size={30} color="black" />
                  </TouchableOpacity>
             </View>
        </View>
  </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20
    }
  });
export default HomeScreen