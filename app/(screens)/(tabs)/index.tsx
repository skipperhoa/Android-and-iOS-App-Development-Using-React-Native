import { View, Text, SafeAreaView ,Dimensions,Platform, StyleSheet, TouchableOpacity, TextInput, Image, useWindowDimensions} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
// icon
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

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
  const _renderItem2 =  ({item, index}, parallaxProps)=>{
    return (
        <View style={styles.item}>
            <ParallaxImage
                source={{ uri: item.thumbnail }}
                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.4}
                {...parallaxProps}
            />
            <Text style={styles.title} numberOfLines={2}>
                { item.title }
            </Text>
        </View>
    );
}
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

            {/* slide banner */}
            <View>
                <View style={{width:'100%'}}>
                   
                   {
                      /*  <Carousel
                       layout={'default'}
                       data={slides}
                       sliderWidth={380}
                       itemWidth={380}
                       renderItem={_renderItem}
                       /> */
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
  },
  item: {
    width: screenWidth - 100,
    height: screenWidth - 100,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 15,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})
export default HomeScreen