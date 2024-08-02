import { View, Text, useWindowDimensions,TextInput, ScrollView, TouchableOpacity , Image} from 'react-native'
import React from 'react'
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
import Svg, { Defs, Path , LinearGradient,Stop} from "react-native-svg";
import { FontAwesome } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const FlightDetailScreen = () => {
    const { width, height } = useWindowDimensions();
  return (
    <View style={{flex:1,width:'100%', backgroundColor:'#EAEAEA'}}>
       {/* fix header top */}
       <View style={{position:'relative'}}>
          <View style={{position:'absolute',top:0, zIndex:1}}>
            <Svg width={`${width}`} height={200} fill="none">
              <Path
                d="M 0 0 L 0 200 C 50 200 0 150 60  120 S 70 70 80 50 S 100 50 120 0"
                fill="#EAEAEA"
                stroke={"transparent"}
                strokeWidth={0}
              />
            </Svg>
          </View>
          <View style={{position:'absolute',top:-10,left:-10, zIndex:2}}>
            <Svg width={`${width}`} height={200} fill="none">
                <Defs>
                  <LinearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                    <Stop offset="0%" stopColor="green" />
                    <Stop offset="100%" stopColor="#03D12E" />
                  </LinearGradient>
                </Defs>
              <Path
                d="M 0 0 L 0 200 C 50 200 0 150 60  120 S 70 70 80 50 S 100 50 120 0"
                fill="url(#grad1)"
                stroke={"transparent"}
                strokeWidth={0}
              />
            </Svg>
          </View>
        </View>
        {/* fix footer bottom */}
        <View style={{position:'absolute',bottom:0, zIndex:1,right:0,height:200,transform:[{rotate:'180deg'}]}}>
          <View style={{position:'absolute',top:0, zIndex:1}}>
            <Svg width={`${width}`} height={200} fill="none">
              <Path
                d="M 0 0 L 0 200 C 50 200 0 150 60  120 S 70 70 80 50 S 100 50 120 0"
                fill="#EAEAEA"
                stroke={"transparent"}
                strokeWidth={0}
              />
            </Svg>
          </View>
          <View style={{position:'absolute',top:-10,left:-10, zIndex:2}}>
            <Svg width={`${width}`} height={200} fill="none">
                <Defs>
                  <LinearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                    <Stop offset="0%" stopColor="green" />
                    <Stop offset="100%" stopColor="#03D12E" />
                  </LinearGradient>
                </Defs>
              <Path
                d="M 0 0 L 0 200 C 50 200 0 150 60  120 S 70 70 80 50 S 100 50 120 0"
                fill="url(#grad1)"
                stroke={"transparent"}
                strokeWidth={0}
              />
            </Svg>
          </View>
        </View>

        <ScrollView style={{width:'100%',height:'100%',position:'relative',zIndex:100, paddingBottom:50}}>
            <View style={{paddingTop:Constants.statusBarHeight+10,paddingHorizontal:20}}>
                {/* Passenger Information (Thông tin hành khách): */}
                <View style={{backgroundColor:'#fff',padding:20, borderRadius:10,marginBottom:20}}>
                        <View style={{flexDirection:'row',alignItems:'center',paddingBottom:10}}>
                            <FontAwesome name="user" size={24} color={'black'}/>
                            <Text style={{fontWeight:'bold',paddingLeft:10,fontSize:16}}>Passenger Information</Text>
                        </View>
                        <TextInput placeholderTextColor={'gray'} placeholder='Full Name' style={{height:50, width:'100%', backgroundColor:'#fff', borderRadius:10, marginTop:10, paddingHorizontal:10, borderWidth:1, borderColor:'#EAEAEA'}}/>
                        <TextInput placeholderTextColor={'gray'} placeholder='Date of Birth' style={{height:50, width:'100%', backgroundColor:'#FFF', borderRadius:10, marginTop:10, paddingHorizontal:10,borderWidth:1, borderColor:'#EAEAEA'}}/>
                        <TextInput placeholderTextColor={'gray'} placeholder='Nationality' style={{height:50, width:'100%', backgroundColor:'#FFF', borderRadius:10, marginTop:10, paddingHorizontal:10,borderWidth:1, borderColor:'#EAEAEA'}}/>
                        <TextInput placeholderTextColor={'gray'} placeholder='Passsport or ID Number' style={{height:50, width:'100%', backgroundColor:'#FFF', borderRadius:10, marginTop:10, paddingHorizontal:10,borderWidth:1, borderColor:'#EAEAEA'}}/>
                        <TextInput placeholderTextColor={'gray'} placeholder='Contact Information' style={{height:50, width:'100%', backgroundColor:'#FFF', borderRadius:10, marginTop:10, paddingHorizontal:10,borderWidth:1, borderColor:'#EAEAEA'}}/>
                </View>

                {/* Flight Details (Chi tiết chuyến bay):: */}
                <View style={{backgroundColor:'#fff',padding:20, borderRadius:10,marginBottom:20}}>
                        <View style={{flexDirection:'row',alignItems:'center',paddingBottom:10}}>
                            <FontAwesome name="plane" size={24} color={'black'}/>
                            <Text style={{fontWeight:'bold',paddingLeft:10,fontSize:16}}>Flight Details</Text>
                        </View>
                        <TextInput placeholderTextColor={'gray'} placeholder='Flight Number' style={{height:50, width:'100%', backgroundColor:'#FFF', borderRadius:10, marginTop:10, paddingHorizontal:10,borderWidth:1, borderColor:'#EAEAEA'}}/>
                        <TextInput placeholderTextColor={'gray'} placeholder='Date and Time Of Flight' style={{height:50, width:'100%', backgroundColor:'#FFF', borderRadius:10, marginTop:10, paddingHorizontal:10,borderWidth:1, borderColor:'#EAEAEA'}}/>
                        <TextInput placeholderTextColor={'gray'} placeholder='Departure and Arrival Locations' style={{height:50, width:'100%', backgroundColor:'#FFF', borderRadius:10, marginTop:10, paddingHorizontal:10,borderWidth:1, borderColor:'#EAEAEA'}}/>
                </View>

                    {/* Payment Information (Thông tin thanh toán):: */}
                    <View style={{backgroundColor:'#fff',padding:20, borderRadius:10,marginBottom:20}}>
                        <View style={{flexDirection:'row',alignItems:'center',paddingBottom:10}}>
                            <FontAwesome name="credit-card" size={24} color={'black'}/>
                            <Text style={{fontWeight:'bold',paddingLeft:10,fontSize:16}}>Payment Information</Text>
                        </View>
                       <View style={{marginTop:10}}>
                          <TouchableOpacity style={{marginBottom:10}}>
                                <View style={[{flexDirection:'row',alignItems:'center',padding:10, backgroundColor:'#fff', borderRadius:10},
                                    {
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        elevation: 5,
                                        borderWidth:1,
                                        borderColor:'blue',
                                    
                                    }
                                ]}>
                                     <Image source={require('../../assets/images/visa.png')} style={{width:50,height:50, borderRadius:10}}/>
                                     <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20}}>
                                         <Text style={{fontWeight:500, fontSize:20}}>VISA</Text>
                                         <Text style={{fontWeight:500, fontSize:20, color:'gray',paddingLeft:10}}>**** 1234</Text>
                                     </View>
                                </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{marginBottom:10}}>
                                <View style={[{flexDirection:'row',alignItems:'center',padding:10, backgroundColor:'#fff', borderRadius:10},
                                    {
                                       
                                        borderWidth:1,
                                        borderColor:'#CCC'
                                    
                                    }
                                ]}>
                                     <Image source={require('../../assets/images/visa1.png')} style={{width:50,height:50, borderRadius:10}}/>
                                     <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20}}>
                                         <Text style={{fontWeight:500, fontSize:20}}>VISA 123</Text>
                                         <Text style={{fontWeight:500, fontSize:20, color:'gray',paddingLeft:10}}>**** 1234</Text>
                                     </View>
                                </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{marginBottom:10}}>
                                <View style={[{flexDirection:'row',alignItems:'center',padding:10, backgroundColor:'#fff', borderRadius:10},
                                    {
                                        borderWidth:1,
                                        borderColor:'#CCC'
                                    
                                    }
                                ]}>
                                     <Image source={require('../../assets/images/visa2.png')} style={{width:50,height:50, borderRadius:10}}/>
                                     <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20}}>
                                         <Text style={{fontWeight:500, fontSize:20}}>VISA 234</Text>
                                         <Text style={{fontWeight:500, fontSize:20, color:'gray',paddingLeft:10}}>**** 1234</Text>
                                     </View>
                                </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{marginBottom:10}}>
                                <View style={[{flexDirection:'row',alignItems:'center',padding:10, backgroundColor:'#fff', borderRadius:10},
                                    {
                                        borderWidth:1,
                                        borderColor:'#CCC'
                                    
                                    }
                                ]}>
                                     <Image source={require('../../assets/images/visa3.png')} style={{width:50,height:50, borderRadius:10}}/>
                                     <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20}}>
                                         <Text style={{fontWeight:500, fontSize:20}}>VISA 56</Text>
                                         <Text style={{fontWeight:500, fontSize:20, color:'gray',paddingLeft:10}}>**** 1234</Text>
                                     </View>
                                </View>
                          </TouchableOpacity>
                       </View>
                    </View>

                     {/* Baggage Information (Thông tin hành lý): */}
                <View style={{backgroundColor:'#fff',padding:20, borderRadius:10,marginBottom:20}}>
                        <View style={{flexDirection:'row',alignItems:'center',paddingBottom:10}}>
                            <FontAwesome name="suitcase" size={24} color={'black'}/>
                            <Text style={{fontWeight:'bold',paddingLeft:10,fontSize:16}}>Baggage Information</Text>
                        </View>
                        <TextInput placeholderTextColor={'gray'} placeholder='Number of Checked and Carry-on Bags' style={{height:50, width:'100%', backgroundColor:'#FFF', borderRadius:10, marginTop:10, paddingHorizontal:10,borderWidth:1, borderColor:'#EAEAEA'}}/>
                        
                </View>

                <View>
                     <TouchableOpacity>
                          <View style={{backgroundColor:'orange',padding:20, borderRadius:10,marginBottom:20, flexDirection:'row',alignItems:'center',justifyContent:'center',gap:10}}>
                              <MaterialIcons name="next-plan" size={30} color="white" />
                              <Text style={{fontWeight:'bold',fontSize:20, color:'#fff', textAlign:'center'}}>Continue</Text>
                          </View>
                     </TouchableOpacity>
                </View>


            </View>
         </ScrollView>


     
    </View>
  )
}

export default FlightDetailScreen