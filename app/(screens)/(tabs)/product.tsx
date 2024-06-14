import { View, Text,TouchableOpacity,ScrollView,Image } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { useRouter } from 'expo-router'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import BottomSheet from '@/components/BottomSheet'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
const ProductScreen = () => {
  const router = useRouter()
  const isOpen = useSharedValue(false);
  
  const navigation = useNavigation();
  useEffect(() => {
    // Hide the tab bar when this screen is focused
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });

    // Show the tab bar when this screen is unfocused
    return () => navigation.setOptions({
      tabBarStyle: { display: 'flex' },
    });
  }, [navigation]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleSheet = (product) => {
    setSelectedProduct(product);
    isOpen.value = !isOpen.value;
  };
  const products = [
    {
      id: 1,
      name: "Iphone 13 Xanh lá 128GB",
      description: "Iphone 13 Xanh lá 128GB Iphone 13 Xanh lá 128GB",
      price: "$200",
      image: require('@/assets/images/iphone-13-xanh-la-thumb-new-600x600.jpg')
    },
    {
      id: 2,
      name: "Iphone 13 Xanh lá 128GB",
      description: "Iphone 13 Xanh lá 128GB Iphone 13 Xanh lá 128GB",
      price: "$300",
      image: require('@/assets/images/iphone-13-xanh-la-thumb-new-600x600.jpg')
    }
    ,{
      id: 3,
      name: "Iphone 15 Den lá 256GB",
      description: "phone 15 Den lá 256GB",
      price: "$300",
      image: require('@/assets/images/iphone-15-hong-thumb-1-600x600.jpg')
    }
  ];


  return (
    <>
      <ScrollView className='flex-1 px-4 bg-gray-200'>
      <View className="w-full">
          {products.map(product => (
            <TouchableOpacity 
              onPress={() => router.push('/detail')} 
              key={product.id} 
              className="w-full bg-white py-2 flex flex-row rounded-md mb-2"
            >
              <View className="w-1/3 flex flex-col items-center ">
                <Image 
                  resizeMode="cover" 
                  source={product.image} 
                  className="w-28 h-28 block m-auto" 
                />
              </View>
              <View className="w-2/3 relative">
                <Text className="text-md font-bold">{product.name}</Text>
                <Text className="w-full text-md text-gray-600 pt-1">{product.description}</Text>
                <View className="w-full flex flex-row items-center absolute bottom-0 justify-between">
                  <Text className="text-xl font-bold">{product.price}</Text>
                  <TouchableOpacity 
                    className="pl-2"  
                    onPress={() => toggleSheet(product)}
                  >
                    <View className="w-28 py-2 bg-red-500 rounded-full flex items-center justify-center">
                      <Text className="text-white font-bold">Buy now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
        {selectedProduct && (
          <View className="w-full shadow-xl bg-[#fff] py-8 px-4  rounded-t-[20px]">
            <Image
              source={selectedProduct.image}
              className="w-full h-72 rounded-b-[50px]"
              resizeMode="contain"
            />     
            <Text className="text-xl font-bold text-black py-2">{selectedProduct.name}</Text>  
            <Text className="text-sm text-gray-500 font-bold">{selectedProduct.description}</Text>
            <Text className="text-2xl font-bold text-black py-2">{selectedProduct.price}</Text>
            <View className="w-full flex flex-row items-center justify-between">
              <TouchableOpacity className='w-1/3'>
                <View className="flex flex-row items-center bg-gray-200 justify-center rounded-full py-[2px]">
                  <Foundation name="like" size={24} color="red" />
                  <Text className="text-xl px-2">Like</Text>
                </View>
              </TouchableOpacity>
              <View className="flex flex-row items-center gap-2">
                <TouchableOpacity>
                  <View className="flex flex-row items-center bg-gray-200 justify-center rounded-full px-2 py-[2px]">
                    <AntDesign name="infocirlceo" size={24} color="black" />
                    <Text className="px-2">Báo cáo</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="flex flex-row items-center bg-gray-200 justify-center rounded-full py-[2px]">
                    <AntDesign name="sharealt" size={24} color="blue" />
                    <Text className="px-2">Share</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-full mt-4">
              <TouchableOpacity className="w-full">
                <View className="bg-green-600 w-full py-2 rounded-full flex flex-row items-center justify-center">
                  <Text className="text-white font-bold px-2 uppercase">Add to cart</Text>
                  <EvilIcons name="cart" size={30} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </BottomSheet>
    </>
  )
}

export default ProductScreen