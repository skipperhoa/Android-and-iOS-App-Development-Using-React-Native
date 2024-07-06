import { View, Text, SafeAreaView, Image ,Platform, TouchableOpacity} from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

// icon
import { AntDesign } from '@expo/vector-icons';
const SplashScreen = () => {
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
    <LinearGradient colors={["#EE6A03", "#F66F05", "#fff"]} className='w-full h-full'>
    <SafeAreaView className='w-full h-full'>
      <View className='w-full h-full'>
        {/* logo */}
          <View className='w-auto flex justify-center items-center pt-5 pb-4'>
                <Image source={require('../../assets/images/bg/bg02.png')} className='w-20 h-20' />
                <Text className='py-2 text-gray-700/200' style={{fontFamily: "Montserrat", fontSize:18}}>Welcome to</Text>
                <Text className=' text-gray-700/200' style={{fontFamily: "PlaywriteNL", fontSize:24}}>
                Dev Food Việt Nam</Text>
          </View>

          {/* content */}
          <View className='flex-1'>
             <View className='w-full h-full'>
                <View className='flex-1 flex flex-col items-center px-8'>
                    <Image source={require('../../assets/images/bg/bg01.png')} className='w-full h-44 '  resizeMode='contain'/>
                    <Text className='text-[16px] text-gray-900/100 py-4' style={{fontFamily: "Montserrat"}}>
                      Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go!
                    </Text>
                </View>
                <View className='w-full px-6'>
                     <TouchableOpacity className='w-full py-2 bg-[#04AE04] rounded-full' onPress={() => router.push('home')}>
                     <View className='flex flex-row items-center justify-center gap-2'>
                     <AntDesign name="rightcircleo" size={24} color="white" />
                          <Text className='w-auto font-bold text-sm text-white text-center uppercase py-1' style={{fontFamily: "Montserrat",fontWeight: 'bold'}}>Tiếp tục mua hàng</Text>
                    </View>
                     </TouchableOpacity>
                     <TouchableOpacity className='w-full py-2 bg-[#022DF2] rounded-full mt-2' onPress={() => router.push('login')}>
                         <View className='flex flex-row items-center justify-center gap-2'>
                           <AntDesign name="login" size={24} color="white" />
                            <Text className='w-auto font-bold text-sm text-white text-center uppercase py-1' style={{fontFamily: "Montserrat",fontWeight: 'bold'}}>Login</Text>
                         </View>
                     </TouchableOpacity>
                     <TouchableOpacity className='w-full py-2 border-[1px] border-gray-300/100 rounded-full mt-2' onPress={() => router.push('register')}>
                     <View className='flex flex-row items-center justify-center gap-2'>
                          <AntDesign name="adduser" size={24} color="black" />
                            <Text className='w-auto font-bold text-sm text-black text-center uppercase py-1' style={{fontFamily: "Montserrat",fontWeight: 'bold'}}>Register</Text>
                        </View>
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