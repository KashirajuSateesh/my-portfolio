import { defineField, defineType } from "sanity";

export const skillsType = defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'skill',
            type: 'string',
            title: 'Skill Title',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'skill',
            },
        }),
        defineField({
            name: 'icon',
            type: 'image',
            title: 'Skill Icon',
            options: {
                hotspot: true,
            },
        }),
    ],
})