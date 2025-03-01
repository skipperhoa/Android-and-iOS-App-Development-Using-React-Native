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
    <Stack 
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
     
    </Stack>
  );
};

export default RootLayout;
