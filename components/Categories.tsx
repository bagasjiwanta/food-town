import { ScrollView, TouchableOpacity, Image, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { TCategory } from '../lib/api/types'
import { CategoryService } from '../lib/api'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { url } from '../lib/utils/imageUrlBuilder'
import { font } from '../lib/utils/fontBuilder'

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
    <View >
      <Text style={font().semi().s()} className="text-lg mt-4 pl-4">Categories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="mt-1 pl-2"
      >
        {categories.map((c) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Category', {
                categoryId: c.id,
                categoryName: c.name
              })
            }
            key={c.id}
            className="items-center space-y-4 ml-2 w-[90px] bg-white rounded-md shadow-md p-2"
          >
            <Image
              source={{ uri: url(c.image).width(120).height(120).url() }}
              className="h-[40px] w-[40px]"
            />
            <Text style={font().s()} className="text-xs">{c.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
