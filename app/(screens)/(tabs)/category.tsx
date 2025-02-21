import React from 'react'
import { View, Text,Platform } from 'react-native'
import { useFonts } from 'expo-font';

export default function CategoryScreen() {
   const [fontsLoaded, fontError] = useFonts({
        HelvetIns: require("../../../assets/fonts/HelvetIns.ttf"),
        PlaywriteNL: require("../../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
        Montserrat: require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
        
      });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'HelvetIns' , fontSize: 20}}>CategoryScreen</Text>
        <Text style={{ fontFamily: 'PlaywriteNL' , fontSize: 20}}>CategoryScreen</Text>
        <Text style={{ fontFamily: 'Montserrat' , fontSize: 20}}>CategoryScreen</Text>
    </View>
       
  )
}
