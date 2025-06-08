import { defineArrayMember } from "sanity";

// src/sanity/schemaTypes/projectType.ts
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: '_id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'shortdescription',
      title: 'ShortDescription',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'techstack',
      type: 'array',
      title: 'TechStack',
      of:[
        { type: "string" }
      ]
    },
    {
      name: 'objective',
      title: 'Objective',
      type: 'text',
    },
    {
      name: 'features',
      type: 'array',
      title: 'features',
      of:[
        { type: "string" }
      ]
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'text',
    },
    {
      name: 'learnings',
      title: 'Learnings',
      type: 'text',
    },
    {
      name: 'futureImprovements',
      title: 'FutureImprovements',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'repo',
      title: 'GitHub Repo',
      type: 'url',
    },
    {
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [
        {
        type: 'image',
        options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

