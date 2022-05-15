// @Vendors
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// @Screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Profile' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Breeds' component={Profile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;