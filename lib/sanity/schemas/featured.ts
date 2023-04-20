import { defineField, defineType } from "sanity";

export default defineType({
  name: 'featured',
  title: 'Featured Restaurants',
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
      title: 'Featured Id',
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
      name: 'foodcourt',
      title: 'Food Court',
      type: 'reference',
      to: [{ type: 'foodcourt' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'restaurant'
            }
          ]
        }
      ]
    })    
  ]
})