import React, { useEffect,useRef } from "react";
import { View, Text, Image, TouchableOpacity , Animated} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/index";
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
function HomeHeaderRight() {
  const router = useRouter();
  const { items } = useSelector((state: RootState) => state.cart);
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  useEffect(()=>{
    console.log("Cart items changed", items.length  );
    shakeCart();
  },[items.length])
  const shakeCart = ()=>{
     Animated.timing(shakeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      shakeAnimation.setValue(0);
    });
  }
  return (
    <>
      <View className="px-4">
        <View className="w-full flex flex-row items-center gap-4">
          <TouchableOpacity className="w-[30px] h-[30px] flex flex-col items-center justify-center rounded-full bg-white">
            <View className="relative">
              <View className="w-5 h-5 absolute z-10 -top-3 -right-3 rounded-full bg-red-500 flex-col justify-center items-center">
                <Text className="ffont-bold text-white text-sm">10</Text>
              </View>
              <Ionicons name="notifications-outline" size={22} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(screens)/(stack)/carts")}
            className="w-[30px] h-[30px] flex flex-col items-center justify-center rounded-full bg-white"
          >
            <Animated.View className="relative"
              style={{
                transform: [
                  {
                    translateX: shakeAnimation.interpolate({
                      inputRange: [0, 0.25,0.5,1],
                      outputRange: [0, 5,-5, 0],
                    }),
                  },
                ],
              }}
            >
              <View className="w-5 h-5 absolute  z-10 -top-3 -right-3 rounded-full bg-red-500 flex-col justify-center items-center">
                <Text className="font-bold text-white text-sm">
                  {items.length}
                </Text>
              </View>
              <Ionicons name="cart-outline" size={22} color="black" />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default HomeHeaderRight;
