import { View, Text , useWindowDimensions,TextInput, TouchableOpacity,Platform} from 'react-native'
import React ,{useState} from 'react'
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from 'expo-constants';
import { Svg, Path } from 'react-native-svg';
import {Picker} from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
// icon
import { Foundation } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
const LoginPhoneScreen = () => {
const router = useRouter();
const {width,height} = useWindowDimensions();
const width_svg = width/3
const [selectedLanguage, setSelectedLanguage] = useState();

const checkPlatform = () => {
    if (Platform.OS === "ios") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <LinearGradient colors={["#FB9105", "#FB9105", "#FAA403"]}>
        <View className='w-full h-full'>
            <View className={`w-full pt-16 relative  bg-white`} style={{ height:height/2}}>
                <View style={{ height: Constants.statusBarHeight }} />
                 <Text className='text-2xl text-center text-orange-600 font-bold'>OTP Verification</Text>
                 <View className='flex flex-col items-center pt-8 relative'>
                        <Foundation name="mail" size={100} color="#ea580c" />
                        <View className='w-full absolute bottom-16'>
                           <View className='w-full flex flex-col items-center'>
                           <Svg width={width} height={80} viewBox={`0 0 ${width} 80`}>
                                <Path d='M0 10 L 100 80 L 200 10 L 300 80 L 400 10' stroke="#ea580c" strokeWidth="1" fill={'#fff'}   />
                            </Svg>
                           </View>
                        </View>

                        <Text className='text-xl text-center text-orange-600 font-bold pt-20'>Enter your mobile number</Text>
                        <Text className='text-sm text-center text-gray-800 font-bold pt-2'>We will send you a OTP Message</Text>
                 </View>
                 <View style={{transform: [{rotate: '180deg'}]}} className='absolute bottom-[-49px] z-10'>
                            <Svg width={width} height={50} viewBox={`0 0 ${width} 50`} >

                                <Path d={`M0 50 C ${width_svg} 0 ${width - width_svg} 0 ${width} 50`} stroke="transparent"   fill={'#fff'}
                                 />

                        </Svg>
                </View>
            </View>

            <View className='w-full h-full flex-1'>
                <View className='w-full h-full flex flex-col items-center justify-center'>

                    <View className='w-full' style={{paddingHorizontal:40}}>
                        <Picker
                            selectedValue={selectedLanguage}
                            style={{ color: '#fff' , backgroundColor: 'transparent'}}
                            selectionColor={'white'}
                           
                            itemStyle ={{ height: 50, color: '#fff',backgroundColor:'transparent' }}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="+84 Viet Nam" value="+84" style={{ backgroundColor: 'transparent' }} />
                            <Picker.Item label="+1 United States" value="+1"  style={{ backgroundColor: 'transparent' }} />
                            </Picker>
                        </View>
                        <View className='w-full px-10 pt-4'>
                            <TextInput className='w-full bg-white rounded-full p-4 border-[1px] border-gray-200/50 text-center' placeholder='Enter your mobile number'
                            placeholderTextColor={'gray'}
                            />
                        </View>
                        <View className='w-full px-24 mt-4'>
                            <TouchableOpacity className='w-full bg-orange-500 rounded-full p-1' onPress={() => router.push('verification')}>
                                <View className='w-full flex flex-row items-center justify-center gap-2'>

                                <Feather name="send" size={24} color="white" />
                                    <Text className='text-white py-1 text-center text-lg font-bold'>Send OTP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </View>
              
            </View>
        </View>
    </LinearGradient>
  )
}

export default LoginPhoneScreen