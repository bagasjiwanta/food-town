import { client } from './client'
import { TFeatured } from './types'

export const getFoodCourtFeatured = async (foodcourt: string) => {
  const query = `
*[
    _type == 'featured' 
    && foodcourt->id.current == $foodcourt
  ] {
    name, 
    'id': id.current, 
    description, 
    restaurants[]->{
      name,
      'id': id.current,
      rating,
      'image': coverimage.asset->url
    }
  }
`
  return await client.fetch<TFeatured>(query, { foodcourt: foodcourt })
}
