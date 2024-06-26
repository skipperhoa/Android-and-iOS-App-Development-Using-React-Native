import { View, Text, SafeAreaView, TouchableOpacity, Image ,ScrollView} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
// icon
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
const MesssagesScreen = () => {
    const router = useRouter();
    const [fontsLoaded, fontError] = useFonts({
        Montserrat: require("../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
      });
  return (
    <LinearGradient   colors={["#FC7533", "#FC7533", "#FA844A"]} className='w-full h-full'>
        <SafeAreaView className='w-full h-full'>
        <View className='w-full pt-4'>
            <View className='w-full px-4'>
                <Text className='w-full text-3xl font-bold text-white'>
                    Chat with
                </Text>
                <Text className='w-full text-3xl font-bold text-white leading-10'>friends</Text>
                {/* list friends */}
                <ScrollView className='w-full' horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View className='w-full pt-6'>
                                    <View className='w-full flex flex-row gap-2'>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 bg-[#FCC256] rounded-full flex flex-row items-center justify-center'>
                                                    <AntDesign name="search1" size={30} color="white" />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 rounded-full flex flex-row items-center justify-center bg-white'>
                                                    <Image source={require('../../assets/images/avatar/1.png')} 
                                                    className='w-full h-full rounded-full'  resizeMode='cover'/>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 rounded-full flex flex-row items-center justify-center bg-white'>
                                                    <Image source={require('../../assets/images/avatar/2.png')} 
                                                    className='w-full h-full rounded-full'  resizeMode='cover'/>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 rounded-full flex flex-row items-center justify-center bg-white'>
                                                    <Image source={require('../../assets/images/avatar/3.png')} 
                                                    className='w-full h-full rounded-full'  resizeMode='cover'/>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 rounded-full flex flex-row items-center justify-center bg-white'>
                                                    <Image source={require('../../assets/images/avatar/4.png')} 
                                                    className='w-full h-full rounded-full'  resizeMode='cover'/>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 rounded-full flex flex-row items-center justify-center bg-white'>
                                                    <Image source={require('../../assets/images/avatar/5.png')} 
                                                    className='w-full h-full rounded-full'  resizeMode='cover'/>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 rounded-full flex flex-row items-center justify-center bg-white'>
                                                    <Image source={require('../../assets/images/avatar/6.png')} 
                                                    className='w-full h-full rounded-full'  resizeMode='cover'/>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 rounded-full flex flex-row items-center justify-center bg-white'>
                                                    <Image source={require('../../assets/images/avatar/7.png')} 
                                                    className='w-full h-full rounded-full'  resizeMode='cover'/>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View className='w-16 h-16 rounded-full flex flex-row items-center justify-center bg-white'>
                                                    <Image source={require('../../assets/images/avatar/8.png')} 
                                                    className='w-full h-full rounded-full'  resizeMode='cover'/>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                        </View>
                </ScrollView>

                {/* tabs */}
                <View className='w-full py-4'>
                    <View className='w-full flex flex-row items-center justify-between'>
                        <TouchableOpacity className='w-1/4'>
                                <View className='w-full flex flex-row items-center justify-center'>
                                    <View className='w-2 h-2 bg-[#FFC300] rounded-full'></View>
                                    <Text className='w-full text-white text-sm font-bold pl-2'>Messages</Text>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='w-1/4'>
                                <View className='w-full'>
                                    <Text className='w-full text-white text-sm font-bold text-center'>Calls</Text>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='w-1/4'>
                                <View className='w-full'>
                                    <Text className='w-full text-white text-sm font-bold text-center'>Groups</Text>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='w-1/4'>
                                <View className='w-full bg-[#FCC256] rounded-full'>
                                    <Text className='w-full text-white text-sm font-bold text-center py-1'>CREATE</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
                {/* list messages */}
                <ScrollView className='w-full bg-white  rounded-t-3xl mt-2'>
                    <View className='w-full p-8'>
                            <View>
                                <TouchableOpacity className='w-full mb-8' onPress={() => router.push("chat")}>
                                    <View className='w-full flex flex-row items-center'>
                                        <View className='w-16 h-16 rounded-full bg-[#C4D6C4] flex flex-col items-center justify-center relative'>
                                            <Image source={require('../../assets/images/avatar/1.png')}  className='w-full h-full rounded-full' 
                                            resizeMode='cover' />
                                            <View className='w-6 h-6 rounded-full bg-[#FFC300] flex flex-col items-center justify-center absolute -left-2 -top-2'>
                                                <Text className=' text-white text-sm font-bold'>1</Text>
                                            </View>
                                        </View>         
                                        <View className='flex-1 px-4'>
                                            <View className='w-full flex-row items-center justify-between'>
                                                <Text className='text-black text-[16px] font-bold text-left'>Hoa Nguyen Coder</Text>
                                                <Text className='text-gray-600'>12:00</Text>
                                            </View>
                                            <Text className='w-full pt-1 text-[12px] leading-5 font-bold text-left text-[#404140]'  style={{fontFamily:'Montserrat'}}>Chuyên trang chia sẻ các kiến thức liên quan đến
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='w-full mb-8'>
                                    <View className='w-full flex flex-row items-center'>
                                        <View className='w-16 h-16 rounded-full bg-[#C4D6C4] flex flex-col items-center justify-center relative'>
                                            <Image source={require('../../assets/images/avatar/2.png')}  className='w-full h-full rounded-full' 
                                            resizeMode='cover' />
                                            <View className='w-6 h-6 rounded-full bg-[#FFC300] flex flex-col items-center justify-center absolute -left-2 -top-2'>
                                                <Text className=' text-white text-sm font-bold'>1</Text>
                                            </View>
                                        </View>         
                                        <View className='flex-1 px-4'>
                                            <View className='w-full flex-row items-center justify-between'>
                                                <Text className='text-black text-[16px] font-bold text-left'>Nguyễn Văn Bé</Text>
                                                <Text className='text-gray-600'>12:00</Text>
                                            </View>
                                            <Text className='w-full pt-1 text-[12px] leading-5 font-bold text-left text-[#404140]'  style={{fontFamily:'Montserrat'}} >Chuyên trang chia sẻ các kiến thức liên quan đến
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='w-full mb-8'>
                                    <View className='w-full flex flex-row items-center'>
                                        <View className='w-16 h-16 rounded-full bg-[#C4D6C4] flex flex-col items-center justify-center relative'>
                                            <Image source={require('../../assets/images/avatar/7.png')}  className='w-full h-full rounded-full' 
                                            resizeMode='cover' />
                                            <View className='w-6 h-6 rounded-full bg-[#FFC300] flex flex-col items-center justify-center absolute -left-2 -top-2'>
                                                <Text className=' text-white text-sm font-bold'>3</Text>
                                            </View>
                                        </View>         
                                        <View className='flex-1 px-4'>
                                            <View className='w-full flex-row items-center justify-between'>
                                                <Text className='text-black text-[16px] font-bold text-left'>Trần Thị Tuyết Nga</Text>
                                                <Text className='text-gray-600'>07:00</Text>
                                            </View>
                                            <Text className='w-full pt-1 text-[12px] leading-5 font-bold text-left text-[#404140]'  style={{fontFamily:'Montserrat'}} >Chuyên trang chia sẻ các kiến thức liên quan đến
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='w-full mb-8'>
                                    <View className='w-full flex flex-row items-center'>
                                        <View className='w-16 h-16 rounded-full bg-[#C4D6C4] flex flex-col items-center justify-center relative'>
                                            <Image source={require('../../assets/images/avatar/4.png')}  className='w-full h-full rounded-full' 
                                            resizeMode='cover' />
                                            <View className='w-6 h-6 rounded-full bg-[#FFC300] flex flex-col items-center justify-center absolute -left-2 -top-2'>
                                                <Text className=' text-white text-sm font-bold'>1</Text>
                                            </View>
                                        </View>         
                                        <View className='flex-1 px-4'>
                                            <View className='w-full flex-row items-center justify-between'>
                                                <Text className='text-black text-[16px] font-bold text-left'>Dương Kim Hưng</Text>
                                                <Text className='text-gray-600'>08:00</Text>
                                            </View>
                                            <Text className='w-full pt-1 text-[12px] leading-5 font-bold text-left text-[#404140]'  style={{fontFamily:'Montserrat'}} >Chuyên trang chia sẻ các kiến thức liên quan đến
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className='w-full mb-8'>
                                    <View className='w-full flex flex-row items-center'>
                                        <View className='w-16 h-16 rounded-full bg-[#C4D6C4] flex flex-col items-center justify-center relative'>
                                            <Image source={require('../../assets/images/avatar/3.png')}  className='w-full h-full rounded-full' 
                                            resizeMode='cover' />
                                            <View className='w-6 h-6 rounded-full bg-[#FFC300] flex flex-col items-center justify-center absolute -left-2 -top-2'>
                                                <Text className=' text-white text-sm font-bold'>1</Text>
                                            </View>
                                        </View>         
                                        <View className='flex-1 px-4'>
                                            <View className='w-full flex-row items-center justify-between'>
                                                <Text className='text-black text-[16px] font-bold text-left'>Trần Văn Lộc</Text>
                                                <Text className='text-gray-600'>09:00</Text>
                                            </View>
                                            <Text className='w-full pt-1 text-[12px] leading-5 font-bold text-left text-[#404140]'  style={{fontFamily:'Montserrat'}} >Chuyên trang chia sẻ các kiến thức liên quan đến
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                </ScrollView>
        </View>
        </SafeAreaView>
    </LinearGradient>
  )
}

export default MesssagesScreen 