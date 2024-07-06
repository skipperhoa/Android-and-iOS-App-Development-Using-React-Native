import { View, Text, SafeAreaView, Image,TextInput, TouchableOpacity,Platform,ScrollView } from 'react-native'
import React from 'react'

import { useFonts } from "expo-font";
import { useRouter } from 'expo-router';
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from 'expo-constants';
// icon
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const RegisterScreen = () => {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("../../assets/fonts/HelvetIns.ttf"),
    PlaywriteNL: require("../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
    Montserrat: require("../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    
  });
  const checkPlatform = () => {
    if (Platform.OS === "ios") {
      return "ios";
    } else {
      return "android";
    }
  };
  return (
    <LinearGradient colors={["#FC7533", "#fff", "#FDDCC2"]} >
      <ScrollView className='w-full h-full'>
        <View className='w-full h-full'>
          {/* header top */}
          <View className='w-full flex flex-col items-center pt-4 relative'>
            <TouchableOpacity onPress={() => router.back()} className='w-8 h-8 absolute rounded-md left-4 z-10 flex flex-col items-center justify-center' style={{top:Constants.statusBarHeight}}>
                <AntDesign name="arrowleft" size={28} color="white" />
            </TouchableOpacity>
            <View style={{ height: Constants.statusBarHeight }} />
            <View className=' relative z-50 w-24 h-24 rounded-full bg-orange-300/100 flex flex-col items-center justify-center 
            shadow-lg shadow-orange-300/100'>

                <View className='w-20 h-20 bg-orange-100 rounded-full flex flex-col items-center justify-center'>
                    <Image source={require('../../assets/images/bg/bg02.png')} className='w-16 h-16 block' 
                    resizeMode='cover'/>
                </View>
            </View>
            <View className='w-full h-[500px] absolute bg-orange-500 rounded-b-[40px] top-0'></View>


          </View>
          {/* section */}
        <View className='w-full flex-1 pt-5 px-4'>
            <View className='w-full bg-white p-6 rounded-2xl shadow-md shadow-gray-200'>
                <Text className='w-full text-3xl font-bold'>Register</Text>
                <Text className='leading-6 text-gray-400 pt-2' style={{fontFamily: "Montserrat",
                fontSize: 16,

                }}>Enter Your Personal Information</Text>

                <View className='w-full pt-4 pb-1'>
                    <Text className='text-xl font-bold py-2 text-gray-600'>Username</Text>
                    <TextInput className='w-full bg-gray-100/50 rounded-full p-4 border-[1px] border-gray-200/50' 
                    placeholderTextColor={'gray'} style={{fontFamily:"Montserrat"}}
                    placeholder='Enter your name' />
                </View>
                <View className='w-full py-1'>
                    <Text className='text-xl font-bold py-2 text-gray-600'>Email</Text>
                    <TextInput className='w-full bg-gray-100/50 rounded-full p-4 border-[1px] border-gray-200/50' 
                    placeholderTextColor={'gray'} style={{fontFamily:"Montserrat"}}
                    placeholder='Enter your email' />
                </View>
                <View className='w-full py-1'>
                    <Text className='text-xl font-bold py-2 text-gray-600'>Password</Text>
                    <View className='w-full relative'>
                      <TextInput className='w-full bg-gray-100/50 rounded-full p-4 border-[1px] border-gray-200/50' 
                      placeholderTextColor={'gray'} style={{fontFamily:"Montserrat"}}
                      placeholder='Enter your password' />
                      <TouchableOpacity className='absolute  top-[13px] right-[12px]'>
                        <AntDesign name="eye" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='w-full py-1'>
                    <Text className='text-xl font-bold py-2 text-gray-600'>Confirm Password</Text>
                    <View className='w-full relative'>
                          <TextInput className='w-full bg-gray-100/50 rounded-full p-4 border-[1px] border-gray-200/50' 
                          placeholderTextColor={'gray'} style={{fontFamily:"Montserrat"}}
                          placeholder='Enter confirm password' />
                      <TouchableOpacity className='absolute  top-[13px] right-[12px]'>
                      <AntDesign name="eye" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                </View>
                <View className='w-full pt-4'>
                    <TouchableOpacity className='w-full rounded-full p-4 bg-orange-600'>
                        <Text className='text-center text-white text-xl'>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
      </ScrollView>
  </LinearGradient>

  )
}

export default RegisterScreen