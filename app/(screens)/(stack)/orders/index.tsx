import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  Ionicons,
  FontAwesome,
  Fontisto,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";

const MAX_HEIGHT_HEADER = 200;
export default function OrderScreen() {
  const router = useRouter();
  const [paymend, setPayment] = useState("tienmat");
  const changePayment = (value: string) => {
    setPayment(value);
  };
  return (
    <>
      {/* header */}

      <View
        className="w-full absolute z-50"
        style={{ height: MAX_HEIGHT_HEADER }}
      >
        <View
          className="w-full bg-white pb-4"
          style={{ paddingTop: Constants.statusBarHeight + 10 }}
        >
          <View className="w-full flex-row items-center justify-between px-2">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="flex flex-row items-center gap-2">
                <Entypo name="chevron-left" size={28} color="black" />
                <Text className="font-bold text-black text-[15px]">
                  Trở về giỏ hàng
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* content */}
      <ScrollView className="w-full h-full bg-gray-100 px-5">
        {/* thông tin gửi hàng */}
        <View style={{ paddingTop: Constants.statusBarHeight + 70 }}>
          {/* item */}
          <View className="w-full p-5 bg-white rounded-md">
            <View className="flex flex-row items-center gap-2">
              <AntDesign name="user" size={22} color="black" />
              <Text className="font-bold text-[14px]">Họ và tên</Text>
            </View>
            <TextInput
              placeholder="Họ và tên"
              className="w-full border-[1px] border-gray-200 py-5 px-2 mt-4 rounded-md text-[14px]"
            />
          </View>
          {/* item */}
          <View className="w-full p-5 bg-white rounded-md mt-4">
            <View className="flex flex-row items-center gap-2">
              <Fontisto name="email" size={20} color="black" />
              <Text className="font-bold text-[14px]">Email</Text>
            </View>
            <TextInput
              placeholder="Email"
              className="w-full border-[1px] border-gray-200 py-5 px-2 mt-4 rounded-md text-[14px]"
            />
          </View>
          {/* item */}
          <View className="w-full p-5 bg-white rounded-md mt-4">
            <View className="flex flex-row items-center gap-2">
              <Feather name="phone" size={20} color="black" />
              <Text className="font-bold text-[14px]">Điện thoại</Text>
            </View>
            <TextInput
              placeholder="Điện thoại"
              className="w-full border-[1px] border-gray-200 py-5 px-2 mt-4 rounded-md text-[14px]"
            />
          </View>

          {/* item */}
          <View className="w-full p-5 bg-white rounded-md mt-4">
            <View className="flex flex-row items-center gap-2">
              <Feather name="map" size={20} color="black" />
              <Text className="font-bold text-[14px]">Địa chỉ</Text>
            </View>
            <TextInput
              placeholder="Địa chỉ"
              className="w-full border-[1px] border-gray-200 py-5 px-2 mt-4 rounded-md text-[14px]"
            />
          </View>

          {/* item */}
          <View className="w-full p-5 bg-white rounded-md mt-4">
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="payment" size={22} color="black" />
              <Text className="font-bold text-[14px]">
                Phương thức thanh toán
              </Text>
            </View>
            {/* phương thức thanh toán */}
            <View className="w-full mt-2">
              {/* tiền mặt */}
              <TouchableOpacity
                className="w-full my-2"
                onPress={() => changePayment("tienmat")}
              >
                <View
                  className="w-full flex flex-row items-center p-4 gap-5 border-[1px] border-gray-200 rounded-md"
                  style={{
                    borderColor: paymend == "tienmat" ? "#000" : "#e5e7eb",
                  }}
                >
                  <Image
                    source={require("@/assets/images/icon-money.png")}
                    className="w-10 h-10"
                  />
                  <Text className="text-[14px] font-bold">
                    Thanh toán bằng tiền mặt
                  </Text>
                </View>
              </TouchableOpacity>
              {/* zalopay */}
              <TouchableOpacity
                className="w-full my-2"
                onPress={() => changePayment("zalopay")}
              >
                <View
                  className="w-full flex flex-row items-center p-4 gap-5 border-[1px] border-gray-200 rounded-md"
                  style={{
                    borderColor: paymend == "zalopay" ? "#000" : "#e5e7eb",
                  }}
                >
                  <Image
                    source={require("@/assets/images/icon-zalopay.webp")}
                    className="w-10 h-10"
                  />
                  <Text className="text-[14px] font-bold">
                    Thanh toán bằng Zalopay
                  </Text>
                </View>
              </TouchableOpacity>
              {/* vnpay */}
              <TouchableOpacity
                className="w-full my-2"
                onPress={() => changePayment("vnpay")}
              >
                <View
                  className="w-full flex flex-row items-center p-4 gap-5 border-[1px] border-gray-200 rounded-md"
                  style={{
                    borderColor: paymend == "vnpay" ? "#000" : "#e5e7eb",
                  }}
                >
                  <Image
                    source={require("@/assets/images/icon-vnpay.jpg")}
                    className="w-10 h-10"
                  />
                  <Text className="text-[14px] font-bold">
                    Thanh toán bằng Vnpay
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* footer */}
      <View className="w-full bg-blue-500 px-5 pt-5 pb-8">
        {/* checkout */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[15px] py-2 text-white">Tổng giá tiền : </Text>
          <Text className="text-[15px] py-2 text-white font-bold">
            1000.000.000đ
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[15px] py-2 text-white">Thuế : </Text>
          <Text className="text-[15px] py-2 text-white font-bold">
            100.000.000đ
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[15px] py-2 text-white">Khuyến mãi : </Text>
          <Text className="text-[15px] py-2 text-white font-bold">
            20.000.000đ
          </Text>
        </View>

        {/* button checkout */}
        <TouchableOpacity
          className="w-full mt-4"
          onPress={() => router.push("/(screens)/(stack)/orders")}
        >
          <View className="w-full rounded-xl bg-green-500 py-3 flex flex-row items-center justify-center gap-2">
            <FontAwesome name="send-o" size={24} color="white" />
            <Text className="text-[15px] py-2 text-white font-bold text-center">
              Thanh toán
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
