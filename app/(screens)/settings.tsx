import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const SettingScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("../../assets/fonts/HelvetIns.ttf"),
  });
  return (
    <LinearGradient colors={["#FC7325", "#FC813A"]} className="w-full h-full">
      <SafeAreaView className="w-full h-full">
        <View className="flex-1 w-full h-full">
          <View className="w-full">
            <View className="w-full pb-14">
              <View className="w-full px-4 py-4">
                <View className="flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center">
                    <View className="w-20 h-20 rounded-full p-2 flex flex-col items-center justify-center bg-orange-100">
                      <Image
                        source={{
                          uri: "https://hoanguyenit.com/images/hoanguyencoder.jpg",
                        }}
                        className="w-16 h-16 rounded-full"
                        resizeMode="cover"
                      />
                    </View>
                    <View className="pl-4">
                      <Text
                        className="text-xl text-white"
                        style={{ fontFamily: "HelvetIns" }}
                      >
                        Hoa Nguyen Coder
                      </Text>
                      <Text className="text-sm text-white pt-1">
                        Web Developer
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity className="">
                    <MaterialIcons
                      name="navigate-next"
                      size={30}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="w-full px-4 h-full bg-gray-100">
              <View className="w-full bg-white rounded-2xl p-4 shadow-lg shadow-gray-300 relative -top-12">
                <Text className="w-full py-2 px-4 text-xl text-gray-500">
                  Login and Security
                </Text>
                <TouchableOpacity className="">
                  <View className="flex flex-row items-center py-5 bg-white">
                    <View className="w-1/5 m-auto flex flex-col items-center justify-center">
                      <AntDesign name="user" size={30} color="#FC6B18" />
                    </View>
                    <View className="w-4/5 flex-row items-center justify-between">
                      <Text className="text-xl text-black">Username</Text>
                      <TouchableOpacity className="">
                        <MaterialIcons
                          name="navigate-next"
                          size={30}
                          color="#707070"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <View className="flex flex-row items-center py-5 bg-white">
                    <View className="w-1/5 m-auto flex flex-col items-center justify-center">
                      <Feather name="phone" size={24} color="#FC6B18" />
                    </View>
                    <View className="w-4/5 flex-row items-center justify-between">
                      <Text className="text-xl text-black">Phone Number</Text>
                      <TouchableOpacity className="">
                        <MaterialIcons
                          name="navigate-next"
                          size={30}
                          color="#707070"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="">
                  <View className="flex flex-row items-center py-5 bg-white">
                    <View className="w-1/5 m-auto flex flex-col items-center justify-center">
                      <Fontisto name="email" size={24} color="#FC6B18" />
                    </View>
                    <View className="w-4/5 flex-row items-center justify-between">
                      <Text className="text-xl text-black">Email</Text>
                      <TouchableOpacity className="">
                        <MaterialIcons
                          name="navigate-next"
                          size={30}
                          color="#707070"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <View className="flex flex-row items-center py-5 bg-white">
                    <View className="w-1/5 m-auto flex flex-col items-center justify-center">
                      <MaterialIcons
                        name="password"
                        size={24}
                        color="#FC6B18"
                      />
                    </View>
                    <View className="w-4/5 flex-row items-center justify-between">
                      <Text className="text-xl text-black">Password</Text>
                      <TouchableOpacity className="">
                        <MaterialIcons
                          name="navigate-next"
                          size={30}
                          color="#707070"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>

                <Text className="w-full py-2 px-4 text-xl text-gray-500">
                  Data and Permission
                </Text>
                <TouchableOpacity className="">
                  <View className="flex flex-row items-center py-5 bg-white">
                    <View className="w-1/5 m-auto flex flex-col items-center justify-center">
                      <MaterialIcons
                        name="password"
                        size={24}
                        color="#FC6B18"
                      />
                    </View>
                    <View className="w-4/5 flex-row items-center justify-between">
                      <Text className="text-xl text-black">Location</Text>
                      <TouchableOpacity className="">
                        <MaterialIcons
                          name="navigate-next"
                          size={30}
                          color="#707070"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <View className="flex flex-row items-center py-5 bg-white">
                    <View className="w-1/5 m-auto flex flex-col items-center justify-center">
                      <AntDesign name="appstore-o" size={24} color="#FC6B18" />
                    </View>
                    <View className="w-4/5 flex-row items-center justify-between">
                      <Text className="text-xl text-black">
                        Apps and sessions
                      </Text>
                      <TouchableOpacity className="">
                        <MaterialIcons
                          name="navigate-next"
                          size={30}
                          color="#707070"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity className="w-full p-4 mt-2">
            <View className=" flex flex-row items-center justify-center bg-white rounded-xl py-4 ">
                <AntDesign name="logout" size={24} color="red" />
                <Text className="text-red-500  tex-center text-xl px-4">Deactivate</Text>
            </View>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingScreen;
