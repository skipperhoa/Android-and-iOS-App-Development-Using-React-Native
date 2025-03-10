import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialIcons,AntDesign}  from '@expo/vector-icons'
import {useFocusEffect, useRouter} from 'expo-router'
export default function App() {
  const router = useRouter()
  useFocusEffect(() => {
    setTimeout(() => {
      router.replace('/(tabs)')
    }, 3000);
  })
  return (
    <>
      <LinearGradient
        // Button Linear Gradient
        colors={['#0762f5', '#1f73fc', '#337ef9']}
        style={{width: '100%',height:'100%'}}>

          <View className='w-full flex-1 flex-row items-center justify-center relative'>        
             {/* item */}
             <View className='w-[100px] h-[100px] absolute z-50 bg-[#1a6ffd] rounded-full flex-row items-center justify-center'>
                {/* LOGO app */}
                <Image source={require("@/assets/images/xeoto.png")} className='w-20 h-20' />
             </View>
             <View className='w-[150px] h-[150px] z-40 absolute bg-[#2375fe] rounded-full flex-row items-center justify-center'></View>
             <View className='w-[200px] h-[200px] z-30 absolute bg-[#1a6ffd] rounded-full flex-row items-center justify-center'></View>
             <View className='w-[250px] h-[250px] z-20 absolute bg-[#2375fe] rounded-full flex-row items-center justify-center'></View>
             <View className='w-[300px] h-[300px] z-10 absolute bg-[#1a6ffd] rounded-full flex-row items-center justify-center'></View>
             <View className='w-[350px] h-[350px] z-0 absolute bg-[#2375fe] rounded-full flex-row items-center justify-center'></View>     
          </View>
          <View className='w-full pb-10'>
              <TouchableOpacity className='w-full px-10'>
                  <LinearGradient 
                  colors={['#dbdbda',  '#f19105']} style={{borderRadius:50}}>
                       <View className='w-full py-4 flex flex-row items-center justify-center gap-2'>
                       <MaterialIcons name="login" size={24} color="white" />
                          <Text className='text-white font-bold uppercase text-[15px]'>Đăng Nhập</Text>
                       </View>
                  </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity className='w-full px-10 pt-4'>
                  <LinearGradient 
                  colors={['#dbdbda',  '#e8c308']} style={{borderRadius:50}}>
                       <View className='w-full py-4 flex flex-row items-center justify-center gap-2'>
                       <AntDesign name="adduser" size={24} color="white" />
                          <Text className='text-white font-bold uppercase text-[15px]'>Đăng ký</Text>
                       </View>
                  </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity className='w-full px-10 pt-4' onPress={() => {
                router.push('/(tabs)')
              }}>
                 <Text className='text-white font-bold uppercase text-[15px] text-center'>Bỏ qua</Text>
              </TouchableOpacity>
          </View>
       
      </LinearGradient>
    </>
  );
}

