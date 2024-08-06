import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React,{useMemo, useState} from 'react'
import type {FC, ReactElement} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import MasonryList from '@react-native-seoul/masonry-list';
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";

import { useRouter } from 'expo-router';
interface Furniture {
  id: string;
  imgURL: string;
  text: string;
}

const _collections :Furniture[] = [
  {
    id: 'id123',
    imgURL:
      'https://images.vietnamtourism.gov.vn/vn//images/2022/thang_11/mot_goc_trang_an_1_-_binh_nguyen_58.jpg',
    text: 'Du lich 2024',
  },
  {
    id: 'id124',
    imgURL:
      'https://sakos.vn/wp-content/uploads/2023/10/kinh-nghiem-di-khu-du-lich-trang-an-ninh-binh-chi-tiet-tu-a-den-z1-1.jpg',
      text: 'Du lich 2024',
  },
  {
    id: 'id125',
    imgURL:
      'https://media-cdn-v2.laodong.vn/storage/newsportal/2022/4/24/1037447/Trang_An.jpeg',
      text: 'Du lich 2024',
  },
  {
    id: 'id126',
    imgURL:
      'https://tourdulichviet.com/storage/upload/images/800x600/tour-trang-an-ninh-binh.jpg',
      text: 'Du lich 2024',
  },
  {
    id: 'id127',
    imgURL:
      'https://images.vietnamtourism.gov.vn/vn//images/2022/thang_11/mot_goc_trang_an_1_-_binh_nguyen_58.jpg',
    text: 'Du lich 2024',
  },
  {
    id: 'id128',
    imgURL:
      'https://sakos.vn/wp-content/uploads/2023/10/kinh-nghiem-di-khu-du-lich-trang-an-ninh-binh-chi-tiet-tu-a-den-z1-1.jpg',
      text: 'Du lich 2024',
  },
  {
    id: 'id129',
    imgURL:
      'https://media-cdn-v2.laodong.vn/storage/newsportal/2022/4/24/1037447/Trang_An.jpeg',
      text: 'Du lich 2024',
  },
  {
    id: 'id110',
    imgURL:
      'https://tourdulichviet.com/storage/upload/images/800x600/tour-trang-an-ninh-binh.jpg',
      text: 'Du lich 2024',
  },

]
const FurnitureCard: FC<{item: Furniture; style: StyleProp<ViewStyle>}> = ({
  item,
  style,
}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  
  return (
  
     <TouchableOpacity key={item.id} style={[{marginTop: 12, flex: 1}, style]}>
          <View style={{width:'100%',backgroundColor:'#fff',borderRadius:20,overflow:'hidden'}}>
          <Image
        source={{uri: item.imgURL}}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: 'stretch',
        }}
        resizeMode="cover"
      />
              <Text style={{fontWeight:600, textAlign:'center',paddingVertical:15,fontSize:14}}>  {item.text}</Text>
          </View>
      </TouchableOpacity>
  );
};

const CollectionScreen = () => {
  const router = useRouter();
  const renderItem = ({item, i} : any): ReactElement => {
    return (
      <FurnitureCard item={item} style={{marginLeft: i % 2 === 0 ? 0 : 12}} />
    );
  };

  return (
  
      <View style={{flex:1,width:'100%',height:'100%',paddingTop:Constants.statusBarHeight+10}}>
         {/* header */}
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20, alignItems:'center'}}>
               <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name='chevron-back' size={30} />
               </TouchableOpacity>
               <Text style={{fontSize:20}}>Collections</Text>
               <TouchableOpacity>
                  <Ionicons name='filter' size={30} />
               </TouchableOpacity>
          </View>
       
          {/* body */}
         <View style={{width:'100%',flex:1,paddingTop:10}}>
         <MasonryList
           data={_collections}
           renderItem={renderItem}
            keyExtractor={(item: any): string => item.id}
          
            contentContainerStyle={{
              paddingHorizontal: 10,
              alignSelf: 'stretch',
            }}
            onEndReached={() => console.log('onEndReached')}
             numColumns={2}
       
          />
         </View>
      </View>
  
  )
}

export default CollectionScreen