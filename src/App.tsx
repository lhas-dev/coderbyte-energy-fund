import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home';
import {LoginScreen} from './screens/Login';
import {SignUpScreen} from './screens/SignUp';
import {AssetScreen} from './screens/Asset';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Asset" component={AssetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
