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
       <Stack.Screen name="loginPhone" 
        options={{
          headerShown: false
        }}
      />
             <Stack.Screen name="verifyCode" 
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen name="flight" 
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen name="flightDetail" 
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen name="travelDetail" 
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen name="collections" 
          options={{
            headerShown: false   
          }}
      />
       <Stack.Screen name="wishLists" 
          options={{
            headerShown: false   
          }}
      />
        <Stack.Screen name="cart" 
          options={{
            headerShown: false   
          }}
      />
      <Stack.Screen name="news" 
          options={{
            headerShown: false   
          }}
      />
      <Stack.Screen name="newsDetail" 
          options={{
            headerShown: false   
          }}
      />
          <Stack.Screen name="myAccount" 
          options={{
            headerShown: false   
          }}
      />
    
    </Stack>
  )
}

export default RootLayout