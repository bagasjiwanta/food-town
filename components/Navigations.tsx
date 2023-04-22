import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import CategoriesScreen from '../screens/Categories'
import RestaurantScreen from '../screens/Restaurant'

export type RootStackNavigations = {
  Home: undefined
  Category: {
    categoryId: string
    categoryName: string
  }
  Restaurant: {
    restaurantId: string
  }
}

const Stack = createNativeStackNavigator<RootStackNavigations>()

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
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
