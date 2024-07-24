import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />

      <Stack.Screen name="(tabs)" 
        options={{
          headerShown: false
        }}
      />
      
      <Stack.Screen name="splash" 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="register" 
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen name="login" 
        options={{
          headerShown: false
        }}
      />
      
    
    </Stack>
  )
}

export default RootLayout