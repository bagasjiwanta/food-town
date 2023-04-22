import { TMenu, TRestaurant } from '../lib/api/types'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react'

type TCartItem = {
  qty: number
}

type TCart = {
  restaurant: TRestaurant | null
  cartItems: {
    [key: string]: TCartItem
  }
  increase: (menu: TMenu) => void
  decrease: (menu: TMenu) => void
  add: (menu: TMenu) => void
  remove: (menu: TMenu) => void
}

const CartContext = createContext<TCart>({
  restaurant: null,
  cartItems: {},
  increase: (_) => {},
  decrease: (_) => {},
  add: (_) => {},
  remove: (_) => {},
})

export const useCart = () => useContext(CartContext)

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<{ [key: string]: TCartItem }>({})
  const [restaurant, setRestaurant] = useState<TRestaurant | null>()

  const increase = (menu: TMenu) => {
    setCartItems({
      ...cartItems,
      [menu.id]: {
        qty: (cartItems[menu.id].qty += 1),
      },
    })
  }

  const add = (menu: TMenu) => {
    const cartItem = {
      qty: 1,
    }
    setCartItems({ ...cartItems, [menu.id]: cartItem })
  }

  const decrease = (menu: TMenu) => {
    setCartItems({
      ...cartItems,
      [menu.id]: {
        qty: (cartItems[menu.id].qty -= 1),
      },
    })
  }

  const remove = (menu: TMenu) => {
    setCartItems({
      ...cartItems,
      [menu.id]: undefined,
    })
  }

  return (
    <CartContext.Provider
      value={{
        restaurant,
        cartItems,
        increase,
        decrease,
        add,
        remove
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
