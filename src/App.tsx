import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/Home';
import {LoginScreen} from './screens/Login';
import {SignUpScreen} from './screens/SignUp';
import {AssetScreen} from './screens/Asset';
import Home from './assets/icons/home.svg';
import Trade from './assets/icons/trade.svg';
import Portfolio from './assets/icons/portfolio.svg';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Asset: undefined;
};

export type TabStackParamList = {
  HomeTab: undefined;
  TradeTab: undefined;
  PortfolioTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();

const HomeTabIcon = ({focused}: {focused: boolean}) => {
  return <Home color={focused ? '#770FDF' : '#000'} />;
};

const TradeTabIcon = ({focused}: {focused: boolean}) => {
  return <Trade color={focused ? '#770FDF' : '#000'} />;
};

const PortfolioTabIcon = ({focused}: {focused: boolean}) => {
  return <Portfolio color={focused ? '#770FDF' : '#000'} />;
};

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#770FDF',
        tabBarStyle: {
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        options={{
          title: 'Home',
          tabBarIcon: HomeTabIcon,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="TradeTab"
        component={HomeScreen}
        options={{
          title: 'Trade',
          tabBarIcon: TradeTabIcon,
        }}
      />
      <Tab.Screen
        name="PortfolioTab"
        component={HomeScreen}
        options={{
          title: 'Portfolio',
          tabBarIcon: PortfolioTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="Asset" component={AssetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
