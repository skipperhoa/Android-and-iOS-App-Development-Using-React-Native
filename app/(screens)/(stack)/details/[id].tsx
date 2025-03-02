import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { useRouter } from "expo-router";
export default function DetailScreen() {
  const {id} = useLocalSearchParams();
  const router = useRouter();
  return (
     <View className='w-full h-full flex flex-col items-center justify-center'>
           <Text className='font-bold text-2xl'>ID: {id}</Text>
           <TouchableOpacity onPress={() => router.back()}>
                    <Text>Go back</Text>
            </TouchableOpacity>
     </View>
  )
}
