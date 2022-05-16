import React from 'react'
import { StyleSheet, Text } from 'react-native'
import AuthStack from '../navigation/AuthStack'

const PublicLayout = () => {
  return (
    <>
      <Text>PublicLayout</Text>
      <AuthStack />
    </>
  )
}

export default PublicLayout

const styles = StyleSheet.create({})