import React from 'react'
import { View, Text ,TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import { FontAwesome5, Entypo,MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function IndexScreen() {
  return (
    <>
     <View className='w-full h-full bg-white '>
       <ScrollView>
       {/* Search */}
         <View className='w-full px-5 pb-5 mt-5'>
            <View className='flex-row items-center justify-between gap-2'>

                 <View className='flex-1 bg-gray-100 flex-row items-center p-3 rounded-md'>
                     <View className='flex-row items-center gap-2'>
                         <FontAwesome5 name="search" size={20} color="black" />
                         <TextInput className='text-gray-500 flex-1'  placeholder="Tìm kiếm sản phẩm" />
                     </View>
                 </View>
                 <View>
                      <TouchableOpacity>
                          <View className='w-10 h-10 bg-gray-100 flex-col justify-center items-center rounded-d'>
                                <MaterialCommunityIcons name="filter-menu" size={20} color="black" />
                          </View>
                      </TouchableOpacity>
                 </View>
         </View>
            </View>
       {/* end search */}
 
  {/* banner */}
  <View className='w-full'>
            <View>
                 <TouchableOpacity>
                        <Image source={require('@/assets/images/1.jpg')} className='w-full h-60' resizeMode='cover'/>
                 </TouchableOpacity>
            </View>
       </View>
       {/* end content */}
 
     {/* categories */}
       <View className='w-full mt-5 px-5'>
             <View className="w-full flex-row items-center justify-between">
                 <Text className='flex-1 font-bold py-2 uppercase'>Danh mục dịch vụ</Text>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'>Xem thêm</Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    
                    </View>
                 </TouchableOpacity>
             </View>
             <View className='w-full mt-2 flex-wrap flex-row items-center'>
                   <TouchableOpacity className='w-1/3 h-[110px] p-1 flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-orange-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="tools" size={24} color="orange" />
                           <Text className='text-sm font-bold text-center py-2'>Bảo dưỡng định kỳ </Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-green-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="cogs" size={24} color="green" />
                           <Text className='text-sm font-bold text-center py-2'>Sửa chữa động cơ </Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-red-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="car-crash" size={24} color="red" />
                           <Text className='text-sm font-bold text-center py-2'>Sửa chữa hộp số</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-blue-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="oil-can" size={24} color="blue" />
                           <Text className='text-sm font-bold text-center py-2'>Kiểm tra và thay dầu nhớt</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-yellow-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="align-center" size={24} color="black" />
                           <Text className='text-sm font-bold text-center py-2'>Cân chỉnh bánh xe</Text>
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity className='w-1/3 p-1 h-[110px] flex-col justify-center items-center'>
                       <View className='w-full h-full flex-col justify-center bg-gray-100 items-center p-2 py-5 rounded-md'>
                           <FontAwesome5 name="car-side" size={24} color="orange" />
                           <Text className='text-sm font-bold text-center py-2'>Thay lốp & vá lốp</Text>
                       </View>
                   </TouchableOpacity>
                  
             </View>
       </View>
 
       {/* products */}
       <View className='w-full p-5'>
             <View className="w-full flex-row items-center justify-between">
                 <Text className='flex-1 font-bold py-2 uppercase'>Sản phẩm mới nhất</Text>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'>Xem thêm</Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    
                    </View>
                 </TouchableOpacity>
             </View>
           <View className='flex-col gap-5 mt-2'>
                <TouchableOpacity className='w-full'>
                     <View className='flex-row items-center justify-between bg-gray-100 rounded-md px-4 shadow-sm'>
                           <View className='flex-1'>
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
                               <Image source={require('@/assets/images/2.jpg')} className='w-full h-40' resizeMode='contain'/>
                            </View>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity className='w-full'>
                     <View className='flex-row items-center justify-between bg-gray-100 rounded-md px-4 shadow-sm'>
                           <View className='flex-1'>
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
                               <Image source={require('@/assets/images/1.jpg')} className='w-full h-40' resizeMode='contain'/>
                            </View>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity className='w-full'>
                     <View className='flex-row items-center justify-between bg-gray-100 rounded-md px-4 shadow-sm'>
                           <View className='flex-1'>
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
                               <Image source={require('@/assets/images/1.jpg')} className='w-full h-40' resizeMode='contain'/>
                            </View>
                     </View>
                </TouchableOpacity>
           </View>
       </View>
       </ScrollView>
      
 
    </View>
    </>
  
  )
}
