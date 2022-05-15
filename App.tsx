// @Vendors
import React from 'react';
import { RootState, store } from './src/store';
import { Provider, useSelector } from 'react-redux';
import { SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';

// @Layouts
import PrivateLayout from './src/layouts/PrivateLayout';
import PublicLayout from './src/layouts/PublicLayout';

const App = () => {
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.authReducer
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        !loading ? (
          isAuthenticated ? <PrivateLayout />  : <PublicLayout />
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
