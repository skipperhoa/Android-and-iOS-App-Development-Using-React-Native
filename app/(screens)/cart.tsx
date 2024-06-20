import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView,TextInput } from 'react-native'
import React from 'react'

// icon

import { AntDesign } from '@expo/vector-icons';

const CartScreen = () => {
  return (
    <SafeAreaView className='w-full h-full bg-white'>
      <ScrollView className='flex-1 h-full bg-gray-100'>
         <View className='w-full h-full p-4'>
              <TouchableOpacity className='w-full mb-4'>
                  <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                      <View className='w-1/3 p-1 flex flex-col items-center'>
                           <Image source={require('@/assets/products/1.png')}
                           className='w-full h-28 block m-auto' resizeMode='contain'
                           ></Image>
                      </View>
                      <View className='w-2/3 px-2'>
                            <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                            <View className='flex flex-row items-center justify-between'>
                                 <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                 <View className='flex flex-col gap-1'>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                      
                                             <Text className='text-sm text-center font-bold text-white'>-</Text>
                                        
                                     </TouchableOpacity>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                         <Text className='text-sm text-center font-bold text-white'>+</Text>
                                    </TouchableOpacity>
                                 </View>
                            </View>
                      </View>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-full mb-4'>
                  <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                      <View className='w-1/3 p-1 flex flex-col items-center'>
                           <Image source={require('@/assets/products/2.png')}
                           className='w-full h-28 block m-auto' resizeMode='contain'
                           ></Image>
                      </View>
                      <View className='w-2/3 px-2'>
                            <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                            <View className='flex flex-row items-center justify-between'>
                                 <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                 <View className='flex flex-col gap-1'>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                      
                                             <Text className='text-sm text-center font-bold text-white'>-</Text>
                                        
                                     </TouchableOpacity>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                         <Text className='text-sm text-center font-bold text-white'>+</Text>
                                    </TouchableOpacity>
                                 </View>
                            </View>
                      </View>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-full mb-4'>
                  <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                      <View className='w-1/3 p-1 flex flex-col items-center'>
                           <Image source={require('@/assets/products/3.png')}
                           className='w-full h-28 block m-auto' resizeMode='contain'
                           ></Image>
                      </View>
                      <View className='w-2/3 px-2'>
                            <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                            <View className='flex flex-row items-center justify-between'>
                                 <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                 <View className='flex flex-col gap-1'>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                      
                                             <Text className='text-sm text-center font-bold text-white'>-</Text>
                                        
                                     </TouchableOpacity>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                         <Text className='text-sm text-center font-bold text-white'>+</Text>
                                    </TouchableOpacity>
                                 </View>
                            </View>
                      </View>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-full mb-4'>
                  <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                      <View className='w-1/3 p-1 flex flex-col items-center'>
                           <Image source={require('@/assets/products/4.png')}
                           className='w-full h-28 block m-auto' resizeMode='contain'
                           ></Image>
                      </View>
                      <View className='w-2/3 px-2'>
                            <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                            <View className='flex flex-row items-center justify-between'>
                                 <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                 <View className='flex flex-col gap-1'>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                      
                                             <Text className='text-sm text-center font-bold text-white'>-</Text>
                                        
                                     </TouchableOpacity>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                         <Text className='text-sm text-center font-bold text-white'>+</Text>
                                    </TouchableOpacity>
                                 </View>
                            </View>
                      </View>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity className='w-full mb-4'>
                  <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                      <View className='w-1/3 p-1 flex flex-col items-center'>
                           <Image source={require('@/assets/products/5.png')}
                           className='w-full h-28 block m-auto' resizeMode='contain'
                           ></Image>
                      </View>
                      <View className='w-2/3 px-2'>
                            <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                            <View className='flex flex-row items-center justify-between'>
                                 <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                 <View className='flex flex-col gap-1'>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                      
                                             <Text className='text-sm text-center font-bold text-white'>-</Text>
                                        
                                     </TouchableOpacity>
                                     <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                         <Text className='text-sm text-center font-bold text-white'>+</Text>
                                    </TouchableOpacity>
                                 </View>
                            </View>
                      </View>
                  </View>
              </TouchableOpacity>
              
         </View>
      </ScrollView>
      {/* footer */}
      <View className='w-full px-4'>
         
          <View className='pt-4 rounded-t-2xl'>
            <Text className='font-bold text-sm pb-2'>Enter coupon code</Text>
            <View className='flex flex-row items-center gap-1'>
                <TextInput className='flex-1 h-10 border border-gray-300 rounded-md px-4' placeholder=''/>
                <TouchableOpacity>
                    <View className='bg-green-500 p-2 rounded-md'>
                        <Text className='text-center text-sm text-white'>Add coupon</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
          <View className='w-full flex flex-row items-center justify-between pt-4'>
                <Text className='font-bold text-xl'>Total</Text>
                <Text className='text-gray-600 font-bold text-xl'>100.000 đ</Text>
          </View>
          <View className='w-full mt-4'>
              <TouchableOpacity>
                  <View className='w-full bg-yellow-600 rounded-full flex flex-row items-center justify-center'>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                      <Text className='text-white font-bold block py-4 pl-2 text-center text-xl'>Check out</Text>
                  </View>
              </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen