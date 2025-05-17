import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import Settings from './screens/Settings';
import ChatBox from './screens/ChatBox';
import Profile from './screens/Profile'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chat" component={ChatBox} />
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
  );
}

