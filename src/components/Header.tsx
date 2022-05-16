import { NavigationContainerRef } from '@react-navigation/native';
import React, { Ref } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchLogout } from '../store/authSlice';
import AppStyledTitle from './AppTitle';
import BulletCircle from './BulletCircle';
import StyledButton from './StyledButton';

const Header = ({ navigationRef }: { navigationRef: Ref<NavigationContainerRef<any>> | undefined }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authReducer);
  const bulletText = user?.email?.substr(0, 1) || '';

  return (
    <View style={styles.header}>
      <AppStyledTitle />
      <View style={{ flexDirection: 'row' }}>
        <BulletCircle text={bulletText} style={{ marginRight: 10 }} onPress={() => navigationRef?.navigate('Profile')} />
        <StyledButton text='Logout' color='green' variant='outline' onPress={() => dispatch(fetchLogout())} style={styles.btnLogout} />
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
  },
  btnLogout: {
    width: 120,
    padding: 0
  }
})