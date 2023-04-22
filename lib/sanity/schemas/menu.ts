import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Restaurant Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      to: [{type: 'restaurant'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menucategory',
      title: 'Menu Category',
      type: 'reference',
      to: [{type: 'menucategory'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
