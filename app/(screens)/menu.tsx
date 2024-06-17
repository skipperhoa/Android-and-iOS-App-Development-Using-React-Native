import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

// icon
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const MenuScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* categor */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="w-full flex flex-row gap-2 items-center px-2 mt-2">
              <TouchableOpacity className="w-auto p-2 bg-yellow-400 rounded-xl">
                <Text className="w-auto p-2 font-bold text-sm">Mì cay</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-auto p-2 bg-gray-200 rounded-xl">
                <Text className="w-auto p-2 font-bold text-sm">Sinh tố</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-auto p-2 bg-gray-200 rounded-xl">
                <Text className="w-auto p-2 font-bold text-sm">Đồ uống</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-auto p-2 bg-gray-200 rounded-xl">
                <Text className="w-auto p-2 font-bold text-sm">Đồ ăn</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-auto p-2 bg-gray-200 rounded-xl">
                <Text className="w-auto p-2 font-bold text-sm">Mua sắm</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* show product of category */}

          <View>
            <View className="w-full px-4 py-4">
              <Text className="font-bold text-2xl">Mì Cay</Text>
            </View>
            <View className="w-full mt-2">
              <View className="w-full flex flex-row flex-wrap">
                <TouchableOpacity className="w-1/2 mb-4">
                  <View className="w-full">
                    <View className="px-4">
                      <Image
                        source={require("@/assets/products/img4.jpg")}
                        className="w-full h-36 block m-auto rounded-2xl"
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="w-auto p-2 font-bold text-sm text-center">
                      Mì cay đặt biệt (new)
                    </Text>

                    <View className="flex flex-row items-center gap-1 m-auto">
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#000" />
                      <AntDesign name="star" size={18} color="#000" />
                    </View>
                    <View className="flex flex-row items-center justify-between px-4 mt-1">
                      <Text className="w-auto p-2 font-bold text-sm text-center">
                        20.000đ
                      </Text>
                      <TouchableOpacity className="w-6 h-6 bg-yellow-400 rounded-md flex flex-col items-center justify-center">
                        <FontAwesome6 name="add" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="w-1/2 mb-4">
                  <View className="w-full">
                    <View className="px-4">
                      <Image
                        source={require("@/assets/products/img4.jpg")}
                        className="w-full h-36 block m-auto rounded-2xl"
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="w-auto p-2 font-bold text-sm text-center">
                      Mì cay đặt biệt (new)
                    </Text>

                    <View className="flex flex-row items-center gap-1 m-auto">
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#000" />
                      <AntDesign name="star" size={18} color="#000" />
                    </View>
                    <View className="flex flex-row items-center justify-between px-4 mt-1">
                      <Text className="w-auto p-2 font-bold text-sm text-center">
                        20.000đ
                      </Text>
                      <TouchableOpacity className="w-6 h-6 bg-yellow-400 rounded-md flex flex-col items-center justify-center">
                        <FontAwesome6 name="add" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="w-1/2 mb-4">
                  <View className="w-full">
                    <View className="px-4">
                      <Image
                        source={require("@/assets/products/img4.jpg")}
                        className="w-full h-36 block m-auto rounded-2xl"
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="w-auto p-2 font-bold text-sm text-center">
                      Mì cay đặt biệt (new)
                    </Text>

                    <View className="flex flex-row items-center gap-1 m-auto">
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#000" />
                      <AntDesign name="star" size={18} color="#000" />
                    </View>
                    <View className="flex flex-row items-center justify-between px-4 mt-1">
                      <Text className="w-auto p-2 font-bold text-sm text-center">
                        20.000đ
                      </Text>
                      <TouchableOpacity className="w-6 h-6 bg-yellow-400 rounded-md flex flex-col items-center justify-center">
                        <FontAwesome6 name="add" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="w-1/2 mb-4">
                  <View className="w-full">
                    <View className="px-4">
                      <Image
                        source={require("@/assets/products/img4.jpg")}
                        className="w-full h-36 block m-auto rounded-2xl"
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="w-auto p-2 font-bold text-sm text-center">
                      Mì cay đặt biệt (new)
                    </Text>

                    <View className="flex flex-row items-center gap-1 m-auto">
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#000" />
                      <AntDesign name="star" size={18} color="#000" />
                    </View>
                    <View className="flex flex-row items-center justify-between px-4 mt-1">
                      <Text className="w-auto p-2 font-bold text-sm text-center">
                        20.000đ
                      </Text>
                      <TouchableOpacity className="w-6 h-6 bg-yellow-400 rounded-md flex flex-col items-center justify-center">
                        <FontAwesome6 name="add" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="w-1/2 mb-4">
                  <View className="w-full">
                    <View className="px-4">
                      <Image
                        source={require("@/assets/products/img4.jpg")}
                        className="w-full h-36 block m-auto rounded-2xl"
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="w-auto p-2 font-bold text-sm text-center">
                      Mì cay đặt biệt (new)
                    </Text>

                    <View className="flex flex-row items-center gap-1 m-auto">
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#000" />
                      <AntDesign name="star" size={18} color="#000" />
                    </View>
                    <View className="flex flex-row items-center justify-between px-4 mt-1">
                      <Text className="w-auto p-2 font-bold text-sm text-center">
                        20.000đ
                      </Text>
                      <TouchableOpacity className="w-6 h-6 bg-yellow-400 rounded-md flex flex-col items-center justify-center">
                        <FontAwesome6 name="add" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="w-1/2 mb-4">
                  <View className="w-full">
                    <View className="px-4">
                      <Image
                        source={require("@/assets/products/img4.jpg")}
                        className="w-full h-36 block m-auto rounded-2xl"
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="w-auto p-2 font-bold text-sm text-center">
                      Mì cay đặt biệt (new)
                    </Text>

                    <View className="flex flex-row items-center gap-1 m-auto">
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#000" />
                      <AntDesign name="star" size={18} color="#000" />
                    </View>
                    <View className="flex flex-row items-center justify-between px-4 mt-1">
                      <Text className="w-auto p-2 font-bold text-sm text-center">
                        20.000đ
                      </Text>
                      <TouchableOpacity className="w-6 h-6 bg-yellow-400 rounded-md flex flex-col items-center justify-center">
                        <FontAwesome6 name="add" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="w-1/2 mb-4">
                  <View className="w-full">
                    <View className="px-4">
                      <Image
                        source={require("@/assets/products/img4.jpg")}
                        className="w-full h-36 block m-auto rounded-2xl"
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="w-auto p-2 font-bold text-sm text-center">
                      Mì cay đặt biệt (new)
                    </Text>

                    <View className="flex flex-row items-center gap-1 m-auto">
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#DBCE03" />
                      <AntDesign name="star" size={18} color="#000" />
                      <AntDesign name="star" size={18} color="#000" />
                    </View>
                    <View className="flex flex-row items-center justify-between px-4 mt-1">
                      <Text className="w-auto p-2 font-bold text-sm text-center">
                        20.000đ
                      </Text>
                      <TouchableOpacity className="w-6 h-6 bg-yellow-400 rounded-md flex flex-col items-center justify-center">
                        <FontAwesome6 name="add" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
