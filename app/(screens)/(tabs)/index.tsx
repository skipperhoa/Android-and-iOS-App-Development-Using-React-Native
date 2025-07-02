import React, { useEffect } from 'react'
import { View, Text ,TextInput, TouchableOpacity,useWindowDimensions,Dimensions, Image, ScrollView} from 'react-native'
import { FontAwesome5, Entypo,MaterialCommunityIcons ,MaterialIcons, FontAwesome} from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
// data image
const slides = [
    {
      image: require("../../../assets/images/01.jpg"),
    },
    {
      image: require("../../../assets/images/02.jpg"),
    },
    {
      image: require("../../../assets/images/03.png"),
    },
    {
      image: require("../../../assets/images/04.jpg"),
    },
    {
      image: require("../../../assets/images/05.jpg"),
    }
   
  ]
const { width: screenWidth } = Dimensions.get('window')
export default function IndexScreen() {
   
   const {width,height} = useWindowDimensions()
   const [fontsLoaded, fontError] = useFonts({
           HelvetIns: require("../../../assets/fonts/HelvetIns.ttf"),
           PlaywriteNL: require("../../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
           Montserrat: require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
           
         });
    const _renderItem = ({item} :  any) => {
        return (
          <TouchableOpacity style={{width:'100%'}}>
              <Image source = {item.image} style={{width:'100%',height:200, borderRadius:15}} />
          </TouchableOpacity>
        )
      } 
  return (
    <>
     <View className='w-full h-full bg-white '>
       <ScrollView>
       {/* Search */}
         <View className='w-full px-5 pb-5 mt-5'>
            <View className='flex-row items-center justify-between gap-2'>

                 <View className='flex-1 bg-gray-100 flex-row items-center p-3 rounded-md'>
                     <View className='flex-row items-center gap-2'>
                         <FontAwesome5 name="search" size={20} color="#027DFC" />
                         <TextInput className='text-gray-500 flex-1'  placeholder="Tìm kiếm sản phẩm" />
                     </View>
                 </View>
                 <View>
                      <TouchableOpacity>
                          <View className='w-10 h-10 bg-gray-100 flex-col justify-center items-center rounded-md'>
                                <MaterialCommunityIcons name="filter-menu" size={20} color="#027DFC" />
                          </View>
                      </TouchableOpacity>
                 </View>
         </View>
            </View>
       {/* end search */}


        {/* slide banner */}
        <View>
                <View style={{width:'100%'}}>
                   
                   {
                    
                       <Carousel 
                      // layout={'stack'} 
                       sliderWidth={screenWidth}
                       sliderHeight={screenWidth}
                       itemWidth={screenWidth - 50}
                       data={slides}
                       renderItem={_renderItem}
                       hasParallaxImages={true}
                   />
                   }
                </View>
            </View>
 
     {/* categories */}
       <View className='w-full mt-5 px-5'>
             <View className="w-full flex-row items-center justify-between">
                 <Text className='flex-1 py-2 uppercase' style={{fontFamily:'HelvetIns'}}>Danh mục dịch vụ</Text>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'></Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    
                    </View>
                 </TouchableOpacity>
             </View>
             <View className='w-full mt-2 flex-wrap flex-row items-center'>
                   <TouchableOpacity className='w-1/3 h-[110px] p-1 flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-orange-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="tools" size={24} color="orange" />
                           <Text className='text-sm text-center py-2' style={{fontFamily:'Montserrat'}}>Bảo dưỡng định kỳ </Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-green-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="cogs" size={24} color="green" />
                           <Text className='text-sm text-center py-2' style={{fontFamily:'Montserrat'}}>Sửa chữa động cơ </Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-red-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="car-crash" size={24} color="red" />
                           <Text className='text-sm text-center py-2' style={{fontFamily:'Montserrat'}}>Sửa chữa hộp số</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-blue-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="oil-can" size={24} color="blue" />
                           <Text className='text-sm text-center py-2' style={{fontFamily:'Montserrat'}}>Kiểm tra và thay dầu nhớt</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-yellow-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="align-center" size={24} color="black" />
                           <Text className='text-sm text-center py-2' style={{fontFamily:'Montserrat'}}>Cân chỉnh bánh xe</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-gray-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="car-side" size={24} color="orange" />
                           <Text className='text-sm text-center py-2' style={{fontFamily:'Montserrat'}}>Thay lốp & vá lốp</Text>
                       </View>
                   </TouchableOpacity>
                  
             </View>
       </View>
 
       {/* products */}

        {/* sản phẩm nổi bật */}
        <View className='w-full p-5'>
            <View className="w-full flex-row items-center justify-between">
              <View className='flex-row items-center gap-2'>
                <MaterialIcons name="emoji-events" size={24} color="gold" />
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
                        <TouchableOpacity className='w-[200px] h-[250px]'>
                            <View className='w-full bg-white rounded-md border-[1px] border-gray-200/100 h-full'>
                                <View className='w-full rounded-md relative'>
                                    <TouchableOpacity className='w-6 h-6 bg-gray-100 rounded-full flex-col justify-center items-center absolute top-2 right-2 z-10'>
                                            <MaterialIcons name="favorite" size={15} color="black" />
                                    </TouchableOpacity>
                                    <Image source={require('@/assets/images/th.jpg')} className='w-full h-[120] rounded-md' resizeMode='cover'/>
                                </View>
                                <View className='w-full px-3 mt-2 pb-4'>
                                    <Text className='w-full text-xl font-bold'>VinFast VF3</Text>
                                    <Text className='text-sm text-gray-700 pt-2'>Mẫu xe điện cỡ nhỏ của VinFast, giá bán từ 240 triệu đồng</Text>
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
                            <View className='w-full bg-white rounded-md border-[1px] border-gray-200/100 h-full'>
                                <View className='w-full rounded-md relative'>
                                    <TouchableOpacity className='w-6 h-6 bg-gray-100 rounded-full flex-col justify-center items-center absolute top-2 right-2 z-10'>
                                            <MaterialIcons name="favorite" size={15} color="black" />
                                    </TouchableOpacity>
                                    <Image source={require('@/assets/images/th2.jpg')} className='w-full h-[120] rounded-md' resizeMode='cover'/>
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
                            <View className='w-full bg-white rounded-md border-[1px] border-gray-200/100 h-full'>
                                <View className='w-full rounded-md relative'>
                                    <TouchableOpacity className='w-6 h-6 bg-gray-100 rounded-full flex-col justify-center items-center absolute top-2 right-2 z-10'>
                                            <MaterialIcons name="favorite" size={15} color="black" />
                                    </TouchableOpacity>
                                    <Image source={require('@/assets/images/th3.jpg')} className='w-full h-[120] rounded-md' resizeMode='cover'/>
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
                        </TouchableOpacity>
                   </View>
                  
                 </ScrollView>
             </View>
        </View>
        {/* end sản phẩn nổi bật */}

        {/* sản phẩm mới nhất */}
       <View className='w-full px-5'>
             <View className="w-full flex-row items-center justify-between">
                 
                 <View className='flex-row items-center gap-2'>
                 <FontAwesome name="star" size={24} color="gold" />
                <Text className=' py-2 uppercase'  style={{fontFamily:'HelvetIns'}}>Sản phẩm mới nhất</Text>
                </View>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'></Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    
                    </View>
                 </TouchableOpacity>
             </View>
           <View className='flex-col gap-5 mt-4'>
                <TouchableOpacity className='w-full'>
                     <View className='flex-row items-center justify-between bg-white border-[1px] border-gray-100/50 rounded-md shadow-sm'>
                           <View className='flex-1 pl-5'>
                               <Text className='text-[16px] py-2'>Xe Moto 2025 moi nhat</Text>
                               <View>
                                   <View className='flex-row items-center'>
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   </View>
                                   <Text className='mt-2 font-bold text-red-500 text-[20px]'>200 $</Text>
                                   <TouchableOpacity className='mt-2'>
                                       <View className='w-[120px] bg-orange-500 flex-row items-center justify-center p-2 gap-1 rounded-full'>
                                             <Entypo name="shopping-cart" size={15} color="white" />
                                           <Text className='rounded-md text-white text-sm'>Add to cart</Text>
                                       </View>
                                   </TouchableOpacity>
                               </View>
                            </View> 
                            <View className='w-[150px]'>
                               <Image source={require('@/assets/images/02.jpg')} className='w-full h-40 rounded-md' resizeMode='cover'/>
                            </View>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity className='w-full'>
                     <View className='flex-row items-center justify-between bg-white border-[1px] border-gray-100/50 rounded-md shadow-sm'>
                           <View className='flex-1 pl-5'>
                               <Text className='text-[16px] py-2'>Xe Moto 2025 moi nhat</Text>
                               <View>
                                   <View className='flex-row items-center'>
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   </View>
                                   <Text className='mt-2 font-bold text-red-500 text-[20px]'>200 $</Text>
                                   <TouchableOpacity className='mt-2'>
                                       <View className='w-[120px] bg-orange-500 flex-row items-center justify-center p-2 gap-1 rounded-full'>
                                             <Entypo name="shopping-cart" size={15} color="white" />
                                           <Text className='rounded-md text-white text-sm'>Add to cart</Text>
                                       </View>
                                   </TouchableOpacity>
                               </View>
                            </View> 
                            <View className='w-[150px]'>
                               <Image source={require('@/assets/images/05.jpg')} className='w-full h-40 rounded-md' resizeMode='cover'/>
                            </View>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity className='w-full'>
                     <View className='flex-row items-center justify-between bg-white border-[1px] border-gray-100/50 rounded-md shadow-sm'>
                           <View className='flex-1 pl-5'>
                               <Text className='text-[16px] py-2'>Xe Moto 2025 moi nhat</Text>
                               <View>
                                   <View className='flex-row items-center'>
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   <Entypo name="star" size={15} color="orange" />
                                   </View>
                                   <Text className='mt-2 font-bold text-red-500 text-[20px]'>200 $</Text>
                                   <TouchableOpacity className='mt-2'>
                                       <View className='w-[120px] bg-orange-500 flex-row items-center justify-center p-2 gap-1 rounded-full'>
                                             <Entypo name="shopping-cart" size={15} color="white" />
                                           <Text className='rounded-md text-white text-sm'>Add to cart</Text>
                                       </View>
                                   </TouchableOpacity>
                               </View>
                            </View> 
                            <View className='w-[150px]'>
                               <Image source={require('@/assets/images/03.png')} className='w-full h-40 rounded-md' resizeMode='cover'/>
                            </View>
                     </View>
                </TouchableOpacity>
               
           </View>
       </View>
         {/* end sản phẩm mới nhất */}

       </ScrollView>
      
 
    </View>
    </>
  
  )
}
