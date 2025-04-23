import { IoPersonCircleOutline } from "react-icons/io5";
import { defineField, defineType } from "sanity";


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
        })
    ],
});