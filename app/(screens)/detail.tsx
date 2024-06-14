import { View, Text, Image, TouchableOpacity, ScrollView,SafeAreaView } from "react-native";
import React from "react";
// icon
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from '@expo/vector-icons';
import { useRouter } from "expo-router";
const DetailScreen = () => {
  const router = useRouter();
  return (
    <>
    <View className="flex-1 w-full h-auto bg-[#fff] relative">
        <View className="w-full">
          <View className="pt-2 relative bg-gray-200 rounded-b-[150px]">
            <View className="w-full relative -top-3 z-30">
              <Image
                source={require("@/assets/images/iphone-15-pro-max-natural-titanium-2.png")}
                className="w-full h-72 rounded-b-[50px]"
                resizeMode="contain"
              />
            </View>
          </View>
          <View className="w-full h-full px-4 pt-10">
            <View className="w-full bg-white">
              <View className="w-full">
              
                  <Text className="text-lg font-bold text-black">
                    Iphone 15 Pro Max 128GB
                  </Text>
                  <Text className="text-sm py-4 text-gray-600">
                  React Native provides a unified way of managing images and
                  other media assets in your Android and iOS apps.
                </Text>
              
        
              </View>
              {/* size */}
             <View> 
                 <Text className="font-bold text-xl">Sizes :</Text>
             </View>
              <View className="w-full flex flex-row gap-4 pt-2">
                    <TouchableOpacity>
                        <View className="w-14 h-14 border-[1px] flex flex-col items-center justify-center rounded-md border-red-500">
                             <Text className="text-[12px] font-bold px-1 block">128GB</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="w-14 h-14 border-[1px] border-gray-300 flex flex-col items-center justify-center rounded-md">
                             <Text className="text-[12px] font-bold px-1 block">256GB</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="w-14 h-14 border-[1px] border-gray-300 flex flex-col items-center justify-center rounded-md">
                             <Text className="text-[12px] font-bold px-1 block">512GB</Text>
                        </View>
                    </TouchableOpacity>
              </View>
               {/* colors */}
             <View className="mt-4"> 
                 <Text className="font-bold text-xl">Colors :</Text>
             </View>
              <View className="w-full flex flex-row gap-4 pt-2">
                    <TouchableOpacity className="">
                        <View className="w-10 h-10 border-[1px] flex flex-col bg-gray-300 items-center justify-center rounded-full border-red-500">
                             
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="">
                        <View className="w-10 h-10 border-[1px] border-gray-300 flex flex-col bg-blue-600 items-center justify-center rounded-full">
                            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="">
                        <View className="w-10 h-10 border-[1px] border-gray-300 flex flex-col bg-black items-center justify-center rounded-full">
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="">
                        <View className="w-10 h-10 border-[1px] border-gray-300 flex flex-col bg-pink-600 items-center justify-center rounded-full">
                        </View>
                    </TouchableOpacity>
              </View>

              {/* add to cart */}
              <View className="w-full mt-4">
                  <TouchableOpacity className="w-full">
                      <View className="bg-green-600 w-full py-2 rounded-full flex flex-row items-center justify-center">
                         
                          <Text className="text-white  text-xl font-bold">$120</Text>
                          <Text className="text-white font-bold px-2 uppercase">Add to cart</Text>
                          <EvilIcons name="cart" size={30} color="white" />
                      </View>
                  </TouchableOpacity>
                  
              </View>
            </View>
          </View>
        </View>
        
      </View>
      
    </>
  );
};

export default DetailScreen;
