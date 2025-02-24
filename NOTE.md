### SETUP BOTTOM TAB
```
import { Tabs } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialIcons,MaterialCommunityIcons,AntDesign
} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
       
          tabBarShowLabel: true,
          title: "",
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#fff",
          
          headerStyle: {
            backgroundColor: "#027DFC",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#027DFC",
          },
          tabBarIconStyle: { 
            width: 30,
            height: 30,
          },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: "",
          tabBarLabel: "Trang chủ",
         

          headerLeft: () => (
            <View className="w-full flex-row justify-between items-center">
              <View className="px-5">
                <View className="flex-row items-center gap-2">
                  <TouchableOpacity>
                    <MaterialIcons name="menu-open" size={28} color="white" />
                  </TouchableOpacity>
                  <Text className="font-bold text-white text-2xl">
                    Shop Car
                  </Text>
                </View>
              </View>
            </View>
          ),
          headerRight: () => (
            <View className="px-5">
              <View className="flex-row items-center gap-4">
                <TouchableOpacity>
                  <View className="relative">
                    <View className="w-5 h-5 absolute z-10 -top-2 -right-2 rounded-full bg-red-500 flex-col justify-center items-center">
                      <Text className="font-bold text-white text-sm">10</Text>
                    </View>
                    <Ionicons
                      name="notifications-outline"
                      size={24}
                      color="white"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="relative">
                    <View className="w-5 h-5 absolute  z-10 -top-2 -right-2 rounded-full bg-red-500 flex-col justify-center items-center">
                      <Text className="font-bold text-white text-sm">1</Text>
                    </View>
                    <Ionicons name="cart-outline" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ),

          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name={focused ? "home" : "home"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Danh mục",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "list-alt" : "list-alt"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qrcode"
        options={{
          title: "Quét mã",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={
                focused ? "qrcode" : "qrcode"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Tin nhắn",
          tabBarBadge: 3,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={
                focused ? "message1" : "message1"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Cài đặt",
          tabBarBadge: 1,
          tabBarBadgeStyle: {
            color: 'black',
            backgroundColor: 'yellow',
          },
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={
                focused ? "setting" : "setting"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
```


### FIX HEADER IN NAVIGATION
```
import React, {useState, useLayoutEffect, useEffect } from 'react'
import { View, Text,Platform, Alert ,TouchableOpacity,TextInput, Image, ScrollView} from 'react-native'
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons,AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons';

// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";

const MAX_HEIGHT_HEADER = 200;

export default function CategoryScreen() {
   const [categories, setCategories] = useState([]);
   const [category, setCategory] = useState('');
   const [products,setProducts] = useState([]);
   const [loading,setLoading] = useState(false);
   const [active,setActive] = useState(true);
   const router = useRouter();
   const [fontsLoaded, fontError] = useFonts({
        HelvetIns: require("../../../assets/fonts/HelvetIns.ttf"),
        PlaywriteNL: require("../../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
        Montserrat: require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
      });

  useEffect(() => {
        getAllCategories();    
  },[]);

  // get all categories
  useEffect(() => {
        getProductsByCategory(category);
  },[category])
  const getAllCategories = async () => {
    setLoading(true);
    try {
     // Alert.alert('Đang lấy dữ liệu...');
      const response = await fetch('https://dummyjson.com/products/category-list');
      const data = await response.json();
      setCategories(data);
      //get all products
      getAllProducts();
    } catch (error) {
      console.error(error);
    }
  }
  const getAllProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
  }
}
  const getProductsByCategory = async (category : string) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await response.json();
      console.log("products",data);
    } catch (error) {
      console.error(error);
    }
  }
  if(!loading) return <Text>Đang loadding...</Text>
  return (
    <>
        {/* header search */}
        <View className='absolute w-full z-50' >  
            <View className='w-full bg-blue-500 relative z-50' 
            style={{paddingTop:  Constants.statusBarHeight + 10}}>
                <View className='w-full flex-row items-center justify-between px-2'>
                    <TouchableOpacity onPress={() => router.push('/')} >
                        <Entypo name="chevron-left" size={28} color="white" />
                    </TouchableOpacity>
                    <View className='flex-1 px-2'>
                        <View className='w-full flex-row items-center bg-white rounded-full px-4'>
                            <TextInput className='flex-1 p-3 placeholder:text-gray-500' placeholder="Tìm kiếm sản phẩm" />
                            <TouchableOpacity onPress={() => Alert.alert('Voice')}>
                                <MaterialIcons name='keyboard-voice' size={28} color='black' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Filter')}>
                        <AntDesign name="filter" size={28} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Filter   */}
                <View className='w-full p-5'>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View className='w-full flex flex-row gap-1'>
                            {
                            categories.map((item,index) => (
                                    <TouchableOpacity key={index}  onPress={()=>setCategory(item)}
                                    className={index==0?'border-b-2 border-orange-500':'border-none'}>
                                        <Text className='text-white font-bold p-2 text-[15px] capitalize'>{item}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                            <TouchableOpacity  className='border-b-2 border-orange-500'>
                                <Text className='text-white font-bold p-2 text-[15px]'>Toyota</Text>
                            </TouchableOpacity>
                            
                        </View>
                        </ScrollView>
                </View>
                {/* END Filter */}
            </View>
        </View>
        {/* end header search */}
        <ScrollView className='flex-1 bg-white relative' >
            
    
            {/* content  */}
            <View className='w-full' style={{paddingTop: MAX_HEIGHT_HEADER}}>
                <View>
                    {
                        products?.map((item,index) => (
                            <TouchableOpacity key={index} onPress={() => router.push(`/product/${item.id}`)}>
                                <View className='w-full flex-row items-center justify-between px-5 py-3'>
                                    <View className='flex-row items-center gap-2'>
                                        <Image source={item.thumbnail} style={{width:120,height:100,borderRadius:10}} />
                                        <View>
                                            <Text className='text-[15px] font-bold'>{item.title}</Text> 
                                            <Text className='text-[12px] text-gray-500'>{item.description}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    )}
                    
    
                 </View>
            </View>
            {/* content */}
        </ScrollView>
           
    </>
  )
}

```