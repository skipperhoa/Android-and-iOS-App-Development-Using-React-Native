import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,ScrollView, Image} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const FavouriteScreen = () => {
  const router = useRouter();
  return (
    <LinearGradient colors={["#E27E07", "#FB8A04","#FDD29F"]}>
     <SafeAreaView className='w-full h-full'>
        <View className='w-full pb-4'>
            {/* nav */}
            <View className='flex flex-row items-center px-2'>
                 <TouchableOpacity className='w-6' onPress={() => router.back()}>
                    <View>
                         <Ionicons name="chevron-back" size={24} color="white" />
                    </View>
                 </TouchableOpacity>
                 <View className='w-auto flex-1'>
                     <Text className='w-full text-center font-bold text-white text-xl'>Favourites</Text>
                 </View>
            </View>
        </View>
        <View className='w-full px-4 flex-1 h-full'>
           <ScrollView className='w-full pt-4'>
                <View className='w-full rounded-xl bg-white p-4'>
                    <TouchableOpacity className='w-full py-2'>
                        <View className='w-full flex flex-row'>
                            <Image source={require('../../assets/products/img01.jpg')} className='w-1/3 h-28 rounded-xl' resizeMode='cover'/>
                            <View className='flex-1 h-28 pl-4 relative'>
                                <Text className='text-sm text-black leading-5' numberOfLines={2}>Get HTML color codes, Hex color codes, RGB and HSL values with our color picker</Text>
                                <View className='w-full absolute bottom-0 pl-4'>
                                      <View className='flex flex-row items-center justify-between'>
                                            <View>
                                                <Text className='text-gray-500/100 line-through'>đ40.000</Text>
                                                <Text className='text-red-500 font-bold pt-1 text-[17px]'>đ50.000</Text>
                                            </View>
                                            <TouchableOpacity>
                                                  <View className='w-auto p-2 bg-red-500 rounded-sm px-4'>
                                                      <Text className='text-white font-bold text-[16px]'>Buy now</Text>
                                                  </View>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-full py-2'>
                        <View className='w-full flex flex-row'>
                            <Image source={require('../../assets/products/img02.jpg')} className='w-1/3 h-28 rounded-xl' resizeMode='cover'/>
                            <View className='flex-1 h-28 pl-4 relative'>
                                <Text className='text-sm text-black leading-5' numberOfLines={2}>Get HTML color codes, Hex color codes, RGB and HSL values with our color picker</Text>
                                <View className='w-full absolute bottom-0 pl-4'>
                                      <View className='flex flex-row items-center justify-between'>
                                            <View>
                                                <Text className='text-gray-500/100 line-through'>đ40.000</Text>
                                                <Text className='text-red-500 font-bold pt-1 text-[17px]'>đ50.000</Text>
                                            </View>
                                            <TouchableOpacity>
                                                  <View className='w-auto p-2 bg-red-500 rounded-sm px-4'>
                                                      <Text className='text-white font-bold text-[16px]'>Buy now</Text>
                                                  </View>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-full py-2'>
                        <View className='w-full flex flex-row'>
                            <Image source={require('../../assets/products/img03.jpg')} className='w-1/3 h-28 rounded-xl' resizeMode='cover'/>
                            <View className='flex-1 h-28 pl-4 relative'>
                                <Text className='text-sm text-black leading-5' numberOfLines={2}>Get HTML color codes, Hex color codes, RGB and HSL values with our color picker</Text>
                                <View className='w-full absolute bottom-0 pl-4'>
                                      <View className='flex flex-row items-center justify-between'>
                                            <View>
                                                <Text className='text-gray-500/100 line-through'>đ40.000</Text>
                                                <Text className='text-red-500 font-bold pt-1 text-[17px]'>đ50.000</Text>
                                            </View>
                                            <TouchableOpacity>
                                                  <View className='w-auto p-2 bg-red-500 rounded-sm px-4'>
                                                      <Text className='text-white font-bold text-[16px]'>Buy now</Text>
                                                  </View>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity className='w-full py-2'>
                        <View className='w-full flex flex-row'>
                            <Image source={require('../../assets/products/img03.jpg')} className='w-1/3 h-28 rounded-xl' resizeMode='cover'/>
                            <View className='flex-1 h-28 pl-4 relative'>
                                <Text className='text-sm text-black leading-5' numberOfLines={2}>Get HTML color codes, Hex color codes, RGB and HSL values with our color picker</Text>
                                <View className='w-full absolute bottom-0 pl-4'>
                                      <View className='flex flex-row items-center justify-between'>
                                            <View>
                                                <Text className='text-gray-500/100 line-through'>đ40.000</Text>
                                                <Text className='text-red-500 font-bold pt-1 text-[17px]'>đ50.000</Text>
                                            </View>
                                            <TouchableOpacity>
                                                  <View className='w-auto p-2 bg-red-500 rounded-sm px-4'>
                                                      <Text className='text-white font-bold text-[16px]'>Buy now</Text>
                                                  </View>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                      
                   
                      
                 
                    
                </View>
           </ScrollView>
           <View className='w-full flex flex-col items-center justify-between  pt-4'>
                <View className='w-full flex flex-row items-center justify-between '>
                      <TouchableOpacity className='w-1/2 p-2' onPress={() => router.push('/')}>
                            <View className='w-full bg-red-100/50 rounded-xl p-4 flex flex-row items-center justify-center'>
                              <MaterialIcons name="arrow-forward" size={24} color="black" />
                                <Text className='text-black font-bold text-[16px] text-center pl-2'>Go to shop</Text>
                            </View>
                      </TouchableOpacity>
                      <TouchableOpacity className='w-1/2 p-2' onPress={() => router.push('cart')}>
                            <View className='w-full bg-white rounded-xl p-4 flex flex-row items-center justify-center'>
                                <Ionicons name="cart" size={24} color="black" />
                                <Text className='text-black font-bold text-[16px] text-center pl-2'>Go to Cart</Text>
                            </View>
                      </TouchableOpacity>
                  </View>
              </View>
           </View>
     </SafeAreaView>
    </LinearGradient>
  )
}

export default FavouriteScreen

