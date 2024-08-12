import { View, Text, Image , useWindowDimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import Svg, { Path } from "react-native-svg";
import {AntDesign,Entypo,MaterialIcons,Fontisto,FontAwesome} from '@expo/vector-icons';
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
import { useRouter } from 'expo-router';
const TravelDetailScreen = () => {
    const router = useRouter()
    const {width,height} = useWindowDimensions()
  return (
    <View style={{flex:1, height:'100%', backgroundColor:'#fff', position:'relative'}}>
     
        {/* header */}
      <View style={{width:'100%',height:height/3+80, position:'relative'}}>
             {/* header */}
            <View style={{width:'100%',paddingTop:Constants.statusBarHeight,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:10,position:'relative',zIndex:200}}>
                            <TouchableOpacity onPress={()=>router.back()}>
                            <AntDesign name="arrowleft" size={35} color="white" />
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                    <View style={{width:35, height:35, borderRadius:20, flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor:'#ee5a06'}}>
                                        <Fontisto name="favorite" size={20} color="#fff" />
                                    </View>
                            </TouchableOpacity>
            </View>

            <Image source={require('../../assets/images/travel/3.jpg')} style={{width:'100%',height:'100%', borderBottomLeftRadius:50, position:'absolute',top:0}}/>
            <View style={{position:'absolute',height:150,top:280,left:0, backgroundColor:'transparent'}}>
                <Svg width={`${width}`} height={150} fill="none">
                    <Path
                    d={`M 0 0 C 20 40 40 40 60 40 L ${width-60} 40 C ${width-40} 40 ${width-20} 40 ${width} 80
                    L ${width} 150 C ${width-20} 110 ${width-40} 110 ${width-60} 110 
                    L 60 110 C 40 110 20 110 0 80
                    `}
                    fill="#fcfaec"
                    stroke={"transparent"}
                    strokeWidth={0}
                    />
                </Svg>
            </View>
            <View style={{position:'absolute',top:250,left:30}}>
                 <Text style={{fontWeight:600,fontSize:35,color:'#FFF'}}>Travel Detail</Text>
            </View>
            <View style={{paddingHorizontal:20, position:'absolute', bottom:0}}>
                <View style={{flexDirection:'row', alignItems:'center', gap:20}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <AntDesign name="star" size={20} color="#eebd06" />
                        <Text style={{fontWeight:500,fontSize:17,paddingLeft:10}}>5.0</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <AntDesign name="eye" size={20} color="#ee5a06" />
                        <Text style={{fontWeight:500,fontSize:17,paddingLeft:10}}>120 Views</Text>
                    </View>
                </View>
            </View>
      </View>
      {/* content */}
      <View style={{width:'100%',flex:1,paddingHorizontal:20}}>
          <View style={{paddingTop:50}}>
              <Text style={{fontWeight:500,fontSize:25,color:'#2e2e2e', paddingBottom:10}}>About</Text>
              <View>
                  <Text style={{fontSize:16,color:'#545454',lineHeight:27}}>
                  Find that perfect color with our color picker and discover beautiful color harmonies, tints, shades and tones; input Hex color codes, RGB and HSL values, and generate HTML, CSS and SCSS styles
                  </Text>
              </View>
          </View>
          <View style={{paddingTop:10}}>
              <Text style={{fontWeight:500,fontSize:25,color:'#2e2e2e', paddingBottom:10}}>Gallery</Text>
              <View style={{flexDirection:'row',gap:10, justifyContent:'space-between',marginTop:5}}>
                 <TouchableOpacity>
                     <View>
                          <Image source={require('../../assets/images/travel/1.jpg')} style={{width:80, height:80, borderRadius:15}}/>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <View>
                          <Image source={require('../../assets/images/travel/2.jpg')} style={{width:80, height:80, borderRadius:15}}/>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <View>
                          <Image source={require('../../assets/images/travel/4.jpg')} style={{width:80, height:80, borderRadius:15}}/>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <View style={{position:'relative',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{position:'absolute',zIndex:10,fontSize:23,color:'white',fontWeight:500}}>5+</Text>
                          <Image source={require('../../assets/images/travel/3.jpg')} style={{width:80, height:80, borderRadius:15}}/>
                     </View>
                 </TouchableOpacity>
              </View>
          </View>
      </View>
      {/* footer */}
      <View style={{width:'100%',paddingBottom:20}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:10}}>
              <Text style={{fontWeight:500,fontSize:23,color:'#000'}}>$546.00</Text>
              <TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',gap:5, backgroundColor:'#ee5a06',padding:10, borderRadius:20, paddingHorizontal:20}}>
                         <FontAwesome name="send" size={24} color="white" />
                          <Text style={{fontWeight:600,fontSize:20,color:'white',paddingLeft:10}}>Book now</Text>
                    </View>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default TravelDetailScreen