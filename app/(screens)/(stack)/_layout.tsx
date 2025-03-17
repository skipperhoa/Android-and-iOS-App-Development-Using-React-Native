import { Stack } from 'expo-router'
import React from 'react'

export default function LayoutStack() {
  return (
   <Stack
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="carts/index" options={{ headerShown: false }} />
      <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="orders/index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="register/index" options={{ headerShown: false }} />
   </Stack>
  )
}
