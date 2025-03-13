import React from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { useRouter } from "expo-router";
import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

const MAX_HEIGHT_HEADER = 200;
export default function LoginScreen() {
  const router = useRouter();
  return (
    <>
      {/* header */}
      <View
        className="w-full absolute z-50"
        style={{ height: MAX_HEIGHT_HEADER }}
      >
        <View
          className="w-full bg-gray-100 pb-4"
          style={{ paddingTop: Constants.statusBarHeight + 10 }}
        >
          <View className="w-full flex-row items-center justify-between px-2">
            <TouchableOpacity onPress={() => router.back()}>
               <View className="w-[35px] h-[35px] rounded-full flex-row items-center justify-center bg-white">
                  <AntDesign name="arrowleft" size={20} color="black" />
               </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* content */}
      <View
        className="w-full h-full bg-gray-100"
        style={{ paddingTop: Constants.statusBarHeight + 70 }}
      >
        {/* form login */}
        <View className="w-full">
          <Text className="font-bold text-2xl text-black uppercase text-center">
            ĐĂNG NHẬP
          </Text>

          {/* info form */}
          <Text className="w-full text-center text-[14px] text-gray-500 pt-3 px-4">
            Chào mừng bạn đã quay trở lại, chúng tôi rất nhớ bạn!
          </Text>

          {/* form group */}

          <View className="w-full px-5 pt-10">
            {/* item */}
            <View className="w-full py-2">
              <Text className="w-full font-bold text-gray-600 py-2">Email</Text>
              <TextInput
                className="w-full bg-white p-5 rounded-md"
                placeholder="nguyen.thanh.hoa.ctec@gmail.com"
              />
            </View>

            {/* item */}
            <View className="w-full py-2">
              <Text className="w-full font-bold text-gray-600 py-2">
                Password
              </Text>
              <View className="w-full relative">
                <TextInput
                  className="w-full bg-white p-5 rounded-md"
                  value="Password"
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  className="absolute right-5 top-3"
                  onPress={() => {
                    Alert.alert("Eye");
                  }}
                >
                  <Entypo name="eye" size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>

            <View>
                <TouchableOpacity>
                      <Text className="w-full text-gray-600 py-2 text-right italic underline">Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

            {/* button */}
            <View className="w-full py-2">
                 <LinearGradient 
                    colors={['#01b1fa', '#1f73fc', '#337ef9']} style={{width:'100%',borderRadius:50,padding:13}}>
                        <TouchableOpacity className="w-full">
                            <View className="w-fullflex flex-row items-center justify-center gap-2">
                                <AntDesign name="arrowright" size={24} color="white" />
                                <Text className="text-center text-white font-bold">Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>

                </LinearGradient>
            </View>
            
          </View>

          {/* Group social */}
          <View className="w-full px-5 pt-2">
              <View className="w-full flex flex-row items-center justify-center gap-2">
                  <Text className="text-sm text-gray-500">Bạn chưa có tài khoản?</Text>
                  <TouchableOpacity>
                      <Text className="w-full text-blue-500 py-2 text-right font-bold">Đăng ký</Text>
                    </TouchableOpacity>
              </View>

              {/* box social */}
              <View className="w-full pt-20">
                  <TouchableOpacity className="w-full">
                      <View className="w-full flex flex-row items-center justify-center gap-3  bg-white py-5 rounded-xl">
                      <AntDesign name="google" size={24} color="black" />
                         <Text className="text-gray-700">Đăng nhập bằng Google</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity className="w-full mt-4">
                      <View className="w-full flex flex-row items-center justify-center gap-3 bg-[#055cc2] py-5 rounded-xl">
                      <AntDesign name="facebook-square" size={24} color="white" />
                         <Text className="text-white">Đăng nhập bằng Facebook</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>


        </View>
      </View>
    </>
  );
}
