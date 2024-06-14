import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
const TabBottom = () => {
    return (
        <View className='w-full h-90'>
            <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color="white" />,
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: 'Settings',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color="white" />,
            }}
          />
        </Tabs>
        </View>
      );
}

export default TabBottom