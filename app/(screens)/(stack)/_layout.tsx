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
   </Stack>
  )
}
