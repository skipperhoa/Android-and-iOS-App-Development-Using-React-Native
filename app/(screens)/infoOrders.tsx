import { View, Text, SafeAreaView , Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
// icon
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const InfoOrderScreen = () => {
  return (
    <SafeAreaView className='w-full h-full bg-gray-100'>
        <ScrollView className='w-full h-full p-4'>

                <View className='w-full bg-orange-400 px-5 py-6 rounded-xl'>
                    <View className='flex flex-row items-center justify-between'>
                        <View className='flex-1 flex flex-col gap-1 pr-4'>
                            <Text className='text-xl font-bold text-white'>Giao hàng thành công</Text>
                            <Text className='text-xs text-white'>Đơn hàng đã được giao thành công ngày:</Text>
                            <Text className='text-sm text-white font-bold'>30/06/2024</Text>
                        </View>
                        <View className='w-24 flex flex-col items-center justify-between'>
                                <Image source={require('@/assets/products/img01.jpg')} className='w-20 h-20 block rounded-xl'/>
                        </View>
                    </View>
                    <View className='border-t-[1px] border-gray-100/50 border-solid mt-2 py-2'>
                                <Text className='text-white text-sm font-bold'>Đơn hàng ggiao bởi dịch vụ Giao tiêu chuẩn</Text>
                    </View>
                </View>

                {/* nha van chuyen */}
                <View className='w-full mt-2'>
                      <View className='w-full bg-white p-4 rounded-xl'>
                          <View className='w-full flex flex-row items-center'>
                                <View className='w-20 flex flex-col items-center justify-center'>
                                    <Image source={require('../../assets/images/avatar/1.png')} className='w-16 h-16 block m-auto'/>
                                </View>
                                <View className='flex-1'>
                                        <Text className='text-sm font-bold'>Đơn vị vận chuyển : ABC-1233 TYU</Text>
                                        <Text className='text-xs pt-1'>Đối tác giao hàng : Hoà Nguyễn Coder</Text>
                                </View>
                          </View>
                          <View className='border-t-[1px] border-gray-200/50 border-solid mt-4 pt-4'>

                             <Text className='text-xs'>Mã vận đơn : LMTYU123456789</Text>
                          </View>
                      </View>
                </View>

                {/* nguoi nhan */}
                <View className='w-full p-4 bg-white rounded-xl mt-2'>

                    <View className='w-full flex flex-row items-center justify-between'>
                        <View className='w-8 flex flex-col items-center'>
                            <AntDesign name="idcard" size={24} color="black" />
                        </View>
                        <View className='flex-1 pl-2'>
                            <Text className='text-sm text-black font-bold'>Người nhận : Hoà Nguyễn Coder</Text>
                            <Text className='text-black text-xs leading-6'>Địa chỉ : 123, ABC, XYZ , TP. Hồ Chí Minh</Text>
                        </View>
                    </View>
                </View>

                {/* trang thai giao hang */}
                <View className='w-full mt-2 mb-10'>
                    <View className='w-full bg-white p-4 rounded-xl'>
                         <View className='w-full'>
                            <View className='w-full h-auto flex flex-row items-center justify-between'>
                                    <View className='w-1/5 flex flex-col items-center justify-center'>
                                            <Text className='w-full text-center font-bold text-black'>30/6</Text>
                                            <Text className='text-xs text-center py-1'>10:06</Text>
                                    </View>
                                   
                                    <View className='flex-1 pl-4 border-l-[1px] border-gray-200 relative pb-6'>
                                        
                                        <View className='w-2 h-2 rounded-full absolute -left-[4px] top-[6px]' style={{backgroundColor: '#22c55e'}}></View>
                                        <Text className='text-sm font-bold'>Giao hàng thành công</Text>
                                        <Text className='text-xs py-1'>Kiện hàng của bạn được giao thành công [quận 6]</Text>
                                        <TouchableOpacity>
                                            <View className='flex flex-row items-center justify-between'>
                                                <Text className='text-xs text-blue-400 italic'>Xem hình ảnh tại đây nhé : Hoà Nguyễn Coder</Text>
                                                <TouchableOpacity>
                                                    <EvilIcons name="chevron-right" size={24} color="black" />
                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                            </View>

                            <View className='w-full h-auto flex flex-row items-center justify-between'>
                                    <View className='w-1/5 flex flex-col items-center justify-center'>
                                            <Text className='w-full text-center font-bold text-black'>30/6</Text>
                                            <Text className='text-xs text-center py-1'>09:50</Text>
                                    </View>
                                   
                                    <View className='flex-1 pl-4 border-l-[1px] border-gray-200 relative pb-6'>
                                        
                                        <View className='w-2 h-2 rounded-full absolute -left-[4px] top-[6px]' style={{backgroundColor: '#ddd'}}></View>
                                        <Text className='text-sm font-bold'>Kiện hàng sắp đến</Text>
                                        <Text className='text-xs py-1'>Đơn vị vận chuyển sẽ giao hàng tới bạn trong 1 giờ tới. Hãy chú ý điện thoại giao hàng bạn bé [quận 6]</Text>
                                      
                                    </View>
                            </View>
                            <View className='w-full h-auto flex flex-row items-center justify-between'>
                                    <View className='w-1/5 flex flex-col items-center justify-center'>
                                            <Text className='w-full text-center font-bold text-black'>30/6</Text>
                                            <Text className='text-xs text-center py-1'>08:50</Text>
                                    </View>
                                   
                                    <View className='flex-1 pl-4 border-l-[1px] border-gray-200 relative pb-6'>
                                        
                                        <View className='w-2 h-2 rounded-full absolute -left-[4px] top-[6px]' style={{backgroundColor: '#ddd'}}></View>
                                        <Text className='text-sm font-bold'>Đang giao hàng</Text>
                                        <Text className='text-xs py-1'>ABC sẽ giao hàng cho bạn trong hôm nay [quận 6]</Text>
                                      
                                    </View>
                            </View>
                            <View className='w-full h-auto flex flex-row items-center justify-between'>
                                    <View className='w-1/5 flex flex-col items-center justify-center'>
                                            <Text className='w-full text-center font-bold text-black'>30/6</Text>
                                            <Text className='text-xs text-center py-1'>07:50</Text>
                                    </View>
                                   
                                    <View className='flex-1 pl-4 border-l-[1px] border-gray-200 relative pb-6'>
                                        
                                        <View className='w-2 h-2 rounded-full absolute -left-[4px] top-[6px]' style={{backgroundColor: '#ddd'}}></View>
                                        <Text className='text-sm font-bold'>Đã rời khỏi trạm giao hàng</Text>
                                        <Text className='text-xs py-1'>Kiện hàng của bạn đã rời khỏi trạm giao hàng [quận 6]</Text>
                                      
                                    </View>
                            </View>
                            <View className='w-full h-auto flex flex-row items-center justify-between'>
                                    <View className='w-1/5 flex flex-col items-center justify-center'>
                                            <Text className='w-full text-center font-bold text-black'>30/6</Text>
                                            <Text className='text-xs text-center py-1'>06:50</Text>
                                    </View>
                                   
                                    <View className='flex-1 pl-4 border-l-[1px] border-gray-200 relative pb-6'>
                                        
                                        <View className='w-2 h-2 rounded-full absolute -left-[4px] top-[6px]' style={{backgroundColor: '#ddd'}}></View>
                                        <Text className='text-sm font-bold'>Đã đến trạm giao hàng</Text>
                                        <Text className='text-xs py-1'>Kiện hàng của bạn đã đến trạm giao hàng [quận 6]</Text>
                                      
                                    </View>
                            </View>
                            
                         </View>
                         <TouchableOpacity className='w-full px-4 pt-4 border-t-[1px] border-gray-200'>
                            <View>
                                 <Text className='w-full text-sm text-center block'>Xem thêm</Text>
                            </View>
                         </TouchableOpacity>
                    </View>
                     {/* don hang */}
                     <View className='w-full p-4 mt-2 rounded-xl bg-white'>
                             <Text>Đơn hàng : ABC TYU 890S</Text>
                    </View>

                     {/* don hang */}
                     <TouchableOpacity className='w-full p-4 mt-2 rounded-xl bg-white'>
                            <View className='flex flex-row items-center justify-center'>
                                <MaterialCommunityIcons name="message-alert-outline" size={24} color="#f97316" />
                                   <Text className='text-sm pl-2 text-orange-500'>Bạn cần trợ giúp?</Text>
                            </View>
                    </TouchableOpacity>
                    
                    

                </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default InfoOrderScreen