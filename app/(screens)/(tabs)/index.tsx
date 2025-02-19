import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

import { useRouter } from 'expo-router';
export default function IndexScreen() {
  const router = useRouter()
  return (
    <View className='w-full h-full flex-col items-center justify-center'>
        <Text className='text-2xl font-bold text-red-500'>IndexScreen</Text>
        <TouchableOpacity onPress={() => {
             router.push('/splash');
        }}>
            <Text className='text-xl font-bold text-blue-500'>Go to Splash</Text>
        </TouchableOpacity>
    </View>
  )
}
