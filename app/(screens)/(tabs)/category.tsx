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
  const [active,setActive] = useState(true);
  const [loading,setLoading] = useState(false);
  const [products,setProducts] = useState([]);
  useEffect(() => {
        getAllProducts();
  },[])
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
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      //console.log(data);
      setProducts(data.products);
      setLoading(false);
      //get all products
    } catch (error) {
      console.log(error);
    }
  }

  if(loading) return <Text>Đang loadding...</Text>
  return (
    <>
 <View className='w-full absolute z-50' style={{height: MAX_HEIGHT_HEADER}}>
  {/* header search */}
  <View className='w-full bg-blue-500' 
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
                        <TouchableOpacity  className='border-b-2 border-orange-500'>
                            <Text className='text-white font-bold p-2 text-[15px]'>Toyota</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>Honda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>Ford</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>Mercedes-Benz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>BMW</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>Audi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>Porsche</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>Lexus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>Nissan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=''>
                            <Text className='text-white font-bold p-2 text-[15px]'>Hyundai</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
            </View>
            {/* END Filter */}
        </View>
            {/* end header search */}
        </View>

        <ScrollView className='flex-1 bg-white' style={{paddingTop: MAX_HEIGHT_HEADER}} >
          

            {/* content  */}
            <View className='w-full flex-1 bg-gray-100 items-center justify-center'>
                <Text className='font-bold text-2xl' style={{fontFamily:'Montserrat'}}>Content Category</Text>
            
                <View>
                {
                    products.map((item, index) => (
                        <View className='w-full p-4 border-b-2 border-gray-300' key={index}>
                            <View className='w-full flex-row items-center justify-between'>
                                <View className='flex-row items-center gap-2'>
                                    <Image source={{uri:item.images[0]}} className='w-10 h-10 rounded-full' />
                                    <Text className='text-gray-500 font-bold'>{item.title}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                }
                </View>
            </View>
            {/* content */}
        </ScrollView>
    </>
       
  )
}