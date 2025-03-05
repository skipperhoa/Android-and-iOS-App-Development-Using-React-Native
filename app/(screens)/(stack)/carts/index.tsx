import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,StyleSheet,
    Image,
  } from "react-native";
  import { useRouter } from "expo-router";
  import {
    EvilIcons,
    AntDesign,
    Entypo,
    MaterialIcons,Ionicons,
    FontAwesome,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
  
  // 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
  import Constants from "expo-constants";
  
  const MAX_HEIGHT_HEADER = 200;
export default function CartScreen() {
    const router = useRouter();
  return (
    <>
          {/* header */}
      <View
        className="w-full absolute z-50"
        style={{ height: MAX_HEIGHT_HEADER }}
      >
        <View
          className="w-full bg-white pb-4"
          style={{ paddingTop: Constants.statusBarHeight + 10 }}
        >
          <View className="w-full flex-row items-center justify-between px-2">
            <TouchableOpacity onPress={() => router.back()}>
              <Entypo name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
            <View className="flex-1 px-2">
              <View className="w-ful">
                <Text className="w-full font-bold text-black text-2xl text-center">
                Carts
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("Chat")}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    {/* content */}
      <View className='w-full h-full flex flex-col'>
           
            <View className='w-full flex-1'>
                <ScrollView className='w-full'>
                    <View className='w-full' style={{paddingTop:Constants.statusBarHeight+70}}>
                        {/* box cart */}
                        <View className='w-full px-5'>
                            {/* item cart */}
                            <View className='w-full flex flex-row gap-5 bg-white p-5 rounded-md mb-5' style={styles.boxShadow}>
                                {/* image cart */}
                                <View className='w-[150px] flex flex-row items-center justify-center'>
                                    <Image source={require('@/assets/images/VinFast-VF3-11.png')} className='w-full h-[100px] rounded-md' 
                                    resizeMode='cover' />
                                </View>
                                {/* info cart */}
                                <View className='flex-1 relative'>
                                    <TouchableOpacity className='w-8 h-8 rounded-md flex-col justify-center items-center bg-red-100 absolute top-[-10px] right-[-10px]'>
                                            <FontAwesome name="remove" size={17} color="black" />
                                    </TouchableOpacity>
                                    <Text className='w-full text-black font-bold text-[16px]'>Vinfast VF 3 mới 2025</Text>
                                    <View className='w-full flex flex-row items-center mt-3'>
                                    <MaterialIcons name="attach-money" size={18} color={'#3b82f6'} />
                                        <Text className='w-full text-blue-500 font-bold text-[15px]'>299.000.000đ</Text>
                                    </View>
                                    <View className='w-full flex flex-row items-center gap-2 mt-3'>
                                        <TouchableOpacity className='w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md'><Text className='font-bold text-gray-500 text-sm'>-</Text></TouchableOpacity>
                                        <Text className='font-bold text-black text-[14px]'>1</Text>
                                        <TouchableOpacity className='w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md'><Text className='font-bold text-gray-500 text-sm'>+</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View className='w-full flex flex-row gap-5 bg-white p-5 rounded-md mb-5' style={styles.boxShadow}>
                                {/* image cart */}
                                <View className='w-[150px] flex flex-row items-center justify-center'>
                                    <Image source={require('@/assets/images/mau-xe-vinfast-Vf3-5.png')} className='w-full h-[100px] rounded-md' 
                                    resizeMode='cover' />
                                </View>
                                {/* info cart */}
                                <View className='flex-1 relative'>
                                    <TouchableOpacity className='w-8 h-8 rounded-md flex-col justify-center items-center bg-red-100 absolute top-[-10px] right-[-10px]'>
                                            <FontAwesome name="remove" size={17} color="black" />
                                    </TouchableOpacity>
                                    <Text className='w-full text-black font-bold text-[16px]'>Vinfast VF 3 mới 2025</Text>
                                    <View className='w-full flex flex-row items-center mt-3'>
                                    <MaterialIcons name="attach-money" size={18} color={'#3b82f6'} />
                                        <Text className='w-full text-blue-500 font-bold text-[15px]'>299.000.000đ</Text>
                                    </View>
                                    <View className='w-full flex flex-row items-center gap-2 mt-3'>
                                        <TouchableOpacity className='w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md'><Text className='font-bold text-gray-500 text-sm'>-</Text></TouchableOpacity>
                                        <Text className='font-bold text-black text-[14px]'>1</Text>
                                        <TouchableOpacity className='w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md'><Text className='font-bold text-gray-500 text-sm'>+</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View className='w-full flex flex-row gap-5 bg-white p-5 rounded-md mb-5' style={styles.boxShadow}>
                                {/* image cart */}
                                <View className='w-[150px] flex flex-row items-center justify-center'>
                                    <Image source={require('@/assets/images/mau-xe-vinfast-Vf3-7.png')} className='w-full h-[100px] rounded-md' 
                                    resizeMode='cover' />
                                </View>
                                {/* info cart */}
                                <View className='flex-1 relative'>
                                    <TouchableOpacity className='w-8 h-8 rounded-md flex-col justify-center items-center bg-red-100 absolute top-[-10px] right-[-10px]'>
                                            <FontAwesome name="remove" size={17} color="black" />
                                    </TouchableOpacity>
                                    <Text className='w-full text-black font-bold text-[16px]'>Vinfast VF 3 mới 2025</Text>
                                    <View className='w-full flex flex-row items-center mt-3'>
                                    <MaterialIcons name="attach-money" size={18} color={'#3b82f6'} />
                                        <Text className='w-full text-blue-500 font-bold text-[15px]'>299.000.000đ</Text>
                                    </View>
                                    <View className='w-full flex flex-row items-center gap-2 mt-3'>
                                        <TouchableOpacity className='w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md'><Text className='font-bold text-gray-500 text-sm'>-</Text></TouchableOpacity>
                                        <Text className='font-bold text-black text-[14px]'>1</Text>
                                        <TouchableOpacity className='w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md'><Text className='font-bold text-gray-500 text-sm'>+</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View className='w-full flex flex-row gap-5 bg-white p-5 rounded-md mb-5' style={styles.boxShadow}>
                                {/* image cart */}
                                <View className='w-[150px] flex flex-row items-center justify-center'>
                                    <Image source={require('@/assets/images/mau-xe-vinfast-Vf3-8.png')} className='w-full h-[100px] rounded-md' 
                                    resizeMode='cover' />
                                </View>
                                {/* info cart */}
                                <View className='flex-1 relative'>
                                    <TouchableOpacity className='w-8 h-8 rounded-md flex-col justify-center items-center bg-red-100 absolute top-[-10px] right-[-10px]'>
                                            <FontAwesome name="remove" size={17} color="black" />
                                    </TouchableOpacity>
                                    <Text className='w-full text-black font-bold text-[16px]'>Vinfast VF 3 mới 2025</Text>
                                    <View className='w-full flex flex-row items-center mt-3'>
                                    <MaterialIcons name="attach-money" size={18} color={'#3b82f6'} />
                                        <Text className='w-full text-blue-500 font-bold text-[15px]'>299.000.000đ</Text>
                                    </View>
                                    <View className='w-full flex flex-row items-center gap-2 mt-3'>
                                        <TouchableOpacity className='w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md'><Text className='font-bold text-gray-500 text-sm'>-</Text></TouchableOpacity>
                                        <Text className='font-bold text-black text-[14px]'>1</Text>
                                        <TouchableOpacity className='w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md'><Text className='font-bold text-gray-500 text-sm'>+</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            {/* footer */}
            <View className='w-full bg-blue-500 px-5 pt-5 pb-8'>
                {/* checkout */}
                <View className='flex flex-row items-center justify-between'>
                    <Text className='text-[15px] py-2 text-white'>Tổng giá tiền : </Text>
                    <Text className='text-[15px] py-2 text-white font-bold'>1000.000.000đ</Text>
                </View>
                <View className='flex flex-row items-center justify-between'>
                    <Text className='text-[15px] py-2 text-white'>Thuế : </Text>
                    <Text className='text-[15px] py-2 text-white font-bold'>100.000.000đ</Text>
                </View>
                <View className='flex flex-row items-center justify-between'>
                    <Text className='text-[15px] py-2 text-white'>Khuyến mãi : </Text>
                    <Text className='text-[15px] py-2 text-white font-bold'>20.000.000đ</Text>
                </View>

                {/* button checkout */}
                <TouchableOpacity className='w-full mt-4'>
                    <View className='w-full rounded-xl bg-white py-3 flex flex-row items-center justify-center gap-2'>
                        <AntDesign name="arrowright" size={24} color="black" />
                        <Text className='text-[15px] py-2 text-black font-bold text-center'>Thanh toán</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
      </View>


    </>
  )
}

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
})