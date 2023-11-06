import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomePage} from '../pages/HomePage'
import {Login} from '../pages/Login'

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}