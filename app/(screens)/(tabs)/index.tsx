import { View, Text, SafeAreaView ,Dimensions,Platform, StyleSheet, TouchableOpacity, TextInput, Image, useWindowDimensions, ScrollView} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { DrawerActions, useNavigation } from '@react-navigation/native';
// icon
import { Ionicons,FontAwesome5 , MaterialIcons,EvilIcons,FontAwesome} from '@expo/vector-icons';
import { useRouter } from 'expo-router';



// data image
const slides = [
  {
    image: require("../../../assets/images/travel/1.jpg"),
  },
  {
    image: require("../../../assets/images/travel/2.jpg"),
  },
  {
    image: require("../../../assets/images/travel/3.jpg"),
  },
  {
    image: require("../../../assets/images/travel/4.jpg"),
  },
  {
    image: require("../../../assets/images/travel/5.jpg"),
  },
  {
    image: require("../../../assets/images/travel/6.jpg"),
  }
]
const { width: screenWidth } = Dimensions.get('window')

const HomeScreen = () => {
  const router = useRouter( )
  const navigation = useNavigation()
  const {width,height} = useWindowDimensions()
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("../../../assets/fonts/HelvetIns.ttf"),
    PlaywriteNL: require("../../../assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
    Montserrat: require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    
  });

  const _renderItem = ({item} :  any) => {
    return (
      <TouchableOpacity style={{width:'100%'}}>
          <Image source = {item.image} style={{width:'100%',height:280, borderRadius:15}} />
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.box}>
        <ScrollView style={styles.container}>
          
           {/* header */}
             {/* <View style={styles.headerTop}>
                <View>
                    <View style={styles.headerContent}>
                        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
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
            </View>  */}

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
                        <TouchableOpacity style={{position:'absolute',top:47,left:10}}>
                            <FontAwesome name="map-marker" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* slide banner */}
            <View>
                <View style={{width:'100%'}}>
                   
                   {
                    
                       <Carousel
                       sliderWidth={screenWidth}
                       sliderHeight={screenWidth}
                       itemWidth={screenWidth - 100}
                       data={slides}
                       renderItem={_renderItem}
                       hasParallaxImages={true}
                   />
                   }
                </View>
            </View>

            {/* category */}
            <View style={{width:'100%',padding:20}}>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <FontAwesome5 name="broadcast-tower" size={20} color="green" />
                    <Text style={{fontWeight:'bold',fontSize:16,paddingVertical:20,paddingLeft:10}}>Disseminating Services</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    <TouchableOpacity style={{width:'25%',marginBottom:20}} onPress={() => router.push('flight')}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40, borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                                <FontAwesome name="plane" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Flights</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'25%',marginBottom:20}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <MaterialIcons name="hotel" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Hotels</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'25%',marginBottom:20}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <FontAwesome name="car" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Car Rentals</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'25%',marginBottom:20}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <MaterialIcons name="beach-access" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Vacation Packages</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'25%',marginBottom:20}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <FontAwesome name="calendar" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Activities</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'25%',marginBottom:20}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <MaterialIcons name="restaurant" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Restaurants</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'25%',marginBottom:20}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <FontAwesome name="map" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Destinations</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'25%',marginBottom:20}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <FontAwesome name="book" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Travel Guides</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'25%',marginBottom:0}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <MaterialIcons name="local-activity" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Local Experiences</Text>
                        </View>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={{width:'25%',marginBottom:0}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <FontAwesome name="shield" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Travel Insurance</Text>
                        </View>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={{width:'25%',marginBottom:0}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <FontAwesome name="suitcase" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Travel Essentials</Text>
                        </View>
                    </TouchableOpacity>
                 
                    <TouchableOpacity style={{width:'25%',marginBottom:0}}>
                        <View style={{width:'100%'}}>
                            <View style={{width:40,height:40,  borderRadius:10,justifyContent:'center',margin:'auto',alignItems:'center', borderWidth:1, borderColor:'#EBEBEB'}}>
                            <FontAwesome name="tag" size={30} color="green" />
                            </View>
                            <Text style={{textAlign:'center',marginTop:10,color:'#000',fontFamily: "Montserrat",fontSize:12,margin:'auto',width:'100%'}}>Travel Essentials</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* list travel */}

            <View style={{width:'100%',paddingHorizontal:10}}>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                    <FontAwesome name="plane" size={30} color="green" />
                    <Text style={{fontWeight:'bold',fontSize:16,paddingVertical:20,paddingLeft:10,textTransform:'capitalize'}}>travel 2024 (hot)</Text>
                </View>
                <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
                    <TouchableOpacity onPress={() => router.push('travelDetail')} style={{width:'50%',padding:10}}>
                       <View style={{width:'100%',backgroundColor:'#F4F4F4',borderRadius:10}}>
                           <Image source={require("../../../assets/images/travel/7.jpg")} style={{width:'100%',height:120,borderTopRightRadius:10,borderTopLeftRadius:10}}/>
                           <View style={{width:'100%',paddingHorizontal:20}}>

                              <Text style={{fontSize:16,paddingTop:15,textAlign:'left',fontWeight:'bold',height:65}}>Đảo Tuần Châu</Text>
                              <View style={{paddingTop:5,display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
                                  <Text style={{fontSize:14}}>4,4</Text>
                                  <FontAwesome name="star" size={16} color="orange" />
                                  <Text style={{fontSize:14}}>(1,3N)</Text>
                              </View>
                              <Text style={{fontSize:14,paddingVertical:15}} numberOfLines={1}>Đảo</Text>
                           </View>
                       </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'50%',padding:10}}>
                       <View style={{width:'100%',backgroundColor:'#F4F4F4',borderRadius:10}}>
                           <Image source={require("../../../assets/images/travel/8.jpg")} style={{width:'100%',height:120,borderTopRightRadius:10,borderTopLeftRadius:10}}/>
                           <View style={{width:'100%',paddingHorizontal:20}}>

                              <Text style={{fontSize:16,paddingTop:15,textAlign:'left',fontWeight:'bold',height:65}}>Vịnh Bái Tử Long</Text>
                              <View style={{paddingTop:5,display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
                                  <Text style={{fontSize:14}}>4,4</Text>
                                  <FontAwesome name="star" size={16} color="orange" />
                                  <Text style={{fontSize:14}}>(1,3N)</Text>
                              </View>
                              <Text style={{fontSize:14,paddingVertical:15}} numberOfLines={1}>Vịnh</Text>
                           </View>
                       </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'50%',padding:10}}>
                       <View style={{width:'100%',backgroundColor:'#F4F4F4',borderRadius:10}}>
                           <Image source={require("../../../assets/images/travel/9.jpg")} style={{width:'100%',height:120,borderTopRightRadius:10,borderTopLeftRadius:10}}/>
                           <View style={{width:'100%',paddingHorizontal:20}}>

                              <Text style={{fontSize:16,paddingTop:15,textAlign:'left',fontWeight:'bold',height:65}}>Bải Biển Hạ Long</Text>
                              <View style={{paddingTop:5,display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
                                  <Text style={{fontSize:14}}>4,4</Text>
                                  <FontAwesome name="star" size={16} color="orange" />
                                  <Text style={{fontSize:14}}>(1,3N)</Text>
                              </View>
                              <Text style={{fontSize:14,paddingVertical:15}} numberOfLines={1}>Điểm thu hút khách nước ngoài</Text>
                           </View>
                       </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'50%',padding:10}}>
                       <View style={{width:'100%',backgroundColor:'#F4F4F4',borderRadius:10}}>
                           <Image source={require("../../../assets/images/travel/10.jpg")} style={{width:'100%',height:120,borderTopRightRadius:10,borderTopLeftRadius:10}}/>
                           <View style={{width:'100%',paddingHorizontal:20}}>

                              <Text style={{fontSize:16,paddingTop:15,textAlign:'left',fontWeight:'bold',height:65}}>Núi Bài Thơ</Text>
                              <View style={{paddingTop:5,display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
                                  <Text style={{fontSize:14}}>4,4</Text>
                                  <FontAwesome name="star" size={16} color="orange" />
                                  <Text style={{fontSize:14}}>(1,3N)</Text>
                              </View>
                              <Text style={{fontSize:14,paddingVertical:15}} numberOfLines={1}>Điểm thu hút khách nước ngoài</Text>
                           </View>
                       </View>
                    </TouchableOpacity>

                </View>
            </View>

        

            


        </ScrollView>
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
     paddingHorizontal:20,
     paddingTop:30
    
    
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