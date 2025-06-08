export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    
    {
      name: 'firmName',
      title: 'Firm Name',
      type: 'string',
    },
    {
      name: 'certificateName',
      title: 'Certificate Name',
      type: 'string',
    },
    {
      name: 'issueDate',
      title: 'Issue Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      name: 'certificateImage',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}