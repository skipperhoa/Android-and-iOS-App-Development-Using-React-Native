import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import {
  FontAwesome5,
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { RootState } from "@/redux";
function HomeHeaderLeft() {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth); // Assuming you have a user in your auth state
  return (
    <>
      <View className="flex flex-row justify-between items-center">
        <View className="px-4">
          <View className="flex-row items-center gap-2">
            <View className="w-full flex flex-row items-center gap-2">
              <View className="w-[50px] h-[50px] rounded-full bg-gray-400">
                {user?.avatar ? (
                  <Image
                    source={{ uri: user?.avatar }}
                    className="w-full h-full block m-auto rounded-full"
                  />
                ) : (
                  <Image
                    source={require("@/assets/images/avatar/6.png")}
                    className="w-full h-full block m-auto rounded-full"
                  />
                )}
              </View>
              <View>
                <View>
                  <Text
                    className="text-[#e6e4e0]"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Welcome Back!
                  </Text>
                  <View className="w-full flex-row items-center justify-center gap-2">
                    <Text className="text-gray-900 font-bold">
                      {user?.name ?? "User12345678"}
                    </Text>

                    <AntDesign name="checkcircle" size={16} color="#47e63b" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default HomeHeaderLeft;
