export default {
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required().error('Title is required'),
      },
      {
        name :'backgroundimage',
        title: 'Background Image',
        type: 'image',
        description: 'Image for the About section',
      },
      {
        name: 'paragraphs',
        title: 'Paragraphs',
        type: 'array',
        of: [
          {
            type: 'text',
            title: 'Paragraph',
            validation: (Rule) => Rule.required().error('Paragraph content is required'),
          },
        ],
      },
    ],
  };
  