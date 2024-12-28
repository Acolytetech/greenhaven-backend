
import { defineType, defineField } from "sanity";

export const Herosection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: 'caraousel_title',
      title: 'Caraousel Title',
      type: 'string'
    },
    {
      name: 'caraousel_subtitle',
      title: 'Caraousel Sub Title',
      type: 'string'
    },
    {
      name: 'caraousel_images',
      title: 'Caraousel Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image'
            },
            {
              name: 'image_name',
              title: 'Image Name',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'path',
      title: 'Path',
      type: 'string'
    }
  ],
});
