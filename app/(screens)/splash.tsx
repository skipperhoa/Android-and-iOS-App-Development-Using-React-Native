import { View, Text, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import Svg, { Path } from "react-native-svg";
// icon
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router  = useRouter();
  const {width, height} = useWindowDimensions()
  useEffect(()=>{
    setTimeout(()=>{
        router.push('/(tabs)')
    },2000)
  },[])
  return (
    <View style={{backgroundColor:'green', flex:1}}>
      <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center',position:'relative'}}>
          <View style={{width:'100%',height:'100%',position:'relative', justifyContent:'center',alignItems:'center'}}>
                <View>
                    <Text style={{textAlign:'center',fontSize:50,fontWeight:'bold',color:'white'}}>Travel App</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                        <Text style={{textAlign:'center',fontSize:25,color:'white',paddingVertical:10}}>Explore new places</Text>
                        <FontAwesome5 name="location-arrow" size={24} color="white" />
                    </View>
                </View>
                <View style={{position:'absolute',top:0,left:-20,transform:[{rotate:'20deg'}]}}>
                    <Svg width={200} height={200} viewBox={`0 0 200 200`} fill="none" >
                        <Path d="M 0 0 L 200 200 L 0 200 Z" fill="#0391FA" opacity={0.15}/>
                    </Svg>
                </View>
                <View style={{position:'absolute',top:-150,right:0,transform:[{rotate:'-40deg'}]}}>
                    <Svg width={300} height={300} viewBox={`0 0 300 300`} fill="none" >
                        <Path d="M 0 0 L 300 300 L 0 300 Z" fill="#DE07EC" opacity={0.1}/>
                    </Svg>
                </View>
                <View style={{position:'absolute',top:100,right:-200,transform:[{rotate:'45deg'}]}}>
                    <Svg width={300} height={300} viewBox={`0 0 300 300`} fill="none" >
                        <Path d="M 0 0 L 300 300 L 0 300 Z" fill="#B1EC07" opacity={0.2}/>
                    </Svg>
                </View>
                <View style={{position:'absolute',bottom:0,left:40,transform:[{rotate:'45deg'}]}}>
                    <Svg width={200} height={200} viewBox={`0 0 200 200`} fill="none" >
                        <Path d="M 0 0 L 200 200 L 0 200 Z" fill="#DE07EC" opacity={0.2}/>
                    </Svg>
                </View>
                <View style={{position:'absolute',bottom:0,right:-30,transform:[{rotate:'-25deg'}]}}>
                    <Svg width={300} height={300} viewBox={`0 0 300 300`} fill="none" >
                        <Path d="M 0 0 L 300 300 L 0 300 Z" fill="#B1EC07" opacity={0.2}/>
                    </Svg>
                </View>
              
          </View>
      </View>
    </View>
  )
}

export default SplashScreen