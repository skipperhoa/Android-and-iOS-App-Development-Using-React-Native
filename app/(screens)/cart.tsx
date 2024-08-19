import { View, Text ,TouchableOpacity, ScrollView, TextInput} from 'react-native'
import React from 'react'
import { Ionicons,AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const CartScreen = () => {
  const router = useRouter();
  return (
    <View style={{width:'100%',height:'100%'}}>
        <ScrollView style={{flex:1,width:'100%'}}>
                {/* show content search */}
                <View style={{paddingHorizontal:20,paddingBottom:100}}>
                    {/* show content card */}
                    <View style={{width:'100%'}}>
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
                                        <Text style={{fontSize:14,fontWeight:500}}>$590</Text>
                                        <Text style={{fontSize:14,fontWeight:500}}>Ticker Price</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={{flexDirection:'row',alignItems:'center',gap:3, borderWidth:1, borderColor:'#f87f66', borderRadius:5, paddingVertical:3, paddingHorizontal:5}}>
                                           <AntDesign name="delete" size={16} color="#f87f66" />
                                            <Text style={{color:'#f87f66',fontWeight:500,fontSize:12}}>Delete</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
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
                                        <Text style={{fontSize:14,fontWeight:500}}>$590</Text>
                                        <Text style={{fontSize:14,fontWeight:500}}>Ticker Price</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={{flexDirection:'row',alignItems:'center',gap:3, borderWidth:1, borderColor:'#f87f66', borderRadius:5, paddingVertical:3, paddingHorizontal:5}}>
                                           <AntDesign name="delete" size={16} color="#f87f66" />
                                            <Text style={{color:'#f87f66',fontWeight:500,fontSize:12}}>Delete</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
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
                                        <Text style={{fontSize:14,fontWeight:500}}>$590</Text>
                                        <Text style={{fontSize:14,fontWeight:500}}>Ticker Price</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={{flexDirection:'row',alignItems:'center',gap:3, borderWidth:1, borderColor:'#f87f66', borderRadius:5, paddingVertical:3, paddingHorizontal:5}}>
                                           <AntDesign name="delete" size={16} color="#f87f66" />
                                            <Text style={{color:'#f87f66',fontWeight:500,fontSize:12}}>Delete</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
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
                                        <Text style={{fontSize:14,fontWeight:500}}>$590</Text>
                                        <Text style={{fontSize:14,fontWeight:500}}>Ticker Price</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={{flexDirection:'row',alignItems:'center',gap:3, borderWidth:1, borderColor:'#f87f66', borderRadius:5, paddingVertical:3, paddingHorizontal:5}}>
                                           <AntDesign name="delete" size={16} color="#f87f66" />
                                            <Text style={{color:'#f87f66',fontWeight:500,fontSize:12}}>Delete</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
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
                                        <Text style={{fontSize:14,fontWeight:500}}>$590</Text>
                                        <Text style={{fontSize:14,fontWeight:500}}>Ticker Price</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={{flexDirection:'row',alignItems:'center',gap:3, borderWidth:1, borderColor:'#f87f66', borderRadius:5, paddingVertical:3, paddingHorizontal:5}}>
                                           <AntDesign name="delete" size={16} color="#f87f66" />
                                            <Text style={{color:'#f87f66',fontWeight:500,fontSize:12}}>Delete</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                         
                    </View>
                </View>
        
        </ScrollView>
        {/* footer cart */}

        <View style={{paddingHorizontal:20,paddingTop:20,paddingBottom:40, backgroundColor:'#EAEAEA', borderTopWidth:3, borderTopColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:10,marginTop:10}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
                    <MaterialIcons name="post-add" size={24} color="#f87f66" />
                    <Text style={{fontSize:12,fontWeight:500, color:'black'}}>Travel Voucher</Text>
                </View>
                 <View>
                     <TouchableOpacity>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:2}}>
                                <View style={{borderWidth:1,borderColor:'#49dc54',borderRadius:5,paddingHorizontal:20,paddingVertical:5, backgroundColor:'white'}}>
                                    <Text style={{fontSize:12,fontWeight:500,color:'#49dc54'}}>10% Discount</Text>
                                </View>
                                <MaterialIcons name="navigate-next" size={24} color="gray" />
                        </View>
                     </TouchableOpacity>
                 </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:10,marginTop:10}}>
                 
                 <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
                  
                    <Ionicons name="bag-check-outline" size={24} color="#f87f66" />
                    <Text style={{fontSize:12,fontWeight:500, color:'black'}}>Promotion Code</Text>
                </View>
                 <TextInput placeholder='Enter code' style={{flex:1,width:'100%',padding:10,backgroundColor:'white',borderRadius:5}}></TextInput>
            </View>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                 
                 <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
                  
                    <MaterialIcons name="view-list" size={24} color="#f0a008" />
                    <Text style={{fontSize:12,fontWeight:500, color:'black'}}>Total price</Text>
                </View>
                 <Text style={{fontSize:18,fontWeight:500,color:'#fa5e3e'}}>$590</Text>
            </View>
            <TouchableOpacity style={{width:'100%',paddingTop:20}}>
                 <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,paddingVertical:10, backgroundColor:'#f0a008', borderRadius:10,}}>
                     <MaterialIcons name="flight" size={24} color="white" />
                     <Text style={{color:'white',fontSize:18,fontWeight:400}}>Check Out</Text>
                 </View>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default CartScreen