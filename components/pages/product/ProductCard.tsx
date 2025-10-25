import React, { useEffect, useState , useRef} from 'react'
import { View, Text ,TextInput, TouchableOpacity,useWindowDimensions,Dimensions, Image, ScrollView, Animated} from 'react-native'
import { FontAwesome5,FontAwesome6, Entypo,MaterialCommunityIcons ,MaterialIcons, FontAwesome} from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import {fetchProductsByFilter} from '@/api/product'
import { useRouter } from "expo-router";
const  ProductCard = () => {
const router = useRouter();
  const [products,setProducts] = React.useState([] as any[]);
  useEffect(() => {
     fetchProductsByFilter({column:'id',sort:'desc',limit:5}).then((res) => setProducts(res.products.data))
  }, []);
  return (
    <>
     {/* sản phẩm nổi bật */}
        <View className='w-full px-5 mt-10'>
            <View className="w-full flex-row items-center justify-between">
              <View className='flex-row items-center gap-2'>
                <FontAwesome6 name="hourglass-start" size={24} color="black" />
                <Text className='py-2 uppercase'  style={{fontFamily:'HelvetIns'}}>Sản phẩm nổi bật</Text>
                </View>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'></Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                 </TouchableOpacity>
             </View>
             
             <View className='w-full mt-4'>
                 <ScrollView className='w-full' horizontal={true} showsHorizontalScrollIndicator={false}>
                   <View className='flex-row gap-5'>
                      {
                        products.length>0 && products.map((item,index) => {
                            return (
                         <TouchableOpacity className='w-[200px] h-[250px]' key={index} onPress={()=>{
                                router.push(
                                    {
                                        pathname:'/(screens)/(stack)/details/[id]',
                                        params:{id:item.id}
                                    })
                            }}>
                            <View className='w-full bg-white rounded-3xl overflow-hidden border-[1px] border-gray-200/100 h-full'>
                                <View className='w-full relative'>
                                    <TouchableOpacity className='w-6 h-6 bg-gray-100 rounded-full flex-col justify-center items-center absolute top-2 right-2 z-10'>
                                            <MaterialIcons name="favorite" size={15} color="black" />
                                    </TouchableOpacity>
                                    <Image source={{uri:item.image}} className='w-full h-[120]' resizeMode='stretch'/>
                                </View>
                                <View className='w-full px-3 mt-2 pb-4'>
                                    <Text className='w-full text-xl font-bold'>{item.title}</Text>
                                    <Text className='text-sm text-gray-700 pt-2'>{item.keywords}</Text>
                                    <View className='w-full flex-row items-center gap-2 mt-2'>
                                        <Text>5.0</Text>
                                        <View className='flex-row items-center'>
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                    </View>
                                    </View>
                                </View>
                            
                                
                            </View>
                        </TouchableOpacity>
                            
                            )
                        })
                      }
                       
                        {/* <TouchableOpacity className='w-[200px] h-[250px]'>
                            <View className='w-full bg-white  rounded-3xl overflow-hidden border-[1px] border-gray-200/100 h-full'>
                                <View className='w-full  relative'>
                                    <TouchableOpacity className='w-6 h-6 bg-gray-100 rounded-full flex-col justify-center items-center absolute top-2 right-2 z-10'>
                                            <MaterialIcons name="favorite" size={15} color="black" />
                                    </TouchableOpacity>
                                    <Image source={require('@/assets/images/th2.jpg')} className='w-full h-[120]' resizeMode='cover'/>
                                </View>
                                <View className='w-full px-3 mt-2 pb-4'>
                                    <Text className='w-full text-xl font-bold'>VinFast VF5</Text>
                                    <Text className='text-sm text-gray-700 pt-2'>SUV điện cỡ nhỏ với giá bán từ 479 triệu đồng.</Text>
                                    <View className='w-full flex-row items-center gap-2 mt-2'>
                                        <Text>5.0</Text>
                                        <View className='flex-row items-center'>
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                    </View>
                                    </View>
                                </View>
                            
                                
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='w-[200px] h-[250px]'>
                            <View className='w-full bg-white rounded-3xl overflow-hidden border-[1px] border-gray-200/100 h-full'>
                                <View className='w-full relative'>
                                    <TouchableOpacity className='w-6 h-6 bg-gray-100 rounded-full flex-col justify-center items-center absolute top-2 right-2 z-10'>
                                            <MaterialIcons name="favorite" size={15} color="black" />
                                    </TouchableOpacity>
                                    <Image source={require('@/assets/images/th3.jpg')} className='w-full h-[120]' resizeMode='cover'/>
                                </View>
                                <View className='w-full px-3 mt-2 pb-4'>
                                    <Text className='w-full text-xl font-bold'>Ford Ranger</Text>
                                    <Text className='text-sm text-gray-700 pt-2'>Bán tải cỡ trung, giá từ 669 triệu đồng</Text>
                                    <View className='w-full flex-row items-center gap-2 mt-2'>
                                        <Text>5.0</Text>
                                        <View className='flex-row items-center'>
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                        <Entypo name="star" size={15} color="orange" />
                                    </View>
                                    </View>
                                </View>
                            
                                
                            </View>
                        </TouchableOpacity> */}
                   </View>
                  
                 </ScrollView>
             </View>
        </View>
    </>
  )
}

export default ProductCard