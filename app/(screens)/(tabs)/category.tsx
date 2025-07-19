import React, { useState, useLayoutEffect, useEffect,useCallback, useRef } from "react";
import {
  View,
  Text,
  Platform,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Animated,Easing
} from "react-native";
import { isLoading, useFonts } from "expo-font";
import { useRouter,useLocalSearchParams ,useNavigation} from "expo-router";
import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
// call api category
import { fetchCategoriesByFilter , getAllCategories} from "@/api/category";

const MAX_HEIGHT_HEADER = 200;
export default function CategoryScreen() {
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("@/assets/fonts/HelvetIns.ttf"),
    PlaywriteNL: require("@/assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
    Montserrat: require("@/assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
  });
  const loadAnimatedValue = useRef(new Animated.Value(0)).current;
  const params = useLocalSearchParams<{ title?: string }>(); // get params 
  //console.log(params?.title??"null");
  const [search, setSearch] = useState(params.title);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    onLoading();
  });
  useEffect(() => {
    if (params?.title) {
      setSearch(params.title);
    } else {
      getAllCategories().then(res => {
        if (res.status && res.data?.length) {
          setSearch(res.data[0].title); // lấy vị trí đầu tiên, nếu người dùng không chọn category mà bấm vào xem sản phẩm liền
          router.setParams({ title: res.data[0].title });
        }
      });
    }
  }, [params.title]);

  useEffect(() => {
    setLoading(true);
    const delay = new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập delay 1 giây
    //title, sort and page=1
    const fetchData = fetchCategoriesByFilter(search, 'created_at:desc', 1);
    Promise.all([fetchData, delay]).then(([res]) => {
      if (res.status) {
        setProducts(res.products.data);
        setCategories(res.categories);
      }
      setLoading(false);
    });
  }, [search]);
  
  
  const onLoading = ()=>{
     Animated.loop(Animated.timing(loadAnimatedValue, {
      toValue: 1,
      duration: 1200,
      easing: Easing.linear,
      useNativeDriver: false,
    })).start();
  }

  /* render view loading */
  const renderViewLoading = 
    <View className="w-full h-full bg-blue-500/50 flex flex-col justify-center items-center absolute top-0 left-0 z-50">
     <View className="w-full h-full flex flex-col justify-center items-center">
         <Animated.View className="w-[45px] h-[45px] flex flex-col justify-center items-center border-[1px] border-blue-600 rounded-full relative z-50"
          style={[
            {
              transform: [
                {
                  rotateZ: loadAnimatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
            },
          ]}
         >
            <View className="w-[7px] h-[7px] absolute -top-[4px] bg-blue-600 rounded-full "></View>
             <View className="w-[7px] h-[7px] absolute -bottom-[4px] bg-blue-600 rounded-full "></View>
            <View className="w-[20px] h-[20px] flex flex-col justify-center items-center bg-blue-600 rounded-full relative"></View>
         </Animated.View>
     </View>
    </View> 
  

  /* render content */
  const renderViewContent = 
      <ScrollView
        className="w-full h-full flex-1 bg-gray-100 relative z-40"
        style={{ paddingTop: categories?.length > 0 ? MAX_HEIGHT_HEADER : 150  }}
      >
        {/* content  */}
        <View className="w-full">
          {
              products?.map((item : any,index : number)  => {
                 return (
                    <TouchableOpacity className="w-full px-5 mb-5" 
                    key={index}
                    onPress={() =>{
                          router.push({
                              pathname: '/(screens)/(stack)/details/[id]',
                              params: { id: item.id },
                           });
                     }}
          >
            <View className="w-full bg-white rounded-xl pt-5">
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
                source={{uri: item.image}}
                style={{ width: "100%", height: 200, borderRadius: 15 , marginVertical: 20, paddingHorizontal: 10}} resizeMode="cover"
              />
              <View className="flex flex-row items-center justify-between px-5">
                <View className="flex-1 pr-5">
                  <Text className="text-gray-500">{item.category?.title}</Text>
                  <Text className="text-xl pt-1 font-bold capitalize" numberOfLines={1}
  ellipsizeMode="tail">{item.title}</Text>
                </View>
                <View className="flex flex-col items-center gap-1">
                  <Text className="text-gray-500">Giá xe mua Pin</Text>
                  <Text className="font-bold">{item.price} VNĐ</Text>
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
                 )
                })
          }
         
          
        </View>
        {/* content */}
      </ScrollView>

 
  return (
    <>
    <View className="w-full h-full relative">
      <View
        className="w-full absolute z-50"
        style={{ height: MAX_HEIGHT_HEADER }}
      >
        {/* header search */}
        <View
          className="w-full bg-blue-500 pb-5"
          style={{ paddingTop: Constants.statusBarHeight + 10 }}
        >
          <View className="w-full flex-row items-center justify-between px-2">
            <TouchableOpacity onPress={() => router.back()}>
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
          { 
            categories?.length > 0 && <View className="w-full px-5 pt-5">
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View className="w-full flex flex-row gap-1">
                  
                    {
                    categories?.map((item : any) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() =>{
                              
                               router.setParams({
                                  title: item.title
                               })
                            }}
                          style={[
                             {
                              paddingHorizontal:5,
                              borderRadius: 5,
                              backgroundColor: params.title == item.title ? 'white' : 'transparent',
                             }
                          ]}
                            >
                              <Text className="text-sm font-bold p-2 text-[15px]" style={[
                                {
                                  color: params.title == item.title ? 'black' : 'white',
                                }
                              ]}>
                                {item.title}
                              </Text>
                            </TouchableOpacity>
                        )
                      })
                    }
                  
                  </View>
                </ScrollView>
              </View>
          }
          {/* END Filter */}
        </View>
        {/* end header search */}
      </View>
      {loading ? renderViewLoading:renderViewContent}
    </View>

      
    </>
  );
}
