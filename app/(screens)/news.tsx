import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import {MaterialIcons,Ionicons} from '@expo/vector-icons'
import { useRouter } from 'expo-router';

const NewScreen = () => {
    const router = useRouter();
    const [fontsLoaded, fontError] = useFonts({
        HelvetIns: require("../../assets/fonts/HelvetIns.ttf"),
        PlaywriteNL: require("../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
        Montserrat: require("../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
        
      });
  return (
    <SafeAreaView style={{width:'100%',flex:1}}>
        <ScrollView style={{width:'100%',height:'100%'}}>
            <View style={{width:'100%',padding:20}}>
                <TouchableOpacity style={{width:'100%',paddingBottom:20}} onPress={() => router.push('/newsDetail')}>
                     <View style={{width:'100%',padding:20,borderRadius:10, backgroundColor:'#FFF',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                         <View style={{flex:1,paddingRight:15}}>
                             <TouchableOpacity>
                                  <View style={{width:100,borderRadius:40,backgroundColor:'#d4eed6',marginBottom:10}}>
                                        <Text style={{padding:5,textAlign:"center",fontFamily:'Montserrat',color:'green',fontSize:13}}>Event</Text>
                                  </View>
                             </TouchableOpacity>
                             <Text style={{fontSize:15,lineHeight:22,fontWeight:400,fontFamily:'HelvetIns'}}>Du lich vung tau 2024 - hot nhat nam nay</Text>
                             <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                     <MaterialIcons name="date-range" size={20} color="#979695" />
                                     <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>1 Day ago</Text>
                                 </View>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                    <Ionicons name="reader-outline" size={20} color="#979695" />
                                    <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>5 min read</Text>
                                 </View>
                             </View>
                         </View>
                         <Image source={require("../../assets/images/travel/1.jpg")} style={{width:120,height:120, borderRadius:5}} resizeMode='cover'/>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'100%',paddingBottom:20}}>
                     <View style={{width:'100%',padding:20,borderRadius:10, backgroundColor:'#FFF',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                         <View style={{flex:1,paddingRight:15}}>
                             <TouchableOpacity>
                                  <View style={{width:100,borderRadius:40,backgroundColor:'#fcec66',marginBottom:10}}>
                                        <Text style={{padding:5,textAlign:"center",fontFamily:'Montserrat',color:'green',fontSize:13}}>International</Text>
                                  </View>
                             </TouchableOpacity>
                             <Text style={{fontSize:15,lineHeight:22,fontWeight:400,fontFamily:'HelvetIns'}}>Du lich vung tau 2024 - hot nhat nam nay</Text>
                             <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                     <MaterialIcons name="date-range" size={20} color="#979695" />
                                     <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>1 Day ago</Text>
                                 </View>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                    <Ionicons name="reader-outline" size={20} color="#979695" />
                                    <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>5 min read</Text>
                                 </View>
                             </View>
                         </View>
                         <Image source={require("../../assets/images/travel/2.jpg")} style={{width:120,height:120, borderRadius:5}} resizeMode='cover'/>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'100%',paddingBottom:20}}>
                     <View style={{width:'100%',padding:20,borderRadius:10, backgroundColor:'#FFF',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                         <View style={{flex:1,paddingRight:15}}>
                             <TouchableOpacity>
                                  <View style={{width:100,borderRadius:40,backgroundColor:'#d4eed6',marginBottom:10}}>
                                        <Text style={{padding:5,textAlign:"center",fontFamily:'Montserrat',color:'green',fontSize:13}}>Business</Text>
                                  </View>
                             </TouchableOpacity>
                             <Text style={{fontSize:15,lineHeight:22,fontWeight:400,fontFamily:'HelvetIns'}}>Du lich vung tau 2024 - hot nhat nam nay</Text>
                             <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                     <MaterialIcons name="date-range" size={20} color="#979695" />
                                     <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>1 Day ago</Text>
                                 </View>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                    <Ionicons name="reader-outline" size={20} color="#979695" />
                                    <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>5 min read</Text>
                                 </View>
                             </View>
                         </View>
                         <Image source={require("../../assets/images/travel/3.jpg")} style={{width:120,height:120, borderRadius:5}} resizeMode='cover'/>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'100%',paddingBottom:20}}>
                     <View style={{width:'100%',padding:20,borderRadius:10, backgroundColor:'#FFF',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                         <View style={{flex:1,paddingRight:15}}>
                             <TouchableOpacity>
                                  <View style={{width:100,borderRadius:40,backgroundColor:'#66b1fc',marginBottom:10}}>
                                        <Text style={{padding:5,textAlign:"center",fontFamily:'Montserrat',color:'white',fontSize:13}}>Sports</Text>
                                  </View>
                             </TouchableOpacity>
                             <Text style={{fontSize:15,lineHeight:22,fontWeight:400,fontFamily:'HelvetIns'}}>Du lich vung tau 2024 - hot nhat nam nay</Text>
                             <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                     <MaterialIcons name="date-range" size={20} color="#979695" />
                                     <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>1 Day ago</Text>
                                 </View>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                    <Ionicons name="reader-outline" size={20} color="#979695" />
                                    <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>5 min read</Text>
                                 </View>
                             </View>
                         </View>
                         <Image source={require("../../assets/images/travel/4.jpg")} style={{width:120,height:120, borderRadius:5}} resizeMode='cover'/>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'100%',paddingBottom:20}}>
                     <View style={{width:'100%',padding:20,borderRadius:10, backgroundColor:'#FFF',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                         <View style={{flex:1,paddingRight:15}}>
                             <TouchableOpacity>
                                  <View style={{width:100,borderRadius:40,backgroundColor:'#d4eed6',marginBottom:10}}>
                                        <Text style={{padding:5,textAlign:"center",fontFamily:'Montserrat',color:'green',fontSize:13}}>Event</Text>
                                  </View>
                             </TouchableOpacity>
                             <Text style={{fontSize:15,lineHeight:22,fontWeight:400,fontFamily:'HelvetIns'}}>Du lich vung tau 2024 - hot nhat nam nay</Text>
                             <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                     <MaterialIcons name="date-range" size={20} color="#979695" />
                                     <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>1 Day ago</Text>
                                 </View>
                                 <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                    <Ionicons name="reader-outline" size={20} color="#979695" />
                                    <Text style={{color:'#979695',fontSize:11,fontFamily:'Montserrat'}}>5 min read</Text>
                                 </View>
                             </View>
                         </View>
                         <Image source={require("../../assets/images/travel/5.jpg")} style={{width:120,height:120, borderRadius:5}} resizeMode='cover'/>
                     </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default NewScreen