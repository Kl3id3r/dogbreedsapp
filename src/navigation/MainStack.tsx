// @Vendors
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../screens/Home';


const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Breeds' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Profile' component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const styles = StyleSheet.create({})