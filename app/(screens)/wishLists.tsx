import { View, Text, TouchableOpacity, Image,useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
const WishListScreen = () => {
  const {width,height} = useWindowDimensions()
  return (
    <ScrollView style={{width:'100%', height:'100%'}}>
      <View style={{flex:1,width:'100%', height:'100%',backgroundColor:'#EAEAEA',paddingHorizontal:20,paddingVertical:20}}>
        <View style={{width:'100%', height:'100%', flexDirection:'column', gap:20}}>
              <TouchableOpacity style={{width:'100%',height:height/2 + 150}}>
                  <View style={{width:'100%', height:'100%',position:'relative', backgroundColor:'white', borderRadius:20}}>
                      <Image source={require("../../assets/images/travel/1.jpg")} style={{width:'100%',height:height/2, borderRadius:20, position:'absolute'}} 
                      resizeMode='cover'/>
                      <View style={{width:'100%',flexDirection:'row', alignItems:'center', position:'absolute',bottom:190, left:20}}>
                          <View style={{width:200}}>
                            <View style={{flexDirection:'row', alignItems:'center',position:'relative'}}>
                                  <TouchableOpacity style={{position:'absolute',left:0,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/1.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:30,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/2.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:60,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/3.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:90,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/4.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:120,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/6.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity> 
                            </View>
                          </View>
                          <View style={{flex:1}}><Text style={{fontWeight:500, fontSize:18, color:'white'}}>1.2k like travel</Text></View>
                      </View>
                      <View style={{width:'100%',position:'absolute',bottom:100}}>
                            <Text style={{fontWeight:500, fontSize:20, color:'black', textAlign:'center'}}>Travel new 2024 - VietNam</Text>
                      </View>
                      <TouchableOpacity style={{position:'absolute',bottom:20, left:0, right:0}}>
                          <View style={{width:200, backgroundColor:'orange',borderRadius:100, paddingVertical:15, margin:'auto',flexDirection:'row', alignItems:'center', justifyContent:'center', gap:10}}>
                              <Feather name="send" size={24} color="white" />
                              <Text style={{fontWeight:500, textAlign:'center', fontSize:18, color:'white'}}>Book now</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'100%',height:height/2 + 150}}>
                  <View style={{width:'100%', height:'100%',position:'relative', backgroundColor:'white', borderRadius:20}}>
                      <Image source={require("../../assets/images/travel/2.jpg")} style={{width:'100%',height:height/2, borderRadius:20, position:'absolute'}} 
                      resizeMode='cover'/>
                      <View style={{width:'100%',flexDirection:'row', alignItems:'center', position:'absolute',bottom:190, left:20}}>
                          <View style={{width:200}}>
                            <View style={{flexDirection:'row', alignItems:'center',position:'relative'}}>
                                  <TouchableOpacity style={{position:'absolute',left:0,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/1.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:30,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/2.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:60,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/3.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:90,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/4.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:120,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/6.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity> 
                            </View>
                          </View>
                          <View style={{flex:1}}><Text style={{fontWeight:500, fontSize:18, color:'white'}}>1.2k like travel</Text></View>
                      </View>
                      <View style={{width:'100%',position:'absolute',bottom:100}}>
                            <Text style={{fontWeight:500, fontSize:20, color:'black', textAlign:'center'}}>Travel new 2024 - VietNam</Text>
                      </View>
                      <TouchableOpacity style={{position:'absolute',bottom:20, left:0, right:0}}>
                          <View style={{width:200, backgroundColor:'orange',borderRadius:100, paddingVertical:15, margin:'auto',flexDirection:'row', alignItems:'center', justifyContent:'center', gap:10}}>
                              <Feather name="send" size={24} color="white" />
                              <Text style={{fontWeight:500, textAlign:'center', fontSize:18, color:'white'}}>Book now</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'100%',height:height/2 + 150}}>
                  <View style={{width:'100%', height:'100%',position:'relative', backgroundColor:'white', borderRadius:20}}>
                      <Image source={require("../../assets/images/travel/3.jpg")} style={{width:'100%',height:height/2, borderRadius:20, position:'absolute'}} 
                      resizeMode='cover'/>
                      <View style={{width:'100%',flexDirection:'row', alignItems:'center', position:'absolute',bottom:190, left:20}}>
                          <View style={{width:200}}>
                            <View style={{flexDirection:'row', alignItems:'center',position:'relative'}}>
                                  <TouchableOpacity style={{position:'absolute',left:0,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/1.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:30,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/2.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:60,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/3.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:90,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/4.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:120,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/6.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity> 
                            </View>
                          </View>
                          <View style={{flex:1}}><Text style={{fontWeight:500, fontSize:18, color:'white'}}>1.2k like travel</Text></View>
                      </View>
                      <View style={{width:'100%',position:'absolute',bottom:100}}>
                            <Text style={{fontWeight:500, fontSize:20, color:'black', textAlign:'center'}}>Travel new 2024 - VietNam</Text>
                      </View>
                      <TouchableOpacity style={{position:'absolute',bottom:20, left:0, right:0}}>
                          <View style={{width:200, backgroundColor:'orange',borderRadius:100, paddingVertical:15, margin:'auto',flexDirection:'row', alignItems:'center', justifyContent:'center', gap:10}}>
                              <Feather name="send" size={24} color="white" />
                              <Text style={{fontWeight:500, textAlign:'center', fontSize:18, color:'white'}}>Book now</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'100%',height:height/2 + 150}}>
                  <View style={{width:'100%', height:'100%',position:'relative', backgroundColor:'white', borderRadius:20}}>
                      <Image source={require("../../assets/images/travel/4.jpg")} style={{width:'100%',height:height/2, borderRadius:20, position:'absolute'}} 
                      resizeMode='cover'/>
                      <View style={{width:'100%',flexDirection:'row', alignItems:'center', position:'absolute',bottom:190, left:20}}>
                          <View style={{width:200}}>
                            <View style={{flexDirection:'row', alignItems:'center',position:'relative'}}>
                                  <TouchableOpacity style={{position:'absolute',left:0,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/1.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:30,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/2.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:60,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/3.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:90,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/4.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:120,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/6.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity> 
                            </View>
                          </View>
                          <View style={{flex:1}}><Text style={{fontWeight:500, fontSize:18, color:'white'}}>1.2k like travel</Text></View>
                      </View>
                      <View style={{width:'100%',position:'absolute',bottom:100}}>
                            <Text style={{fontWeight:500, fontSize:20, color:'black', textAlign:'center'}}>Travel new 2024 - VietNam</Text>
                      </View>
                      <TouchableOpacity style={{position:'absolute',bottom:20, left:0, right:0}}>
                          <View style={{width:200, backgroundColor:'orange',borderRadius:100, paddingVertical:15, margin:'auto',flexDirection:'row', alignItems:'center', justifyContent:'center', gap:10}}>
                              <Feather name="send" size={24} color="white" />
                              <Text style={{fontWeight:500, textAlign:'center', fontSize:18, color:'white'}}>Book now</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'100%',height:height/2 + 150}}>
                  <View style={{width:'100%', height:'100%',position:'relative', backgroundColor:'white', borderRadius:20}}>
                      <Image source={require("../../assets/images/travel/5.jpg")} style={{width:'100%',height:height/2, borderRadius:20, position:'absolute'}} 
                      resizeMode='cover'/>
                      <View style={{width:'100%',flexDirection:'row', alignItems:'center', position:'absolute',bottom:190, left:20}}>
                          <View style={{width:200}}>
                            <View style={{flexDirection:'row', alignItems:'center',position:'relative'}}>
                                  <TouchableOpacity style={{position:'absolute',left:0,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/1.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:30,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/2.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:60,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/3.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:90,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/4.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{position:'absolute',left:120,backgroundColor:'white', width:60, height:60,borderRadius:30, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                      <Image source={require("../../assets/images/avatar/6.png")} style={{width:50,height:50, borderRadius:25}} />
                                  </TouchableOpacity> 
                            </View>
                          </View>
                          <View style={{flex:1}}><Text style={{fontWeight:500, fontSize:18, color:'white'}}>1.2k like travel</Text></View>
                      </View>
                      <View style={{width:'100%',position:'absolute',bottom:100}}>
                            <Text style={{fontWeight:500, fontSize:20, color:'black', textAlign:'center'}}>Travel new 2024 - VietNam</Text>
                      </View>
                      <TouchableOpacity style={{position:'absolute',bottom:20, left:0, right:0}}>
                          <View style={{width:200, backgroundColor:'orange',borderRadius:100, paddingVertical:15, margin:'auto',flexDirection:'row', alignItems:'center', justifyContent:'center', gap:10}}>
                              <Feather name="send" size={24} color="white" />
                              <Text style={{fontWeight:500, textAlign:'center', fontSize:18, color:'white'}}>Book now</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default WishListScreen