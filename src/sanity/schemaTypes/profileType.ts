import { IoPersonCircleOutline } from "react-icons/io5";
import { defineArrayMember, defineField, defineType } from "sanity";


export const profileType = defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    icon: IoPersonCircleOutline,
    fields: [
        defineField({
            name: 'titleName',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'titleName',
            },
        }),
        defineField({
            name: 'ProfilePic',
            type: 'image',
        }),
        defineField({
            name: 'roles',
            type: 'array',
            title: 'Roles',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'role',
                    fields: [
                        {type: 'string', name: 'myrole'},
                    ],
                })
            ]
        }),
        defineField({
            name: 'headQuote',
            type: 'string',
        }),
        defineField({
            name: 'resume',
            type: 'file',
            title: 'Resume',
            options: {
                accept: '.pdf',
            },
        }),
    ],
});