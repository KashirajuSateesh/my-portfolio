import { defineField, defineType } from "sanity";

export const toolsType = defineType({
    name: 'tools',
    title: 'Tools',
    type: 'document',
    fields: [
        defineField({
            name: 'tool',
            type: 'string',
            title: 'Tool Title',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'tool',
            },
        }),
        defineField({
            name: 'icon',
            type: 'image',
            title: 'Tool Icon',
            options: {
                hotspot: true,
            },
        }),
    ],
})