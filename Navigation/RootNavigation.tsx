import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StarterScreen from '../Screens/OuterScreens/StarterScreen'
import IntroductionScreen from '../Screens/OuterScreens/IntroductionScreen'
import SignupScreen from '../Screens/OuterScreens/SignupScreen'
import LoginScreen from '../Screens/OuterScreens/LoginScreen'
import OTPScreen from '../Screens/OuterScreens/OTPScreen'

const RootNavigation = () => {
    const Root=createStackNavigator()
  return (
    <NavigationContainer>
        <Root.Navigator>
            <Root.Screen name='Starter' component={StarterScreen} options={{headerShown:false}}/>
            <Root.Screen name='Intro' component={IntroductionScreen} options={{headerShown:false}}/>
            <Root.Screen name='SignupScreen' component={SignupScreen} options={{headerShown:false}}/>
            <Root.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
            <Root.Screen name='OTPScreen' component={OTPScreen} options={{headerShown:false}}/>
        </Root.Navigator>
    </NavigationContainer>

  )
}

export default RootNavigation

const styles = StyleSheet.create({})