import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import {
  FontAwesome5,
  Ionicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

const RootLayout = () => {
  return (
    <Stack>
     {/*  <Stack.Screen 
        name="index"
       
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#027DFC",
          },
          headerLeft: () => (
            <View className="w-full flex-row justify-between items-center">
              <View>
                <View className="flex-row items-center gap-2">
                  <TouchableOpacity>
                    <MaterialIcons name="menu-open" size={28} color="white" />
                  </TouchableOpacity>
                  <Text className="font-bold text-white text-2xl">
                    Shop Car
                  </Text>
                </View>
              </View>
            </View>
          ),
          headerRight: () => (
            <View className="flex-row items-center gap-4">
              <TouchableOpacity>
                <View className="relative">
                  <View className="w-5 h-5 absolute z-10 -top-2 -right-2 rounded-full bg-red-500 flex-col justify-center items-center">
                    <Text className="font-bold text-white text-sm">10</Text>
                  </View>
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="relative">
                  <View className="w-5 h-5 absolute  z-10 -top-2 -right-2 rounded-full bg-red-500 flex-col justify-center items-center">
                    <Text className="font-bold text-white text-sm">1</Text>
                  </View>
                  <Ionicons name="cart-outline" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />  */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
     
    </Stack>
  );
};

export default RootLayout;
