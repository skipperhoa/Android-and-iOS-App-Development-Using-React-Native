import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

// icon
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const ProfileScreen = () => {
  return (
    <View className='px-2 m-1'>
       <View className="flex flex-row justify-between items-center p-2 bg-gray-100 rounded-md">
            <View className="flex flex-row gap-2 items-center py-2">
                <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
                <View>
                    <Text className="font-bold">Hoa Nguyen Coder</Text>
                    <Text>Web Developer</Text>
                </View>
            </View>
            <View className="w-auto">
                 <View className='flex flex-col gap-1'>
                    <Text className='font-bold'>Money</Text>
                    <Text>12.0 $</Text>
                 </View>
            </View>
       </View>

       <View className='mt-2'>
            <TouchableOpacity className='bg-white py-5 rounded-md'>
                 <View className='flex flex-col items-center justify-center'>
                        <View className='w-12 h-12 bg-blue-500 rounded-full flex flex-col items-center justify-center'>
                             <Ionicons name="add-outline" size={24} color="white" />
                        </View>
                        <Text className='font-bold mt-1 text-gray-500'>Top for send Money</Text>
                 </View>
            </TouchableOpacity>
       </View>

       <View className='bg-white py-5 mt-2 px-2 rounded-md'>
           <Text className='text-sm py-2 text-gray-500 font-bold'>Recent Transfer</Text>
          <View className='w-full flex flex-row items-center gap-2 justify-between'>
            <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
            <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
            <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
            <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
            <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
            <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
          </View>
       </View>

       <View className='py-2'>
           <View className='flex flex-row items-center justify-between'>
               <Text>Recent Transactions</Text>
               <TouchableOpacity>
                  <View className='flex flex-row items-center'>
                      <Text className='font-bold'>See all</Text>
                      <MaterialIcons name="navigate-next" size={24} color="black" />
                  </View>
               </TouchableOpacity>
           </View>
       </View>

       <View className='flex flex-col gap-2'>
            <View className="flex flex-row justify-between items-center p-2 bg-white rounded-md">
                    <View className="flex flex-row gap-2 items-center py-2">
                        <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
                        <View>
                            <Text className="font-bold">Hoa Nguyen Coder</Text>
                            <Text className='text-blue-500'>Web Developer</Text>
                        </View>
                    </View>
                    <View className="w-auto">
                        <View className='flex flex-col gap-1'>
                            <Text className='font-bold text-blue-400'>-123.00 $</Text>
                            <Text>Products</Text>
                        </View>
                    </View>
            </View>
            <View className="flex flex-row justify-between items-center p-2 bg-white rounded-md">
                    <View className="flex flex-row gap-2 items-center py-2">
                        <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
                        <View>
                            <Text className="font-bold">Hoa Nguyen Coder</Text>
                            <Text className='text-red-500'>Web Developer</Text>
                        </View>
                    </View>
                    <View className="w-auto">
                        <View className='flex flex-col gap-1'>
                            <Text className='font-bold text-red-400'>-123.00 $</Text>
                            <Text>Products</Text>
                        </View>
                    </View>
            </View>
            <View className="flex flex-row justify-between items-center p-2 bg-white rounded-md">
                    <View className="flex flex-row gap-2 items-center py-2">
                        <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
                        <View>
                            <Text className="font-bold">Hoa Nguyen Coder</Text>
                            <Text className='text-yellow-500'>Web Developer</Text>
                        </View>
                    </View>
                    <View className="w-auto">
                        <View className='flex flex-col gap-1'>
                            <Text className='font-bold text-yellow-400'>-123.00 $</Text>
                            <Text>Products</Text>
                        </View>
                    </View>
            </View>
            <View className="flex flex-row justify-between items-center p-2 bg-white rounded-md">
                    <View className="flex flex-row gap-2 items-center py-2">
                        <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: 'https://hoanguyenit.com/images/hoanguyencoder.jpg' }} ></Image>
                        <View>
                            <Text className="font-bold">Hoa Nguyen Coder</Text>
                            <Text className='text-gray-500'>Web Developer</Text>
                        </View>
                    </View>
                    <View className="w-auto">
                        <View className='flex flex-col gap-1'>
                            <Text className='font-bold text-gray-400'>-123.00 $</Text>
                            <Text>Products</Text>
                        </View>
                    </View>
            </View>
       </View>
    </View>
  )
}

export default ProfileScreen