import { View, Text, SafeAreaView, Image ,Platform, TouchableOpacity} from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
const SplashScreen = () => {
    const router = useRouter();
    const [fontsLoaded, fontError] = useFonts({
        HelvetIns: require("../../assets/fonts/HelvetIns.ttf"),
        
      });
      const checkPlatform = () => {
        if (Platform.OS === "ios") {
          return "ios";
        } else {
          return "android";
        }
      };
  return (
    <LinearGradient colors={["#FE7908", "#FDDCC0", "#fff"]} className='w-full h-full'>
    <SafeAreaView className='w-full h-full'>
      <View className='w-full h-full'>
        {/* logo */}
          <View className='w-auto flex justify-center items-center pt-5 pb-20'>
                <Image source={require('../../assets/images/bg/bg02.png')} className='w-20 h-20' />
                <Text className='font-bold text-xl py-1 text-gray-700'>Welcome to</Text>
                <Text className='text-4xl text-gray-800' style={{fontFamily: "HelvetIns",fontWeight: 'bold'}}>Dev Food Viet Nam</Text>
          </View>

          {/* content */}
          <View className='flex-1'>
             <View className='w-full h-full pt-4'>
                <View className='flex-1 flex flex-col items-center px-8'>
                    <Image source={require('../../assets/images/bg/bg01.png')} className='w-full h-56 '  resizeMode='stretch'/>
                </View>
                <View className='w-full px-6'>
                     <TouchableOpacity className='w-full py-4 bg-[#04AE04] rounded-xl' onPress={() => router.push('home')}>
                          <Text className='w-auto font-bold text-sm text-white text-center uppercase py-1' style={{fontFamily: "HelvetIns",fontWeight: 'bold'}}>Tiếp tục mua hàng</Text>
                     </TouchableOpacity>
                     <View className='flex flex-row items-center py-2 pt-4'>
                        <View className='w-28 h-10 relative'>
                            <View className='w-10 h-10 bg-orange-200 rounded-full absolute flex flex-col items-center justify-center'>
                                <Image source={require('../../assets/images/avatar/1.png')} className='w-8 h-8 block'  resizeMode='stretch'/>
                            </View>
                            <View className='w-10 h-10 bg-blue-200 rounded-full absolute left-8 flex flex-col items-center justify-center'>
                                <Image source={require('../../assets/images/avatar/4.png')} className='w-8 h-8 block'  resizeMode='stretch'/>
                            </View>
                            <View className='w-10 h-10 bg-red-300 rounded-full absolute left-16 flex flex-col items-center justify-center'>
                                <Image source={require('../../assets/images/avatar/6.png')} className='w-8 h-8 block'  resizeMode='stretch'/>
                            </View>
                        </View>
                        <View>
                            <Text className='text-sm font-bold text-gray-900'>App được hơn 1tr người dùng</Text>
                            <Text className='text-sm text-gray-800'>Được kết nối nhiều tỉnh thành</Text>
                        </View>
                     </View>
                </View>
             </View>
             
          </View>
      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}

export default SplashScreen