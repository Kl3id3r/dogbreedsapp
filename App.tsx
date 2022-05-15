// @Vendors
import React from 'react';
import { RootState, store } from './src/store';
import { Provider, useSelector } from 'react-redux';
import { SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';

// @Navigation
import MainStack from './src/navigation/MainStack';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.authReducer
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        !loading ? (
          isAuthenticated ? <MainStack /> : <AuthStack />
        ) : <ActivityIndicator />
      }
    </SafeAreaView>
  );
};

const StoreApp = () =>
  <Provider store={store}>
    <StatusBar barStyle="default" />
    <App />
  </Provider>

export default StoreApp;
