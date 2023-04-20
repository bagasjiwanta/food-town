import { defineField, defineType } from "sanity";

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'Restaurant Id',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'coverimage',
      title: 'Cover Image',
      type: 'image',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'foodcourt',
      title: 'Food Court',
      type: 'reference',
      to: [{type: 'foodcourt'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Restaurant Category',
      type: 'array',
      validation: Rule => Rule.required().max(2),
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'category'
            }
          ]
        }
      ],
    })
  ]
})