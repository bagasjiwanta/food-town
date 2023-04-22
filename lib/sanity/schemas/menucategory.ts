import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menucategory',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      to: [{type: 'restaurant'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
