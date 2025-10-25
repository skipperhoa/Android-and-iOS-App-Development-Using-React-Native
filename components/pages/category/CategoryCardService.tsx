import React, { useEffect, useState , useRef} from 'react'
import { View, Text ,TextInput, TouchableOpacity,useWindowDimensions,Dimensions, Image, ScrollView, Animated} from 'react-native'
import { FontAwesome5,FontAwesome6, Entypo,MaterialCommunityIcons ,MaterialIcons, FontAwesome} from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
function CategoryCardService() {
    const [fontsLoaded, fontError] = useFonts({
            HelvetIns: require("../../../assets/fonts/HelvetIns.ttf"),
            PlaywriteNL: require("../../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
            Montserrat: require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
            
            });
  return (
    <>
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
    </>
  )
}

export default CategoryCardService