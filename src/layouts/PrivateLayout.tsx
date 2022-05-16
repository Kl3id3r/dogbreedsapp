import { useNavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainStack from '../navigation/MainStack';
// @Styles
import styles from '../styles/PublicStyles';

const PrivateLayout = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaView style={styles.container}>
      <Header navigationRef={navigationRef} />
      <MainStack navigationRef={navigationRef} />
      <Footer title='Diseñado por @kleidergonzalez' />
    </SafeAreaView>
  )
}

export default PrivateLayout;