import { ROUTES_APP } from '@/routes'
import { useRouter } from 'expo-router'
import React from 'react'
import { View,Text,TouchableOpacity, Alert,ScrollView,StyleSheet,Image} from 'react-native'
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const MAX_HEIGHT_HEADER = 250;
const ProfileScreen=()=> {
  const router = useRouter();
  return (
    <>
        <View className='w-full h-full' style={{ paddingTop: Constants.statusBarHeight + 10 }}>
            {/* header */}
              <View
                className="w-full absolute z-10 bg-blue-500"
                style={{ height: MAX_HEIGHT_HEADER }}
              >
                <View
                  className="w-full  pb-4"
                  style={{ paddingTop: Constants.statusBarHeight + 10 }}
                >
                  <View className="w-full flex flex-row items-center justify-start px-2">
                    <TouchableOpacity onPress={() => router.back()}>
                      <Entypo name="chevron-left" size={28} color="white" />
                    </TouchableOpacity>
                    <View className="px-4">
                      <View className="w-ful">
                        <Text className="w-full font-bold text-white text-2xl text-center">
                          Profile
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* body */}
              <ScrollView className='flex-1 w-full h-full relative z-50 px-5' style={{ paddingTop: 100}}>
                  <View className='w-full h-full  bg-white rounded-[30px] relative'>
                      <View className='w-full h-full -mt-16'>
                          {/* avatar + info */}
                          <View className='w-full h-auto px-5'>
                               <View>
                                   <View className='w-36 h-36 rounded-full p-2 bg-gray-100 border-[5px] border-blue-500 mx-auto'>
                                       <Image source={require('@/assets/images/avatar/1.png')} className='w-full h-full rounded-full mx-auto'/>
                                   </View>
                                   <View className='w-full flex flex-col gap-2'>
                                       <Text className='text-center text-3xl font-bold mt-2 text-gray-700'>Hoa Nguyen Coder</Text>
                                       <Text className='text-center text-xl text-gray-400'>+84 123 456 789</Text>
                                       <Text className='text-center text-xl text-gray-400'>L7oIe@example.com</Text>
                                   </View>
                               </View>
                          </View>
                          <View className='w-full px-10 mt-10'>
                              <View className='w-full border-t-[1px] border-gray-100'>
                                  <View className='w-full flex flex-row items-center gap-8 py-5 pt-10'>
                                      <View className='w-[25px]'>
                                        <Entypo name="time-slot" size={22} color="#6b7280" />
                                      </View>
                                      <Text className='text-center text-xl font-bold text-gray-500'>Working Hours</Text>
                                  </View>
                                   <View className='w-full flex flex-row items-center gap-8 py-5'>
                                      <View className='w-[25px]'>
                                      <MaterialCommunityIcons name="account" size={24} color="#6b7280" />
                                      </View>
                                      <Text className='text-center text-xl font-bold text-gray-500'>My Account</Text>
                                  </View>
                                   <View className='w-full flex flex-row items-center gap-8 py-5'>
                                      <View className='w-[25px]'>

                                      <FontAwesome name="phone" size={24} color="#6b7280" />
                                      </View>
                                      <Text className='text-center text-xl font-bold text-gray-500'>Phone Number</Text>
                                  </View>
                                   <View className='w-full flex flex-row items-center gap-8 py-5'>
                                      <View className='w-[25px]'>

                                     <Entypo name="lock" size={24} color="#6b7280" />
                                      </View>
                                      <Text className='text-center text-xl font-bold text-gray-500'>Change Password</Text>
                                  </View>
                                   <View className='w-full flex flex-row items-center gap-8 py-5'>
                                      <View className='w-[25px]'>

                                    <MaterialIcons name="cast-connected" size={24} color="#6b7280" />
                                      </View>
                                      <Text className='text-center text-xl font-bold text-gray-500'>Social connect</Text>
                                  </View>
                                   <View className='w-full flex flex-row items-center gap-8 py-5'>
                                      <View className='w-[25px]'>

                                          <MaterialIcons name="work-history" size={24} color="#6b7280" />
                                      </View>
                                      <Text className='text-center text-xl font-bold text-gray-500'>History</Text>
                                  </View>
                              </View>
                          </View>
                          <View className='w-full px-10 mt-10'>
                             <TouchableOpacity className='w-full bg-red-500 rounded-lg py-4 mb-10'>
                                 <Text className='text-center text-xl font-bold text-white'>Logout</Text>
                             </TouchableOpacity>
                          </View>
                      </View>
                  </View>
              </ScrollView>
        </View>
    </>
  )
}

export default ProfileScreen