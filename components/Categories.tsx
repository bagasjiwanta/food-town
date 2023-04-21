import { ScrollView, TouchableOpacity, Image, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { TCategory } from '../lib/api/types'
import { CategoryService } from '../lib/api'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { url } from '../lib/utils/imageUrlBuilder'

export default function Categories({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>
}) {
  const [categories, setCategories] = useState<TCategory[]>([])

  useEffect(() => {
    const getCategories = async () => {
      const _categories = await CategoryService.getCategories()
      setCategories(_categories)
    }

    getCategories()
  }, [])

  return (
    <View>
      <Text className="text-xl text-center mt-2">Categories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="mt-4"
      >
        {categories.map((c) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Category', {
                categoryId: c.id,
              })
            }
            key={c.id}
            className="items-center space-y-4 ml-6 w-16"
          >
            <Image
              source={{ uri: url(c.image).width(120).height(120).url() }}
              className="h-[40px] w-[40px]"
            />
            <Text className="text-xs">{c.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
