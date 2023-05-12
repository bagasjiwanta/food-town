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
  menu: TMenu
}

type TCart = {
  restaurant: string | null
  cartItems: {
    [key: string]: TCartItem
  }
  increase: (menu: TMenu) => void
  decrease: (menu: TMenu) => void
  add: (menu: TMenu) => void
  remove: (menu: TMenu) => void
  count: number
}

const CartContext = createContext<TCart>({
  restaurant: null,
  cartItems: {},
  increase: (_) => {},
  decrease: (_) => {},
  add: (_) => {},
  remove: (_) => {},
  count: 0,
})

export const useCart = () => useContext(CartContext)

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<{ [key: string]: TCartItem }>({})
  const [restaurant, _setRestaurant] = useState<string | null>()
  const count = Object.keys(cartItems).length

  const increase = (menu: TMenu) => {
    setCartItems({
      ...cartItems,
      [menu.id]: {
        ...cartItems[menu.id],
        qty: (cartItems[menu.id].qty += 1),
      },
    })
  }

  const add = (menu: TMenu) => {
    if (restaurant === null) {
      _setRestaurant(menu.restaurant.toString())
    } else if (restaurant !== menu.restaurant.toString()) {
      _setRestaurant(menu.restaurant.toString())
      const cartItem = {
        qty: 1,
        menu,
      }
      setCartItems({ [menu.id]: cartItem })
    } else {
      const cartItem = {
        qty: 1,
        menu,
      }
      setCartItems({ ...cartItems, [menu.id]: cartItem })
    }
  }

  const decrease = (menu: TMenu) => {
    setCartItems({
      ...cartItems,
      [menu.id]: {
        ...cartItems[menu.id],
        qty: (cartItems[menu.id].qty -= 1),
      },
    })
  }

  const remove = (menu: TMenu) => {
    const d = { ...cartItems }
    delete d[menu.id]
    setCartItems(d)
  }

  return (
    <CartContext.Provider
      value={{
        restaurant,
        cartItems,
        increase,
        decrease,
        add,
        remove,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
