import { StyleSheet, Text, View, Image, TextInput ,TouchableOpacity,useWindowDimensions} from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Svg, { Defs, Path , LinearGradient,Stop} from "react-native-svg";
const dataPhone = [
    {title: 'Vietnam', icon: require('../../assets/images/vn.png')},
    {title: 'USA', icon: require('../../assets/images/us.png')},
  ];
const LoginPhoneScreen = () => {
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


      <View style={{width:'100%', height:'100%',justifyContent:'center',alignItems:'center'}}>
           <View style={{width:'100%'}}>
                <Text style={{fontSize:22, fontWeight:'bold', textAlign:'center',paddingVertical:10}}>What's your phone number?</Text>
                <View style={{width:'100%',paddingHorizontal:20}}>

                    <View style={{width:'100%',flexDirection:'column'}}>
                         
                    {/* select option */}
                    <SelectDropdown
                            data={dataPhone}
                            onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                            }}
                            renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={styles.dropdownButtonStyle}>
                                {selectedItem && (
                                
                                    <Image source={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                                )}
                                <Text style={styles.dropdownButtonTxtStyle}>
                                    {(selectedItem && selectedItem.title) || 'Choose your country'}
                                </Text>
                                
                                <Entypo name={isOpened ? 'chevron-up' : 'chevron-down'} size={24} color="black" style={styles.dropdownButtonArrowStyle} />
                                </View>
                            );
                            }}
                            renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                                    <Image source={item.icon} style={styles.dropdownItemIconStyle} />
                                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                                </View>
                            );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={styles.dropdownMenuStyle}
                            defaultValueByIndex={0}
                        />
                        <TextInput placeholder='Phone number' style={{width:'100%', height:50, backgroundColor:'#FFF', borderRadius:8, paddingHorizontal:10, marginTop:15}} />
                        <TouchableOpacity>
                              <View style={{width:'100%', height:50, backgroundColor:'green', borderRadius:8, paddingHorizontal:10, marginTop:15, flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                              <Feather name="send" size={24} color="white" />
                                  <Text style={{color:'white',paddingLeft:10,fontSize:16}}>Send confirmation code</Text>
                              </View>
                        </TouchableOpacity>
                        <Text style={{paddingTop:15,color:'gray',fontSize:12}}>
                            By tapping "Send confirmation code", above , we will send you an SMS to confirm your phone number. Message & dataa rates may apply.
                        </Text>
                    </View>


                </View>
           </View>
      </View>
    </View>
  )
}

export default LoginPhoneScreen

const styles = StyleSheet.create({
    dropdownButtonStyle: {
      width: '100%',
      height: 55,
      backgroundColor: '#FFF',
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginTop:10
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 14,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
      width:20,
      height:20
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
      width:20,
      height:20
    },
  });