import { View, SafeAreaView, Image, Text } from "react-native"
import { ChevronDownIcon } from "react-native-heroicons/outline"

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* top bar */}
      <View className='flex-row'>
        <Image 
          source={require('../assets/foodtown-logo.png')}
          className='w-7 h-7'  
        />
        <View>
          <Text>Order Now!</Text>
          <Text>Choose food court 
            <ChevronDownIcon color='green'/>
          </Text>
        </View>
      </View>
      {/* search bar */}
    </SafeAreaView>
  )
}

export default HomeScreen