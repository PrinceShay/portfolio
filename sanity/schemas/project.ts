import { Comment } from "postcss";

export default {
    name: 'project',
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
            name: 'publishDate',
            type: 'string',
            title: 'Date'
        },

        {
            name: 'titleVideo',
            type: 'file',
            title: 'Title Video',
            options: {
                accept: 'video/*' // Allows uploading video files
            }
        },
        
        {
            name: 'heroText',
            type: 'text',
            title: 'Hero Text',
        },
        {
            name: 'smallDescription',
            type: 'array',
            title: 'Small Description',
            of: [
                {type: 'block',}
                
            ]
        },
        {
            name: 'challengeTitle',
            type: 'string',
            title: 'Challenge Title',
        },
        {
            name: 'challengeContent',
            type: 'array',
            title: 'Challenge Content',
            of: [
                {type: 'block'},
                
            ]
        },
        {
            name: 'challengeImage',
            type: 'image',
            title: 'Challenge Image',
        },
        {
            name: 'solutionTitle',
            type: 'string',
            title: 'Solution Title',
        },
        {
            name: 'solutionContent',
            type: 'array',
            title: 'Solution Content',
            of: [
                {type: 'block'},
            ]
        },
        {
            name: 'solutionImage',
            type: 'image',
            title: 'Solution Image',
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{type: 'reference', to: [{type: 'category'}]}]
        },
        {
            name: 'collectionHeadline',
            type: 'string',
            title: 'Collection Headline',
        },
        {
            name: 'collectionBigText',
            type: 'string',
            title: 'Collection Big Text',
        },
        {
            name: 'mediaCollection',
            type: 'array',
            title: 'Media Collection',
            of: [
                {type: 'image', title: 'Image'},
                {
                    type: 'file',
                    title: 'Video',
                    options: {
                        accept: 'video/*' // Allows uploading video files
                    }
                }
            ]
        }
    ]
}
