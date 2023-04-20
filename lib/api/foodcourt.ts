import { client } from "./client"
import { TFoodcourt } from "./types"

export const getFoodcourts = async () => {
  const query = 
`
*[_type=='foodcourt'] {
  name,
  location,
  "id": id.current
}
`
  return await client.fetch<TFoodcourt[]>(query)
}