import 'react-native-url-polyfill/auto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/Home"
import { NavigationContainer } from '@react-navigation/native';
import FoodcourtProvider from './components/FoodcourtProvider';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <FoodcourtProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FoodcourtProvider>
  );
}
