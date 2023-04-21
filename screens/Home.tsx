import { SafeAreaView, View, Text} from 'react-native'
import HomeHeader from '../components/HomeHeader'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Categories from '../components/Categories'
import { useFoodcourt } from '../components/FoodcourtProvider'
import { font } from '../lib/utils/fontBuilder'

const HomeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>
}) => {
  const {foodcourt} = useFoodcourt()
  return (
    <SafeAreaView className="pt-7">
      <HomeHeader />
      {
        foodcourt ? <Categories navigation={navigation} /> : null
      }
    </SafeAreaView>
  )
}

export default HomeScreen
