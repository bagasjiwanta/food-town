import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import CategoriesScreen from '../screens/Categories'
import RestaurantScreen from '../screens/Restaurant'
import { TMenu } from '../lib/api/types'
import MenuScreen from '../screens/Menu'
import CartScreen from '../screens/Cart'
import RestaurantsScreen from '../screens/Restaurants'

export type RootStackNavigations = {
  Home: undefined
  Category: {
    categoryId: string
    categoryName: string
  }
  Restaurant: {
    restaurantId: string
  },
  Menu: {
    menu: TMenu
  },
  Cart: undefined,
  Restaurants: undefined
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
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Category" component={CategoriesScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
