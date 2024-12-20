import {defineType} from 'sanity'

export const ProductDetail = defineType({
  name: 'product_detail',
  title: 'Product Detail',
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
      name: 'sku',
      title: 'SKU',
      type: 'string',
    },
    {
      name: 'dimension_text',
      title: 'Dimension Text',
      type: 'string',
    },
    {
      name: 'description_text',
      title: 'Description Text',
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
              name: 'color',
              title: 'Color',
              type: 'string',
            },
            {
              name: 'related_images',
              title: 'Related Images',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                        name: 'alt',
                        title: 'ALT',
                        type: 'string'
                    },
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})
