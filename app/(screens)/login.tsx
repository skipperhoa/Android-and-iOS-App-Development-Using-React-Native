import { View, Text, TextInput, TouchableOpacity, useWindowDimensions} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from 'expo-constants';
import { AntDesign, Ionicons ,Entypo,FontAwesome} from '@expo/vector-icons';

import { Path, Svg } from 'react-native-svg';
const LoginScreen = () => {
  const {width,height} = useWindowDimensions();
  const width_svg = width/3
  
  return (
     <LinearGradient colors={["#FB9105", "#FB9105", "#fff"]}>
        <View className='w-full h-full'>
            <View className='w-full h-full'>
              {/* header */}
              <View className='w-full relative bg-transparent pb-10'>
                <View style={{ height: Constants.statusBarHeight }} />
                  <Text className='text-3xl text-center text-white font-bold uppercase pt-20'>login</Text>
                  <View className='w-full px-8 py-10'>
                      <View className='w-full relative pb-6'>
                          <TextInput className='w-full bg-white rounded-full p-4 border-[1px] border-gray-200/50'
                          placeholder='Enter your name' placeholderTextColor={'gray'}
                          />
                          <TouchableOpacity className='absolute top-[13px] right-4 w-6 h-6 rounded-fullflex flex-col items-center justify-center'>
                               <Ionicons name='checkmark-outline' size={20} color='black' />
                          </TouchableOpacity>
                      </View>
                      <View className='w-full relative pb-12'>
                          <TextInput className='w-full bg-white rounded-full p-4 border-[1px] border-gray-200/50'
                          placeholder='Enter your password' placeholderTextColor={'gray'}
                          />
                          <TouchableOpacity className='absolute top-[13px] right-4 w-6 h-6 rounded-fullflex flex-col items-center justify-center'>
                               <AntDesign name='eye' size={20} color='black' />
                          </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity className='w-full bg-orange-500 rounded-full p-4'>

                            <Text className='text-center text-white text-xl'>Login</Text>

                        </TouchableOpacity>
                        <TouchableOpacity className='w-full'>
                            <Text className='text-white py-4 text-center text-sm'>Forgot your password?</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
                  <View className='absolute bottom-0'>
                          <Svg width={width} height={80} viewBox={`0 0 ${width} 80`} >
                              <Path d={`M0 80 C ${width_svg} 0 ${width - width_svg} 0 ${width} 80`} stroke="#FFF" fill={'#fff'} />
                          </Svg>
                  </View>
              </View>
              <View className='w-full flex-1 bg-white'>
                <View>
                  <Text className='text-gray-800 text-center text-sm'>Need an account?</Text>
                  <View className='w-full flex flex-row items-center justify-center pt-10 gap-4'>
                      <TouchableOpacity>
                          <View className='w-16 h-16 rounded-xl bg-gray-200/50 flex flex-col items-center justify-center'>
                             <AntDesign name="google" size={24} color="#07CA36" />
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <View className='w-16 h-16 rounded-xl bg-gray-200/50 flex flex-col items-center justify-center'>
                          <Entypo name="facebook" size={24} color="#0909D8" />
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <View className='w-16 h-16 rounded-xl bg-gray-200/50 flex flex-col items-center justify-center'>
                          <FontAwesome name="twitter-square" size={24} color="#0588F0" />
                          </View>
                      </TouchableOpacity>
                  </View>
                  <View className='w-full px-8'>
                     <TouchableOpacity className='w-full pt-4'>
                         <LinearGradient colors={["#FB9105", "#FCB531", "#F9A406"]} style={{borderRadius:30}}> 
                              <Text className='w-full p-4 text-center text-white text-xl'>Sign Up</Text>
                         </LinearGradient>
                     </TouchableOpacity>
                  </View>
                </View>
              </View>

            </View>
        </View>
     </LinearGradient>

    
  )
}

export default LoginScreen