import imageUrlBuilder from '@sanity/image-url'
import { SanityClient } from './Client/Client'

const builder = imageUrlBuilder(SanityClient as any)

export function urlFor(source: any) {
  return builder.image(source)
}

export default urlFor
