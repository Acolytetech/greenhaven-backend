export default {
    name: 'secondAbout',
    title: 'Second About Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required().error('Title is required'),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required().error('Description is required'),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allow image cropping
        },
        validation: (Rule) => Rule.required().error('Image is required'),
      },
      {
        name: 'mission',
        title: 'Mission Statement',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string',
                validation: (Rule) => Rule.required().error('Heading is required'),
              },
              {
                name: 'content',
                title: 'Content',
                type: 'text',
                validation: (Rule) => Rule.required().error('Content is required'),
              },
            ],
          },
        ],
        validation: (Rule) =>
          Rule.required().min(1).error('At least one mission statement is required'),
      },
    ],
  };
  