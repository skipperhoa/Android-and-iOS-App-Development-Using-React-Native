import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome6,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { useRouter, useNavigation } from "expo-router";
/* call api */
import { getAllCategories } from "@/api/category";
import ProductCard from "@/components/pages/product/ProductCard";
import ProductCardNew from "@/components/pages/product/ProductCardNew";
import CategoryCard from "@/components/pages/category/CategoryCard";
import CategoryCardService from "@/components/pages/category/CategoryCardService";

// import components
import HomeSearch from "@/components/ui/header/HomeSearch";
import HomeSlide from "@/components/ui/header/HomeSlide";



export default function IndexScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("../../../assets/fonts/HelvetIns.ttf"),
    PlaywriteNL: require("../../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
    Montserrat: require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
  });
 
  return (
    <>
      <View className="w-full h-full bg-white ">
        <ScrollView>
         
          {/* header */}
          <HomeSearch />
          
          {/* slide */}
          <HomeSlide />
        
          {/* categories sevice*/}
          <CategoryCardService />

          {/* categories car */}
          <CategoryCard />

          {/* products */}
          <ProductCard />
          {/* end sản phẩn nổi bật */}

          {/* sản phẩm mới nhất */}
          <ProductCardNew />
          {/* end sản phẩm mới nhất */}

        </ScrollView>
      </View>
    </>
  );
}
