import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainStack from '../navigation/MainStack';
// @Styles
import styles from '../styles/PublicStyles';

const PrivateLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MainStack />
      <Footer title='Diseñado por @kleidergonzalez' />
    </SafeAreaView>
  )
}

export default PrivateLayout;