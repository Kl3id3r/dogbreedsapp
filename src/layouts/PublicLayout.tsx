// @Vendors
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';
// @Navigation
import AuthStack from '../navigation/AuthStack';
// @Styles
import styles from '../styles/PublicStyles';

const PublicLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthStack />
      <Footer title='Diseñado por @kleidergonzalez' />
    </SafeAreaView>
  )
}

export default PublicLayout;