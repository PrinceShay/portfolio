export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of the Project'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of Project',
        options: {
          source: 'title',
        }
      },
      {
        name: 'titleImage',
        type: 'image',
        title: 'Title Image',
      },
      {
        name: 'smallDescription',
        type: 'text',
        title: 'Small Description',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              }
            ]
          }
        ]
      },
    ]
  }
  