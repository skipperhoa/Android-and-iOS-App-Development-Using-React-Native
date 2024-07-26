import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const IndexScreen = () => {
  return (
    <Redirect href="/loginPhone" />
  )
}

export default IndexScreen