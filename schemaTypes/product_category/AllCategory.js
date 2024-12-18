import {defineType} from 'sanity'

export const AllCategory = defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'sub_header',
      title: 'Sub Header',
      type: 'string',
    },
    {
      name: 'product_image',
      title: 'Product Image',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'path',
              title: 'Path',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})
