import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home';
import {LoginScreen} from './screens/Login';
import {SignUpScreen} from './screens/SignUp';
import {AssetScreen} from './screens/Asset';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Asset: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Asset" component={AssetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
