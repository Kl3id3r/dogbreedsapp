import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../theme/colors'

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
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