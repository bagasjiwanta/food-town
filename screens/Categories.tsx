import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { getCategoryRestaurant } from '../lib/api/restaurant'
import { useFoodcourt } from '../components/FoodcourtProvider'
import { TRestaurant } from '../lib/api/types'
import { url } from '../lib/utils/imageUrlBuilder'

interface IProps {
  navigation: NativeStackNavigationProp<any>
  route: RouteProp<any>
}

export default function CategoriesScreen({ navigation, route }: IProps) {
  const categoryId: string = route.params.categoryId
  const { foodcourt } = useFoodcourt()
  const [restaurants, setRestaurants] = useState<TRestaurant[]>([])

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const _restaurants = await getCategoryRestaurant(
          categoryId,
          foodcourt.id
        )
        setRestaurants(_restaurants)
      } catch (err) {
        console.warn(err)
      }
    }

    getRestaurants()
  }, [])

  return (
    <View className="pt-10 px-2">
      <ScrollView>
        {restaurants.map((r) => (
          <View key={r.id} className="flex-row">
            <View className="w-3/4">
              <Text className="text-xl text-gray-800">{r.name}</Text>
              <Text className="text-justify">{r.description}</Text>
              <Text>{r.rating}</Text>
            </View>
            <Image
              source={{ uri: url(r.image).width(150).height(150).url() }}
              className="w-[50px] h-[50px]"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
