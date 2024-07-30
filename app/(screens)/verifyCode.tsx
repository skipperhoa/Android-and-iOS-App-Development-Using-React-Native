import { View, Text , TextInput,useWindowDimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import {Entypo,Feather} from '@expo/vector-icons';
import Svg, { Defs, Path , LinearGradient,Stop} from "react-native-svg";
const VerifyCodeScreen = () => {
    const { width, height } = useWindowDimensions();
  return (
    <View style={{flex:1,height:'100%'}}>

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
      <View style={{height:'100%',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'green'}}>Verify Account</Text>
            <View style={{paddingVertical:20}}>
                    <Entypo name="mail" size={80} color="#757474" />
            </View>
            <Text style={{color:'#000',fontSize:16,paddingTop:10}}>
                Mobile verfication in has successfully done
            </Text>
            <Text style={{color:'#444444',fontSize:14,paddingTop:10}}>
                 We have send the OTP on 123456789. Will apply auto to the fields
            </Text>
            <View style={{flexDirection:'row',gap:10,paddingTop:20}}>
                 <TextInput  style={{width:50,height:50, borderWidth:1, borderColor:'#D0D0D0',
                     borderRadius:8, fontSize:16, textAlign:'center'}} />
                     <TextInput  style={{width:50,height:50, borderWidth:1, borderColor:'#D0D0D0',
                     borderRadius:8, fontSize:16, textAlign:'center'}} />
                     <TextInput  style={{width:50,height:50, borderWidth:1, borderColor:'#D0D0D0',
                     borderRadius:8, fontSize:16, textAlign:'center'}} />
                     <TextInput  style={{width:50,height:50, borderWidth:1, borderColor:'#D0D0D0',
                     borderRadius:8, fontSize:16, textAlign:'center'}} />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingTop:20}}>
             <Text  style={{color:'#444444',fontSize:14}}>If you didn't receive a code!</Text>
             <TouchableOpacity>
                 <Text style={{color:'#FB6B6B',paddingLeft:5}}>Resend</Text>
             </TouchableOpacity>
            </View>
            <View style={{width:'100%',justifyContent:'center',alignItems:'center',paddingTop:20}}>
                    <TouchableOpacity>
                              <View style={{width:150,height:50, backgroundColor:'green', borderRadius:25, paddingHorizontal:10, flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Feather name="send" size={24} color="white" />
                                    <Text style={{color:'white',paddingLeft:10,fontSize:16}}>Verify</Text>
                              </View>
                    </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

export default VerifyCodeScreen