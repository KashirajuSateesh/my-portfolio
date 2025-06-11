import type { Rule } from 'sanity';

const footerType = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
    },
    {
      name: 'mail',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: Rule) => Rule.email(),
    },
    {
      name: 'gitProfile',
      title: 'GitHub Profile URL',
      type: 'url',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn Profile URL',
      type: 'url',
    },
    {
      name: 'leetcode',
      title: 'Leetcode Profile URL',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram Profile URL',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter Profile URL',
      type: 'url',
    },
  ],
}

export default footerType;