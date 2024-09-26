import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/Screens/Welcome/Welcome';
import Login from './src/Screens/Login/Login';
import TabNavigator from './src/Screens/TabNavigator/TabNavigator';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



