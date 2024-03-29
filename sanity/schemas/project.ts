export default {
    name: 'Project',
    type: 'document',
    title: 'Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of the project',
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
        of: [{
            type: 'block',
        },
        {
            type: 'image'
        }
    ]
    },
      
    ]
  }