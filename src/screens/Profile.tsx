import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profileeeeeee</Text>
      <Button
        title="go Home"
        onPress={() => navigation.navigate('Breeds')}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})