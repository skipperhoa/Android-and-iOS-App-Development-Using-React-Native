import { View, Text , useWindowDimensions,TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView,Platform} from 'react-native'
import React ,{useState} from 'react'
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from 'expo-constants';
import { Svg, Path } from 'react-native-svg';
import {Picker} from '@react-native-picker/picker';
// icon
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
const VerificationScreen = () => {
const {width,height} = useWindowDimensions();
const width_svg = width/3
const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <KeyboardAvoidingView className='flex-1'
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} 
   >
        <ScrollView className='w-full h-full'>
                <LinearGradient colors={["#FB9105", "#FB9105", "#FAA403"]} style={{height:height}}>
                    <View className='w-full h-full'>
                        <View className={`w-full pt-16 relative  bg-white`} style={{ height:height/2}}>
                            <View style={{ height: Constants.statusBarHeight }} />
                            <Text className='text-2xl text-center text-orange-600 font-bold'>Enter Verification Code</Text>
                            <View className='flex flex-col items-center pt-8 relative'>
                                
                                    <Ionicons name="mail-unread" size={100} color="#ea580c" />
                                    <View className='w-full absolute bottom-16'>
                                    <View className='w-full flex flex-col items-center'>
                                    <Svg width={width} height={80} viewBox={`0 0 ${width} 80`}>
                                            <Path d='M0 10 L 100 80 L 200 10 L 300 80 L 400 10' stroke="#ea580c" strokeWidth="1" fill={'#fff'}   />
                                        </Svg>
                                    </View>
                                    </View>

                                    <Text className='text-xl text-center text-orange-600 font-bold pt-20'>Enter OTP</Text>
                                    <Text className='text-sm text-center text-gray-800 font-bold pt-2'>We have sent OTP on your number</Text>
                            </View>
                            <View style={{transform: [{rotate: '180deg'}]}} className='absolute bottom-[-50px] z-10'>
                                        <Svg width={width} height={50} viewBox={`0 0 ${width} 50`} >

                                            <Path d={`M0 50 C ${width_svg} 0 ${width - width_svg} 0 ${width} 50`} stroke="#FFF"   fill={'#fff'}
                                            />

                                    </Svg>
                            </View>
                        </View>

                        <View className='w-full h-full flex-1'>
                            <View className='w-full h-full flex flex-col items-center justify-center'>
                                
                                    <View className='w-full'>
                                        <View className='w-full flex-row items-center justify-center gap-2 py-2'>
                                            <TextInput className='w-16 h-16 bg-orange-300/25 rounded-xl text-center text-white p-1 border-[1px]
                                            border-gray-200/50 text-2xl'   keyboardType="numeric"    maxLength={1}/>
                                            <TextInput className='w-16 h-16 bg-orange-300/25 rounded-xl text-center text-white p-1 border-[1px]
                                            border-gray-200/50 text-2xl'   keyboardType="numeric"    maxLength={1}/>
                                            <TextInput className='w-16 h-16 bg-orange-300/25 rounded-xl text-center text-white p-1 border-[1px]
                                            border-gray-200/50 text-2xl'   keyboardType="numeric"    maxLength={1}/>
                                            <TextInput className='w-16 h-16 bg-orange-300/25 rounded-xl text-center text-white p-1 border-[1px]
                                            border-gray-200/50 text-2xl'   keyboardType="numeric"    maxLength={1}/>
                                            <TextInput className='w-16 h-16 bg-orange-300/25 rounded-xl text-center text-white p-1 border-[1px]
                                            border-gray-200/50 text-2xl'   keyboardType="numeric"    maxLength={1}/>
                                        </View>
                                    
                                    </View>
                                    
                                    <View className='w-full px-24 mt-4'>
                                        <Text className='text-white text-sm py-2 text-center'>OTP Auto resend in 29 sec</Text>
                                        <TouchableOpacity className='w-full bg-orange-500 rounded-full p-1'>
                                            <View className='w-full flex flex-row items-center justify-center gap-2'>

                                            <Feather name="send" size={24} color="white" />
                                                <Text className='text-white py-1 text-center text-lg font-bold uppercase'>Verify</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        
                        </View>
                    </View>
                </LinearGradient>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default VerificationScreen