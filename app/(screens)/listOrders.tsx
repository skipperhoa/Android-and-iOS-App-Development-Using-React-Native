import { View, Text, SafeAreaView, ScrollView,TouchableOpacity, Image } from "react-native";
import React from "react";

// icon
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const ListOrderScreen = () => {
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="w-full h-full">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             
            <View className="flex flex-row items-center">
            {/* menu tab */}

            <TouchableOpacity>
                <View className="px-2">
                <Text className="text-[15px] p-2" style={{color: "#EE7C03"}}>Chờ xác nhận</Text>
                <View
                    style={[
                    {
                        borderBottomColor: "#EE7C03",
                        borderBottomWidth: 2,
                        borderStyle: "solid",
                        
                    },
                    ]}
                ></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className="px-2">
                <Text className="text-[15px] p-2">Chờ lấy hàng</Text>
                <View
                    style={[
                    {
                        borderBottomColor: "#EE7C03",
                        borderBottomWidth: 2,
                        borderStyle: "solid",
                        display: "none",
                    },
                    ]}
                ></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className="px-2">
                <Text className="text-[15px] p-2">Chờ giao hàng</Text>
                <View
                    style={[
                    {
                        borderBottomColor: "#EE7C03",
                        borderBottomWidth: 2,
                        borderStyle: "solid",
                        display: "none",
                    },
                    ]}
                ></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className="px-2">
                <Text className="text-[15px] p-2">Đã giao</Text>
                <View
                    style={[
                    {
                        borderBottomColor: "#EE7C03",
                        borderBottomWidth: 2,
                        borderStyle: "solid",
                        display: "none",
                    },
                    ]}
                ></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className="px-2">
                <Text className="text-[15px] p-2">Đã huỷ</Text>
                <View
                    style={[
                    {
                        borderBottomColor: "#EE7C03",
                        borderBottomWidth: 2,
                        borderStyle: "solid",
                        display: "none",
                    },
                    ]}
                ></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className="px-2">
                <Text className="text-[15px] py-4">Trả hàng</Text>
                <View
                    style={[
                    {
                        borderBottomColor: "#EE7C03",
                        borderBottomWidth: 2,
                        borderStyle: "solid",
                        display: "none",
                    },
                    ]}
                ></View>
                </View>
            </TouchableOpacity>
            </View>
          </ScrollView>

          {/* list orders */}
          <ScrollView className="w-full bg-gray-100"> 

              <View className="w-full p-4 bg-white">

                    {/* card title */}
                   <View className="w full bg-white flex flex-row items-center justify-between">
                      <View className="flex flex-row items-center">
                          <View className=" bg-red-500 p-1 rounded-sm">
                                <Text className="text-white">Shop Mail</Text>
                          </View>
                          <Text className="text-black font-bold pl-2 text-[17px]">Sản phẩm thông minh</Text>
                      </View>
                      <Text className="font-bold text-orange-500">Hoàn thành</Text>
                   </View>
                   {/* card body */}
                   <View className="py-4">
                      <View className="flex flex-row">
                          <View className="w-1/4 flex flex-col items-center justify-center">
                              <Image source= {require("../../assets/products/img01.jpg")} className='w-20 h-20 rounded-xl' />
                          </View>
                          <View className="flex-1 p-2">
                              <View className="w-full">
                                  <Text className="text-[15px] font-bold">Mì cay mới , ngon quá đi thôi (new)</Text>
                                  <Text className="w-full text-right font-bold">x2</Text>
                                  <View className="flex flex-row items-center justify-between pt-2">
                                        <View className="border-[1px] border-red-300/100 p-1 px-2">
                                            <Text className="text-sm text-red-500">15 ngày trả hàng</Text>
                                        </View>
                                        <View className="flex flex-row items-center justify-end gap-2">
                                            <Text className="text-gray-500/100 text-sm line-through">đ20.000</Text>
                                            <Text className="text-red-500 font-bold text-sm">đ19.000</Text>
                                        </View>
                                  </View>
                              </View>
                          </View>
                      </View>
                   </View>
                   {/* card footer */}
                   <View className="w-full border-t-[1px] border-gray-300 pt-4">
                      <View className="flex flex-row items-center justify-between pb-4">
                           <Text className="text-sm text-gray-400">2 sản phẩm</Text>
                           <View className="flex flex-row items-center gap-2">
                           <FontAwesome name="money" size={24} color="red" />
                           <Text className="text-red-500 font-bold text-sm">đ51.000</Text>
                            </View>
                      </View>
                      <View className="border-t-[1px] border-gray-300 pt-4 flex flex-row items-center justify-between">
                          <View className="flex flex-row items-cente gap-2">
                               <AntDesign name="car" size={24} color="#22c55e" />
                              <Text className="text-sm text-green-500">Giao hàng thành công</Text>
                          </View>
                          <MaterialIcons name="navigate-next" size={30} color="#6A6968" />
                          
                      </View>

                   </View>
              </View>
              <View className="w-full p-4 bg-white mt-4">

                    {/* card title */}
                   <View className="w full bg-white flex flex-row items-center justify-between">
                      <View className="flex flex-row items-center">
                          <View className=" bg-red-500 p-1 rounded-sm">
                                <Text className="text-white">Shop Mail</Text>
                          </View>
                          <Text className="text-black font-bold pl-2 text-[17px]">Sản phẩm thông minh</Text>
                      </View>
                      <Text className="font-bold text-orange-500">Hoàn thành</Text>
                   </View>
                   {/* card body */}
                   <View className="py-4">
                      <View className="flex flex-row">
                          <View className="w-1/4 flex flex-col items-center justify-center">
                              <Image source= {require("../../assets/products/img02.jpg")} className='w-20 h-20 rounded-xl' />
                          </View>
                          <View className="flex-1 p-2">
                              <View className="w-full">
                                  <Text className="text-[15px] font-bold">Mì cay mới , ngon quá đi thôi (new)</Text>
                                  <Text className="w-full text-right font-bold">x2</Text>
                                  <View className="flex flex-row items-center justify-between pt-2">
                                        <View className="border-[1px] border-red-300/100 p-1 px-2">
                                            <Text className="text-sm text-red-500">15 ngày trả hàng</Text>
                                        </View>
                                        <View className="flex flex-row items-center justify-end gap-2">
                                            <Text className="text-gray-500/100 text-sm line-through">đ20.000</Text>
                                            <Text className="text-red-500 font-bold text-sm">đ19.000</Text>
                                        </View>
                                  </View>
                              </View>
                          </View>
                      </View>
                   </View>
                   {/* card footer */}
                   <View className="w-full border-t-[1px] border-gray-300 pt-4">
                      <View className="flex flex-row items-center justify-between pb-4">
                           <Text className="text-sm text-gray-400">2 sản phẩm</Text>
                           <View className="flex flex-row items-center gap-2">
                           <FontAwesome name="money" size={24} color="red" />
                           <Text className="text-red-500 font-bold text-sm">đ51.000</Text>
                            </View>
                      </View>
                      <View className="border-t-[1px] border-gray-300 pt-4 flex flex-row items-center justify-between">
                          <View className="flex flex-row items-cente gap-2">
                               <AntDesign name="car" size={24} color="#22c55e" />
                              <Text className="text-sm text-green-500">Giao hàng thành công</Text>
                          </View>
                          <MaterialIcons name="navigate-next" size={30} color="#6A6968" />
                          
                      </View>

                   </View>
              </View>
              <View className="w-full p-4 bg-white mt-4">

                    {/* card title */}
                   <View className="w full bg-white flex flex-row items-center justify-between">
                      <View className="flex flex-row items-center">
                          <View className=" bg-red-500 p-1 rounded-sm">
                                <Text className="text-white">Shop Mail</Text>
                          </View>
                          <Text className="text-black font-bold pl-2 text-[17px]">Sản phẩm thông minh</Text>
                      </View>
                      <Text className="font-bold text-orange-500">Hoàn thành</Text>
                   </View>
                   {/* card body */}
                   <View className="py-4">
                      <View className="flex flex-row">
                          <View className="w-1/4 flex flex-col items-center justify-center">
                              <Image source= {require("../../assets/products/img03.jpg")} className='w-20 h-20 rounded-xl' />
                          </View>
                          <View className="flex-1 p-2">
                              <View className="w-full">
                                  <Text className="text-[15px] font-bold">Mì cay mới , ngon quá đi thôi (new)</Text>
                                  <Text className="w-full text-right font-bold">x2</Text>
                                  <View className="flex flex-row items-center justify-between pt-2">
                                        <View className="border-[1px] border-red-300/100 p-1 px-2">
                                            <Text className="text-sm text-red-500">15 ngày trả hàng</Text>
                                        </View>
                                        <View className="flex flex-row items-center justify-end gap-2">
                                            <Text className="text-gray-500/100 text-sm line-through">đ20.000</Text>
                                            <Text className="text-red-500 font-bold text-sm">đ19.000</Text>
                                        </View>
                                  </View>
                              </View>
                          </View>
                      </View>
                   </View>
                   {/* card footer */}
                   <View className="w-full border-t-[1px] border-gray-300 pt-4">
                      <View className="flex flex-row items-center justify-between pb-4">
                           <Text className="text-sm text-gray-400">2 sản phẩm</Text>
                           <View className="flex flex-row items-center gap-2">
                           <FontAwesome name="money" size={24} color="red" />
                           <Text className="text-red-500 font-bold text-sm">đ51.000</Text>
                            </View>
                      </View>
                      <View className="border-t-[1px] border-gray-300 pt-4 flex flex-row items-center justify-between">
                          <View className="flex flex-row items-cente gap-2">
                               <AntDesign name="car" size={24} color="#22c55e" />
                              <Text className="text-sm text-green-500">Giao hàng thành công</Text>
                          </View>
                          <MaterialIcons name="navigate-next" size={30} color="#6A6968" />
                          
                      </View>

                   </View>
              </View>
              
          </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ListOrderScreen;
