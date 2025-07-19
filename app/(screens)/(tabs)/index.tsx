import React, { useEffect, useState , useRef} from 'react'
import { View, Text ,TextInput, TouchableOpacity,useWindowDimensions,Dimensions, Image, ScrollView, Animated} from 'react-native'
import { FontAwesome5,FontAwesome6, Entypo,MaterialCommunityIcons ,MaterialIcons, FontAwesome} from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { useRouter,useNavigation } from 'expo-router';
/* call api */
import { getAllCategories } from '@/api/category';


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
   const router = useRouter();
   const [activeHangXe, setActiveHangXe] = useState(0);
   const [categories, setCategories] = useState([]);
   useEffect(() => {
        getAllCategories().then((res) => {
           
            // get all categories parent
            if(res.status) {
                const data = res.data.filter((item : any) => item.category_id == null);
                //console.log('CATEGORIES PARENT',data)
                setCategories(data)
            }
            
        })   
   },[])
   
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

 
     {/* categories sevice*/}
       <View className='w-full mt-10 px-5'>
             <View className="w-full flex-row items-center justify-between">
              <View className='flex-row items-center gap-2'>
                <FontAwesome5 name="hands-helping" size={24} color="black" />
                <Text className='py-2 uppercase'  style={{fontFamily:'HelvetIns'}}>DANH MỤC DỊCH VỤ</Text>
                </View>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'></Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    
                    </View>
                 </TouchableOpacity>
             </View>
             <View className='w-full mt-2 flex-wrap flex-row items-center'>
                   <TouchableOpacity className='w-1/3 p-1 h-[120px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center gap-1 bg-[#c2e3ff] items-center p-2 py-5 rounded-3xl'>
                           <FontAwesome5 name="tools" size={24} color="orange" />
                           <Text className='text-sm text-center py-2 font-bold px-2'>Bảo dưỡng định kỳ </Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[120px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center gap-1 bg-[#c2e3ff] items-center p-2 py-5 rounded-3xl'>
                           <FontAwesome5 name="cogs" size={24} color="green" />
                           <Text className='text-sm text-center py-2 font-bold px-2'>Sửa chữa động cơ </Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[120px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center gap-1 bg-[#c2e3ff] items-center p-2 py-5 rounded-3xl'>
                           <FontAwesome5 name="car-crash" size={24} color="red" />
                           <Text className='text-sm text-center py-2 font-bold px-2'>Sửa chữa hộp số</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[120px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center gap-1 bg-[#c2e3ff] items-center p-2 py-5 rounded-3xl'>
                           <FontAwesome5 name="oil-can" size={24} color="blue" />
                           <Text className='text-sm text-center py-2 font-bold px-2'>Kiểm tra và thay dầu nhớt</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[120px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center gap-1 bg-[#c2e3ff] items-center p-2 py-5 rounded-3xl'>
                           <FontAwesome5 name="align-center" size={24} color="#9447fd" />
                           <Text className='text-sm text-center py-2 font-bold px-2'>Cân chỉnh bánh xe</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[120px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center gap-1 bg-[#c2e3ff] items-center p-2 py-5 rounded-3xl'>
                           <FontAwesome5 name="car-side" size={24} color="#fafa07" />
                           <Text className='text-sm text-center py-2 font-bold px-2'>Thay lốp & vá lốp</Text>
                       </View>
                   </TouchableOpacity>
                  
             </View>
       </View>


        {/* categories car */}
        <View className='w-full px-5 mt-10'>
            <View className="w-full flex-row items-center justify-between">
              <View className='flex-row items-center gap-2'>
                <FontAwesome5 name="list-alt" size={24} color="black" />
                <Text className='py-2 uppercase'  style={{fontFamily:'HelvetIns'}}>DANH SÁCH HÃNG XE</Text>
                </View>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'></Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    
                    </View>
                 </TouchableOpacity>
             </View>
             <ScrollView className='w-full' horizontal={true} showsHorizontalScrollIndicator={false}>
                <View className='py-2 flex flex-row items-center gap-5'>
                    
                    {
                        categories.map((item : any, index) => {
                            let style : any= {
                                backgroundColor:'#ebeceb'
                            }
                            if(activeHangXe==index) {
                                style.backgroundColor = '#2563eb';
                                style.shadowColor = '#2563eb';
                                style.shadowOffset = { width: 3, height: 3 };
                                style.shadowOpacity = 0.8;
                                style.shadowRadius = 2;
                                style.elevation =  5 
                            }
                            return(
                                 <TouchableOpacity className='w-[120px]' key={index} onPress={() =>{
                                    setActiveHangXe(index);
                                    router.push({
                                        pathname: '/(screens)/(tabs)/category',
                                        params: { title: item.title },
                                        });
                                 }}>
                                        <View className='w-full h-[130px] flex-col justify-center items-center p-1 rounded-3xl' style={style}>
                                            <View className='w-20 h-20 bg-white rounded-full'>
                                                <Image source={{uri:item.image}} className='w-full h-full block m-auto rounded-full' resizeMode='cover' />
                                            </View>
                                            <Text className='py-2 text-[15px]' style={{color:activeHangXe==index?'#fff':'#000'}}>{item.title}</Text>
                                        </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                   
                   
                </View>
             </ScrollView>
        </View>


 
       {/* products */}

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
                        <TouchableOpacity className='w-[200px] h-[250px]'>
                            <View className='w-full bg-white rounded-3xl overflow-hidden border-[1px] border-gray-200/100 h-full'>
                                <View className='w-full relative'>
                                    <TouchableOpacity className='w-6 h-6 bg-gray-100 rounded-full flex-col justify-center items-center absolute top-2 right-2 z-10'>
                                            <MaterialIcons name="favorite" size={15} color="black" />
                                    </TouchableOpacity>
                                    <Image source={require('@/assets/images/th.jpg')} className='w-full h-[120]' resizeMode='cover'/>
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
                        </TouchableOpacity>
                   </View>
                  
                 </ScrollView>
             </View>
        </View>
        {/* end sản phẩn nổi bật */}

        {/* sản phẩm mới nhất */}
       <View className='w-full px-5 mt-10'>
             <View className="w-full flex-row items-center justify-between">
                 
                 <View className='flex-row items-center gap-2'>
                 <FontAwesome5 name="clipboard-list" size={24} color="black" />
                <Text className=' py-2 uppercase'  style={{fontFamily:'HelvetIns'}}>Sản phẩm mới nhất</Text>
                </View>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'></Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    
                    </View>
                 </TouchableOpacity>
             </View>
           <View className='w-full mt-5'>
                <TouchableOpacity className='w-full h-[200px] mb-10'>
                     <View className='w-full h-full flex flex-row justify-between p-[15px] bg-white border-[1px] border-gray-300/50 shadow-md shadow-slate-300 rounded-3xl'>
                            <View className='w-[150px] h-full'>
                               <Image source={require('@/assets/images/02.jpg')} className='w-full h-full rounded-xl' resizeMode='cover'/>
                            </View>
                           <View className='flex-1 h-full pl-5 pt-2 relative'>
                               <Text className='text-[16px] py-2 font-bold'>Xe Moto 2025 moi nhat</Text>
                               <Text className='text-sm text-gray-500'>Learn how to use various types of icons in your Expo app</Text>
                               <View className='w-full flex flex-row items-center justify-between absolute bottom-2 left-5'>
                                        <Text className='font-bold text-red-500 text-xl'>200 $</Text>
                                        <TouchableOpacity className=''>
                                            <View className='w-[100px] bg-[#fccf38] flex flex-row items-center justify-center p-2 gap-2 rounded-r-xl rounded-bl-xl'>
                                                    <Entypo name="shopping-cart" size={15} color="black" />
                                                <Text className='rounded-md text-black text-sm font-bold'>Mua</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>
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
