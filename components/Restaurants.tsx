import { TRestaurant } from '../lib/api/types'
import { View, Image, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { font } from '../lib/utils/fontBuilder'
import { url } from '../lib/utils/imageUrlBuilder'

export default function Restaurants({
  restaurants,
}: {
  restaurants: TRestaurant[]
}) {
  return (
    <ScrollView>
      {restaurants.map((r) => (
        <View key={r.id} className={`flex-row space-x-4 bg-white py-3 pl-3`}>
          <Image
            source={{ uri: url(r.image).width(300).height(300).url() }}
            className="w-[75px] h-[75px]"
          />
          <View>
            <Text
              style={font().semi().s()}
              numberOfLines={3}
              className="text-md -mt-1 text-lg"
            >
              {r.name}
            </Text>
            <Text style={font().light().s()} className="text-xs mb-2">
              {r.category.map((c) => c.name).join(', ')}
            </Text>
            <View className="flex-row w-8 justify-between items-center">
              <AntDesign name="star" size={20} color="orange" className="" />
              <Text style={font().b().s()} className="pt-1">
                {r.rating}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}
