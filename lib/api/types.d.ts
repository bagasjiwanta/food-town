export type TCategory = {
  id: string
  name: string
  image: string
}

export type TFoodcourt = {
  id: string
  name: string
  location: {
    lng: number
    lat: number
    alt: number
  }
}

export type TRestaurant = {
  id: string
  name: string
  rating: number
  description: string
  image: string
  category: TCategory[]
}

export type TMenu = {
  id: string
  name: string
  description: string
  price: number
  image: string
  restaurant: TRestaurant
}

export type TFeatured = {
  id: string
  name: string
  description: string
  foodcourt: TFoodcourt
  restaurants: TRestaurant[]
}

export type TMenuCategory = {
  id: string
  name: string
  menus: TMenu[]
}
