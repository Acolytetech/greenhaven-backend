export default {
    name: 'thirdAbout',
    title: 'third About',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          },
        ],
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'paragraphs',
        title: 'Paragraphs',
        type: 'array',
        of: [{ type: 'text' }],
      },
    ],
  };
  