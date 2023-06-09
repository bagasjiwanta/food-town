import { client } from './client'
import { TRestaurant } from './types'

export const getFoodcourtRestaurants = async (foodcourt: string) => {
  const query = `
*[
  _type=='restaurant'
  && foodcourt->id.current == $foodcourt
] {
  name,
  "id": id.current,
  category[]->{
    name,
    "id": id.current,
    "image": image.asset->url
  },
  "image": coverimage.asset->url,
  rating,
  description,
}
`
  return await client.fetch<TRestaurant[]>(query, { foodcourt: foodcourt })
}

export const getRestaurantDetails = async (restaurantId: string) => {
  const query = `
*[
  _type=='restaurant'
  && id.current == $restaurantId
] {
  name,
  "id": id.current,
  category[]->{
    name,
    "id": id.current,
    "image": image.asset->url
  },
  "image": coverimage.asset->url,
  rating,
  description,
}[0]
`
  return await client.fetch<TRestaurant>(query, { restaurantId })
}

export const getCategoryRestaurant = async (
  categoryId: string,
  foodcourtId: string
) => {
  const query = `
*[
  _type=='restaurant'
  && count((category[]->id.current)[@ == $categoryId]) > 0
  && foodcourt->id.current == $foodcourtId
] {
  name,
  "id": id.current,
  category[]->{
    name,
    "id": id.current,
    "image": image.asset->url
  },
  "image": coverimage.asset->url,
  rating,
  description,
}
`

  return await client.fetch<TRestaurant[]>(query, { categoryId, foodcourtId })
}
