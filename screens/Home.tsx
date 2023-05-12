import { SafeAreaView, TouchableHighlight, Text } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Categories from '../components/Categories'
import { useFoodcourt } from '../components/FoodcourtProvider'
import Featured from '../components/Featured'
import { font } from '../lib/utils/fontBuilder'

const HomeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>
}) => {
  const { foodcourt } = useFoodcourt()
  return (
    <SafeAreaView className="relative h-full">
      <HomeHeader />
      {foodcourt ? (
        <>
          <Categories navigation={navigation} />
          <Featured />
          <TouchableHighlight
            className="mt-auto w-full bg-white py-3"
            onPress={() => navigation.navigate('Restaurants')}
            underlayColor="#efefef"
          >
            <Text
              style={font().b().nocolor()}
              className="text-center text-blue-500 underline"
            >
              See all restaurants
            </Text>
          </TouchableHighlight>
        </>
      ) : null}
    </SafeAreaView>
  )
}

export default HomeScreen
