import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
const { height } = Dimensions.get("window");
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AntDesign } from "@expo/vector-icons";
export default function AlertModal({
  title,
  message,
  textColor,
  bgColor,
  showModal,
  onPress,
}: any) {
  const showAnimationModal = useRef(new Animated.Value(0)).current;
  const opacityAnimationModal = useRef(new Animated.Value(0)).current;
  const topAnimationModal = useRef(new Animated.Value(0)).current;
  /* check error */
  useEffect(() => {
    if (showModal) {
      show();
    }
  }, [showModal]);
  const show = () => {
    Animated.parallel([
      Animated.timing(showAnimationModal, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimationModal, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(topAnimationModal, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const close = () => {
    Animated.parallel([
      Animated.timing(showAnimationModal, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimationModal, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(topAnimationModal, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => {
      onPress();
    }, 1000);
  };

  return (
    <>
      {/* Modal */}
      <Animated.View
        className="w-full h-screen  absolute z-50 px-5 flex flex-col items-center justify-center "
        style={[
          {
            backgroundColor: "rgba(0,0,0,0.6)",

            opacity: opacityAnimationModal.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        <Animated.View
          className="w-full absolute z-50 rounded-xl flex flex-col items-center justify-center"
          style={[
            {
            
              backgroundColor: bgColor,
              transform: [
                {
                  translateY: topAnimationModal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [height + 200, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View className="w-full">
            <View className="w-full flex items-center justify-center py-4">
              <MaterialIcons name="error-outline" size={30} color="red" />
              <Text className="text-xl uppercase py-2 font-bold">{title}</Text>
              <Text className="text-sm text-gray-500">{message}</Text>
            </View>
          </View>
          <TouchableOpacity
            className="w-full  bg-red-500 flex rounded-b-xl items-center justify-center"
            onPress={() => close()}
          >
            <View className="w-full py-4 flex items-center justify-center">
              <Text className="text-white font-bold">Tiếp tục</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </>
  );
}
