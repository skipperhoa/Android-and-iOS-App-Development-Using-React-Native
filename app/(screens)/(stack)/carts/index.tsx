import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
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
import { useSelector, useDispatch } from "react-redux";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "@/redux/actions/cartActions";
const data = {
  taxRate: 10,
  discountRate: 20,
};

export default function CartScreen() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state.cart);
 // console.log("Cart items 12345678:", items);
  const router = useRouter();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const totalPrice: any = () => {
    let total = 0;
    items.map((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const discountRate = () => {
    return totalPrice() - totalPrice() * (data.discountRate / 100);
  };
  const taxRate = () => {
    return discountRate() * (data.taxRate / 100);
  };
  const calculateFinalPrice = (price, { taxRate, discountRate }: any) => {
    const tax = taxRate / 100;
    const discount = discountRate / 100;

    return price * (1 - discount) * (1 + tax);
  };
  const renderCart = (item: any) => {
    return (
      <View
        key={item.id}
        className="w-full flex flex-row gap-5 bg-white p-5 rounded-md mb-5"
        style={styles.boxShadow}
      >
        {/* image cart */}
        <View className="w-[150px] flex flex-row items-center justify-center">
          <Image
            source={{ uri: item.image }}
            className="w-[150px] h-[100px] rounded-md"
            resizeMode="contain"
          />
        </View>
        {/* info cart */}
        <View className="flex-1">
          <View className="w-full flex flex-col">
            <View>
              <TouchableOpacity onPress={() => dispatch(DeleteCart(item))}>
                <View className="w-6 h-6 rounded-md flex-col justify-center items-center bg-red-400 absolute -top-[10px] -right-[10px] z-50">
                  <FontAwesome name="remove" size={14} color="white" />
                </View>
              </TouchableOpacity>
              <Text className="w-auto text-black font-bold text-[16px]">
                {item.title} 
              </Text>
            </View>
            <View className="w-full flex flex-row items-center mt-3">
              <MaterialIcons name="attach-money" size={18} color={"#ef4444"} />
              <Text className="w-full text-red-500 font-bold text-[15px]">
                {formatPrice(item.price)} VND
              </Text>
            </View>
            <View className="w-full flex flex-row items-center gap-2 mt-3">
              <TouchableOpacity
                onPress={() => dispatch(DecreaseQuantity(item))}
                className="w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md"
              >
                <Text className="font-bold text-gray-500 text-sm">-</Text>
              </TouchableOpacity>
              <Text className="font-bold text-black text-[14px]">
                {item.quantity}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(IncreaseQuantity(item))}
                className="w-7 h-7 bg-gray-200 flex flex-col items-center justify-center rounded-md"
              >
                <Text className="font-bold text-gray-500 text-sm">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {/* header */}
      <View className="w-full relative z-50">
        <View
          className="w-full bg-white pb-4"
          style={{ paddingTop: Constants.statusBarHeight + 10 }}
        >
          <View className="w-full flex-row items-center justify-between px-2 ">
            <TouchableOpacity onPress={() => router.back()}>
              <Entypo name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
            <View className="flex-1 px-2">
              <View className="w-ful">
                <Text className="w-full font-bold text-black text-2xl text-center">
                  Giỏ hàng
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("Chat")}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* content */}
      <View className="w-full flex-1 px-5 mt-5">
        <View className="w-full h-full">
          <ScrollView className="w-full h-full">
            <View className="w-full h-full">
              {/* box cart */}
              {items.map((item: any) => renderCart(item))}
            </View>
          </ScrollView>
        </View>
      </View>
      {/* footer */}
      <View className="w-full bg-blue-500 px-5 pt-5 pb-8">
        {/* checkout */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[15px] py-2 text-white">Tổng giá tiền :</Text>
          <Text className="text-[15px] py-2 text-white font-bold">
            {formatPrice(totalPrice())} VND
          </Text>
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-[15px] py-2 text-white">
            Khuyến mãi : {data.discountRate} %{" "}
          </Text>
          <Text className="text-[15px] py-2 text-white font-bold">
            {formatPrice(totalPrice() - discountRate())} VND
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[15px] py-2 text-white">
            Thuế : {data.taxRate} %
          </Text>
          <Text className="text-[15px] py-2 text-white font-bold">
            {formatPrice(totalPrice() - taxRate())} VND
          </Text>
        </View>

        {/* button checkout */}
        <TouchableOpacity
          className="w-full mt-4"
          onPress={() => router.push("/(screens)/(stack)/orders")}
        >
          <View className="w-full rounded-xl bg-yellow-400 py-3 flex flex-row items-center justify-center gap-2">
            <AntDesign name="arrowright" size={24} color="white" />
            <Text className="text-[15px] py-2 text-white font-bold text-center">
              Thanh toán
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
