import { useCart } from '../components/CartProvider'
import { TMenu } from '../lib/api/types'
import { font } from '../lib/utils/fontBuilder'
import { url } from '../lib/utils/imageUrlBuilder'
import {
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native'

export default function CartScreen() {
  const { cartItems } = useCart()
  const countTotal = () => {
    const arr = Object.keys(cartItems)
    const computed = arr.map((k) => cartItems[k].qty * cartItems[k].menu.price)
    const sum = computed.reduce((prev, curr) => prev + curr, 0)
    return sum
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {Object.keys(cartItems).map((ci) => (
          <MenuItem
            key={ci}
            menu={cartItems[ci].menu}
            qty={cartItems[ci].qty}
          />
        ))}
      </ScrollView>
      <View className="bg-blue-900 flex-row justify-between">
        <Text
          style={font().mid().nocolor()}
          className="p-5 flex-[2] text-lg text-white"
        >
          Total: {countTotal()}
        </Text>
        <TouchableHighlight
          underlayColor="#eeeeee"
          onPress={() => {}}
          className="p-5 w-28 items-center bg-yellow-500"
        >
          <Text style={font().mid().s()} className="text-lg">
            Order
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

function MenuItem(props: { menu: TMenu; qty: number }) {
  return (
    <View key={props.menu.id} className="flex-row gap-x-2 w-full px-2 mt-2">
      <View className="w-[80px] h-[80px] justify-center items-center ">
        <Image
          source={{
            uri: url(props.menu.image).width(180).height(180).quality(40).url(),
          }}
          className="w-[60px] h-[60px] rounded-md"
        />
      </View>
      <View className="flex-1 justify-between py-1 pl-2">
        <Text style={font().mid().s()} className="text-[16px] max-w-[240px]">
          {props.menu.name}
        </Text>
        <View className="flex-row items-center justify-between">
          <Text style={font().mid().s()} className=" text-sm">
            {props.menu.price}
          </Text>
          <View className="flex-row gap-x-4">
            <Text style={font().light().s()} className="text-sm">
              x {props.qty}
            </Text>
            <Text style={font().b().s()} className="text-sm">
              {props.menu.price * props.qty}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
