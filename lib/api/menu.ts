import { client } from './client'
import { TMenu } from './types'

export const x = 10

export const getRestaurantMenus = async (restaurant: string) => {
  const query = `
*[
  _type == 'menu'
  && restaurant->id.current == $restaurant
] {
  "id": _id,
  name,
  price,
  "image": image.asset->url
}
`
  return await client.fetch<TMenu>(query, { restaurant: restaurant })
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
