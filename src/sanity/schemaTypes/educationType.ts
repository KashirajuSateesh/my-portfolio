export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'college',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'class',
      title: 'Class / Degree',
      type: 'string',
    },
    {
      name: 'course',
      title: 'Course / Program',
      type: 'string',
    },
    {
      name: 'college',
      title: 'College / University',
      type: 'string',
    },
    {
      name: 'startYear',
      title: 'Start Year',
      type: 'number',
      validation: (Rule: any) => Rule.min(1900).max(new Date().getFullYear()),
    },
    {
      name: 'endYear',
      title: 'End Year',
      type: 'number',
      validation: (Rule: any) => Rule.min(1900).max(new Date().getFullYear() + 10),
    },
  ],
};