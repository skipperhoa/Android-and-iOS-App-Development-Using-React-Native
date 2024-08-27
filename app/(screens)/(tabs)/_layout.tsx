import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Tabs, useRouter } from "expo-router";
import { getPathDown } from "../../../components/curve";
import { Svg, Path } from "react-native-svg";
import { height, scale } from "react-native-size-scaling";
import { getHeaderTitle } from "@react-navigation/elements";
import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions,useNavigation } from '@react-navigation/native';
// ICON
import {
  MaterialCommunityIcons,MaterialIcons,FontAwesome,
  Ionicons,
  EvilIcons,
  Entypo,
  AntDesign
} from "@expo/vector-icons";
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
// custom header
// const MyHeader = ({title,style} : any) => {
//   console.warn(style)
//   return <View style={style}>
//       <Text style={{fontSize:20,color:"black",paddingTop:100}}>4324324234</Text>
//   </View>
// }

// Menu Drawer
import RegisterScreen from "../register";
import CollectionScreen from "../collections";
import WishListScreen from "../wishLists";
import CartScreen from "../cart";
import NewScreen from "../news";
import MyAccountScreen from "../myAccount";
const Drawer = createDrawerNavigator();


const CustomTitleTab = ({ children }: any) => {
  return (
    <View style={styles.tabTitle}>
      <Text style={styles.tabTitleText}>{children}</Text>
    </View>
  );
};

// Custom Drawer Navigator
const CustomDrawerContent = (props: any)=>{
  const {state, navigation} = props
  return (
   <View style={{flex:1,height:'100%'}}>
         <DrawerContentScrollView {...props}>
          {/* <DrawerItemList {...props} /> */}
          <View style={{width:'100%',height:'100%', flex:1}}>
            {/* header top */}
              <View style={{width:'100%',paddingVertical:30, paddingHorizontal:20, borderBottomColor:'#F5F4F4',borderBottomWidth:1}}>
                 <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                      <View style={{width:80,height:80,borderRadius:40, backgroundColor:'gray',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../../assets/images/avatar/1.png')} style={{width:70,height:70, borderRadius:35}} />
                      </View>
                      <View style={{paddingTop:10}}>
                          <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Hoa Nguyen Coder</Text>
                          <Text style={{fontSize:14,fontWeight:'400',color:'black'}}>Web Developer</Text>
                      </View>
                 </View>
              </View>

              {/* menu */}
              <View style={{flex:1,height:'100%'}}>
                  {
                    props.state.routes.map((route:any, index:any)=>{
                        const {drawerIcon,drawerLabel} = props.descriptors[route.key].options;
                        const focused = index === props.state.index;
                        //console.warn(route.name)
                        return (
                          <TouchableOpacity
                            key={route.key}
                            style={{width:'100%',paddingVertical:10,paddingHorizontal:20, flexDirection:'row',alignContent:'center'
                              
                            }}
                            onPress={() => navigation.navigate(route.name)}
                          >
                            <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
                                {
                                  drawerIcon && drawerIcon({ focused, color: focused?'#fff':'green', size: 30 })
                                }
                                {
                                  drawerLabel && drawerLabel({ focused, color: 'black' })
                                }
                            </View>
                          </TouchableOpacity>
                        )
                    })
                  }
              </View>
          </View>
        </DrawerContentScrollView>
        <View style={{padding:30, backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:14,color:'black'}}>Travel App, Version 1.0.1</Text>
        </View>
   </View>
  );
}

const TabRootLayout = () => {
  const [maxWidth, setMaxWidth] = useState(Dimensions.get("window").width);
  const heightHeader = Constants.statusBarHeight + 50;
  const returnpathDown = getPathDown(maxWidth, 60, 50);

  const translation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([ 
        Animated.timing(translation, {
          toValue: 60, // chiều cao của nút qrcode
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(translation, {
          toValue: 1, // bắt đầu từ 0 đến 60
          duration: 1000, // số giây
          useNativeDriver: false,
        }),
      ])
    );
    animation.start(); // chạy cái function animation

    // xoá animation sau khi chạy xong ->"unmount"
    return () => animation.stop();
  }, [translation]); // Nếu translation thay đổi , thì nó sẽ chạy lại animation

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: true, // kaka
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "green",
            borderTopWidth: 0,
            position: "absolute",
            elevation: 0,
          },
          header: ({ navigation, route, options }) => {
            // lấy thông tin name của tab
            // tìm hiểu thêm : https://reactnavigation.org/docs/bottom-tab-navigator/
            // https://reactnavigation.org/docs/elements/#header

            const title = getHeaderTitle(options, route.name);

            // check kiểm tra tab hiện tại có phải là "Home" hay không
            if (title === "Home") {
              return (
                <>
                  <View
                    style={{
                      width: "100%",
                      height: heightHeader,
                      backgroundColor: "green",
                      paddingTop: Constants.statusBarHeight,
                    }}
                  >
                    {/* header */}
                    <View style={styles.headerTop}>
                      <View>
                        <View style={styles.headerContent}>
                          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Ionicons name="filter" size={35} color="white" />
                          </TouchableOpacity>
                          <View
                            style={{
                              flexShrink: 1,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={[
                                styles.headerTitle,
                                { fontFamily: "HelvetIns", fontSize: 30 },
                              ]}
                            >
                              Travel App
                            </Text>
                          </View>
                          <TouchableOpacity>
                            <View>
                              <EvilIcons name="bell" size={40} color="white" />
                              <View
                                style={{
                                  width: 22,
                                  height: 22,
                                  borderRadius: 20,
                                  backgroundColor: "red",
                                  position: "absolute",
                                  top: -5,
                                  right: 0,
                                  flexDirection: "row",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Text
                                  style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 10,
                                    fontWeight: "bold",
                                  }}
                                >
                                  99
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </>
              );
            }

            // chúng ta có thể cấu hình cho các tab khác nếu chúng ta muốn
            else {
              return null;
            }
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            // headerStyle:styles.headerStyle,
            tabBarIcon: ({ color, focused }) => {
              return (
                <MaterialCommunityIcons name="home" size={30} color={color} />
              );
            },
            tabBarLabel: () => <CustomTitleTab>Home</CustomTitleTab>,
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: "favorites",
            tabBarIcon: ({ color, focused }) => {
              return (
                <MaterialCommunityIcons name="heart" size={30} color={color} />
              );
            },
            tabBarLabel: () => <CustomTitleTab>favorites</CustomTitleTab>,
          }}
        />
        <Tabs.Screen
          name="qrcode"
          options={{
            headerShown: false,
            unmountOnBlur: false,
            tabBarItemStyle: {
              margin: 0,
              backgroundColor: "white",
              zIndex: -50,
            },
            tabBarIcon: () => (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  width: 60,
                  backgroundColor: "green",
                  borderRadius: 30,
                  overflow: "hidden",
                }}
              >
                <AntDesign name="qrcode" size={30} color="white" />
                <Animated.View
                  style={[
                    {
                      position: "absolute",
                      right: 0,
                      width: 60,
                      height: 1,
                      backgroundColor: "white",
                    },
                    { top: translation },
                  ]}
                ></Animated.View>
              </View>
            ),
            tabBarLabel: () => (
              <View>
                <Svg width={maxWidth} height={scale(60)}>
                  <Path fill={"green"} {...{ d: returnpathDown }} />
                </Svg>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: "Messages",
            tabBarIcon: ({ color, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="message"
                  size={30}
                  color={color}
                />
              );
            },
            tabBarLabel: () => <CustomTitleTab>Messages</CustomTitleTab>,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "settings",
            tabBarIcon: ({ color, focused }) => {
              return (
                <MaterialCommunityIcons name="cog" size={30} color={color} />
              );
            },
            tabBarLabel: () => <CustomTitleTab>settings</CustomTitleTab>,
          }}
        />
      </Tabs>
    </>
  );
};

const MyDrawerApp = ()=>{
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <Drawer.Navigator screenOptions={{ 
      headerShown: false,
      drawerActiveTintColor: "white",
      drawerInactiveTintColor: "white",
     drawerActiveBackgroundColor: "green",
     drawerInactiveBackgroundColor: "transparent",
     drawerStyle: { backgroundColor: "white" , width:300, height: "100%", padding:0, margin:0 },
    }}
      drawerContent={(props)=> <CustomDrawerContent {...props} /> }
    >
      {/* 
        viết layout cho menu tại đây
        Chú ý chúng ta dùng component={TabRootLayout}  để có bottom tabs ở bên dưới screen
      */}
       <Drawer.Screen name="Home" component={TabRootLayout}
         options={{
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                    <MaterialCommunityIcons name="home-outline" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>Home</Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                </View>
              </View>
            )
           }
         }}
       />

  <Drawer.Screen name="collections" component={CollectionScreen}
         options={{
          headerShown: false,
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                    <MaterialIcons name="collections" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>Collections</Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                </View>
              </View>
            )
           }
         }}
       />

<Drawer.Screen name="cart" component={CartScreen}
         options={{
           headerShown: true,
           headerTitle: "Carts",
           headerLeft: ()=> <TouchableOpacity style={{paddingHorizontal:20}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
           <Ionicons name="filter" size={30} color="black" />
       </TouchableOpacity>,

       headerRight: ()=> <TouchableOpacity style={{paddingHorizontal:20}}>
           <AntDesign name="message1" size={24} color="black" />
       </TouchableOpacity>,
           
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                   
                    <Ionicons name="cart" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>Carts</Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                    
                </View>
              </View>
            )
           }
         }}
       />

<Drawer.Screen name="news" component={NewScreen}
         options={{
          headerShown: true,
          headerTitle: "News",
          headerLeft: ()=> <TouchableOpacity style={{paddingHorizontal:20}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="filter" size={30} color="black" />
      </TouchableOpacity>,

      headerRight: ()=> <TouchableOpacity style={{paddingHorizontal:20}}>
         <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>,
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                    <MaterialIcons name="receipt" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>News</Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                </View>
              </View>
            )
           }
         }}
       />

  <Drawer.Screen name="wishLists" component={WishListScreen}
         options={{
          headerShown: true,
           headerTitle: "Travel Wishlist",
           headerLeft: ()=> <TouchableOpacity style={{paddingHorizontal:20}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
           <Ionicons name="filter" size={30} color="black" />
       </TouchableOpacity>,
           
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                    <FontAwesome name="heart" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>Travel 
                    Wishlist</Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                </View>
              </View>
            )
           }
         }}
       />


<Drawer.Screen name="RecentlyViewed" component={TabRootLayout}
         options={{
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                    <Ionicons name="eye" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>Recently Viewed</Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                </View>
              </View>
            )
           }
         }}
       />


<Drawer.Screen name="MyAccount" component={MyAccountScreen}
         options={{
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                    <Ionicons name="person" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>My Account </Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                </View>
              </View>
            )
           }
         }}
       />
       <Drawer.Screen name="Shipping" component={TabRootLayout}
         options={{
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                     <MaterialIcons name="local-shipping" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>Shipping</Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                </View>
              </View>
            )
           }
         }}
       />

<Drawer.Screen name="About" component={TabRootLayout}
         options={{
           drawerIcon: ({focused,color,size})=>{
            return (
                <View style={{backgroundColor:focused?"green":"#fff", borderRadius:8, padding:2}}>
                      <Entypo name="info" size={size} color={color} />
                </View>
            )
           },
           drawerLabel:({focused,color})=>{
            return (
              <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{flex:1,color:focused?"green":color,fontSize:16,fontWeight:500,paddingLeft:10}}>About</Text>
                    <Entypo name="chevron-right" size={16} color={color} />
                </View>
              </View>
            )
           }
         }}
       />




        {/* thêm các screeb khác */}
       <Drawer.Screen name="register" component={RegisterScreen} />


    </Drawer.Navigator>
  );
}



const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "green",
    height: 80, // Specify the height of your custom header
  },
  tabTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabTitleText: {
    fontSize: 14,
    color: "white",
    paddingVertical: 10,
    fontWeight: "bold",
  },
  headerTop: {
    width: "100%",
    paddingHorizontal: 20,
  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

//export default TabRootLayout;
export default MyDrawerApp;
