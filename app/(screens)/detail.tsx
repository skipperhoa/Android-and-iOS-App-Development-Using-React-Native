import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,Platform
} from "react-native";
import React, { useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";

// icon
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
const DedailScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("../../assets/fonts/HelvetIns.ttf"),
    PlaywriteNL: require("../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
    "SpaceMono-Regular": require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <LinearGradient
      colors={["rgba(205,37,4,0.8)", "#0E0D0D"]}
      className="w-full h-full"
    >
      <SafeAreaView className="w-full h-full">
        <View className="flex-1 h-full relative">
          <View className="w-full h-full">
            <View className="w-full mt-10">
              <Image
                source={require("@/assets/products/mi-kc-hai-san-123.png")}
                className="w-full h-60"
              />
            </View>
            <View className="w-full px-4">
              <Text
                style={{ fontFamily: "PlaywriteNL" }}
                className="w-full text-white text-[20px] text-center"
              >
                Mì Cay Hải Sản (new) - Cấp Độ 7 Siêu Cay
              </Text>
            </View>
            <View className="w-full h-24 relative flex flex-col items-center justify-center">
              <Text className="w-full text-[40px] text-center font-bold text-[#FFC300] italic relative z-10">
                50.000đ
              </Text>
              <LinearGradient
                colors={["#AA0303", "#D31D1D"]}
                className="w-52 h-20 -skew-x-12 absolute top-2 rounded-xl"
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              ></LinearGradient>
            </View>

            <View className="mt-4 px-4">
              <Text className="text-justify text-sm leading-6 text-white">
                Find that perfect color with our color picker and discover
                beautiful color harmonies, tints, shades and tones; input Hex
                color codes, RGB and HSL values, and generate HTML, CSS and SCSS
                styles.
              </Text>
            </View>
            <View className="w-full px-4 flex flex-row items-center justify-between mt-2">
              <View>
                <View className="flex flex-row items-center gap-1">
                  <AntDesign name="star" size={18} color="#DBCE03" />
                  <AntDesign name="star" size={18} color="#DBCE03" />
                  <AntDesign name="star" size={18} color="#DBCE03" />
                  <AntDesign name="star" size={18} color="#BABABA" />
                  <AntDesign name="star" size={18} color="#BABABA" />
                </View>
              </View>
              <View>
                <View className="flex flex-row items-center gap-2">
                  <TouchableOpacity className="w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center">
                    <MaterialIcons name="favorite" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center">
                    <EvilIcons name="share-google" size={30} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="w-full absolute bottom-4">
              <TouchableOpacity className="w-full px-10">
                <View className="flex flex-row items-center justify-center bg-white rounded-full py-2">
                  <Ionicons name="cart-outline" size={30} color="black" />
                  <Text className="text-black text-center text-xl font-bold px-2">
                    Add to cart
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  gradient: {
    width: 208, // equivalent to w-52 in Tailwind CSS
    height: 80, // equivalent to h-20 in Tailwind CSS
    transform: [{ skewX: '-12deg' }], // equivalent to -skew-x-12
    position: 'absolute', // equivalent to absolute positioning
    top: 8, // equivalent to top-2 in Tailwind CSS
    borderRadius: 16, // equivalent to rounded-xl in Tailwind CSS
  },
  gradientAndroid: {
    width: 208, // equivalent to w-52 in Tailwind CSS
    height: 80, // equivalent to h-20 in Tailwind CSS
    transform: [
      { rotate: '-5deg' },
      { scaleX: 1.4 },
    ],
    position: 'absolute', // equivalent to absolute positioning
    top: 8, // equivalent to top-2 in Tailwind CSS
    borderRadius: 16, // equivalent to rounded-xl in Tailwind CSS
  },
});
export default DedailScreen;
