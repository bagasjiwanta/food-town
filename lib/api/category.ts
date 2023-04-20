import { client } from "./client"
import { TCategory } from "./types"

export const getCategories = async (foodcourt: string) => {
  const query = 
`
*[_type=='category'] {
  name,
  "id": id.current,
  "image": image.asset->url
}
` 
  return await client.fetch<TCategory[]>(query)
}
