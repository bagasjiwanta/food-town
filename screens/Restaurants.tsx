import { useFoodcourt } from '../components/FoodcourtProvider'
import { TRestaurant } from '../lib/api/types'
import { useState, useEffect } from 'react'
import { getFoodcourtRestaurants } from '../lib/api/restaurant'
import { SafeAreaView } from 'react-native'
import Restaurants from '../components/Restaurants'

export default function RestaurantsScreen() {
  const { foodcourt } = useFoodcourt()
  const [restaurants, setRestaurants] = useState<TRestaurant[]>([])

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const _restaurants = await getFoodcourtRestaurants(foodcourt.id)
        setRestaurants(_restaurants)
      } catch (err) {
        console.warn(err)
      }
    }

    getRestaurants()
  }, [foodcourt])

  return (
    <SafeAreaView>
      <Restaurants restaurants={restaurants} />
    </SafeAreaView>
  )
}
