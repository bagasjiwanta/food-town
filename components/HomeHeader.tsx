import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native'
import { ChevronDownIcon, ChevronUpIcon } from 'react-native-heroicons/outline'
import { useState } from 'react'
import { useFoodcourt } from '../components/FoodcourtProvider'

const HomeHeader = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { foodcourt, setFoodcourt, foodcourts } = useFoodcourt()

  return (
    <View className="flex-row gap-x-3">
      <Image
        source={require('../assets/foodtown-logo.png')}
        className="w-10 h-10"
      />
      <View>
        <Text>Order Now!</Text>
        <View>
          {/* tombol dropdown */}
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <View className="flex-row align-center space-x-1">
              <Text>
                {foodcourt === null ? 'Choose food court' : foodcourt.name}
              </Text>
              {open ? (
                <ChevronUpIcon color="green" size={20} />
              ) : (
                <ChevronDownIcon color="green" size={20} />
              )}
            </View>
          </TouchableOpacity>
          {/* dropdown */}
          {open ? (
            <ScrollView className="bg-gray-200 px-2 rounded-sm">
              {foodcourts.map((f) => (
                <Pressable
                  key={f.id}
                  onPress={() => {
                    setFoodcourt(f)
                    setOpen(false)
                  }}
                >
                  <View className="my-1">
                    <Text>{f.name}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          ) : null}
        </View>
      </View>
    </View>
  )
}

export default HomeHeader
