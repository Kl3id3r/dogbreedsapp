// @Vendors
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// @Navigation
import AuthStack from '../navigation/AuthStack';
// @Styles
import styles from '../styles/PublicStyles';

const PublicLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthStack />
    </SafeAreaView>
  )
}

export default PublicLayout;