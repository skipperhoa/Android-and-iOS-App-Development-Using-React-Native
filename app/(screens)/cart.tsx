import { View, Text,TouchableOpacity ,Image, ScrollView} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CartScreen = () => {
  const router = useRouter();
  return (
    <View className='flex-1 w-full h-full bg-white'>
        <View className='w-full h-full bg-white'>
           
             <ScrollView className='pb-10'>
                 <View className='relative p-4'>
                      <View className='flex flex-row items-center py-1 mb-2 rounded-md shadow-sm shadow-gray-200 bg-gray-100'>
                        <Image className='w-28 h-28' source={require('@/assets/images/iphone-15-pro-max-natural-titanium-2.png')}></Image>
                        <View>
                            <Text className='text-lg  font-bold'>Iphone 15 Pro Max 256GB</Text>
                            <Text className='text-xl pt-1 text-red-500 font-bold'>$250</Text>
                            <View className='flex flex-row items-center'>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-gray-200 m-1'>
                                  <Text className='text-xl text-center text-black'>-</Text>
                                </TouchableOpacity>
                                <View className='w-8 h-8 rounded-md flex flex-col items-cener justify-center bg-gray-200 text-black m-1'>
                                    <Text className='font-bold text-center'>12</Text>
                                </View>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-blue-600 m-1'>
                                 <Text className='text-xl text-center text-white'>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                      <View className='flex flex-row items-center py-1 mb-2 rounded-md shadow-sm shadow-gray-200 bg-gray-100'>
                        <Image className='w-28 h-28' source={require('@/assets/images/iphone-15-pro-max-natural-titanium-2.png')}></Image>
                        <View>
                            <Text className='text-lg  font-bold'>Iphone 15 Pro Max 256GB</Text>
                            <Text className='text-xl pt-1 text-red-500 font-bold'>$250</Text>
                            <View className='flex flex-row items-center'>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-gray-200 m-1'>
                                  <Text className='text-xl text-center text-black'>-</Text>
                                </TouchableOpacity>
                                <View className='w-8 h-8 rounded-md flex flex-col items-cener justify-center bg-gray-200 text-black m-1'>
                                    <Text className='font-bold text-center'>12</Text>
                                </View>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-blue-600 m-1'>
                                 <Text className='text-xl text-center text-white'>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                      <View className='flex flex-row items-center py-1 mb-2 rounded-md shadow-sm shadow-gray-200 bg-gray-100'>
                        <Image className='w-28 h-28' source={require('@/assets/images/iphone-15-pro-max-natural-titanium-2.png')}></Image>
                        <View>
                            <Text className='text-lg  font-bold'>Iphone 15 Pro Max 256GB</Text>
                            <Text className='text-xl pt-1 text-red-500 font-bold'>$250</Text>
                            <View className='flex flex-row items-center'>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-gray-200 m-1'>
                                  <Text className='text-xl text-center text-black'>-</Text>
                                </TouchableOpacity>
                                <View className='w-8 h-8 rounded-md flex flex-col items-cener justify-center bg-gray-200 text-black m-1'>
                                    <Text className='font-bold text-center'>12</Text>
                                </View>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-blue-600 m-1'>
                                 <Text className='text-xl text-center text-white'>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                      <View className='flex flex-row items-center py-1 mb-2 rounded-md shadow-sm shadow-gray-200 bg-gray-100'>
                        <Image className='w-28 h-28' source={require('@/assets/images/iphone-15-pro-max-natural-titanium-2.png')}></Image>
                        <View>
                            <Text className='text-lg  font-bold'>Iphone 15 Pro Max 256GB</Text>
                            <Text className='text-xl pt-1 text-red-500 font-bold'>$250</Text>
                            <View className='flex flex-row items-center'>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-gray-200 m-1'>
                                  <Text className='text-xl text-center text-black'>-</Text>
                                </TouchableOpacity>
                                <View className='w-8 h-8 rounded-md flex flex-col items-cener justify-center bg-gray-200 text-black m-1'>
                                    <Text className='font-bold text-center'>12</Text>
                                </View>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-blue-600 m-1'>
                                 <Text className='text-xl text-center text-white'>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                      <View className='flex flex-row items-center py-1 mb-2 rounded-md shadow-sm shadow-gray-200 bg-gray-100'>
                        <Image className='w-28 h-28' source={require('@/assets/images/iphone-15-pro-max-natural-titanium-2.png')}></Image>
                        <View>
                            <Text className='text-lg  font-bold'>Iphone 15 Pro Max 256GB</Text>
                            <Text className='text-xl pt-1 text-red-500 font-bold'>$250</Text>
                            <View className='flex flex-row items-center'>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-gray-200 m-1'>
                                  <Text className='text-xl text-center text-black'>-</Text>
                                </TouchableOpacity>
                                <View className='w-8 h-8 rounded-md flex flex-col items-cener justify-center bg-gray-200 text-black m-1'>
                                    <Text className='font-bold text-center'>12</Text>
                                </View>
                                <TouchableOpacity className='w-8 h-8 rounded-md bg-blue-600 m-1'>
                                 <Text className='text-xl text-center text-white'>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                      
                 </View>
             </ScrollView>
             <View className='bottom-0 w-full h-auto bg-green-600 rounded-t-lg p-4'>
                 <View className='flex flex-row justify-between mb-2'>
                     <Text className='text-xl text-white'>Total products:</Text>
                     <Text className='text-xl text-white'>12</Text>
                 </View>
                 <View className='flex flex-row justify-between mb-2'>
                     <Text className='text-xl text-white'>Total price:</Text>
                     <Text className='text-xl text-white'>$1000</Text>
                 </View>
                 <View className='border-t-2 border-t-gray-100 py-2 mt-2'></View>
                 <View className='flex flex-row justify-between mb-2'>
                     <Text className='text-xl text-white'>Total:</Text>
                     <Text className='text-xl text-white'>$1000</Text>
                 </View>
                 
                 <TouchableOpacity className='w-full bg-white rounded-full mt-4 mb-2'>
                     <Text className='text-xl text-black py-2 text-center font-bold'>Checkout</Text>
                 </TouchableOpacity>
             </View>
             
        </View>
    </View>
  )
}

export default CartScreen