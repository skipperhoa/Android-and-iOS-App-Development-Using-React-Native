import { View, Text, SafeAreaView , StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
// icon
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
const HomeScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("../../../assets/fonts/HelvetIns.ttf"),
    PlaywriteNL: require("../../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
    Montserrat: require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    
  });
  return (
    <SafeAreaView style={styles.box}>
        <View style={styles.container}>
          
           {/* header */}
            <View style={styles.headerTop}>
                <View>
                    <View style={styles.headerContent}>
                        <TouchableOpacity>
                            <Ionicons name="filter" size={30} color="black" />
                        </TouchableOpacity>
                        <View style={{flexShrink:1,flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text style={[styles.headerTitle,{fontFamily: "HelvetIns", fontSize: 30}]}>Travel App</Text>
                        </View>
                        <TouchableOpacity>
                           <View>
                              <EvilIcons name="bell" size={40} color="black" />
                              <View style={{width:22,height:22,borderRadius:20,backgroundColor:'red',position:'absolute',top:-5,right:0,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                  <Text style={{color:'white',textAlign:'center',fontSize:10,fontWeight:'bold'}}>99</Text>
                              </View>
                           </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* search travel*/}

            <View style={styles.boxSearch}>
                <View style={styles.boxSearchContent}>
                    <Text style={styles.searchTitle}>
                      Where are you
                    </Text>
                    <Text style={styles.searchTitle}>going?</Text>
                    <View style={{paddingVertical:30,position:'relative'}}>
                        <TextInput placeholder='E.g Viet Nam, New York, London' style={{height:60,paddingRight:10,paddingVertical:20,
                         borderRadius:7, backgroundColor:'#F0F1F1',paddingLeft:40
                        }} placeholderTextColor={'gray'}></TextInput>
                        <TouchableOpacity style={{position:'absolute',top:39,left:10}}>
                            <FontAwesome name="map-marker" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* content */}

            


        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:'white'
  },
  container:{
    width:'100%',
    height:'100%',
  },
  headerTop: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
   
  },
  headerContent:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  headerTitle:{
    fontSize:20,
    fontWeight:'600',
    color:'green'
  },
  boxSearch:{
     width:'100%',
     padding:20,
    
    
  },
  boxSearchContent:{
    width:'100%',
   
  },
  searchTitle:{
    fontSize:30,
    fontWeight:'600',
    color:'#000',
    fontFamily: "Montserrat",
    letterSpacing:2,
    lineHeight:40
  }
})
export default HomeScreen