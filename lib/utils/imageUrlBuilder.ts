import { client } from '../api/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function url(source: string) {
  return builder.image(source)
}
