import { defineType , defineField } from "sanity";


export const product = defineType({
    name : 'product',
    title : "Product",
    type : 'document',
    description : ' Add Product Details',
    fields : [

          defineField({
            name : 'product_id',
            title : 'Product Id',
            type : 'number',
            validation : (rule) => rule.required().error("ID is required"),
        }),


        defineField({
            name : 'name',
            title : 'Product Name',
            type : 'string'
        }),

         defineField({
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            validation : (rule) => rule.required(),
            options : {
                source : 'name' 
            }
        }),



           defineField({
            name : 'Description',
            title : 'Product Description',
            type : 'string',
            validation: (Rule: any) => Rule
            .max(150).warning("Keep the product description under 150 characters"),

        }),


           defineField({
            name : 'image',
            title : 'Product Image',
            type : 'image',
            options : {
                hotspot : true
            }
        
        }),

           defineField({
            name : 'price',
            title : 'Product Price',
            type : 'number',
            validation: (Rule: any) => Rule.required().error('Product Price is required'),

        }),


           defineField({
            name : 'discount_price',
            title : 'Product Disount Price',
            type : 'number'
        }),


        defineField({
            name : 'stock',
            title : 'Product Stock Level',
            type : 'number',
         
        }),
      

           defineField({
            name : 'off_percentage',
            title : 'Product off percentage',
            type : 'number'
        }),


        defineField({
            name: 'category',
            title: 'Product Category',
            type: 'array',
            description: 'Select one or more categories for this product',
            of: [
                { type: 'string' }
            ],
            options: {
                list: [
                    { title: 'Featured Product', value: 'featured_product' },
                    { title: 'Trending Products', value: 'trending_product' },
                    { title: 'Latest Product', value: 'latest_product' },
                    { title: 'Top Categories', value: 'top_Categories' },
                ],
                layout: 'list', // use 'tags' if you prefer tag input
            },
            validation: (Rule: any) => Rule.required().min(1).error('Select at least one category'),
        }),




          defineField({
            name : 'colors',
            title : 'Product Colors',
            type : 'array',
            of :[{type : 'string'}]

        }),


         defineField({
            name : 'dimensions',
            title : 'Product Dimensions',
            type : 'object',
              fields : [
                    { name: 'width', title: 'Width (m)', type: 'number' },
                    { name: 'height', title: 'Height (m)', type: 'number' },
                   
                ]
            
        }),




      


       



    ]

     
})