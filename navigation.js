import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import BottomTab from "./BottomTab"

import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from './screens/UserProfileScreen';
import StoryScreen from './screens/StoryScreen';
import ProfileZoomScreen from './screens/ProfileZoomScreen';
import SearchScreen from './screens/SearchScreen';
import BottomTabe from './components/userProfile/BottomTabe';

const Stack = createStackNavigator();
const user = "null"
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        {
          !user ? (
            <>

              <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                headerShown: false
              }} />
              <Stack.Screen name='LoginScreen' component={LoginScreen} options={{
                headerShown: false
              }} />
            </>
          ) : (
            <Stack.Screen name='BottomTab' component={BottomTab} options={{
              headerShown: false
            }} />
          )
        }
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation


{/* <Stack.Navigator>
  {isLoggedIn ? (
    // Screens for logged in users
    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Group>
  ) : (
    // Auth screens
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Group>
  )}
  {/* Common modal screens */}
//   <Stack.Group screenOptions={{ presentation: 'modal' }}>
//     <Stack.Screen name="Help" component={Help} />
//     <Stack.Screen name="Invite" component={Invite} />
//   </Stack.Group>
// </Stack.Navigator> */}