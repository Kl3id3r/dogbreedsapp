// @Vendors
import React from 'react';
import {
  SafeAreaView
} from 'react-native';

// @Navigation
import MainStack from './src/navigation/MainStack';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainStack />
    </SafeAreaView>
  );
};

export default App;
