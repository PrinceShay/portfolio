export default {
    name: 'service',
    title: 'Leistung',
    type: 'document',
    fields: [
        {
            name: "title",
            type: "string",
            title: "Titel",
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of Project',
            options: {
                source: 'title',
            },
        },
        {
            name: 'heroTitle',
            title: 'Hero Titel',
            type: 'text',
        },
        {
            name: 'heroParagraph',
            title: 'Hero Paragraph',
            type: 'text',
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
          },
        {
            name: 'description',
            type: 'array',
            title: 'Beschreibung',
            of: [
              {
                type: 'block',
              },
              
            ]
          },
        
        {
            name: "blogArticles",
            title: "Blog Artikel",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: 'blog' }],
                },
            ],
        },
    ],
};
