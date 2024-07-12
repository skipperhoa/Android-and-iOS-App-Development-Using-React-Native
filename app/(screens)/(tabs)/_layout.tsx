import { View, Text ,StyleSheet,Dimensions, Image} from "react-native";
import React,{useState} from "react";
import { Tabs } from "expo-router";
import { getPathDown } from "../../../components/curve";
import { Svg, Path } from "react-native-svg";
import { scale } from "react-native-size-scaling";


// ICON
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CustomTitleTab = ({ children } : any) => {
  return (
    <View style={styles.tabTitle}>
      <Text style={styles.tabTitleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

const TabRootLayout = () => {
  const [maxWidth, setMaxWidth] = useState(Dimensions.get("window").width);
  const returnpathDown = getPathDown(maxWidth, 60, 50);
  return (
    <>
      <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "white",
            tabBarStyle: {
              backgroundColor: "green",
              borderTopWidth: 0,
              position: "absolute",
              elevation: 0,
            },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            
            tabBarIcon: ({ color, focused }) => {
              return <MaterialCommunityIcons name="home" size={30} color={color} />
            },
            tabBarLabel: () => <CustomTitleTab>Home</CustomTitleTab>,
           
          }}
        
        />
        
          <Tabs.Screen
          name="favorites"
          options={{
            title: "favorites",
            tabBarIcon: ({ color, focused }) => {
                return <MaterialCommunityIcons name="heart" size={30} color={color} />
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
              
                  
                }}
              >
                <AntDesign name="qrcode" size={30} color="white" />
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
                return <MaterialCommunityIcons name="message" size={30} color={color} />
              },
              tabBarLabel: () => <CustomTitleTab>Messages</CustomTitleTab>,
          }}
        />
          <Tabs.Screen
          name="settings"
          options={{
            title: "settings",
            tabBarIcon: ({ color, focused }) => {
                return <MaterialCommunityIcons name="cog" size={30} color={color} />
              },
              tabBarLabel: () => <CustomTitleTab>settings</CustomTitleTab>,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabRootLayout;
