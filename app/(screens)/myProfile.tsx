import { View, Text, Image, TouchableOpacity ,TextInput} from 'react-native'
import React from 'react'


// ICON
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';


const MyProfileScreen = () => {
    const [fontsLoaded, fontError] = useFonts({
        Montserrat: require("../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
      });
  return (
    <LinearGradient   colors={["#E28807", "#D5E207", "#E28807"]} className='w-full h-full'>

        <View className='w-full h-full'>
            <View className='w-full pt-28 h-full'>
                    <View className='w-full bg-white rounded-t-3xl h-full'>
                        {/* avatar */}
                        <View className='w-full flex flex-col items-center'>
                            <View className='w-20 h-20 flex flex-col items-center justify-center bg-gray-200 rounded-full relative -top-10'>
                                <Image source={require('../../assets/images/avatar/1.png')} className='w-16 h-16 rounded-full' />
                                <TouchableOpacity className='w-6 h-6 bg-gray-900 rounded-full flex flex-col items-center justify-center absolute right-0 bottom-0'>
                                            <Entypo name="edit" size={12} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* form edit username and passsword */}
                        <View className='w-full px-8'>
                            <View className='w-full mb-2'>
                            <View className='w-full flex flex-row items-center'>
                                    <AntDesign name="edit" size={16} color="black" />
                                    <Text className='text-sm py-2 pl-2' style={{ fontFamily: "Montserrat" }}>First Name</Text>
                                </View>
                                <TextInput className='w-full border-b-2 border-gray-100 border-[1px] rounded-xl p-4' placeholder='Hoa Nguyen' />
                            </View>
                            <View className='w-full mb-2'>
                            
                                <View className='w-full flex flex-row items-center'>
                                    <AntDesign name="edit" size={16} color="black" />
                                    <Text className='text-sm py-2 pl-2' style={{ fontFamily: "Montserrat" }}>Last Name</Text>
                                </View>
                                <TextInput className='w-full border-b-2 border-gray-100 border-[1px] rounded-xl p-4' placeholder='Coder'/>
                            </View>
                            <View className='w-full mb-2'>
                            
                                <View className='w-full flex flex-row items-center'>
                                <Fontisto name="email" size={16} color="black" />
                                    <Text className='text-sm py-2 pl-2' style={{ fontFamily: "Montserrat" }}>Email</Text>
                                </View>
                                <TextInput className='w-full border-b-2 border-gray-100 border-[1px] rounded-xl p-4' placeholder='nguyen.thanh.hoa.ctec@gmail.com'/>
                            </View>
                            <View className='w-full mb-2'>
                                    <View className='w-full flex flex-row items-center'>
                                    <Entypo name="map" size={16} color="black" />
                                    <Text className='text-sm py-2 pl-2' style={{ fontFamily: "Montserrat" }}>Address</Text>
                                    </View>
                                    <TextInput className='w-full border-b-2 border-gray-100 border-[1px] rounded-xl p-4' placeholder='Ho Chi Minh City'/>
                                </View>
                                <View className='w-full mb-2'>
                            
                            <View className='w-full flex flex-row items-center'>
                            <AntDesign name="phone" size={16} color="black"  style={{transform:[{rotate:'90deg'}]}}/>
                                    <Text className='text-sm py-2 pl-2' style={{ fontFamily: "Montserrat" }}>Phone</Text>
                                    </View>
                                    <TextInput className='w-full border-b-2 border-gray-100 border-[1px] rounded-xl p-4' placeholder='nguyen.thanh.hoa.ctec@gmail.com'/>
                                </View>
                            <View className='w-full mb-2'>
                                <TouchableOpacity>
                                    <View className='w-full bg-gray-900 rounded-full py-4 flex flex-row items-center justify-center'>
                                        <Text className='text-center text-white text-sm pr-2'>Change Password</Text>
                                        <MaterialIcons name="password" size={24} color="white" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View className='w-full mb-2'>
                        
                                <TouchableOpacity>
                                    <View className='w-full bg-white border-red-500 border-[1px] rounded-full py-4 flex flex-row items-center justify-center'>
                                        <Text className='text-center text-red-500 text-sm pr-2'>Logout</Text>
                                        <AntDesign name="logout" size={16} color="#ef4444" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </View>
        </View>
    </LinearGradient>
  )
}

export default MyProfileScreen