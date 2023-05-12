import { TouchableOpacity, View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useCart } from './CartProvider'

export default function CartButton() {
  const navigation = useNavigation()
  const { count } = useCart()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      className="relative items-end py-1 pl-1 pr-4"
    >
      <View className="absolute bg-blue-900 w-5 h-5 right-2 z-10 top-0 rounded-full bg-">
        <Text className="text-white text-center">{count}</Text>
      </View>
      <MaterialCommunityIcons name="cart-variant" size={36} color="black" />
    </TouchableOpacity>
  )
}
