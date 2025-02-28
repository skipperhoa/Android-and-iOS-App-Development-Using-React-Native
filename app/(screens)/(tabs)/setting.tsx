import React from "react";
import { View, Text, TouchableOpacity,ScrollView, Alert } from "react-native";
import { AntDesign, MaterialCommunityIcons, Entypo,Ionicons ,MaterialIcons,FontAwesome} from "@expo/vector-icons";
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
export default function SettingScreen() {
  return (
    <>
      {/* header */}
      <View
        className="w-full bg-white pb-2"
        style={{ paddingTop: Constants.statusBarHeight + 10 }}
      >
        <View className="w-full flex-row justify-between items-center gap-2 px-5">
          <TouchableOpacity onPress={
            () => {
              Alert.alert('Back')
            }
          }>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View className="w-full">
            <Text className="font-bold text-2xl text-black">Settings</Text>
          </View>
        </View>
        
      </View>
      {/* content */}
      <ScrollView className="w-full h-full bg-white pt-5 px-5">
        <View>
          <Text className="font-bold text-xl">GENERAL</Text>
        </View>
        <View className="w-full pt-5">
          <TouchableOpacity className="w-full py-1">
            <View className="w-full flex-row items-center justify-between py-4 bg-white px-2 rounded-md">
              <View className="flex flex-row item-center gap-2">
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="black"
                />
                <Text className="text-xl">Account</Text>
              </View>
              <View>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full py-1">
            <View className="w-full flex-row items-center justify-between py-4 bg-white px-2 rounded-md">
              <View className="flex flex-row item-center gap-2">
              <Ionicons name="notifications-outline" size={24} color="black" />
                <Text className="text-xl">Notifications</Text>
              </View>
              <View>
                <View className="w-[60px] h-[30px] bg-red-500 rounded-full flex flex-col justify-center px-2">
                    <TouchableOpacity className="w-5 h-5 rounded-full bg-white"></TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full py-1">
            <View className="w-full flex-row items-center justify-between py-4 bg-white px-2 rounded-md">
              <View className="flex flex-row item-center gap-2">
              <Ionicons name="wifi" size={24} color="black" />
                <Text className="text-xl">Wifi</Text>
              </View>
              <View>
                <View className="w-[60px] h-[30px] bg-green-500 rounded-full flex flex-col justify-center px-2" style={{alignItems:'flex-end'}}>
                    <TouchableOpacity className="w-5 h-5 rounded-full bg-white"></TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full py-1">
            <View className="w-full flex-row items-center justify-between py-4 bg-white px-2 rounded-md">
              <View className="flex flex-row item-center gap-2">
                <Ionicons
                  name="gift"
                  size={24}
                  color="black"
                />
                <Text className="text-xl">Coupons</Text>
              </View>
              <View>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full py-1">
            <View className="w-full flex-row items-center justify-between py-4 bg-white px-2 rounded-md">
              <View className="flex flex-row item-center gap-2">
              <MaterialIcons name="logout" size={24} color="black" />
                <Text className="text-xl">Logout</Text>
              </View>
              <View>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full py-1">
            <View className="w-full flex-row items-center justify-between py-4 bg-white px-2 rounded-md">
              <View className="flex flex-row item-center gap-2">
              <AntDesign name="delete" size={24} color="black" />
                <Text className="text-xl">Delete Account</Text>
              </View>
              <View>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
         
          
        </View>
        <View className="w-full pt-5">
          <Text className="font-bold text-xl">FEEDBACK</Text>
        </View>
        <View className="w-full pt-5">
        <TouchableOpacity className="w-full py-1">
            <View className="w-full flex-row items-center justify-between py-4 bg-white px-2 rounded-md">
              <View className="flex flex-row item-center gap-2">
               <MaterialIcons name="report-problem" size={24} color="black" />
                <Text className="text-xl">Report a bug</Text>
              </View>
              <View>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full py-1">
            <View className="w-full flex-row items-center justify-between py-4 bg-white px-2 rounded-md">
              <View className="flex flex-row item-center gap-2">
              <FontAwesome name="send" size={24} color="black" />
                <Text className="text-xl">Send feedback</Text>
              </View>
              <View>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
         
          </View>
      </ScrollView>
    </>
  );
}
