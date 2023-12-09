import {type} from 'os'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      title: 'Name of product',
      type: 'string',
    },
    {
      name: 'images',
      type: 'array',
      title: 'product images',
      of: [
        {
          type: 'image',
        },
      ],
    },

    {
      name: 'description',
      title: 'description of product',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'price_id',
      title: 'Stripe productid',
      type: 'string',
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
