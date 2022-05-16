import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchLogout } from '../store/authSlice';
import AppStyledTitle from './AppTitle';
import BulletCircle from './BulletCircle';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authReducer);
  const bulletText = user?.email?.substr(0, 1) || '';

  return (
    <View style={styles.header}>
      <AppStyledTitle />
      <View style={{ flexDirection: 'row' }}>
        <BulletCircle text={bulletText} style={{ marginRight: 10 }} />
        <Button title='Logout' onPress={() => dispatch(fetchLogout())} />
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  }
})