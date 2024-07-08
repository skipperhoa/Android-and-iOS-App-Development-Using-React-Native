import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
// ICON
import { MaterialCommunityIcons } from '@expo/vector-icons';
const TabRootLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "green",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            
            tabBarIcon: ({ color, focused }) => {
              return <MaterialCommunityIcons name="home" size={24} color={color} />
            },
           
          }}
        
        />
        
          <Tabs.Screen
          name="favorites"
          options={{
            title: "favorites",
            tabBarIcon: ({ color, focused }) => {
                return <MaterialCommunityIcons name="heart" size={24} color={color} />
              }
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: "Messages",
            tabBarIcon: ({ color, focused }) => {
                return <MaterialCommunityIcons name="message" size={24} color={color} />
              }
          }}
        />
          <Tabs.Screen
          name="settings"
          options={{
            title: "settings",
            tabBarIcon: ({ color, focused }) => {
                return <MaterialCommunityIcons name="cog" size={24} color={color} />
              }
          }}
        />
      </Tabs>
    </>
  );
};

export default TabRootLayout;
