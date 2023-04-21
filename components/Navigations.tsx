import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import CategoriesScreen from '../screens/Categories'

const Stack = createNativeStackNavigator()

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Category" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}