import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";

const MAX_HEIGHT_HEADER = 200;
export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
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
              <Entypo name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
            <View className="flex-1 px-2">
              <View className="w-ful">
                <Text className="w-full font-bold text-black text-2xl text-center">
                  Vinfast VF3
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("Share")}>
              <MaterialCommunityIcons
                name="share-variant"
                size={28}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* content */}
      
        <ScrollView
          className="w-full h-full bg-white relative z-40"
        >
          <View className="w-full h-full bg-white pb-10"  style={{ paddingTop: Constants.statusBarHeight + 70 }}>
            {/* banner product */}
            <View className="w-full h-[240] px-5 pb-5">
              <Image
                source={require("@/assets/images/VinFast-VF3-11.png")}
                style={{ width: "100%", height: 200, borderRadius: 15 }}
              />
            </View>

            {/* info product */}
            <View className="w-full h-full bg-blue-500">
              <View className="w-full h-[140px]">
                <ScrollView
                  className="w-full h-full"
                  horizontal={true}
                  showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                  pagingEnabled={true}
                >
                  <View className="w-full px-5">
                    {/* view parent */}
                    <View className="w-full h-full flex flex-row items-center gap-4">
                      {/* item child */}
                      <View className="w-[90px] h-[80px] bg-blue-400 rounded-xl relative">
                        <MaterialCommunityIcons
                          name="ruler"
                          size={24}
                          color="white"
                          className="absolute top-2 right-2"
                        />
                        <Text className="absolute bottom-2 left-2 font-bold text-white text-sm">
                          Kích Thước
                        </Text>
                      </View>
                      <View className="w-[90px] h-[80px] bg-blue-400 rounded-xl relative">
                        <MaterialCommunityIcons
                          name="weight"
                          size={24}
                          color="white"
                          className="absolute top-2 right-2"
                        />
                        <Text className="absolute bottom-2 left-2 font-bold text-white text-sm">
                          Trọng Lượng
                        </Text>
                      </View>
                      <View className="w-[90px] h-[80px] bg-blue-400 rounded-xl relative">
                        <MaterialCommunityIcons
                          name="engine"
                          size={24}
                          color="white"
                          className="absolute top-2 right-2"
                        />
                        <Text className="absolute bottom-2 left-2 font-bold text-white text-sm">
                          Động Cơ
                        </Text>
                      </View>
                      <View className="w-[90px] h-[80px] bg-blue-400 rounded-xl relative">
                        <MaterialCommunityIcons
                          name="battery"
                          size={24}
                          color="white"
                          className="absolute top-2 right-2"
                        />
                        <Text className="absolute bottom-2 left-2 font-bold text-white text-sm">
                          Pin
                        </Text>
                      </View>
                      <View className="w-[90px] h-[80px] bg-blue-400 rounded-xl relative">
                        <MaterialCommunityIcons
                          name="speedometer"
                          size={24}
                          color="white"
                          className="absolute top-2 right-2"
                        />
                        <Text className="absolute bottom-2 left-2 font-bold text-white text-sm">
                          Hiệu Suất
                        </Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>

              {/* tab */}
              <View className="w-full px-5">
                <View className="w-full flex flex-row items-center justify-center bg-blue-300 rounded-full shadow shadow-blue-400">
                  <TouchableOpacity
                    className="w-1/2 rounded-full py-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <Text className="w-full text-center font-bold text-sm text-black">
                      Chi Tiết
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="w-1/2 rounded-full py-3">
                    <Text className="w-full text-center font-bold text-sm text-black">
                      Thông Số
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* show tab */}

              <View className="w-full px-5 py-5">
                <View className="w-full flex flex-row items-center justify-between border-b border-gray-100/30 py-5 gap-5">
                  <View className="flex flex-row items-center gap-2">
                    <MaterialCommunityIcons
                      name="shape-outline"
                      size={24}
                      color="white"
                    />
                    <Text className="text-sm py-2 font-bold text-white">
                      Kiểu dáng :
                    </Text>
                  </View>

                  <Text className="flex-1 font-bold text-white text-sm text-right">
                    VF 3 có thiết kế 2 cửa với 5 chổ ngồi
                  </Text>
                </View>
                <View className="w-full flex flex-row items-center justify-between border-b border-gray-100/30 py-5 gap-5">
                  <View className="flex flex-row items-center gap-2">
                    <MaterialCommunityIcons
                      name="resize"
                      size={24}
                      color="white"
                    />
                    <Text className="text-sm py-2 font-bold text-white">
                      Kích thước :
                    </Text>
                  </View>

                  <Text className="flex-1 font-bold text-white text-sm text-right">
                    Chiều dài: 3.190 mm Chiều rộng: 1.679 mm Chiều cao: 1.622 mm
                  </Text>
                </View>
                <View className="w-full flex flex-row items-center justify-between border-b border-gray-100/30 py-5 gap-5">
                  <View className="flex flex-row items-center gap-2">
                    <MaterialCommunityIcons
                      name="engine-outline"
                      size={24}
                      color="white"
                    />
                    <Text className="text-sm py-2 font-bold text-white">
                      Động cơ : 
                    </Text>
                  </View>

                  <Text className="flex-1 font-bold text-white text-sm text-right">
                    Công suất 32 kW
                  </Text>
                </View>
                <View className="w-full flex flex-row items-center justify-between border-b border-gray-100/30 py-5 gap-5">
                  <View className="flex flex-row items-center gap-2">
                    <MaterialCommunityIcons
                      name="engine-outline"
                      size={24}
                      color="white"
                    />
                    <Text className="text-sm py-2 font-bold text-white">
                      Động cơ : 
                    </Text>
                  </View>

                  <Text className="flex-1 font-bold text-white text-sm text-right">
                    Công suất 32 kW
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
     

      {/* footer */}
      <View className="w-full absolute bottom-5 z-50 px-5">
          <View className="w-full flex flex-row items-center justify-center gap-5">
              <TouchableOpacity className="w-[50px] h-[50px] rounded-xl flex-col justify-center items-center bg-blue-400">
                  <MaterialIcons name="favorite-border" size={24} color="white" />
              </TouchableOpacity>
              <View>
                <TouchableOpacity className="w-full flex flex-row items-center justify-center gap-4 bg-green-500 py-3 rounded-full">
                    <AntDesign name="shoppingcart" size={24} color="white" />
                    <Text className="font-bold text-white">Add to cart</Text>
                </TouchableOpacity>
              </View>
          </View>
      </View>
    </>
  );
}

