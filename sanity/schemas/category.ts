export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Category Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        }
    ]
}
