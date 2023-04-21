import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { getCategoryRestaurant } from '../lib/api/restaurant'
import { useFoodcourt } from '../components/FoodcourtProvider'
import { TRestaurant } from '../lib/api/types'
import { url } from '../lib/utils/imageUrlBuilder'
import { font } from '../lib/utils/fontBuilder'
import { AntDesign } from '@expo/vector-icons'; 

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
      title: `${categoryName} restaurants`
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
  }, [])


  return (
    <SafeAreaView className='bg-white'>
      <ScrollView>
        {restaurants.map((r) => (
          <View key={r.id} className={`flex-row space-x-4 bg-white py-3 pl-3`}>
            <Image
              source={{ uri: url(r.image).width(300).height(300).url() }}
              className="w-[75px] h-[75px]"
            />
            <View>
              <Text style={font().semi().s()} numberOfLines={3} className='text-md -mt-1 text-lg'>{r.name}</Text>
              <Text style={font().light().s()} className='text-xs mb-2'>
                {r.category.map(c => c.name).join(', ')}
              </Text>
              <View className='flex-row w-8 justify-between items-center'>
                <AntDesign name="star" size={20} color="green" className='' /> 
                <Text style={font().b().s()} className='pt-1'>
                  {r.rating}
                </Text>
              </View>
            </View>

          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
