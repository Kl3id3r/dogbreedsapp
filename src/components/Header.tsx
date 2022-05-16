import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchLogout } from '../store/authSlice';

const Header = () => {
  const dispatch = useDispatch();


  return (
    <View>
      <Text>Header xD</Text>

      <Button title='Logout' onPress={() => dispatch(fetchLogout())} />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({

})