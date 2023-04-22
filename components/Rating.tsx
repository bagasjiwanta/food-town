import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { font } from '../lib/utils/fontBuilder'

export default function Rating({ rating }: { rating: number }) {
  return (
    <View className="flex-row w-8 justify-between items-center">
      <AntDesign name="star" size={20} color="orange" className="" />
      <Text style={font().b().s()} className="pt-1">
        {rating}
      </Text>
    </View>
  )
}
