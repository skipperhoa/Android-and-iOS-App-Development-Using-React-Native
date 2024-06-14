import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,TextInput,
    Button,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { Foundation } from "@expo/vector-icons";
  import { useRouter } from "expo-router";
  
  import Animated, {
    interpolate,
    useSharedValue,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollViewOffset,
    useAnimatedScrollHandler
  } from 'react-native-reanimated';

  // icon
  import { FontAwesome } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { EvilIcons } from '@expo/vector-icons';
  import { StatusBar } from 'expo-status-bar';
  const HEADER_HEIGHT = 0;

  const HomeScreen = () => {
   
    const router = useRouter();

    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);
    const scrollY = useSharedValue(0);
    const [imageUri, setImageUri] = useState(
      "https://hoanguyenit.com/images/hoanguyencoder.jpg"
    );

    const headerAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: interpolate(
              scrollOffset.value,
              [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
              [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
            ),
          },
          {
            scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
          },
        ],
      };
    });
    const scrollHandler = useAnimatedScrollHandler((event) => {
      scrollY.value = event.contentOffset.y;
     // console.log("scrollY", scrollY.value);
    });
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: scrollY.value,
          },
        ],
      };
    });
    const handleImagePicked = (uri: string) => {
      console.warn(uri);
      setImageUri(uri);
    };
  
    return (
      <>
      <StatusBar style="dark" backgroundColor="transparent" />
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} 
       
        className="flex-1 w-full h-full bg-gray-100"
        
        onScroll={scrollHandler}>
          <Animated.View className="flex-1 w-full h-full items-center justify-center">
              {/* search */}
              <View className="w-full px-4 mt-2 relative flex flex-row items-center">
                   <TextInput className="w-full px-2 h-10 rounded-full border-2 border-gray-100 bg-white" placeholder="Search..."/>
                   <TouchableOpacity className="absolute right-7">
                       <EvilIcons name="search" size={30} color="black" />
                   </TouchableOpacity>
              </View>
  
              {/* banner */}
              <View className="w-full">
                  <View className="w-full px-4">
                      <TouchableOpacity className="w-full mt-2">
                          <Image source={require('@/assets/images/banner.png')} className="w-full h-44 block  rounded-xl" resizeMode="stretch"/>
                      </TouchableOpacity>
                  </View>
              </View>
  
              {/* category */}
              <View className="w-full px-4 mt-4">
                <View className="w-full flex flex-row flex-wrap bg-white rounded-md  pt-4">
                    <TouchableOpacity className="w-1/4 mb-4">
                         <View className="w-full">
                               <Image className="w-16 h-16 m-auto" source={require('@/assets/images/icon/64x64-128x128.webp')}></Image>
                               <Text className="text-md text-center pt-2 font-bold">Dien Thoai</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-1/4 mb-4">
                         <View className="w-full">
                               <Image className="w-16 h-16 m-auto" source={require('@/assets/images/icon/icon-may-cu-60x60.webp')}></Image>
                               <Text className="text-md text-center pt-2 font-bold">Dien Thoai</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-1/4 mb-4">
                         <View className="w-full">
                               <Image className="w-16 h-16 m-auto" source={require('@/assets/images/icon/Laptop-129x129.webp')}></Image>
                               <Text className="text-md text-center pt-2 font-bold">Dien Thoai</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-1/4 mb-4">
                         <View className="w-full">
                               <Image className="w-16 h-16 m-auto" source={require('@/assets/images/icon/tablet-128x129-2.webp')}></Image>
                               <Text className="text-md text-center pt-2 font-bold">Dien Thoai</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-1/4 mb-4">
                         <View className="w-full">
                               <Image className="w-16 h-16 m-auto" source={require('@/assets/images/icon/Donghothoitrang-128x129.webp')}></Image>
                               <Text className="text-md text-center pt-2 font-bold">Dien Thoai</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-1/4 mb-4">
                         <View className="w-full">
                               <Image className="w-16 h-16 m-auto" source={require('@/assets/images/icon/tablet-128x129-2.webp')}></Image>
                               <Text className="text-md text-center pt-2 font-bold">Dien Thoai</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-1/4 mb-4">
                         <View className="w-full">
                               <Image className="w-16 h-16 m-auto" source={require('@/assets/images/icon/Donghothoitrang-128x129.webp')}></Image>
                               <Text className="text-md text-center pt-2 font-bold">Dien Thoai</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-1/4 mb-4">
                         <View className="w-full">
                               <Image className="w-16 h-16 m-auto" source={require('@/assets/images/icon/tablet-128x129-2.webp')}></Image>
                               <Text className="text-md text-center pt-2 font-bold">Dien Thoai</Text>
                         </View>
                    </TouchableOpacity>
                </View>
              </View>
  
              {/* product */}
  
              <View className="w-full mt-4 px-4">
                <View className="w-full flex flex-row items-center justify-between">
                  <Text className="font-bold text-md">All Products</Text>
                  <TouchableOpacity>
                     <AntDesign name="arrowright" size={24} color="black" />
                  </TouchableOpacity>
                </View>
  
                {/* show product */}
                <View className="mt-4">
                    
                     <TouchableOpacity onPress={()=>router.push('/detail')} key={1} className="w-full bg-white py-4 flex flex-row rounded-md mb-2">
                         <View className="w-1/3 flex flex-col items-center">
                          <Image resizeMode="cover" source={require('@/assets/images/iphone-13-xanh-la-thumb-new-600x600.jpg')} 
                          className="w-28 h-28 block m-auto" />
                         </View>
                         <View className="w-2/3 relative">
                             <Text className="text-md font-bold">Iphone 13 Xanh lá 128GB</Text>
                             <Text className="w-full text-md text-gray-600 pt-1">Iphone 13 Xanh lá 128GB Iphone 13 Xanh lá 128GB</Text>
                             <View className="w-full flex flex-row items-center absolute bottom-0 justify-between">
                                 <Text className="text-xl font-bold">$200</Text>
                                 <TouchableOpacity className="pl-2" onPress={() => {router.push('/detail')}}>
                                    <View className="w-28 py-2 bg-red-500 rounded-full flex items-center justify-center">
                                       <Text className="text-white font-bold">Buy now</Text>
                                    </View>
                                 </TouchableOpacity>
                             </View>
                         </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>router.push('/detail')} key={1} className="w-full bg-white py-4 flex flex-row rounded-md mb-2">
                         <View className="w-1/3 flex flex-col items-center">
                          <Image resizeMode="cover" source={require('@/assets/images/iphone-13-xanh-la-thumb-new-600x600.jpg')} 
                          className="w-28 h-28 block m-auto" />
                         </View>
                         <View className="w-2/3 relative">
                             <Text className="text-md font-bold">Iphone 13 Xanh lá 128GB</Text>
                             <Text className="w-full text-md text-gray-600 pt-1">Iphone 13 Xanh lá 128GB Iphone 13 Xanh lá 128GB</Text>
                             <View className="w-full flex flex-row items-center absolute bottom-0 justify-between">
                                 <Text className="text-xl font-bold">$200</Text>
                                 <TouchableOpacity className="pl-2" onPress={() => {router.push('/detail')}}>
                                    <View className="w-28 py-2 bg-red-500 rounded-full flex items-center justify-center">
                                       <Text className="text-white font-bold">Buy now</Text>
                                    </View>
                                 </TouchableOpacity>
                             </View>
                         </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>router.push('/detail')} key={1} className="w-full bg-white py-4 flex flex-row rounded-md mb-2">
                         <View className="w-1/3 flex flex-col items-center">
                          <Image resizeMode="cover" source={require('@/assets/images/iphone-13-xanh-la-thumb-new-600x600.jpg')} 
                          className="w-28 h-28 block m-auto" />
                         </View>
                         <View className="w-2/3 relative">
                             <Text className="text-md font-bold">Iphone 13 Xanh lá 128GB</Text>
                             <Text className="w-full text-md text-gray-600 pt-1">Iphone 13 Xanh lá 128GB Iphone 13 Xanh lá 128GB</Text>
                             <View className="w-full flex flex-row items-center absolute bottom-0 justify-between">
                                 <Text className="text-xl font-bold">$200</Text>
                                 <TouchableOpacity className="pl-2" onPress={() => {router.push('/detail')}}>
                                    <View className="w-28 py-2 bg-red-500 rounded-full flex items-center justify-center">
                                       <Text className="text-white font-bold">Buy now</Text>
                                    </View>
                                 </TouchableOpacity>
                             </View>
                         </View>
                     </TouchableOpacity>
                    
                </View>
              </View>
  
             
          </Animated.View>
        </Animated.ScrollView>
       
      </>
    );
  };
  
  export default HomeScreen;
  