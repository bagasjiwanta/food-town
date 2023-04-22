import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native'
import { ChevronDownIcon, ChevronUpIcon } from 'react-native-heroicons/outline'
import { useState } from 'react'
import { useFoodcourt } from '../components/FoodcourtProvider'
import { font } from '../lib/utils/fontBuilder'

const HomeHeader = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { foodcourt, setFoodcourt, foodcourts } = useFoodcourt()
  return (
    <View className="flex-row space-x-3 pt-3 pl-4 pb-2 items-center bg-white">
      <Image
        source={require('../assets/foodtown-logo.png')}
        className="w-11 h-11"
      />
      <View>
        <Text style={font().b().s()} className="text-lg">
          Food Town
        </Text>
        <View>
          {/* tombol dropdown */}
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <View className="flex-row align-center space-x-1">
              <Text style={font().s()}>
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
            <ScrollView className="bg-gray-200 px-2 rounded-sm z-10 absolute top-6">
              {foodcourts.map((f) => (
                <Pressable
                  key={f.id}
                  onPress={() => {
                    setFoodcourt(f)
                    setOpen(false)
                  }}
                >
                  <View className="my-1">
                    <Text style={font().s()}>{f.name}</Text>
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
