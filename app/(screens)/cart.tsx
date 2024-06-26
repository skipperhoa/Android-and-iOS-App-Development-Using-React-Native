import { View, Text, SafeAreaView,StyleSheet, Animated,TouchableOpacity,Image, ScrollView,TextInput, Platform} from 'react-native'
import React, { useState } from 'react'
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@/components/BottomSheet'
// icon
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSharedValue } from 'react-native-reanimated';
const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number|string>,
    dragAnimatedValue:Animated.AnimatedInterpolation<number|string>
  ) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }) as Animated.AnimatedInterpolation<number>;
   
    return (
      <View className="w-2/3 bg-white rounded-xl flex flex-row items-center">
        <View className='flex-1'>
          <Text className='p-2 text-sm font-bold'>Bạn có muốn xoá sản phẩm này?</Text>
        </View>
        <Animated.View className="bg-red-500 h-full rounded-r-xl" style={[styles.deleteButton, {opacity}]}>
          <TouchableOpacity className='w-auto h-full p-2 flex flex-col items-center justify-center'>
            <AntDesign name="delete" size={30} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };


const CartScreen = () => {
  const router = useRouter()
  const isOpen = useSharedValue(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleSheet = () => {
    // Tại đây chúng ta có thể cập nhật lại product nếu chúng ta muốn
    // setSelectedProduct({
    //   id: 1,
    //   name: 'Thanh toán Paypal',
    //   image:require('@/assets/products/payment1.png'),
    //   check: false
    // })

    isOpen.value = !isOpen.value;
  };
  const _payment = [
    {
      id: 1,
      name: 'Thanh toán Paypal',
      image:require('@/assets/products/payment1.png'),
      check: false
    },
    {
      id: 2,
      name: 'Thanh toán Momo',
      image:require('@/assets/products/payment2.jpg'),
      check: false
    },
    {
      id: 3,
      name: 'Thanh toàn Zalopay',
      image:require('@/assets/products/payment3.png'),
      check: true
    },
  ]
  const [payment, setPayment] = useState(_payment);

  const checkPayment = (index : any) => {
    setPayment(payment.map((item, i) => {
      if (index === i) {
        return {
          ...item,
          check: true
        }
      } else {
        return {
          ...item,
          check: false
        }
      }
    }))
  }
  //
  const checkPlatform = () => {
    if (Platform.OS === "ios") {
      return 'ios';
    } else {
      return "android";
    }
  };
   
  return (
    <SafeAreaView className='w-full h-full bg-white relative'>
      <View className='w-full h-full'>

        <ScrollView className='flex-1 h-full bg-gray-100'>
          <GestureHandlerRootView className='w-full h-full p-4'>
          
                <TouchableOpacity className='w-full mb-4'>
                <Swipeable renderRightActions={renderRightActions}>
                    <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                        <View className='w-1/3 p-1 flex flex-col items-center'>
                            <Image source={require('@/assets/products/1.png')}
                            className='w-full h-28 block m-auto' resizeMode='contain'
                            ></Image>
                        </View>
                        <View className='w-2/3 px-2'>
                              <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                              <View className='flex flex-row items-center justify-between'>
                                  <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                  <View className='flex flex-col gap-1'>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                        
                                              <Text className='text-sm text-center font-bold text-white'>-</Text>
                                          
                                      </TouchableOpacity>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                          <Text className='text-sm text-center font-bold text-white'>+</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                        </View>
                    </View>
                  </Swipeable>
                </TouchableOpacity>
              
                <TouchableOpacity className='w-full mb-4'>
                <Swipeable renderRightActions={renderRightActions}>
                    <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                        <View className='w-1/3 p-1 flex flex-col items-center'>
                            <Image source={require('@/assets/products/2.png')}
                            className='w-full h-28 block m-auto' resizeMode='contain'
                            ></Image>
                        </View>
                        <View className='w-2/3 px-2'>
                              <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                              <View className='flex flex-row items-center justify-between'>
                                  <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                  <View className='flex flex-col gap-1'>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                        
                                              <Text className='text-sm text-center font-bold text-white'>-</Text>
                                          
                                      </TouchableOpacity>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                          <Text className='text-sm text-center font-bold text-white'>+</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                        </View>
                    </View>
                  </Swipeable>
                </TouchableOpacity>
                <TouchableOpacity className='w-full mb-4'>
                <Swipeable renderRightActions={renderRightActions}>
                    <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                        <View className='w-1/3 p-1 flex flex-col items-center'>
                            <Image source={require('@/assets/products/3.png')}
                            className='w-full h-28 block m-auto' resizeMode='contain'
                            ></Image>
                        </View>
                        <View className='w-2/3 px-2'>
                              <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                              <View className='flex flex-row items-center justify-between'>
                                  <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                  <View className='flex flex-col gap-1'>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                        
                                              <Text className='text-sm text-center font-bold text-white'>-</Text>
                                          
                                      </TouchableOpacity>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                          <Text className='text-sm text-center font-bold text-white'>+</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                        </View>
                    </View>
                  </Swipeable>
                </TouchableOpacity>

                <TouchableOpacity className='w-full mb-4'>
                <Swipeable renderRightActions={renderRightActions}>
                    <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                        <View className='w-1/3 p-1 flex flex-col items-center'>
                            <Image source={require('@/assets/products/4.png')}
                            className='w-full h-28 block m-auto' resizeMode='contain'
                            ></Image>
                        </View>
                        <View className='w-2/3 px-2'>
                              <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                              <View className='flex flex-row items-center justify-between'>
                                  <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                  <View className='flex flex-col gap-1'>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                        
                                              <Text className='text-sm text-center font-bold text-white'>-</Text>
                                          
                                      </TouchableOpacity>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                          <Text className='text-sm text-center font-bold text-white'>+</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                        </View>
                    </View>
                  </Swipeable>
                </TouchableOpacity>

                <TouchableOpacity className='w-full mb-4'>
                <Swipeable renderRightActions={renderRightActions}>
                    <View className='w-full flex flex-row items-center bg-white rounded-xl shadow-sm shadow-gray-200'>
                        <View className='w-1/3 p-1 flex flex-col items-center'>
                            <Image source={require('@/assets/products/5.png')}
                            className='w-full h-28 block m-auto' resizeMode='contain'
                            ></Image>
                        </View>
                        <View className='w-2/3 px-2'>
                              <Text className='font-bold text-xl'>Mì Cay cấp độ 7 (new)</Text>
                              <View className='flex flex-row items-center justify-between'>
                                  <Text className='font-bold text-sm text-gray-600'>50.000 ₫ x 2</Text>
                                  <View className='flex flex-col gap-1'>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center rounded-md bg-yellow-600'>
                                        
                                              <Text className='text-sm text-center font-bold text-white'>-</Text>
                                          
                                      </TouchableOpacity>
                                      <TouchableOpacity className='w-6 h-6 flex flex-col items-center justify-center  rounded-md bg-yellow-600'>
                                          <Text className='text-sm text-center font-bold text-white'>+</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                        </View>
                    </View>
                  </Swipeable>
                </TouchableOpacity>
                
          </GestureHandlerRootView>
        </ScrollView>
        {/* footer */}
        <View className='w-full px-4'>
          
            <View className='pt-4 rounded-t-2xl'>
              <Text className='font-bold text-sm pb-2'>Enter coupon code</Text>
              <View className='flex flex-row items-center gap-1'>
                  <TextInput className='flex-1 h-10 border border-gray-300 rounded-md px-4' placeholder=''/>
                  <TouchableOpacity>
                      <View className='bg-green-500 p-2 rounded-md'>
                          <Text className='text-center text-sm text-white'>Add coupon</Text>
                      </View>
                  </TouchableOpacity>
              </View>
            </View>
            <View className='w-full flex flex-row items-center justify-between pt-4'>
                  <Text className='font-bold text-xl'>Total</Text>
                  <Text className='text-gray-600 font-bold text-xl'>100.000 đ</Text>
            </View>
            <View className='w-full mt-4' style={[{paddingBottom:checkPlatform()=='android'?20:0}]}>
                <TouchableOpacity onPress={() => toggleSheet()}>
                    <View className='w-full bg-yellow-600 rounded-full flex flex-row items-center justify-center'>
                      <AntDesign name="shoppingcart" size={24} color="white" />
                        <Text className='text-white font-bold block py-4 pl-2 text-center text-xl'>Check out</Text>
                    </View>
                </TouchableOpacity>   
            </View>
        </View>
      </View>

      {/* Bottom sheet */}
      <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>

      <View className='w-full h-full py-2 px-4 bg-white rounded-t-[30px] border-[1px] border-gray-300 
        shadow-xl shadow-gray-200'>
            <View className='w-full pt-2'>
                  <Text className='text-sm font-bold py-2'>Address</Text>
                  <View>
                    <TextInput className='w-full h-12 border bg-white border-gray-200 rounded-md px-4' placeholder=''/>
                  </View>
                  <Text className='text-sm font-bold py-2'>Choose payment</Text>
                  <View className='py-2'>
                    {
                      payment.map((item, index) => (
                          <TouchableOpacity className='mb-2' key={index} onPress={() => checkPayment(index)}>
                                <View className='flex flex-row items-center border-[1px] justify-between rounded-xl py-2 px-4' 
                                style={{backgroundColor: item.check?'#f5f5f5':'#fff',
                                  borderColor: item.check?'#9BFA7F':'#f5f5f5'}}>
                                    <View className='w-12 h-12'>
                                      <Image source={item.image} className='w-full h-full block' 
                                      resizeMode='contain'/>
                                    </View>
                                    <View className='w-6 h-6 rounded-full border-[1px] border-gray-400 flex flex-col items-center justify-center'>
                                    <AntDesign name="checkcircle" size={18} color={item.check?'green':'white'} />
                                    </View>
                                </View>
                          </TouchableOpacity>
                      ))
                    }
                  
                    
                  </View>
                  <View className='pb-4'>
                      <TouchableOpacity>
                          <View className='w-full bg-red-500 rounded-full flex flex-row items-center justify-center py-2'>
                              <MaterialIcons name="payment" size={24} color="white" />
                              <Text className='font-bold px-2 text-white text-xl'>Payment</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
            </View>
        </View>
      </BottomSheet>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      minHeight: 300,
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      paddingLeft: 5,
      backgroundColor: '#efefef',
      margin: 20,
      minHeight: 50,
    },
    swipedRow: {
      flexDirection: 'row',
    flex: 1,
      alignItems: 'center',
      paddingLeft: 5,
      backgroundColor: '#818181',
      margin: 20,
      minHeight: 50,
    },
    swipedConfirmationContainer: {
      flex: 1,
    },
    deleteConfirmationText: {
      color: '#fcfcfc',
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: '#b60000',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
    },
    deleteButtonText: {
      color: '#fcfcfc',
      fontWeight: 'bold',
      padding: 3,
    },
  });
export default CartScreen