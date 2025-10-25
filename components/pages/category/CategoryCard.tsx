import React, { useEffect, useState , useRef} from 'react'
import { View, Text ,TextInput, TouchableOpacity,useWindowDimensions,Dimensions, Image, ScrollView, Animated} from 'react-native'
import { FontAwesome5,FontAwesome6, Entypo,MaterialCommunityIcons ,MaterialIcons, FontAwesome} from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { useRouter,useNavigation } from 'expo-router';
import {fetchProductsByFilter} from '@/api/product'
import { getAllCategories } from '@/api/category';
const  CategoryCard = () => {
const router = useRouter();
   const [activeHangXe, setActiveHangXe] = useState(0);
   const [categories, setCategories] = useState([]);
   useEffect(() => {
        getAllCategories().then((res) => {
            // get all categories parent
            if(res.status) {
                const data = res.data.filter((item : any) => item.category_id == null);
                //console.log('CATEGORIES PARENT',data)
                setCategories(data)
            }
        })   
   },[])
   
  return (
    <>
     <View className='w-full px-5 mt-10'>
                <View className="w-full flex-row items-center justify-between">
                  <View className='flex-row items-center gap-2'>
                    <FontAwesome5 name="list-alt" size={24} color="black" />
                    <Text className='py-2 uppercase'  style={{fontFamily:'HelvetIns'}}>DANH SÁCH HÃNG XE</Text>
                    </View>
                     <TouchableOpacity>
                        <View className="flex-row items-center justify-between">
                         <Text className='text-gray-500 text-sm'></Text>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                        
                        </View>
                     </TouchableOpacity>
                 </View>
                 <ScrollView className='w-full' horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View className='py-2 flex flex-row items-center gap-5'>
                        
                        {
                            categories.map((item : any, index) => {
                                let style : any= {
                                    backgroundColor:'#ebeceb'
                                }
                                if(activeHangXe==index) {
                                    style.backgroundColor = '#2563eb';
                                    style.shadowColor = '#2563eb';
                                    style.shadowOffset = { width: 3, height: 3 };
                                    style.shadowOpacity = 0.8;
                                    style.shadowRadius = 2;
                                    style.elevation =  5 
                                }
                                return(
                                     <TouchableOpacity className='w-[120px]' key={index} onPress={() =>{
                                        setActiveHangXe(index);
                                        router.push({
                                            pathname: '/(screens)/(tabs)/category',
                                            params: { title: item.title },
                                            });
                                     }}>
                                            <View className='w-full h-[130px] flex-col justify-center items-center p-1 rounded-3xl' style={style}>
                                                <View className='w-20 h-20 bg-white rounded-full'>
                                                    <Image source={{uri:item.image}} className='w-full h-full block m-auto rounded-full' resizeMode='cover' />
                                                </View>
                                                <Text className='py-2 text-[15px]' style={{color:activeHangXe==index?'#fff':'#000'}}>{item.title}</Text>
                                            </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                       
                       
                    </View>
                 </ScrollView>
            </View>
    </>
  )
}

export default CategoryCard