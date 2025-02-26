import React, { useState } from 'react'
import { View, Text,TouchableOpacity,Image ,ScrollView} from 'react-native'
import { Fontisto } from '@expo/vector-icons';
export default function MessageScreen() {
 
  return (
    <>
        <ScrollView className='w-full'>
           <View>
               <TouchableOpacity className='w-full p-2'>
                   <View className='w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]' style={{backgroundColor:'#fdeded'}}>
                       <View className='w-20 h-20 border-[1px] border-gray-200 rounded-full p-2'>
                          <Image source={require('@/assets/images/avatar/1.png')} className='w-full h-full rounded-full'/>
                       </View>
                       <View className='flex-1'>
                          <Text className='w-full pt-2 truncate font-bold text-[15px]'>
                          ✨ [9] - Fixed Header with Search in Navigation | React Native Expo
                          </Text>
                          <View className='w-full flex flex-row items-center gap-2 pt-2'>
                              <Fontisto name='date' size={16} color={'black'} />
                              <Text className='text-sm'>26/2/2025</Text>
                          </View>
                       </View>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity className='w-full p-2'>
                   <View className='w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]' style={{backgroundColor:'#fff'}}>
                       <View className='w-20 h-20 border-[1px] border-gray-200 rounded-full p-2'>
                          <Image source={require('@/assets/images/avatar/2.png')} className='w-full h-full rounded-full'/>
                       </View>
                       <View className='flex-1'>
                          <Text className='w-full pt-2 truncate font-bold text-[15px]'>
                          ✨ [9] - Fixed Header with Search in Navigation | React Native Expo
                          </Text>
                          <View className='w-full flex flex-row items-center gap-2 pt-2'>
                              <Fontisto name='date' size={16} color={'black'} />
                              <Text className='text-sm'>26/2/2025</Text>
                          </View>
                       </View>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity className='w-full p-2'>
                   <View className='w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]' style={{backgroundColor:'#fdeded'}}>
                       <View className='w-20 h-20 border-[1px] border-gray-200 rounded-full p-2'>
                          <Image source={require('@/assets/images/avatar/3.png')} className='w-full h-full rounded-full'/>
                       </View>
                       <View className='flex-1'>
                          <Text className='w-full pt-2 truncate font-bold text-[15px]'>
                          ✨ [9] - Fixed Header with Search in Navigation | React Native Expo
                          </Text>
                          <View className='w-full flex flex-row items-center gap-2 pt-2'>
                              <Fontisto name='date' size={16} color={'black'} />
                              <Text className='text-sm'>26/2/2025</Text>
                          </View>
                       </View>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity className='w-full p-2'>
                   <View className='w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]' style={{backgroundColor:'#fff'}}>
                       <View className='w-20 h-20 border-[1px] border-gray-200 rounded-full p-2'>
                          <Image source={require('@/assets/images/avatar/4.png')} className='w-full h-full rounded-full'/>
                       </View>
                       <View className='flex-1'>
                          <Text className='w-full pt-2 truncate font-bold text-[15px]'>
                          ✨ [9] - Fixed Header with Search in Navigation | React Native Expo
                          </Text>
                          <View className='w-full flex flex-row items-center gap-2 pt-2'>
                              <Fontisto name='date' size={16} color={'black'} />
                              <Text className='text-sm'>26/2/2025</Text>
                          </View>
                       </View>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity className='w-full p-2'>
                   <View className='w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]' style={{backgroundColor:'#fdeded'}}>
                       <View className='w-20 h-20 border-[1px] border-gray-200 rounded-full p-2'>
                          <Image source={require('@/assets/images/avatar/5.png')} className='w-full h-full rounded-full'/>
                       </View>
                       <View className='flex-1'>
                          <Text className='w-full pt-2 truncate font-bold text-[15px]'>
                          ✨ [9] - Fixed Header with Search in Navigation | React Native Expo
                          </Text>
                          <View className='w-full flex flex-row items-center gap-2 pt-2'>
                              <Fontisto name='date' size={16} color={'black'} />
                              <Text className='text-sm'>26/2/2025</Text>
                          </View>
                       </View>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity className='w-full p-2'>
                   <View className='w-full flex flex-row gap-2 bg-white p-5 rounded-[10px]' style={{backgroundColor:'#fff'}}>
                       <View className='w-20 h-20 border-[1px] border-gray-200 rounded-full p-2'>
                          <Image source={require('@/assets/images/avatar/6.png')} className='w-full h-full rounded-full'/>
                       </View>
                       <View className='flex-1'>
                          <Text className='w-full pt-2 truncate font-bold text-[15px]'>
                          ✨ [9] - Fixed Header with Search in Navigation | React Native Expo
                          </Text>
                          <View className='w-full flex flex-row items-center gap-2 pt-2'>
                              <Fontisto name='date' size={16} color={'black'} />
                              <Text className='text-sm'>26/2/2025</Text>
                          </View>
                       </View>
                   </View>
               </TouchableOpacity>
           </View>
        </ScrollView>
    </>

       
  )
}
