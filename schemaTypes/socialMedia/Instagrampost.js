
import { defineType, defineField } from "sanity";

export const Instagrampost = defineType({
  name: "instagrampost",
  title: "Instagram Post",
  type: "document",
  fields: [
    {
      name: 'instagram_id',
      title: 'Instagram_id',
      type: 'string',
    },
    {
        name: 'business_name',
        title: 'Business Name',
        type: 'string',
      },
      {
        name: 'logo_image',
        title: 'Logo Image',
        type: 'image'
      },
      {
        name: 'instagrame_page_link',
        title: 'Instagram Page Link',
        type:'url',
        },

    {
      name: 'instagram_post_link',
      title: 'Instagram Post Link',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
                name: 'link',
                title: 'Link',
                type: 'url',
              },
         
          ]
        }
      ]
    },
  ],
});
