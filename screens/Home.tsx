import { SafeAreaView, View } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Categories from '../components/Categories'

const HomeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>
}) => {
  console.log('hello')
  return (
    <SafeAreaView className="pt-10 px-2">
      <HomeHeader />
      <Categories navigation={navigation} />
    </SafeAreaView>
  )
}

export default HomeScreen
