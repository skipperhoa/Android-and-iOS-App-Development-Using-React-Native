import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";

const MAX_HEIGHT_HEADER = 200;

export default function CategoryScreen() {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("../../../assets/fonts/HelvetIns.ttf"),
    PlaywriteNL: require("../../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
    Montserrat: require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
  });

  const getAllProducts = async () => {
    try {
      setLoading(true);
      // Alert.alert('Đang lấy dữ liệu...');
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      //console.log(data);
      setProducts(data.products);
      setLoading(false);
      //get all products
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Text>Đang loadding...</Text>;
  return (
    <>
      <View
        className="w-full absolute z-50"
        style={{ height: MAX_HEIGHT_HEADER }}
      >
        {/* header search */}
        <View
          className="w-full bg-blue-500"
          style={{ paddingTop: Constants.statusBarHeight + 10 }}
        >
          <View className="w-full flex-row items-center justify-between px-2">
            <TouchableOpacity onPress={() => router.push("/")}>
              <Entypo name="chevron-left" size={28} color="white" />
            </TouchableOpacity>
            <View className="flex-1 px-2">
              <View className="w-full flex-row items-center bg-white rounded-full px-4">
                <TextInput
                  className="flex-1 p-3 placeholder:text-gray-500"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <TouchableOpacity onPress={() => Alert.alert("Voice")}>
                  <MaterialIcons
                    name="keyboard-voice"
                    size={28}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("Filter")}>
              <AntDesign name="filter" size={28} color="white" />
            </TouchableOpacity>
          </View>

          {/* Filter   */}
          <View className="w-full p-5">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="w-full flex flex-row gap-1">
                <TouchableOpacity className="border-b-2 border-orange-500">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Toyota
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Honda
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Ford
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Mercedes-Benz
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    BMW
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Audi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Porsche
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Lexus
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Nissan
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="">
                  <Text className="text-white font-bold p-2 text-[15px]">
                    Hyundai
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          {/* END Filter */}
        </View>
        {/* end header search */}
      </View>

      <ScrollView
        className="flex-1 bg-gray-100"
        style={{ paddingTop: MAX_HEIGHT_HEADER }}
      >
        {/* content  */}
        <View className="w-full">
          <TouchableOpacity className="w-full px-5" >
            <View className="w-full pt-5 bg-white rounded-xl">
              <View className="w-full flex flex-row items-center justify-between px-5">
                <View className="flex flex-row items-center gap-1">
                  <MaterialIcons name="star-half" size={24} color="gold" />

                  <Text className="font-bold text-[15px]">5.0</Text>
                  <Text>(300)</Text>
                </View>
                <View className="flex flex-row items-center gap-1">
                  <Text>Tốc độ:</Text>
                  <Text className="font-bold text-[15px]">300 km/h</Text>
                </View>
                <TouchableOpacity>
                  <MaterialIcons
                    name="favorite-border"
                    size={25}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={require("../../../assets/images/mau-xe-vinfast-Vf3-5.png")}
                style={{ width: "100%", height: 200, borderRadius: 15 }}
              />
              <View className="flex flex-row items-center justify-between px-5">
                <View>
                  <Text className="text-gray-500">VinFast</Text>
                  <Text className="text-xl pt-1 font-bold">VinFast VF3</Text>
                </View>
                <View className="flex flex-col items-center gap-1">
                  <Text className="text-gray-500">Giá xe mua Pin</Text>
                  <Text className="font-bold">322.000.000 VNĐ</Text>
                </View>
              </View>
              <View className="w-full bg-blue-500 p-2 rounded-md mt-2 flex flex-row items-center justify-between gap-2">
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <MaterialIcons name="speed" size={24} color="white" />
                    <Text className="text-sm text-white">Quãng đường</Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      205-210 km
                    </Text>
                  </View>
                </View>
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <MaterialIcons name="timer" size={24} color="white" />

                    <Text className="text-sm text-white">Thời gian sạc</Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      36 phút
                    </Text>
                  </View>
                </View>
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <FontAwesome name="users" size={24} color="white" />

                    <Text className="text-sm text-white">Số chỗ ngồi </Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      4 chỗ
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full px-5 mt-5">
            <View className="w-full pt-5 bg-white rounded-xl">
              <View className="w-full flex flex-row items-center justify-between px-5">
                <View className="flex flex-row items-center gap-1">
                  <MaterialIcons name="star-half" size={24} color="gold" />

                  <Text className="font-bold text-[15px]">5.0</Text>
                  <Text>(300)</Text>
                </View>
                <View className="flex flex-row items-center gap-1">
                  <Text>Tốc độ:</Text>
                  <Text className="font-bold text-[15px]">300 km/h</Text>
                </View>
                <TouchableOpacity>
                  <MaterialIcons
                    name="favorite-border"
                    size={25}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={require("../../../assets/images/mau-xe-vinfast-Vf3-8.png")}
                style={{ width: "100%", height: 200, borderRadius: 15 }}
              />
              <View className="flex flex-row items-center justify-between px-5">
                <View>
                  <Text className="text-gray-500">VinFast</Text>
                  <Text className="text-xl pt-1 font-bold">VinFast VF3</Text>
                </View>
                <View className="flex flex-col items-center gap-1">
                  <Text className="text-gray-500">Giá xe mua Pin</Text>
                  <Text className="font-bold">322.000.000 VNĐ</Text>
                </View>
              </View>
              <View className="w-full bg-blue-500 p-2 rounded-md mt-2 flex flex-row items-center justify-between gap-2">
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <MaterialIcons name="speed" size={24} color="white" />
                    <Text className="text-sm text-white">Quãng đường</Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      205-210 km
                    </Text>
                  </View>
                </View>
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <MaterialIcons name="timer" size={24} color="white" />

                    <Text className="text-sm text-white">Thời gian sạc</Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      36 phút
                    </Text>
                  </View>
                </View>
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <FontAwesome name="users" size={24} color="white" />

                    <Text className="text-sm text-white">Số chỗ ngồi </Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      4 chỗ
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full px-5 mt-5">
            <View className="w-full pt-5 bg-white rounded-xl">
              <View className="w-full flex flex-row items-center justify-between px-5">
                <View className="flex flex-row items-center gap-1">
                  <MaterialIcons name="star-half" size={24} color="gold" />

                  <Text className="font-bold text-[15px]">5.0</Text>
                  <Text>(300)</Text>
                </View>
                <View className="flex flex-row items-center gap-1">
                  <Text>Tốc độ:</Text>
                  <Text className="font-bold text-[15px]">300 km/h</Text>
                </View>
                <TouchableOpacity>
                  <MaterialIcons
                    name="favorite-border"
                    size={25}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={require("../../../assets/images/mau-xe-vinfast-Vf3-7.png")}
                style={{ width: "100%", height: 200, borderRadius: 15 }}
              />
              <View className="flex flex-row items-center justify-between px-5">
                <View>
                  <Text className="text-gray-500">VinFast</Text>
                  <Text className="text-xl pt-1 font-bold">VinFast VF3</Text>
                </View>
                <View className="flex flex-col items-center gap-1">
                  <Text className="text-gray-500">Giá xe mua Pin</Text>
                  <Text className="font-bold">322.000.000 VNĐ</Text>
                </View>
              </View>
              <View className="w-full bg-blue-500 p-2 rounded-md mt-2 flex flex-row items-center justify-between gap-2">
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <MaterialIcons name="speed" size={24} color="white" />
                    <Text className="text-sm text-white">Quãng đường</Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      205-210 km
                    </Text>
                  </View>
                </View>
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <MaterialIcons name="timer" size={24} color="white" />

                    <Text className="text-sm text-white">Thời gian sạc</Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      36 phút
                    </Text>
                  </View>
                </View>
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <FontAwesome name="users" size={24} color="white" />

                    <Text className="text-sm text-white">Số chỗ ngồi </Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      4 chỗ
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full px-5 mt-5">
            <View className="w-full pt-5 bg-white rounded-xl">
              <View className="w-full flex flex-row items-center justify-between px-5">
                <View className="flex flex-row items-center gap-1">
                  <MaterialIcons name="star-half" size={24} color="gold" />

                  <Text className="font-bold text-[15px]">5.0</Text>
                  <Text>(300)</Text>
                </View>
                <View className="flex flex-row items-center gap-1">
                  <Text>Tốc độ:</Text>
                  <Text className="font-bold text-[15px]">300 km/h</Text>
                </View>
                <TouchableOpacity>
                  <MaterialIcons
                    name="favorite-border"
                    size={25}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={require("../../../assets/images/mau-xe-vinfast-Vf3-6.png")}
                style={{ width: "100%", height: 200, borderRadius: 15 }}
              />
              <View className="flex flex-row items-center justify-between px-5">
                <View>
                  <Text className="text-gray-500">VinFast</Text>
                  <Text className="text-xl pt-1 font-bold">VinFast VF3</Text>
                </View>
                <View className="flex flex-col items-center gap-1">
                  <Text className="text-gray-500">Giá xe mua Pin</Text>
                  <Text className="font-bold">322.000.000 VNĐ</Text>
                </View>
              </View>
              <View className="w-full bg-blue-500 p-2 rounded-md mt-2 flex flex-row items-center justify-between gap-2">
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <MaterialIcons name="speed" size={24} color="white" />
                    <Text className="text-sm text-white">Quãng đường</Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      205-210 km
                    </Text>
                  </View>
                </View>
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <MaterialIcons name="timer" size={24} color="white" />

                    <Text className="text-sm text-white">Thời gian sạc</Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      36 phút
                    </Text>
                  </View>
                </View>
                <View className="w-1/3 text-center">
                  <View className="w-full flex flex-row items-center gap-2">
                    <FontAwesome name="users" size={24} color="white" />

                    <Text className="text-sm text-white">Số chỗ ngồi </Text>
                  </View>
                  <View className="w-full mt-2">
                    <Text className="text-black font-bold text-center">
                      4 chỗ
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* content */}
      </ScrollView>
    </>
  );
}
