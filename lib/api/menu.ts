import { client } from './client'
import { TMenu, TMenuCategory } from './types'

export const x = 10

export const getRestaurantMenus = async (restaurantId: string) => {
  const query = `
  *[
    _type == 'menucategory'
    && restaurant->id.current == $restaurant
  ] {
    "id": _id,
    name,
    "menus": *[
      _type == 'menu'
      && references(^._id)
    ] {
      "id": _id,
      name,
      price,
      "image": image.asset->url,
      "restaurant": restaurant->id.current
    }
  }
`
  return await client.fetch<TMenuCategory[]>(query, {
    restaurant: restaurantId,
  })
}

export const getMenuDetails = async (menuId: string) => {
  const query = `
*[
  _type == 'menu'
  && _id == $menuId
] {
  "id": _id,
  name,
  price,
  "image": image.asset->url,
  description
}
`
  return await client.fetch<TMenu>(query, { menuId: menuId })
}
