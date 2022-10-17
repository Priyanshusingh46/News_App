import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from './Screens/Tech';
import Science from './Screens/Science'
import Entertainment from './Screens/Entertainment'
import General from './Screens/General'
export default function App() {
  return (
    <NavigationContainer
    >
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Science" component={Science} options={{headerShown: false}}/>
      <Stack.Screen name ="Entertainment" component={Entertainment} options={{headerShown: false}}/>
      <Stack.Screen name ="General" component={General} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

