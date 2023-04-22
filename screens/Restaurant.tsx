import {
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { useEffect, useState, memo, useMemo} from 'react'
import { TMenu, TMenuCategory, TRestaurant } from '../lib/api/types'
import { getRestaurantDetails } from '../lib/api/restaurant'
import { getRestaurantMenus } from '../lib/api/menu'
import { url } from '../lib/utils/imageUrlBuilder'
import Rating from '../components/Rating'
import { useCart } from '../components/CartProvider'
import { AntDesign } from '@expo/vector-icons'
import { font } from '../lib/utils/fontBuilder'

interface IProps {
  route: RouteProp<any>
}

export default function RestaurantScreen({ route }: IProps) {
  const restaurantId: string = route.params.restaurantId
  const [restaurant, setRestaurant] = useState<TRestaurant | null>(null)
  const [menuCategories, setMenuCategories] = useState<TMenuCategory[]>([])
  const _getRestaurantDetails = useMemo(() => getRestaurantDetails(restaurantId), [restaurantId])
  const _getRestaurantMenus = useMemo(() => getRestaurantMenus(restaurantId), [restaurantId])

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const _restaurant = await _getRestaurantDetails
        const _menus = await _getRestaurantMenus
        setRestaurant(_restaurant)
        setMenuCategories(_menus)
      } catch (err) {
        console.warn(err)
      }
    }

    getRestaurant()
  }, [restaurantId])
  const navigation = useNavigation()
  // console.log("page render")
  // console.log(restaurant)
  // console.log(menuCategories.map(mc => mc.menus.map(m => m.image)))
  return (
    <SafeAreaView>
      <ScrollView>
        {restaurant !== null && menuCategories.length > 0 ? (
          <>
            <Image
              source={{
                uri: url(restaurant.image).width(1200).height(1200).url(),
              }}
              className="w-full h-40 object-contain bg-white "
              style={{
                resizeMode: 'contain',
              }}
            />
            <View className="w-full bg-white">
              <Text style={font().semi().s()} className="text-xl pt-2 pl-4">
                {restaurant.name}
              </Text>
              <Text style={font().light().s()} className="text-xs pl-4 pt-2">
                {restaurant.category.map((c) => c.name).join(', ')}
              </Text>
              <View className="pl-4">
                <Rating rating={restaurant.rating} />
              </View>
            </View>
            {menuCategories.map((mc) => (
              <View key={mc.id}>
                <Text
                  style={font().mid().s()}
                  className="text-sm pb-1 pl-2 pt-4"
                >
                  {mc.name}
                </Text>
                <View className="bg-white">
                  {mc.menus.map((menu) => (
                    <MenuItem
                      menu={menu}
                      key={menu.id}
                      navigation={navigation}
                    />
                  ))}
                </View>
              </View>
            ))}
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}

const MenuItem = memo(function MemoMenuItem(props: {
  menu: TMenu,
  navigation: any
}) {
  // console.log("menu item render" + props.menu.name)
  return (
    <TouchableHighlight
      onPress={() => props.navigation.navigate("Menu", { menu: props.menu })}
      underlayColor="#efefef"
    >
    <View
      key={props.menu.id} className="flex-row gap-x-2 w-full px-2 mt-2">
      <View className="w-[100px] h-[100px] justify-center items-center ">
        <Image
          source={{ uri: url(props.menu.image).width(255).height(255).quality(50).url() }}
          className="w-[85px] h-[85px] rounded-md"
        />
      </View>
      <View className="flex-1 justify-between py-1 pl-2">
        <Text style={font().mid().s()} className="text-[16px] max-w-[240px]">
          {props.menu.name}
        </Text>
        <View className="flex-row justify-between items-center">
          <View className='bg-blue-900 rounded-full p-1 mb-1'>

            <Text style={font().nocolor()} className='text-white text-sm'>{props.menu.price}</Text>
          </View>
          <MenuAdder 
            {...props}
          />
        </View>
      </View>
    </View>
    </TouchableHighlight>
  )
})

function MenuAdder ({
  menu,
}: {
  menu: TMenu
}) {
  const { cartItems, add, decrease, increase, remove} = useCart()
  const qty = cartItems[menu.id]?.qty
  return (
    <View className="flex-row justify-between w-20">
      <TouchableOpacity onPress={() => {
        if (qty === undefined) {
          return
        } else if (qty === 1) {
          remove(menu)
        } else {
          decrease(menu)
        }
      }}>
        <AntDesign name="minuscircleo" size={24} color='gold' />
      </TouchableOpacity>
      <Text style={font().s()} className="pt-1">
        {qty ?? 0}
      </Text>
      <TouchableOpacity onPress={() => {
        if (qty === undefined) {
          add(menu)
        } else {
          increase(menu)
        }
      }}>
        <AntDesign name="pluscircle" size={24} color="gold" />
      </TouchableOpacity>
    </View>
  )
}