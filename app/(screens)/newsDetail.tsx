import { View, Text,TouchableOpacity,ScrollView,Image ,useWindowDimensions} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import {Ionicons,AntDesign,Feather,MaterialIcons} from '@expo/vector-icons'
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";

import RenderHtml, { HTMLElementModel, HTMLContentModel } from 'react-native-render-html';

const NewsDetailScreen = () => {
    const router = useRouter()
    const { width } = useWindowDimensions();
    const [fontsLoaded, fontError] = useFonts({
        HelvetIns: require("../../assets/fonts/HelvetIns.ttf"),
        PlaywriteNL: require("../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
        Montserrat: require("../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
        
      });
      const source = {
        html: `
       <h2>chart and HTML color names.</h2>
      <p style=''>
        Thông thường trong các dự án của chúng ta làm, có những mối liên kết giữa các User và Roles,Permissions,Groups. Thông thường ta làm như vậy để kiểm tra quyền hạn của từng User, biết được họ đang ở vai trò nào? những quyền gì? Thuộc groups nào?
      </p>
      <p>
      <a href="https://hoanguyenit.com/user-roles-and-permissions-in-laravel-58.html">User Roles and Permissions in Laravel 5.8</a>
       </p>
      <p><img src='https://hoanguyenit.com/public/upload/images/users-roles-permissions-groups-in-laravel.png' style="width: 90%; height: auto; align-self: center;padding:0 20px;display:block;margin:0 auto"/></p>
       <h2>chart and HTML color names.</h2>
      <p style=''>
        Thông thường trong các dự án của chúng ta làm, có những mối liên kết giữa các User và Roles,Permissions,Groups. Thông thường ta làm như vậy để kiểm tra quyền hạn của từng User, biết được họ đang ở vai trò nào? những quyền gì? Thuộc groups nào?
      </p>
      <p><img src='https://hoanguyenit.com/public/upload/images/users-roles-permissions-groups-in-laravel.png' style="width: 90%; height: auto; align-self: center;padding:0 20px;display:block;margin:0 auto"/></p>
      
      `
      };

      const tagsStyles = {
        h2:{
          fontSize:15, 
          padding:0,
          margin:0,
          textTransform:'uppercase',
          
        },
       p:{
         lineHeight:28,
         color:'#000',
         fontSize:15, 
         
       },
       a:{
        color:'blue',padding:0,margin:0,
        fontWeight:500
       }
      
      }
      const customHTMLElementModels = {
        'img': HTMLElementModel.fromCustomModel({
          tagName: 'img',
          mixedUAStyles: {
            width: 'auto',
            height: 'auto',
            borderRadius: 25,
            alignSelf: 'center',
            paddingHorizontal:50,
            backgroundColor: 'blue'
          },
          contentModel: HTMLContentModel.block
        })
      };
      const renderersProps = {
        img: {
          enableExperimentalPercentWidth: true
        }
      };
  return (
    <View style={{width:'100%',height:'100%',position:'relative'}}>
            {/* background */}
                <View style={{width:'100%',height:'40%',position:'absolute',zIndex:1}}>
                    <Image source={require('../../assets/images/travel/1.jpg')} style={{width:'100%',height:'100%'}} />
                </View>
            <View style={{flex:1,width:'100%',height:'100%',paddingTop:Constants.statusBarHeight+10, position:'relative',zIndex:2}}>
                    {/* header */}
                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20, alignItems:'center'}}>
                            <TouchableOpacity onPress={() => router.back()}>
                                <View style={{width:40,height:40, borderRadius:20,backgroundColor:'#ECECEC',justifyContent:'center',alignItems:'center'}}>
                                     <Ionicons name='chevron-back' size={24} color={'black'}/>
                                </View>
                            </TouchableOpacity>
                           
                            <View style={{flexDirection:'row',gap:10}}>
                           
                               <TouchableOpacity>
                                    <View style={{width:40,height:40, borderRadius:20,backgroundColor:'#ECECEC',justifyContent:'center',alignItems:'center'}}>
                                            <AntDesign name="sharealt" size={24} color="black" />
                                        </View>
                               </TouchableOpacity>
                               <TouchableOpacity>
                                    <View style={{width:40,height:40, borderRadius:20,backgroundColor:'#ECECEC',justifyContent:'center',alignItems:'center'}}>
                                    <AntDesign name="tagso" size={24} color="black" />
                                        </View>
                               </TouchableOpacity>
                            </View>
                        </View>
                    {/* content */}
                    <ScrollView style={{width:'100%',flex:1,height:'100%',paddingTop:60,paddingHorizontal:15}}>
                        <View style={{width:'100%',paddingTop:20,height:'100%',backgroundColor:'white',borderRadius:20}}>
                            <View>
                                 <TouchableOpacity style={{margin:'auto'}}>
                                     <View style={{width:150,flexDirection:'row',alignItems:'center',gap:5, padding:5, borderRadius:100,backgroundColor:'#2078fe',justifyContent:'center'}}>
                                        <View style={{width:40,height:40,backgroundColor:'#f4f4f4',borderRadius:20, justifyContent:'center',alignItems:'center'}}>
                                            <Image source={require("../../assets/images/avatar/1.png")} style={{width:20,height:24,borderTopLeftRadius:24,borderTopRightRadius:20}} />
                                        </View>
                                        <Text style={{fontSize:13,fontWeight:500,color:'white',fontFamily:'Montserrat'}}>HoaCode Dev</Text>
                                     </View>
                                 </TouchableOpacity>

                                 {/* title */}
                                 <View style={{paddingTop:15,width:'100%',paddingHorizontal:20}}>
                                    <Text style={{fontSize:20,fontWeight:600,color:'black',fontFamily:'Montserrat',lineHeight:30,textAlign:'center'}}>
                                        Get HTML color codes, Hex color codes, RGB and HSL values with our color picker,
                                    </Text>
                                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:15,gap:20}}>
                                         <View style={{flexDirection:'row',gap:8,justifyContent:'center',alignItems:'center'}}>
                                            <Feather name="trending-up" size={24} color="#fc5507" />
                                            <Text style={{fontFamily:'Montserrat',fontSize:12,color:'#4f4e4e'}}>Trending No.1</Text>
                                         </View>
                                         <View style={{flexDirection:'row',gap:8,justifyContent:'center',alignItems:'center'}}>
                                            <MaterialIcons name="update" size={24} color="#bfbfbe" />
                                            <Text style={{fontFamily:'Montserrat',fontSize:12,color:'#4f4e4e'}}>Trending No.1</Text>
                                         </View>
                                    </View>
                                 </View>
                                 {/* body */}
                                 <View style={{width:'100%',paddingHorizontal:20,paddingTop:20}}>
                                    <RenderHtml
                                        contentWidth={width}
                                            source={source}
                                            tagsStyles={tagsStyles}
                                           // customHTMLElementModels={customHTMLElementModels}
                                            renderersProps={renderersProps}
                                        />
                                 </View>
                            </View>
                        </View>
                    </ScrollView>
            </View>
    </View>
  )
}

export default NewsDetailScreen