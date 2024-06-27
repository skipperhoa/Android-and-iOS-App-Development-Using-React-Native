import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

// icon
import { Ionicons ,FontAwesome, Feather} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const LocationScreen = () => {
  const router = useRouter();
  return (
    <LinearGradient colors={["#FC7533", "#FC7533", "#FA844A"]} className='w-full h-full'>
      <SafeAreaView className='w-full h-full'>
          <View className='w-full'>
              {/* nav */}
              <View className='w-full px-2 flex flex-row items-center'>
                  <TouchableOpacity className='w-6' onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                  </TouchableOpacity>
                    <View className='w-auto flex-1'>
                        <Text className='text-center text-white text-xl font-bold'>
                            Recent Location
                        </Text>
                </View>
              </View>
              {/* search location */}
               <View className='w-full pt-6'>
                  <View className='w-full px-2 relative'>
                     <TextInput className='w-full h-12 pl-10 pr-4 text-sm font-bold text-white bg-orange-400/100 rounded-full' placeholder='Search Location'
                     placeholderTextColor = 'white'
                     />
                     <TouchableOpacity className='absolute left-[20px] top-[14px]'>
                        <FontAwesome name="search" size={20} color="white" />
                     </TouchableOpacity>
                  </View>
               </View>
              
          </View>
           {/* map */}
           <View className='w-full flex-1'>
                  <View className='w-full h-full flex flex-col items-center justify-center'>
                       <View className='w-[300px] h-[300px] border-[2px] border-dashed border-gray-100/40 rounded-full p-[50px] relative'>
                             <View className='absolute right-10 top-0 z-10'><Feather name="map-pin" size={24} color="white" /></View>
                             <View className='absolute left-10 bottom-6 z-10'><Feather name="map-pin" size={24} color="white" /></View>
                             <View className='w-full relative z-20 top-1/2'>
                                <View className='w-full absolute left-0 top-0 z-20'>
                                    <TouchableOpacity className='w-full'>
                                       <View className='w-full relative'>
                                            <View className='bg-white w-full p-2 rounded-xl flex flex-row items-center justify-between'>
                                                    <Image className='w-8 h-8 rounded-full' source={{uri:'https://hoanguyenit.com/images/hoanguyencoder.jpg'}} />
                                                    <View className='w-auto flex-1 pl-4'>
                                                        <Text className='text-sm font-bold'>Hoa Nguyen Coder</Text>
                                                        <Text className='text-sm text-gray-500/100'>Ho Chi Minh</Text>
                                                    </View>
                                             </View>
                                             <View className='w-full absolute left-0 -top-10'>
                                                <View style={{transform:[{rotate:'-90deg'}]}} className='w-full flex flex-row items-center justify-between'>
                                                    <MaterialIcons name="arrow-left" size={40} color="white" />
                                                </View>
                                             </View>
                                             
                                       </View>
                                    </TouchableOpacity>
                                </View>
                             </View>
                             <View className='w-full h-full border-[2px] border-dashed border-gray-100/40  rounded-full p-[50px]'>
                                <View className='absolute left-0 top-0'><Feather name="map-pin" size={24} color="white" /></View>
                                <View className='absolute -right-10 -bottom-16'><Feather name="map-pin" size={24} color="white" /></View>
                                <View className='w-full h-full border-[2px] border-dashed border-gray-100/40 rounded-full relative'>
                                    <View className='w-full h-full flex flex-col items-center justify-center relative top-20'><Feather name="map-pin" size={24} color="white" /></View>
                                 
                                </View>
                            </View>
                       </View>
                  </View>
               </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default LocationScreen