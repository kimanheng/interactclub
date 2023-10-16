import { type SchemaTypeDefinition } from 'sanity'

import about from './schemas/about'
import post from './schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, about],
}
