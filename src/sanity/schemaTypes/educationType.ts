import type { Rule } from 'sanity';

const educationType = {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
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
      validation: (Rule: Rule) => Rule.min(1900).max(new Date().getFullYear()),
    },
    {
      name: 'endYear',
      title: 'End Year',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(1900).max(new Date().getFullYear() + 10),
    },
  ],
};

export default educationType;