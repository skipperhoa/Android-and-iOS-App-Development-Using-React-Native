import { View, Text,TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
import { useRouter } from 'expo-router';


const FlightScreen = () => {
   const router = useRouter()
  return (
    <View style={{flex:1, height:'100%', backgroundColor:'#EAEAEA', position:'relative'}}>
     
        {/* before top  background*/}
        <View style={{position:'absolute',top:0, backgroundColor:'green',width:'100%',height:Constants.statusBarHeight+180}}></View>
        {/* end */}
         {/* header */}
         <View style={{backgroundColor:'green',paddingTop:Constants.statusBarHeight,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:10}}>
                        <TouchableOpacity onPress={()=>router.back()}>
                            <Entypo name="chevron-with-circle-left" size={30} color="white" />
                        </TouchableOpacity>
                        <Text style={{fontWeight:500,fontSize:20,color:'white'}}>Flight</Text>
                        <TouchableOpacity>
                        <MaterialIcons name="filter-list" size={30} color="white" />
                        </TouchableOpacity>
        </View>

        <ScrollView>
                <View style={{width:'100%'}}>
                    {/* search */}
                    <View style={{padding:20}}>

                        <View style={{backgroundColor:'#fff',padding:20,borderRadius:10}}>

                            <View style={{flexDirection:'row',alignItems:'center',gap:30,}}>
                                    <TouchableOpacity> 
                                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                        <View style={{width:30, height:30, borderRadius:15, borderWidth:1, borderColor:'green', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <View style={{width:15, height:15,backgroundColor:'green',borderRadius:10, borderWidth:1, borderColor:'gray'}}></View>
                                        </View>
                                        <Text style={{fontSize:18, fontWeight:500,}}>One Way</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity> 
                                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                        <View style={{width:30, height:30, borderRadius:15, borderWidth:1, borderColor:'gray', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <View style={{width:15, height:15,backgroundColor:'transparent',borderRadius:10, borderWidth:1, borderColor:'transparent'}}></View>
                                        </View>
                                        <Text style={{fontSize:18, fontWeight:500,}}>Round Way</Text>
                                        </View>
                                    </TouchableOpacity>
                            </View>
                            <View style={{paddingHorizontal:10, marginTop:20}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:30, position:'relative'}}>
                                    <View style={{width:'50%',borderWidth:1, borderColor:'#EAEAEA', borderRadius:10, paddingHorizontal:20, paddingVertical:10}}>
                                        <Text style={{fontWeight:500, paddingVertical:10}}>From</Text>
                                        <TextInput style={{fontSize:18, fontWeight:500}} placeholder='Vietnam' placeholderTextColor={'gray'}/>
                                    </View>
                                    <TouchableOpacity style={{position:'absolute'}}>
                                        <View style={{width:35,height:35, borderRadius:25, borderWidth:1,borderColor:'#ccc', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                <Fontisto name="arrow-swap" size={16} color="green" />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{width:'50%',borderWidth:1, borderColor:'#EAEAEA', borderRadius:10, paddingHorizontal:20, paddingVertical:10}}>
                                        <Text style={{fontWeight:500, paddingVertical:10}}>To</Text>
                                        <TextInput style={{fontSize:18, fontWeight:500}} placeholder='USA' placeholderTextColor={'gray'}/>
                                    </View>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:10, marginTop:20}}>
                            
                                    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',gap:30, position:'relative'}}>
                                            <View style={{width:'100%',borderWidth:1, borderColor:'#EAEAEA', borderRadius:10, paddingHorizontal:20, paddingVertical:10}}>
                                                <Text style={{fontWeight:500, paddingVertical:10}}>Depart</Text>
                                                <View style={{flexDirection:'row', gap:10}}>
                                                    <Fontisto name="date" size={20} color="gray" />
                                                    <TextInput style={{fontSize:18, fontWeight:500}} placeholder='Thursday,August 1, 2024' placeholderTextColor={'gray'}/>
                                                </View>
                                            </View>
                                        
                                            <View style={{width:'100%',borderWidth:1, borderColor:'#EAEAEA', borderRadius:10, paddingHorizontal:20, paddingVertical:10}}>
                                                <Text style={{fontWeight:500, paddingVertical:10}}>Return</Text>
                                                <View style={{flexDirection:'row', gap:10}}>
                                                    <Fontisto name="date" size={20} color="gray" />
                                                    <TextInput style={{fontSize:18, fontWeight:500}} placeholder='Thursday,August 1, 2024' placeholderTextColor={'gray'}/>
                                                </View>
                                            </View>
                                    </View>
                        </View>
                        <View style={{paddingHorizontal:10, marginTop:20}}>
                            
                            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',gap:30, position:'relative'}}>
                                    <View style={{width:'100%',borderWidth:1, borderColor:'#EAEAEA', borderRadius:10, paddingHorizontal:20, paddingVertical:10}}>
                                        <Text style={{fontWeight:500, paddingVertical:10}}>Passenger</Text>
                                        <View style={{flexDirection:'row', gap:10}}>
                                        <AntDesign name="addusergroup" size={20} color="gray" />
                                                <TextInput style={{fontSize:18, fontWeight:500}} placeholder='2 Adult, 1 Kisds' placeholderTextColor={'gray'}/>
                                        </View>
                                    </View>
                                    
                                    <View style={{width:'100%',borderWidth:1, borderColor:'#EAEAEA', borderRadius:10, paddingHorizontal:20, paddingVertical:10}}>
                                        <Text style={{fontWeight:500, paddingVertical:10}}>Class</Text>
                                        <View style={{flexDirection:'row', gap:10}}>
                                                <MaterialIcons name="flight-class" size={20} color="gray" />
                                                <TextInput style={{fontSize:18, fontWeight:500}} placeholder='Economy' placeholderTextColor={'gray'}/>
                                        </View>
                                    </View>
                            </View>
                            </View>
                            <TouchableOpacity style={{paddingHorizontal:10, marginTop:20}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,backgroundColor:'green', paddingVertical:15, borderRadius:10}}>
                                    <MaterialCommunityIcons name="airplane-search" size={25} color="white" />
                                    <Text style={{color:'white',fontWeight:500,fontSize:18}}>Search</Text>
                                </View>
                            </TouchableOpacity>
                        

                        </View>
                    </View>

                    {/* show content search */}
                    <View style={{paddingHorizontal:20,paddingBottom:100}}>
                         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={{fontSize:16, fontWeight:500}}>Showing 20 Results</Text>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:16,paddingRight:10, fontWeight:500}}>Filter</Text>
                                        <MaterialIcons name="filter-list-alt" size={24} color="black" />
                                    </View>
                                </TouchableOpacity>
                         </View>

                        {/* show content card */}

                        <View>

                             <TouchableOpacity onPress={() => router.push('flightDetail')} style={{width:'100%',backgroundColor:'white',marginTop:20, borderRadius:10, paddingHorizontal:20, paddingVertical:20}}>
                                 <View style={{flexDirection:'row',alignItems:'center'}}>
                                         <MaterialIcons name="flight" size={24} color="green" />
                                         <Text style={{paddingLeft:10, fontSize:16, fontWeight:500}}>Hang Bay 123BM</Text>
                                 </View>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:15}}>
                                      <View style={{width:'30%'}}>
                                           <Text style={{fontSize:18,fontWeight:500,paddingVertical:2}}>11:00</Text>
                                           <Text style={{fontSize:16,fontWeight:500,paddingVertical:2,color:'gray'}}>LHR</Text>
                                      </View>
                                      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                    <View style={{width:15, height:15, borderRadius:10, borderWidth:1, borderColor:'green', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                        <View style={{width:5, height:5,backgroundColor:'green',borderRadius:10, borderWidth:1, borderColor:'gray'}}></View>
                                                    </View>
                                                </View>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,position:'relative'}}>
                                                     <View style={{width:'50%',height:1,backgroundColor:'gray'}}></View>
                                                     <MaterialIcons name="flight" size={24} color="green" />
                                                     <View style={{width:'50%',height:1,backgroundColor:'gray'}}></View>
                                                </View>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                    <View style={{width:15, height:15, borderRadius:10, borderWidth:1, borderColor:'green', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                        <View style={{width:5, height:5,backgroundColor:'green',borderRadius:10, borderWidth:1, borderColor:'gray'}}></View>
                                                    </View>
                                                </View> 
                                      </View>
                                      <View style={{width:'30%'}}>
                                           <Text style={{fontSize:18,fontWeight:500,paddingVertical:2, textAlign:'right'}}>13:00</Text>
                                           <Text style={{fontSize:16,fontWeight:500,paddingVertical:2,color:'gray',textAlign:'right'}}>BHD</Text>
                                      </View>
                                 </View>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20, paddingTop:15, borderTopColor:'#EAEAEA', borderTopWidth:1}}>
                                      <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                          <Text style={{fontSize:16,fontWeight:500}}>$590</Text>
                                          <Text>Ticker Price</Text>
                                      </View>
                                      <TouchableOpacity>
                                          <Text style={{color:'orange',fontWeight:500,fontSize:16}}>Book Now</Text>
                                      </TouchableOpacity>
                                 </View>
                             </TouchableOpacity>
                             <View style={{width:'100%',backgroundColor:'white',marginTop:20, borderRadius:10, paddingHorizontal:20, paddingVertical:20}}>
                                 <View style={{flexDirection:'row',alignItems:'center'}}>
                                         <MaterialIcons name="flight" size={24} color="green" />
                                         <Text style={{paddingLeft:10, fontSize:16, fontWeight:500}}>Hang Bay 123BM</Text>
                                 </View>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:15}}>
                                      <View style={{width:'30%'}}>
                                           <Text style={{fontSize:18,fontWeight:500,paddingVertical:2}}>11:00</Text>
                                           <Text style={{fontSize:16,fontWeight:500,paddingVertical:2,color:'gray'}}>LHR</Text>
                                      </View>
                                      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                    <View style={{width:15, height:15, borderRadius:10, borderWidth:1, borderColor:'green', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                        <View style={{width:5, height:5,backgroundColor:'green',borderRadius:10, borderWidth:1, borderColor:'gray'}}></View>
                                                    </View>
                                                </View>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,position:'relative'}}>
                                                     <View style={{width:'50%',height:1,backgroundColor:'gray'}}></View>
                                                     <MaterialIcons name="flight" size={24} color="green" />
                                                     <View style={{width:'50%',height:1,backgroundColor:'gray'}}></View>
                                                </View>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                    <View style={{width:15, height:15, borderRadius:10, borderWidth:1, borderColor:'green', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                        <View style={{width:5, height:5,backgroundColor:'green',borderRadius:10, borderWidth:1, borderColor:'gray'}}></View>
                                                    </View>
                                                </View> 
                                      </View>
                                      <View style={{width:'30%'}}>
                                           <Text style={{fontSize:18,fontWeight:500,paddingVertical:2, textAlign:'right'}}>13:00</Text>
                                           <Text style={{fontSize:16,fontWeight:500,paddingVertical:2,color:'gray',textAlign:'right'}}>BHD</Text>
                                      </View>
                                 </View>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20, paddingTop:15, borderTopColor:'#EAEAEA', borderTopWidth:1}}>
                                      <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                          <Text style={{fontSize:16,fontWeight:500}}>$590</Text>
                                          <Text>Ticker Price</Text>
                                      </View>
                                      <TouchableOpacity>
                                          <Text style={{color:'orange',fontWeight:500,fontSize:16}}>Book Now</Text>
                                      </TouchableOpacity>
                                 </View>
                             </View>

                             <View style={{width:'100%',backgroundColor:'white',marginTop:20, borderRadius:10, paddingHorizontal:20, paddingVertical:20}}>
                                 <View style={{flexDirection:'row',alignItems:'center'}}>
                                         <MaterialIcons name="flight" size={24} color="green" />
                                         <Text style={{paddingLeft:10, fontSize:16, fontWeight:500}}>Hang Bay 123BM</Text>
                                 </View>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:15}}>
                                      <View style={{width:'30%'}}>
                                           <Text style={{fontSize:18,fontWeight:500,paddingVertical:2}}>11:00</Text>
                                           <Text style={{fontSize:16,fontWeight:500,paddingVertical:2,color:'gray'}}>LHR</Text>
                                      </View>
                                      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                    <View style={{width:15, height:15, borderRadius:10, borderWidth:1, borderColor:'green', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                        <View style={{width:5, height:5,backgroundColor:'green',borderRadius:10, borderWidth:1, borderColor:'gray'}}></View>
                                                    </View>
                                                </View>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,position:'relative'}}>
                                                     <View style={{width:'50%',height:1,backgroundColor:'gray'}}></View>
                                                     <MaterialIcons name="flight" size={24} color="green" />
                                                     <View style={{width:'50%',height:1,backgroundColor:'gray'}}></View>
                                                </View>
                                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                                    <View style={{width:15, height:15, borderRadius:10, borderWidth:1, borderColor:'green', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                        <View style={{width:5, height:5,backgroundColor:'green',borderRadius:10, borderWidth:1, borderColor:'gray'}}></View>
                                                    </View>
                                                </View> 
                                      </View>
                                      <View style={{width:'30%'}}>
                                           <Text style={{fontSize:18,fontWeight:500,paddingVertical:2, textAlign:'right'}}>13:00</Text>
                                           <Text style={{fontSize:16,fontWeight:500,paddingVertical:2,color:'gray',textAlign:'right'}}>BHD</Text>
                                      </View>
                                 </View>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20, paddingTop:15, borderTopColor:'#EAEAEA', borderTopWidth:1}}>
                                      <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                          <Text style={{fontSize:16,fontWeight:500}}>$590</Text>
                                          <Text>Ticker Price</Text>
                                      </View>
                                      <TouchableOpacity>
                                          <Text style={{color:'orange',fontWeight:500,fontSize:16}}>Book Now</Text>
                                      </TouchableOpacity>
                                 </View>
                             </View>

                        </View>
                    </View>

                </View>
        </ScrollView>

    </View>
  )
}

export default FlightScreen