import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import MainStack from '../navigation/MainStack'

const PrivateLayout = () => {
  return (
    <>
      <Header />
      <MainStack />
    </>
  )
}

export default PrivateLayout

const styles = StyleSheet.create({})