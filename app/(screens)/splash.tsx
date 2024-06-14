import { View, Text, Image,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const SplashScreen = () => {
  const router = useRouter();
  const [imageUri, setImageUri] = useState(
    "https://hoanguyenit.com/images/hoanguyencoder.jpg"
  );

  return (
    <View className="flex-1 w-full h-full bg-blue-700">
      <View className="w-full h-full items-center justify-center ">
        <View className="p-2">
          <Image
            className="w-20 h-20 bg-slate-400 rounded-full"
            source={{ uri: imageUri }}
          ></Image>
        </View>
        <View className="w-full">
          <Text className="font-bold text-center py-2 text-white uppercase text-xl">
            Hoa Nguyen Coder
          </Text>
          <Text className="text-center font-bold text-gray-400 italic">
            I'm Web Developer
          </Text>
        </View>
        <TouchableOpacity onPress={()=>router.push('/(tabs)')} className="w-20 h-10 mt-2 flex items-center justify-center bg-gray-100 rounded-md">
          <AntDesign name="arrowright" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
