import { View, Text, SafeAreaView, TouchableOpacity , ScrollView, Image,TextInput, Alert} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

// ICON
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const ChatScreen = () => {
    const router = useRouter();
    const [fontsLoaded, fontError] = useFonts({
        Montserrat: require("../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
        HelvetIns: require("../../assets/fonts/HelvetIns.ttf"),
      });
  return (
    <View className='w-full bg-transparent h-full bg-orange-600'>
      <View className='w-ful pt-20 h-full'>
          <View className='w-full flex-1 px-8  bg-white h-full rounded-t-3xl'>
              <View className='w-full flex flex-row items-center justify-between pt-6 pb-4 border-b-[1px] border-gray-100'>
                  <Text className='text-black text-3xl' style={{fontFamily: "Montserrat",fontWeight: 'bold'}}>Chat</Text>
                  <TouchableOpacity>
                       <View className='w-12 h-12 rounded-full flex flex-col items-center justify-center bg-orange-300'>
                           <Ionicons name="call" size={30} color="#ea580c" onPress={() => router.back()} 
                            style={{transform: [{rotate: '-90deg'}]}}
                            />
                       </View>
                  </TouchableOpacity>
              </View>

              {/* List Message */}
              <ScrollView className='w-full mt-4'>
                   <View className='w-full mb-4' style={{paddingRight:40}}>
                      <View className='w-full p-4 rounded-t-xl rounded-br-xl bg-gray-100'>
                          <Text>
                           RGB and HSL values with our color picker, color chart and HTML color names. Let's go!
                          </Text>
                      </View>
                        <View className='w-full flex flex-row items-center gap-2 mt-4'  style={{justifyContent: 'flex-start'}}>
                          <Text className='w-auto text-gray-600 text-xm'>7:755 AM</Text>
                         
                        </View>
                   </View>
                   <View className='w-full mb-4' style={{paddingLeft:40}}>
                      <View className='w-full p-4 rounded-t-xl rounded-br-xl bg-green-100'>
                          <Text>
                          RGB and HSL values with our color picker, color chart and HTML color names. Let's go!
                          </Text>
                      </View>
                    
                      <View className='w-full flex flex-row items-center gap-2 mt-4' style={{justifyContent: 'flex-end'}}>
                          <Text className='w-auto text-gray-600 text-xm'>7:755 AM</Text>
                          <Ionicons name="checkmark-done" size={24} color="black" />
                        </View>
                   </View>
                   <View className='w-full mb-4' style={{paddingLeft:40}}>
                      <View className='w-full p-4 rounded-t-xl rounded-br-xl bg-green-100'>
                          <Text>
                           RGB and HSL values with our color picker, color chart and HTML color names. Let's go!
                          </Text>
                      </View>
                    
                      <View className='w-full flex flex-row items-center gap-2 mt-4' style={{justifyContent: 'flex-end'}}>
                          <Text className='w-auto text-gray-600 text-xm'>7:57 AM</Text>
                          <Ionicons name="checkmark-done" size={24} color="black" />
                        </View>
                   </View>
                   <View className='w-full mb-4' style={{paddingRight:40}}>
                      <View className='w-full'>
                          <View className='flex flex-row items-center gap-1'>
                               <Image source={require('../../assets/products/img02.jpg')} className='w-24 h-20 rounded-xl'  
                               resizeMode='stretch'/>
                               <Image source={require('../../assets/products/img01.jpg')} className='w-24 h-20 rounded-xl'  
                               resizeMode='stretch'/>
                                <Image source={require('../../assets/products/img03.jpg')} className='w-24 h-20 rounded-xl'  
                               resizeMode='stretch'/>
                          </View>
                      </View>
                        <View className='w-full flex flex-row items-center gap-2 mt-4'  style={{justifyContent: 'flex-start'}}>
                          <Text className='w-auto text-gray-600 text-xm'>9:26 AM</Text>
                         
                        </View>
                   </View>
              </ScrollView>
             
          </View>
          <View className='w-full bg-white pb-4'>
                 <View className='w-full p-4 relative'>
                     <TextInput className='relative z-10 w-full h-12 px-4 bg-gray-200 rounded-full' placeholder='Type a message...'></TextInput>
                     <TouchableOpacity className='absolute top-4 right-4 z-50' onPress={() => Alert.alert("Send")}>
                          <View className='w-12 h-12 rounded-full flex flex-col items-center justify-center bg-green-800'>
                                 <FontAwesome name="send" size={24} color="white" />
                          </View>
                     </TouchableOpacity>
                 </View>
          </View>
      </View>
    </View>
  )
}

export default ChatScreen