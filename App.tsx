// @Vendors
import React, { useEffect } from 'react';
import { RootState, store } from './src/store';
import { Provider, useSelector } from 'react-redux';
import { StatusBar, ActivityIndicator } from 'react-native';

// @Layouts
import PrivateLayout from './src/layouts/PrivateLayout';
import PublicLayout from './src/layouts/PublicLayout';
import { useDispatch } from 'react-redux';
import { checkAuthentication } from './src/store/authSlice';

const App = () => {
  const dispatch = useDispatch();

  // Get values for control Routing
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.authReducer
  );

  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

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
