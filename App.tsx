import 'react-native-url-polyfill/auto'
import 'intl'
// import 'intl/locale-data/jsonp/en'
import FoodcourtProvider from './components/FoodcourtProvider'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from '@expo-google-fonts/poppins'
import Navigations from './components/Navigations'
import CartProvider from './components/CartProvider'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
        position: 'relative',
      }}
    >
      <FoodcourtProvider>
        <CartProvider>
          <Navigations />
        </CartProvider>
      </FoodcourtProvider>
    </SafeAreaView>
  )
}
