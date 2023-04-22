import { TFeatured, TRestaurant } from '../lib/api/types'
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native'
import { useState, useEffect } from 'react'
import { font } from '../lib/utils/fontBuilder'
import { getFoodCourtFeatured } from '../lib/api/featured'
import { useFoodcourt } from './FoodcourtProvider'
import { url } from '../lib/utils/imageUrlBuilder'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigations } from './Navigations'

export default function Featured() {
  const [featureds, setFeatureds] = useState<TFeatured[]>([])
  const { foodcourt } = useFoodcourt()
  const navigation = useNavigation()

  useEffect(() => {
    const getData = async () => {
      const _featureds = await getFoodCourtFeatured(foodcourt.id)
      setFeatureds(_featureds)
    }

    getData()
  }, [foodcourt])

  return (
    <View className="mt-4 pl-4">
      {featureds.map((f) => (
        <View key={f.id}>
          <Text style={font().semi().s()} className="text-lg pb-1 pt-3">
            {f.name}
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 20,
            }}
          >
            {f.restaurants.map((r) => (
              <TouchableHighlight
                key={r.id}
                className="mr-2 rounded-md"
                onPress={() =>
                  navigation.navigate('Restaurant', { restaurantId: r.id })
                }
              >
                <View className="bg-white rounded-md">
                  <Image
                    source={{ uri: url(r.image).width(600).height(360).url() }}
                    className="w-[200px] h-[120px] rounded-t-md"
                  />
                  <Text
                    style={font().semi().s()}
                    className="text-lg text-[16px] pt-2 pl-3"
                  >
                    {r.name}
                  </Text>
                  <View className="flex-row w-11 justify-between items-center pl-3 -mt-1">
                    <AntDesign
                      name="star"
                      size={20}
                      color="orange"
                      className=""
                    />
                    <Text style={font().b().s()} className="pt-1">
                      {r.rating}
                    </Text>
                  </View>
                  <Text
                    style={font().light().s()}
                    className="text-xs pb-2 pl-3"
                  >
                    {r.category.map((c) => c.name).join(', ')}
                  </Text>
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  )
}
