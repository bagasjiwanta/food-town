import { View, Text } from 'react-native'
import CartButton from './CartButton'
import { ReactNode } from 'react'
import { font } from '../lib/utils/fontBuilder'

export default function HeaderWithCart({ children }: { children: ReactNode }) {
  return (
    <View className="flex-row flex-[1] pr-20 justify-between items-center">
      <Text style={font().mid().nocolor()} className="text-xl">
        {children}
      </Text>
      <CartButton />
    </View>
  )
}
