import { View, Text, useWindowDimensions, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { Defs, Path , LinearGradient,Stop} from "react-native-svg";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const LoginScreen = () => {
  const { width, height } = useWindowDimensions();
  const width_node = width / 3;
  const height_node = height / 3;
  return (
    <View style={{ flex: 1,width:'100%',height:'100%', backgroundColor: "#EFEEEE" , position:'relative'}}>
     
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

        {/* content */}

        <View style={{width:'100%',height:'100%',justifyContent:'center',paddingHorizontal:20}}>
             <View>
                  <Text style={{fontSize:40, fontWeight:600 , textTransform:'uppercase', textAlign:'center'}}>Login</Text>
                  <View style={{marginTop:20}}>
                      <View style={{position:'relative'}}>
                            <MaterialIcons name="email" size={30} color="black" style={{position:'absolute',top:33,left:10,zIndex:1}}/>
                          <TextInput placeholder="Email" placeholderTextColor={'gray'}
                          style={{height:55,paddingHorizontal:20,paddingLeft:50,fontSize:18, backgroundColor:'#fff',borderRadius:8,marginTop:20}}></TextInput>
                        
                      </View>
                      <View style={{position:'relative'}}>
                              <MaterialIcons name="password" size={30} color="black" style={{position:'absolute',top:33,left:10,zIndex:1}}/>
                            <TextInput placeholder="Password" placeholderTextColor={'gray'}
                            style={{height:55,paddingHorizontal:20,paddingLeft:50,fontSize:18, backgroundColor:'#fff',borderRadius:8,marginTop:20}}></TextInput>
                            <FontAwesome6 name="eye-slash" size={20} color="gray" style={{ position: "absolute", top: 37, right: 10, zIndex: 1 }} />
                          
                      </View>
                      <View style={{marginTop:20}}>

                        {/* Remember me */}

                            <View style={{paddingBottom:20}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <TouchableOpacity>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <View style={{width:25, height:25, backgroundColor:'#fff', borderRadius:5, flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                                <FontAwesome name="check" size={16} color="Black" />
                                            </View>
                                            <Text style={{paddingLeft:10, fontSize:14}}>Remember me</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text>Forgot password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                       
                          <TouchableOpacity>
                              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor:'green',height:55,
                                borderRadius:8}}>
                                    <Feather name="chevrons-right" size={24} color="white" />
                                    <Text style={{paddingLeft:10,color:'white',fontWeight:500,fontSize:18}}>LOGIN</Text>
                              </View>
                          </TouchableOpacity>

                       {/* dont'have an account */}

                            <View style={{marginTop:20}}>
                              
                                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                          <Text style={{fontSize:18,fontWeight:500}}>Don't have an account?</Text>
                                          <TouchableOpacity>
                                              <Text style={{color:'green',fontWeight:500,fontSize:18,paddingLeft:5}}>Sign Up</Text>
                                          </TouchableOpacity>
                                      </View>
                                
                            </View>

                      </View>


                  </View>
             </View>
        </View>

      
    </View>
  );
};
export default LoginScreen;