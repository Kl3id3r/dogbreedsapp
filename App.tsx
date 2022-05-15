// @Vendors
import React from 'react';
import { RootState, store } from './src/store';
import { Provider, useSelector } from 'react-redux';
import { StatusBar, ActivityIndicator } from 'react-native';

// @Layouts
import PrivateLayout from './src/layouts/PrivateLayout';
import PublicLayout from './src/layouts/PublicLayout';

const App = () => {
  // Get values for control Routing
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.authReducer
  );

  return !loading ? (
    isAuthenticated ? <PrivateLayout /> : <PublicLayout />
  ) : <ActivityIndicator />
};

const StoreApp = () =>
  <Provider store={store}>
    <StatusBar barStyle="default" />
    <App />
  </Provider>

export default StoreApp;
