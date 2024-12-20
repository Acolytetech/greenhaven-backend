import {defineType} from 'sanity'

export const ProductList = defineType({
  name: 'product_list',
  title: 'Product List',
  type: 'document',
  fields: [
    {
      name: 'category_name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'id',
      title: 'ID',
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
              name: 'sku',
              title: 'SKU',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})
