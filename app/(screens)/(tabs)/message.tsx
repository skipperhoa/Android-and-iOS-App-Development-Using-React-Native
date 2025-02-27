import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Fontisto,Entypo,EvilIcons ,MaterialIcons} from "@expo/vector-icons";
import {useRouter} from 'expo-router'
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
export default function MessageScreen() {
    const router = useRouter();
  return (
    <>
      <View className="w-full bg-blue-500 relative pb-2 rounded-br-[30px] rounded-bl-[30px]" style={{ paddingTop: Constants.statusBarHeight+10 }}>
            <View className="w-full flex-row justify-between items-center relative z-50">
            <TouchableOpacity onPress={() => router.push("/")} className="px-2">
                <View className="w-8 h-8 rounded-full flex-col justify-center items-center bg-blue-400">
                <Entypo name="chevron-left" size={28} color="white" />
                </View>
            </TouchableOpacity>
            <View className='flex-row items-center gap-2'>
                  <Text className='font-bold text-white text-2xl' style={{fontFamily:'HelvetIns'}}>Thông báo</Text>
            </View>
            <TouchableOpacity className="px-2">
                <View className="relative">
                <EvilIcons name="bell" size={30} color="white" />
                <View className="absolute -top-2 right-0 w-5 h-5  flex-col justify-center items-center rounded-full bg-white">
                    <Text className="font-bold text-red-500 z-50 text-sm  text-center">
                    12
                    </Text>
                </View>
                </View>
            </TouchableOpacity>
            </View>
            <View className="w-full p-5 flex flex-row items-center justify-between">
                 <TouchableOpacity className="w-1/4 h-[70px] px-2">
                     <View className="w-full h-full rounded-md bg-blue-400 flex flex-col items-center justify-center">
                         
                                <Text className="text-[12px] font-bold text-white text-center pb-1">Tất cả</Text>
                         
                          <MaterialIcons name="notifications" size={24} color="white" />
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className="w-1/4 h-[70px] px-2">
                     <View className="w-full h-full rounded-md bg-orange-400 flex flex-col items-center justify-center">
                          <Text className="text-[12px] font-bold text-white text-center pb-1">Ứng dụng</Text>
                          <MaterialIcons name="apps" size={24} color="white" />
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className="w-1/4 h-[70px] px-2">
                     <View className="w-full h-full rounded-md bg-red-400 flex flex-col items-center justify-center" >
                          <Text className="text-[12px] font-bold text-white text-center pb-1">khuyến mãi</Text>
                          <MaterialIcons name="local-offer" size={24} color="white" />
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity className="w-1/4 h-[70px] px-2">
                     <View className="w-full h-full rounded-md bg-yellow-400 flex flex-col items-center justify-center">
                          <Text className="text-[12px] font-bold text-white text-center pb-1">Sales</Text>
                          <MaterialIcons name="shopping-cart" size={24} color="white" />
                     </View>
                 </TouchableOpacity>
            </View>
      </View>
      <ScrollView className="w-full">
        <View>
          <TouchableOpacity className="w-full p-2">
            <View
              className="w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]"
              style={{ backgroundColor: "#fff" }}
            >
              <View className="w-20 h-20 border-[1px] border-gray-200 rounded-full p-2">
                <Image
                  source={require("@/assets/images/avatar/1.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="flex-1">
                <Text className="w-full pt-2 truncate font-bold text-[15px]">
                  ✨ [9] - Fixed Header with Search in Navigation | React Native
                  Expo
                </Text>
                <View className="w-full flex flex-row items-center gap-2 pt-2">
                  <Fontisto name="date" size={16} color={"black"} />
                  <Text className="text-sm">26/2/2025</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full p-2">
            <View
              className="w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]"
              style={{ backgroundColor: "#fff" }}
            >
              <View className="w-20 h-20 border-[1px] border-gray-200 rounded-full p-2">
                <Image
                  source={require("@/assets/images/avatar/2.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="flex-1">
                <Text className="w-full pt-2 truncate font-bold text-[15px]">
                  ✨ [9] - Fixed Header with Search in Navigation | React Native
                  Expo
                </Text>
                <View className="w-full flex flex-row items-center gap-2 pt-2">
                  <Fontisto name="date" size={16} color={"black"} />
                  <Text className="text-sm">26/2/2025</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full p-2">
            <View
              className="w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]"
              style={{ backgroundColor: "#fdeded" }}
            >
              <View className="w-20 h-20 border-[1px] border-gray-200 rounded-full p-2">
                <Image
                  source={require("@/assets/images/avatar/3.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="flex-1">
                <Text className="w-full pt-2 truncate font-bold text-[15px]">
                  ✨ [9] - Fixed Header with Search in Navigation | React Native
                  Expo
                </Text>
                <View className="w-full flex flex-row items-center gap-2 pt-2">
                  <Fontisto name="date" size={16} color={"black"} />
                  <Text className="text-sm">26/2/2025</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full p-2">
            <View
              className="w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]"
              style={{ backgroundColor: "#fff" }}
            >
              <View className="w-20 h-20 border-[1px] border-gray-200 rounded-full p-2">
                <Image
                  source={require("@/assets/images/avatar/4.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="flex-1">
                <Text className="w-full pt-2 truncate font-bold text-[15px]">
                  ✨ [9] - Fixed Header with Search in Navigation | React Native
                  Expo
                </Text>
                <View className="w-full flex flex-row items-center gap-2 pt-2">
                  <Fontisto name="date" size={16} color={"black"} />
                  <Text className="text-sm">26/2/2025</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full p-2">
            <View
              className="w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]"
              style={{ backgroundColor: "#fdeded" }}
            >
              <View className="w-20 h-20 border-[1px] border-gray-200 rounded-full p-2">
                <Image
                  source={require("@/assets/images/avatar/5.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="flex-1">
                <Text className="w-full pt-2 truncate font-bold text-[15px]">
                  ✨ [9] - Fixed Header with Search in Navigation | React Native
                  Expo
                </Text>
                <View className="w-full flex flex-row items-center gap-2 pt-2">
                  <Fontisto name="date" size={16} color={"black"} />
                  <Text className="text-sm">26/2/2025</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full p-2">
            <View
              className="w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]"
              style={{ backgroundColor: "#fff" }}
            >
              <View className="w-20 h-20 border-[1px] border-gray-200 rounded-full p-2">
                <Image
                  source={require("@/assets/images/avatar/6.png")}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="flex-1">
                <Text className="w-full pt-2 truncate font-bold text-[15px]">
                  ✨ [9] - Fixed Header with Search in Navigation | React Native
                  Expo
                </Text>
                <View className="w-full flex flex-row items-center gap-2 pt-2">
                  <Fontisto name="date" size={16} color={"black"} />
                  <Text className="text-sm">26/2/2025</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
