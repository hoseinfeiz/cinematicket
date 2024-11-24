import React from 'react';
import { View , Text } from 'react-native';
import  { css } from '@emotion/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/tabNavigators/TabNavigator';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tab" component={TabNavigator} />
                <Stack.Screen name="Movie" component={MovieDetailsScreen} />
                <Stack.Screen name="Seat" component={SeatBookingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;