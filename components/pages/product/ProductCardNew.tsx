import React, { useEffect, useState , useRef} from 'react'
import { View, Text ,TextInput,Easing, TouchableOpacity,useWindowDimensions,Dimensions, Image, ScrollView, Animated} from 'react-native'
import { FontAwesome5,FontAwesome6, Entypo,MaterialCommunityIcons ,MaterialIcons, FontAwesome} from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import {fetchProductsByFilter} from '@/api/product'
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from 'react-redux';
import {AddCart} from '@/redux/actions/cartActions';
import Alert from '@/components/ui/alert/Alert';
const { width, height } = Dimensions.get('window')

import { useAuthStore, useCartStore } from '@/hooks/useStoreHooks';

const  ProductCardNew = () => {
  const { items } = useCartStore();
  const { user, token, loading, error } = useAuthStore();
  const [showAlert, setShowAlert] = useState(false);

  /* const {items} = useSelector((state: any) => state.cart);
  const { auth } = useSelector((state: any) => state.auth); */


 /*  const { items, user, token, loading, error } = useSelector((state: any) => ({
    items: state.cart.items,
    user: state.auth.user,
    token: state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error
  })); */
  
/*   useEffect(() => {
    console.log("User info3:", user);
  }, [user]);
 */

  const dispatch = useDispatch();
  const router = useRouter();
  const [products,setProducts] = React.useState([] as any[]);
  useEffect(() => {
     fetchProductsByFilter({column:'created_at',sort:'desc',limit:10}).then((res) => setProducts(res.products.data))
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
    };

  const addCart = (item: any) => {
    if (!user) {
      setShowAlert(true); 
      return;
    }
    dispatch(AddCart(item));
  }
  const checkItemInCart = (item: any) => {
    return items.some((cartItem: any) => cartItem.id === item.id);
  }


  return (
    <>
     <View className='w-full px-5 mt-10'>
             <View className="w-full flex-row items-center justify-between">
                 
                 <View className='flex-row items-center gap-2'>
                 <FontAwesome5 name="clipboard-list" size={24} color="black" />
                <Text className=' py-2 uppercase'  style={{fontFamily:'HelvetIns'}}>Sản phẩm mới nhất</Text>
                </View>
                 <TouchableOpacity>
                    <View className="flex-row items-center justify-between">
                     <Text className='text-gray-500 text-sm'></Text>
                    <Entypo name="chevron-small-right" size={24} color="black" />
                    
                    </View>
                 </TouchableOpacity>
             </View>
           <View className='w-full mt-5'>
            {
                products.length>0 && products.map((item,index) => {
                    return (
                         <TouchableOpacity className='w-full mb-5' key={index} onPress={()=>{
                                router.push(
                                    {
                                        pathname:'/(screens)/(stack)/details/[id]',
                                        params:{id:item.id}
                                    })
                            }}>
                     <View className='w-full p-[10px] bg-white border-[1px] border-gray-300/50 shadow-md shadow-slate-300 rounded-3xl'>
                            <View className='w-[180px] h-[130px] flex flex-col justify-between items-center m-auto'>
                               <Image source={{uri:item.image}} className='w-full h-full rounded-xl' resizeMode='stretch'/>
                            </View>
                           <View className='flex-1 h-full pl-5 pt-2 relative'>
        
                               <View className='w-full flex flex-col items-center justify-between gap-2'>
                                        <Text className='text-[20px] py-2 font-bold'>{item.title}</Text>
                                        <Text className='text-[13px] text-gray-500'>{item.keywords}</Text>
                                        <View className='w-full flex flex-row items-center justify-between mt-2 '>
                                                <View className='bg-[#efefef] flex flex-row items-center justify-center p-2 gap-2 rounded-r-xl rounded-bl-xl'>
                                                     <FontAwesome6 name="money-bill-trend-up" size={24} color="black" />
                                                     <Text className='font-bold text-red-500 text-xl'>{formatPrice(item.price)} đ</Text>
                                                </View>
                                                <TouchableOpacity className='' onPress={()=>{
                                                  if(!checkItemInCart(item)){
                                                     addCart(item);
                                                  }
                                                }} >
                                                    <View className='w-[100px] bg-[#fccf38] flex flex-row items-center justify-center p-2 gap-2 rounded-r-xl rounded-bl-xl'>
                                                            <Entypo name="shopping-cart" size={15} color="black" />
                                                        <Text className='rounded-md text-black text-[13px] font-bold'>
                                                            {checkItemInCart(item) ? "Đã thêm" : "Thêm"}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                        </View>
                                </View>
                            </View>  
                     </View>
                </TouchableOpacity>
                    )
            })
            }
               
             
               
           </View>
           
       </View>
       {/* Custom Alert */}
      <Alert
        visible={showAlert}
        title="Thông báo"
        message="Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng"
        cancelText="Hủy"
        confirmText="Đăng nhập"
        onCancel={() => setShowAlert(false)}
        onConfirm={() => {
          setShowAlert(false);
          router.push('/(screens)/(stack)/login');
        }}
      />
    </>
  )
}

export default ProductCardNew