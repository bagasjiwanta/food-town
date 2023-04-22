import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { getCategoryRestaurant } from '../lib/api/restaurant'
import { useFoodcourt } from '../components/FoodcourtProvider'
import { TRestaurant } from '../lib/api/types'
import { url } from '../lib/utils/imageUrlBuilder'
import { font } from '../lib/utils/fontBuilder'
import { AntDesign } from '@expo/vector-icons'
import Restaurants from '../components/Restaurants'

interface IProps {
  navigation: NativeStackNavigationProp<any>
  route: RouteProp<any>
}

export default function CategoriesScreen({ navigation, route }: IProps) {
  const categoryId: string = route.params.categoryId
  const categoryName: string = route.params.categoryName
  const { foodcourt } = useFoodcourt()
  const [restaurants, setRestaurants] = useState<TRestaurant[]>([])

  useEffect(() => {
    navigation.setOptions({
      title: `${categoryName} restaurants`,
    })
    const getRestaurants = async () => {
      try {
        const _restaurants = await getCategoryRestaurant(
          categoryId,
          foodcourt.id
        )
        setRestaurants(_restaurants)
        // console.log(restaurants)
      } catch (err) {
        console.warn(err)
      }
    }

    getRestaurants()
  }, [foodcourt])

  return (
    <SafeAreaView className="bg-white">
      <Restaurants restaurants={restaurants} />
    </SafeAreaView>
  )
}
