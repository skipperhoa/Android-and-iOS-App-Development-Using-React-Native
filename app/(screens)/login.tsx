import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'



const LoginScreen = () => {
  const [imageUri, setImageUri] = useState('https://hoanguyenit.com/images/hoanguyencoder.jpg');
  return (
    <View className='flex-1 items-center justify-center'>
      <View className="p-2">
           <Image className="w-12 h-12 bg-slate-400 rounded-full" source={{ uri: imageUri }} ></Image>
      </View>
      <Text className='text-xl text-gray-600 font-bold py-2 uppercase'>Hoa Nguyen Coder</Text>
      <View className='w-full px-10'>
         
          <View className='w-full py-1'>
              <Text className='w-full text-sm text-gray-500'>Email</Text>
              <TextInput className='w-full block p-2 border-1 border-gray-200 bg-gray-200' keyboardType="email-address" inputMode="email"/>
          </View>
          <View className='w-full py-1'>
              <Text className='w-full text-sm text-gray-500'>Password</Text>
              <TextInput className='w-full block p-2 border-1 border-gray-200 bg-gray-200' secureTextEntry={true}/>
          </View>
          <View className='w-full py-1'>
              <TouchableOpacity className='w-full bg-blue-600 rounded-sm'>
                <Text className="text-white text-center block py-2 font-bold">Register</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default LoginScreen