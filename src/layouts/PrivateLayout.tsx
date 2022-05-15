import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrivateLayout = ({ children, ...props }) => {
  return (
    <View>
      <Text>PrivateLayout</Text>
      {children}
    </View>
  )
}

export default PrivateLayout

const styles = StyleSheet.create({})