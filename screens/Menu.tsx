import { RouteProp, useNavigation } from '@react-navigation/native'
import { TMenu } from '../lib/api/types'
import { font } from '../lib/utils/fontBuilder'
import { url } from '../lib/utils/imageUrlBuilder'
import { View, Image, Text } from 'react-native'
import { toRupiah } from '../lib/utils/currency'

export default function MenuScreen({ route }: { route: RouteProp<any> }) {
  const menu: TMenu = route.params.menu
  return (
    <View>
      <Image
        source={{ uri: url(menu.image).width(1200).height(1200).url() }}
        className="w-full h-40 object-contain bg-white "
        style={{
          resizeMode: 'contain',
        }}
      />
      <View className="w-full bg-white gap-y-1">
        <Text style={font().semi().s()} className="text-xl pt-2 pl-4">
          {menu.name}
        </Text>
        <Text style={font().light().s()} className="text-xs pl-4 pt-2">
          Description: {menu.description ?? 'none'}
        </Text>
        <View className="bg-blue-900 rounded-full p-1 ml-4 mb-1 mr-auto">
          <Text style={font().nocolor()} className="text-white text-sm">
            {toRupiah(menu.price)}
          </Text>
        </View>
      </View>
    </View>
  )
}
