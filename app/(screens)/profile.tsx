import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
const { width, height } = Dimensions.get("window");
console.warn(height / 210);
const ProfileScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("../../assets/fonts/HelvetIns.ttf"),
  });
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="w-full flex-1">
        <View className="w-full bg-white relative">
          <View className="w-full bg-white relative">
            <View className="w-full relative z-50">
              {/* avatar */}
              <View className="m-auto pt-10">
                <LinearGradient
                  colors={["#4c669f", "#4c669f", "#FC7533"]}
                  className="w-36 h-36 rounded-full p-2 flex flex-col items-center justify-center"
                >
                  <Image
                    source={{
                      uri: "https://hoanguyenit.com/images/hoanguyencoder.jpg",
                    }}
                    className="w-32 h-32 rounded-full"
                    resizeMode="cover"
                  />
                </LinearGradient>
              </View>
              {/* name */}
              <View className="w-full m-auto pt-4 relative">
                <Text
                  className="text-gray-800 text-2xl text-center"
                  style={{ fontFamily: "HelvetIns" }}
                >
                  Hoa Nguyen Coder
                </Text>
                <Text className="font-bold text-xl text-gray-500 text-center pt-1">
                  Web Developer
                </Text>
              </View>
            </View>

            <View className="w-full h-[500px] absolute left-0 -top-52 bg-white rounded-full z-30"></View>
            {/*<View className='w-[550px] h-[500px] absolute -left-10 -top-44 bg-gray-200 rounded-full z-20'></View>
                  <View className='w-[500px] h-[470px] absolute right-10 -top-36 bg-gray-100 rounded-full z-10'></View> */}
            <LinearGradient
              colors={["#4c669f", "#4c669f", "#FC7533"]}
              //  colors={['#4c669f', '#4c669f', '#192f6a']}
              className="w-[550px] h-[550px] absolute -left-10 -top-52 rounded-full z-20"
            ></LinearGradient>
            <LinearGradient
              colors={["#FC7533", "#FC7533", "#FA844A"]}
              className="w-[500px] h-[470px] absolute right-10 -top-40 rounded-full z-10"
            ></LinearGradient>
          </View>

          {/* settings */}
          <View className="w-full pt-24">
            <View className="w-full">
              <TouchableOpacity>
                <View className="flex flex-row items-center p-4">
                  <View className="w-1/5 m-autoflex flex-col items-center">
                    <AntDesign name="user" size={24} color="black" />
                  </View>
                  <View className="w-4/5">
                    <Text className="text-xl text-gray-700">My Profile</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex flex-row items-center p-4">
                  <View className="w-1/5 m-autoflex flex-col items-center">
                    <AntDesign name="message1" size={24} color="black" />
                  </View>
                  <View className="w-4/5">
                    <View className="w-full flex flex-row items-center justify-between">
                      <Text className="text-xl text-gray-700">Messages</Text>

                      <LinearGradient
                        colors={["#F33502", "#F95710"]}
                        className="w-8 h-8 bg-gray-400 flex flex-col items-center justify-center rounded-full"
                      >
                        <Text className="text-white font-bold text-xl">7</Text>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex flex-row items-center p-4">
                  <View className="w-1/5 m-autoflex flex-col items-center">
                    <MaterialIcons
                      name="favorite-border"
                      size={24}
                      color="black"
                    />
                  </View>
                  <View className="w-4/5">
                    <Text className="text-xl text-gray-700">Favourites</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex flex-row items-center p-4">
                  <View className="w-1/5 m-autoflex flex-col items-center">
                    <EvilIcons name="location" size={24} color="black" />
                  </View>
                  <View className="w-4/5">
                    <Text className="text-xl text-gray-700">Location</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex flex-row items-center p-4">
                  <View className="w-1/5 m-autoflex flex-col items-center">
                    <Ionicons name="settings-outline" size={24} color="black" />
                  </View>
                  <View className="w-4/5">
                    <Text className="text-xl text-gray-700">Settings</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className="w-full">
        <TouchableOpacity>
          <View className="flex flex-row items-center justify-center">
            <MaterialIcons name="logout" size={24} color="black" />
            <Text className="text-xl text-gray-700 pl-2">Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  clipPath: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    borderRadius: 100, // Tạo thành hình tròn
    overflow: "hidden", // Ẩn đi phần ngoài phạm vi borderRadius
  },
});
export default ProfileScreen;
