import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategory from '../Screens/BusinessListByCategory/BusinessListByCategory';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';

const HomeNavigation = () => {

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name="business-list" component={BusinessListByCategory}/>
        <Stack.Screen name="business-details" component={BusinessDetailsScreen}/>
    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})